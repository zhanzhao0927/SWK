/*
 * @Description: win系统路径转换
 * @Author: gaozhanzhao
 * @Date: 2023-06-02 16:59:47
 * @LastEditTime: 2023-06-02 17:04:00
 * @LastEditors: gaozhanzhao
 */
const os = require("os");

export default function tranWinsPath(url: string) {
    if(os.type()==="Darwin") {
        return url;
    }
    const urlArr = url.split("/");
    !urlArr[0] && urlArr.shift();
    urlArr[0].includes(":") && (urlArr[0] = urlArr[0].toLowerCase());
    return urlArr.join("\\");
}
