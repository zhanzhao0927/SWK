/*
 * @Description: 选取图片压缩上传生成代码
 * @Author: gaozhanzhao
 * @Date: 2023-06-01 16:12:15
 * @LastEditTime: 2023-06-01 17:14:47
 * @LastEditors: gaozhanzhao
 */
import * as vscode from "vscode";

const toSingleUploadImg = ((context: vscode.ExtensionContext)=>{
    return vscode.commands.registerCommand("selectImageToUpload", async () => {
        // 读取剪切板图片链接
        
      });
})

export default toSingleUploadImg;