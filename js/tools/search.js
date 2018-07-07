/**
 * 获取本域名search参数并返回
 */
export default {
    searchArg() {
        let arg = decodeURI(window.location.search).split('&');
        return arg;
    }
}