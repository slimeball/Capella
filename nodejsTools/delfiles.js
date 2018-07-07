/**
 * keeparr 需要保留文件名的数组
 * filepath 文件路径
 * fileext 文件后缀
 */
module.exports = function (keeparr, filepath, fileext) {
    const fs = require('fs');
    const path = require('path');
    filepath = path.normalize(__dirname + '/' + filepath + '/')
    Array.prototype.remove = function (val) {
        let index = this.indexOf(val);
        if (index > -1) {
            this.splice(index, 1)
        }
    }
    fs.readdir(filepath, (err, data) => {
        if (err) {
            console.log(err)
            return;
        }
        data = data.map(function (x) {
            return x.substr(0, x.length - fileext.length)
        })
        keeparr.forEach(function (x) {
            if (x === '+1') {
                x = '1';
            }
            if (data.indexOf(x) > -1) {
                data.remove(x);
            }
        })
        data.forEach(function (x) {
            fs.unlink(filepath + x + fileext, function (err) {
                if (err) {
                    throw err;
                }
                console.log('文件：' + x + fileext + '删除成功！');
            })
        })
    })
}
