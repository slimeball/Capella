const superagent = require('superagent');
const fs = require('fs');


let promise = new Promise((resovle, reject) => {
    superagent.get('https://segmentfault.com/')
        .end(function (err, res) {
            resovle(res)
        })
});
promise.then((successdata) => {
    // console.log(successdata.text)
    fs.writeFile('./getpage/page.html', successdata.text, (err) => {
        if (err) {
            fs.mkdir('./getpage', function (err, res) {
                if (err) throw err;
                fs.writeFile('page.html', res.text, (err) => {
                    if (err) throw err;
                    console.log('It\'s saved!');
                })
            })
        }
        console.log('It\'s saved!');
    });
})