/*
 * @Description: 图片生成代码&写入
 * @Author: gaozhanzhao
 * @Date: 2023-06-01 16:12:15
 * @LastEditTime: 2023-06-01 20:08:20
 * @LastEditors: gaozhanzhao
 */
import * as vscode from "vscode";
import { read } from "jimp";

/**
 * @param url 图片url
 * @param context   上下文
 * @param width 图片宽
 * @param height 图片高
 */

async function imageToCode(
	url: string,
	context: vscode.ExtensionContext,
	width?: number | string,
	height?: number | string
) {
	// 校验链接合法性
	const reg =
		/(https?:[^:<>"]*\/)([^:<>"])(\.((png!thumbnail)|(png)|(jpg)|(jpeg)|(gif)|(webp)))/gi;
	url.startsWith("//") && (url = "https" + url);
	if (!reg.test(url)) {
		return vscode.window.showErrorMessage("复制的为非图片链接");
	} else {
		vscode.window.showErrorMessage("图片上传成功");
	}
	//获取图片宽高
	if (!width || !height) {
		const instance = await read({ url } as any);
		width = Math.ceil(
			instance.getWidth() *
				vscode.workspace.getConfiguration("SWK")?.picTransRatio
		);
		height = Math.ceil(
			instance.getHeight() *
				vscode.workspace.getConfiguration("SWK")?.picTransRatio
		);
	}
	//模板处理
	const template =
			vscode.workspace.getConfiguration("SWK")?.template ??
			`
        .size({width}px.{height}px);
        .po-absolute;
        top:0;
        left:0;
        background:url('{url}') no-repeat center / {width}px {height}px;
    `,
		//链接是否携带协议
		withProtocol =
			vscode.workspace.getConfiguration("SWK")?.withProtocol ?? false;
	if (!withProtocol) {
		url = "//" + url.split("://")[1];
	}

    //参数嵌入模板
	const insertTemplate = template
		.replace(/\{width}/gi, width)
		.replace(/\{height}/gi, height)
        .replace(/\{url}/gi, url);


}

export default imageToCode;
