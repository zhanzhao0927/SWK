/*
 * @Description: 缓存对象队列
 * @Author: gaozhanzhao
 * @Date: 2023-06-02 15:57:49
 * @LastEditTime: 2023-06-02 16:41:19
 * @LastEditors: gaozhanzhao
 */
import * as vscode from "vscode";

const useImgQueue = (context: vscode.ExtensionContext, size = 50) => {
	return {
		push(content: any) {
			const cachelVal: Array<any> = content.globalState.get(
				"SWK_img_cacheVal"
			)
				? JSON.parse(context.globalState.get("SWK_img_cacheVal")!)
				: [];

			cachelVal.push(content);
			cachelVal.lenth >= size && cachelVal.shift();

			context.globalState.update(
				"SWK_img_cacheVal",
				JSON.stringify(cachelVal)
			);
		},
		find(cb: (e: any) => boolean) {
			const cachelVal: Array<any> = content.globalState.get(
				"SWK_img_cacheVal"
			)
				? JSON.parse(context.globalState.get("SWK_img_cacheVal")!)
				: [];
			return cachelVal.reverse().find(cb);
		},
	};
};

export default useImgQueue;
