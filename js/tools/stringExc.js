/*
* 字符串处理模块
*/
export default {
    //截取头部
    startCut(str, num, ...moreunm) {
        return str.substr(num);
    },
    //截取尾部
    endCut(str, num, ...moreunm) {
        if (num > 0) {
            num -= num;
        }
        return str.substr(num);
    },
    //转化成数组
    toArray(str) {
        let j = {};
        let r = [];
        for (let i = 0, len = str.length; i < len; i++) {
            r.push(str.charAt(i));
        }
        return r;
    },
    //去掉全部空格
    delSpace(str) {
        let r = [];
        r = str.split(' ');
        return r.join('');
    },
}