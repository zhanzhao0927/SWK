/*
 * @Description: 选取图片压缩上传生成代码
 * @Author: gaozhanzhao
 * @Date: 2023-06-01 16:12:15
 * @LastEditTime: 2023-06-02 17:23:45
 * @LastEditors: gaozhanzhao
 */
import * as vscode from "vscode";
import { compressUploadImg } from "./utils/compressUploadImg";
import imageToCode from "./utils/imageToCode";
import useImgQueue from "./utils/imgQueue";

const toSingleUploadImg = ((context: vscode.ExtensionContext)=>{
    return vscode.commands.registerCommand("selectImageToUpload", async () => {
        // 读取剪切板图片链接
        // imageToCode(context);
      });
})

export default toSingleUploadImg;