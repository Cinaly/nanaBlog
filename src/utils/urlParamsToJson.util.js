const urlParamsToJson = (res) => {
    // res a=1&b=1;
    
    let str    = '';
    let strArr = [];
    let index  = '';
    const json = {};
    
    // res是字符串
    if (res) {
        str = res;
        
        index = str.indexOf('?');
        if (index > -1) {
            str = str.slice(index + 1);
        }
        
        if (str.indexOf('&') > -1) {
            strArr = str.split('&');
            strArr.forEach((element) => {
                let temp;
                if (element.indexOf('=') > -1) {
                    temp          = element.split('=');
                    json[temp[0]] = temp[1];
                }
            });
        } else {
            if (str.indexOf('=') > -1) {
                strArr          = str.split('=');
                json[strArr[0]] = strArr[1];
            }
        }
    }
    return json;
};

export {urlParamsToJson};
