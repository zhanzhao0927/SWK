/*
 * @Description:上传压缩接口封装
 * @Author: gaozhanzhao
 * @Date: 2023-06-01 17:47:37
 * @LastEditTime: 2023-06-02 15:51:21
 * @LastEditors: gaozhanzhao
 */
import * as FormData from "form-data";
import * as fs from "fs";
import * as vscode from "vscode";
import { Axios } from "axios";

enum ErrMsgState {
	noAuthorization = "请配置上传图片密钥 Authorization",
	noUsername = "请配置用户名 username",
	uploadFailed = "接口调用失败",
}

const os = require("os"),
	axios = new Axios({});

/**
 * 压缩上传接口
 * @param uriPath 文件路径
 * @return promise
 */

export function compressUploadImg(uriPath: string) {
	return new Promise((resolve, reject) => {
		const { Authorization, userName } =
			vscode.workspace.getConfiguration("SWK");
		let errMsg = "";
		!Authorization && (errMsg = ErrMsgState.noAuthorization);
		!username && (errMsg = ErrMsgState.noUsername);
		errMsg && reject({ errMsg });

		//上传参数整理
		const result = fs.readFileSync(
				os.type() === "Darwin" ? uriPath : uriPath.slice(1)
			),
			fileName = uriPath.split("/").pop(),
			formData = new FormData();
		formData.append("username", userName);
		formData.append("source", JSON.stringify(["SWK"]));
		formData.append("file", result, fileName);

		//上传接口调用
		axios
			.request<string>({
				url: "http://imagemin.qiyi.domain/upload/single",
				method: "post",
				headers: {
					"Content-Type": "multipart/form-data",
					Authorization,
					...formData.getHeaders(),
				},
				data: formData,
			})
			.then(({ data = "" }) => {
				const res = JSON.parse(data);
				if (res.code !== "A00000") {
					return reject({
						errMsg: res?.msg ?? ErrMsgState.uploadFailed,
					});
				}

				const resFileInfo = res?.data ?? {};
				resolve(resFileInfo);
			})
			.catch((err) => reject({ errMsg: ErrMsgState.uploadFailed, err }));
	});
}
