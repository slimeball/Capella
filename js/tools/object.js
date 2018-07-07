export default {
    //引用类型数组去重 id为重复字段
    objUnique(arr, id) {
        let hash = {};
        let arr2 = arr.reduce(function (item, next) {
            hash[next[id]] ? '' : hash[next[id]] = true && item.push(next);
            return item;
        }, [])
        return arr2;
    }
}