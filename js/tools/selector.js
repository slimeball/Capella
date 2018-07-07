/**
 * 选择器类
 */
export default {
    //class名
    gtcls(className) {
        let cls = '';
        if (document.querySelectorAll) {
            cls = document.querySelectorAll(className).length;
            // for(let i=0,len=cls.length;i<len;i++){
            //     cls[i];
            // }
        } else if (document.getElementsByName) {
            document.getElementsByClassName(className);
        } else {

        }
    }
}