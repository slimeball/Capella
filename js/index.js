//出现最多的字符是什么
// let chString = 'asdfssaaasasasasaa';
// let json ={};
// let countit = (charme)=>{
//     for(let i=0,len=charme.length;i<len;i++){
//         if(!json[charme.charAt(i)]){
//             json[charme.charAt(i)]=1;
//         }else{
//             json[charme.charAt(i)]++;
//         }
//     }
//     return json;
// }
// countit(chString);
// console.log(json);
// let maxi = 0;
// let indexI = '';
// for(let idx in json){
//     if(json[idx]>maxi){
//         maxi = json[idx];
//         indexI = idx;
//     }
// }

// console.log('max count:'+maxi+',who:'+indexI)
//测试事件target
// let btn = document.querySelector('#btn');
// let atc = document.querySelector('#atc')
// btn.addEventListener('click',(e)=>{
//     atc.innerHTML = 'aas';
//     console.log(e.target);
//     console.log(e.currentTarget);

// })
//数组去重
// let arr = [1,2,3,1,43,12,12,1];

// let unarr = (arr)=>{
//     let ret = [];
//     for(let i=0,len=arr.length;i<len;i++){
//         if(ret.indexOf(arr[i])===-1){
//             ret.push(arr[i]);
//         }
//     }
//     return ret;
// }

// console.log(unarr(arr));

//对应初始数组的索引
// let arr = [9,8,7,3,6,5,2,4];
// let arr2 = [9,8,7,3,6,5,2,4];
// let arr2 = arr2.sort((a,b)=>{
//     return a-b;
// })
// arr2 = arr2.reverse();
// let arr3 = [];
// for(let i=0,len=arr2.length;i<len;i++){
//     arr3.push(arr.indexOf(arr2[i]))
// }
// console.log(arr)
// console.log(arr2)
// console.log(arr3)
// import * as search from './search'
// import * as exc from './stringExc'
// let urlarg = search.searchArg();
// let _excstr = exc._excstr;
// let astr = '开发测试团 队测技术整 合真val llle ';
// console.log(_excstr.toArray(astr));
// console.log(_excstr.delSpace(astr))
//console.log(urlarg)
import asyncPage from './tools/async';

// asyncPage.requsetXHR({
//     method: 'post',
//     url: '/test',
//     // data: {
//     //     name: 'ssss'
//     // },
//     beforeInit(res) {
//         // console.log(res);
//     },
//     response(res) {
//         getname = JSON.parse(res).name;
//         // console.log(JSON.parse(res));
//     }
// })

let getname = '';
// promise
// let excAjax = function (url) {
//     return new Promise((resove, reject) => {
//         asyncPage.requsetXHR({
//             method: 'post',
//             url: url,
//             // data: {
//             //     name: 'ssss'
//             // },
//             beforeInit(res) {
//                 // console.log(res);
//             },
//             response(res) {
//                 getname = JSON.parse(res).name;
//                 resove(getname);
//                 // console.log(JSON.parse(res));
//             }
//         })
//     })
// }

// excAjax('/test').then(() => {
//     console.log(getname);
// })

//generator

asyncPage.requsetXHR({
    method: 'post',
    url: '/test',
    // data: {
    //     name: 'ssss'
    // },
    beforeInit(res) {
        // console.log(res);
    },
    response(res) {
        getname = JSON.parse(res).name;

        function* genAjax() {
            yield getname;

        }
        let getgen = genAjax();
        getgen.next()
        // console.log(JSON.parse(res));
    }
})

console.log(getname);