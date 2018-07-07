/**
 * 数组工具
 */
export default {
    //删除元素
    remove(val) {
        let index = this.indexOf(val);
        if (index > -1) {
            this.splice(index, 1)
        }
    },
    //去重
    unique() {
        var res = [];
        var json = {};
        for (var i = 0; i < this.length; i++) {
            if (!json[this[i]]) {
                res.push(this[i]);
                json[this[i]] = 1;
            }
        }
        return res;
    }
}