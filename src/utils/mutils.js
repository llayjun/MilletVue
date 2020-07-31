const MOBILE_MAX_SIZE = 640;
const UA = window.navigator.userAgent.toLowerCase();
const utils = {
    /**
     * 存储localStorage
     */
    setStore(name, content) {
        if (!name) return;
        if (typeof content !== 'string') {
            content = JSON.stringify(content);
        }
        window.localStorage.setItem(name, content);
    },

    /**
     * 获取localStorage
     */
    getStore(name) {
        if (!name) return;
        let value = window.localStorage.getItem(name);
        if (value !== null) {
            try {
                value = JSON.parse(value);
            } catch (e) {
                value = value;
            }
        }
        return value;
    },

    /**
     * 删除localStorage
     */
    removeStore(name) {
        if (!name) return;
        window.localStorage.removeItem(name);
    },

    /**
     * 让整数自动保留2位小数,或者分转元保留两位小数
     */
    returnFloat(data, type) {
        //type 为 true 为整数保留2位小数， 为false为分转元保留2位小数
        let value;
        if (type) {
            value = Math.round(parseFloat(data) * 100) / 100;
        } else {
            value = Math.round(parseFloat(data)) / 100;
        }
        let xsd = value.toString().split(".");
        if (xsd.length === 1) {
            value = value.toString() + ".00";
            return value;
        }
        if (xsd.length > 1) {
            if (xsd[1].length < 2) {
                value = value.toString() + "0";
            }
            return value;
        }
    },
    /**
     *   date => 标准时间格式: Fri Nov 17 2017 09:26:23 GMT+0800 (中国标准时间)
     *   type => 类型
     *   type == 1 ---> "yyyy-mm-dd hh:MM:ss.fff"
     *   type == 2 ---> "yyyymmddhhMMss"
     *   type == 3 ---> "yyyy-mm-dd"
     *   type == '' ---> "yyyy-mm-dd hh:MM:ss"
     */
    formatDate(date, type) {
        let year = date.getFullYear();//年
        let month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;//月
        let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();//日
        let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();//时
        let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();//分
        let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();//秒
        let milliseconds = date.getMilliseconds() < 10 ? "0" + date.getMilliseconds() : date.getMilliseconds(); //毫秒
        if (type === 1) {
            return year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds + "." + milliseconds;
        } else if (type === 2) {
            return year + "" + month + "" + day + "" + hour + "" + minutes + "" + seconds;
        } else if (type === 3) {
            return year + "-" + month + "-" + day;
        } else {
            return year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds;
        }
    },

    /**
     * 时间转换：20150101010101 --> '2015-01-01 01:01:01'
     */
    parseToDate(timeValue) {
        let result = "";
        let year = timeValue.substr(0, 4);
        let month = timeValue.substr(4, 2);
        let date = timeValue.substr(6, 2);
        let hour = timeValue.substr(8, 2);
        let minute = timeValue.substr(10, 2);
        let second = timeValue.substr(12, 2);
        result = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
        return result;
    },

    DateDiff(sDate1, sDate2) {    //sDate1和sDate2是2006-12-18格式  
        if (sDate1 && sDate2) {
            let aDate, oDate1, oDate2, iDays;
            aDate = sDate1.split("-");
            oDate1 = new Date(aDate[0], aDate[1], aDate[2]);    //转换为12-18-2006格式  
            aDate = sDate2.split("-");
            oDate2 = new Date(aDate[0], aDate[1], aDate[2]);
            iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24);    //把相差的毫秒数转换为天数  
            return iDays
        } else {
            return '';
        }
    },

    /**
     * 判断空值
     */
    isEmpty(keys) {
        if (typeof keys === "string") {
            keys = keys.replace(/\"|&nbsp;|\\/g, '').replace(/(^\s*)|(\s*$)/g, "");
            if (keys === "" || keys == null || keys === "null" || keys === "undefined") {
                return true;
            } else {
                return false;
            }
        } else if (typeof keys === "undefined") {  // 未定义
            return true;
        } else if (typeof keys === "number") {
            return false;
        } else if (typeof keys === "boolean") {
            return false;
        } else if (typeof keys === "object") {
            if (JSON.stringify(keys) === "{}") {
                return true;
            } else if (keys === null) { // null
                return true;
            } else {
                return false;
            }
        }
        if (keys instanceof Array && keys.length === 0) {// 数组
            return true;
        }
    },

    /**
     * 返回几位的小数的字符串
     */
    toFixedNum(number, fix) {
        const toNum = Number(number).toFixed(fix);
        return toNum;
    },

    /**
     * 读取base64
     */
    readFile(file) {
        //var file = this.files[0];
        //判断是否是图片类型
        if (!/image\/\w+/.test(file.raw.type)) {
            alert("只能选择图片");
            return false;
        }
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            let filedata = {
                filename: file.name,
                filebase64: e.target.result
            };
            alert(e.target.result)
        }
    },

    /**
     * 设置浏览器头部标题
     */
    setTitle(title) {
        title = title ? `${title}` : '';
        window.document.title = title
    },

    // 获取URL参数
    param2Obj(url) {
        const search = url.split('?')[1];
        if (!search) {
            return {}
        }
        return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
    },
    //是否为正整数
    isInteger(s) {
        let re = /^[0-9]+$/;
        return re.test(s)
    },
    // 深拷贝
    deepCopy(obj) {
        let o;
        // 如果  他是对象object的话  , 因为null,object,array  也是'object';
        if (typeof obj === 'object') {
            // 如果  他是空的话
            if (obj === null) {
                o = null;
            }
            else {
                // 如果  他是数组arr的话
                if (obj instanceof Array) {
                    o = [];
                    for (let i = 0, len = obj.length; i < len; i++) {
                        o.push(this.deepCopy(obj[i]));
                    }
                }
                // 如果  他是对象object的话
                else {
                    o = {};
                    for (let j in obj) {
                        o[j] = this.deepCopy(obj[j]);
                    }
                }

            }
        }
        else {
            o = obj;
        }
        return o;
    },

    checkIsMobile() {
        return !!UA.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    },

    checkIsMobileSize() {
        return window.innerWidth < MOBILE_MAX_SIZE
    },

    isMobile() {
        return this.checkIsMobile() || this.checkIsMobileSize()
    },


};
window.addEventListener('resize', () => {
    // basic data type in ES6 modules is strong binding
    utils.isMobile()
}, false);


export default utils