/*
 * @Description: 
 * @Author: gaozhanzhao
 * @Date: 2023-06-01 14:21:56
 * @LastEditTime: 2023-06-01 17:08:36
 * @LastEditors: gaozhanzhao
 */

import * as vscode from 'vscode';
import generateBgcode from './generateBgcode';
import toBatchUploadImg from './toBatchUploadImg';
import toSingleUploadImg from './toSingleUploadImg';
//插件被激活执行的时候的函数
export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(generateBgcode());
    context.subscriptions.push(toBatchUploadImg(context));
    context.subscriptions.push(toSingleUploadImg(context));
}
