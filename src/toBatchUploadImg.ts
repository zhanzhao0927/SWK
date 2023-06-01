/*
 * @Description: 批量上传生成图片缓存
 * @Author: gaozhanzhao
 * @Date: 2023-06-01 16:11:16
 * @LastEditTime: 2023-06-01 17:19:53
 * @LastEditors: gaozhanzhao
 */
import * as vscode from "vscode";

const toBatchUploadImg = ((context: vscode.ExtensionContext)=>{
     return vscode.commands.registerCommand("batchImageUpload", async () => {
        // 读取剪切板图片链接
        
      });
})
export default toBatchUploadImg;