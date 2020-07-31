const webpack = require('webpack');
// 添加别名alias
const path = require('path');
const resolve = dir => path.join(__dirname, dir);
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);

module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        //以上的ip和端口是我们本机的;下面为需要跨域的
        proxy: {  //配置跨域
            '/api': {
                target: 'http://192.168.3.8:8080/freeemployment/api/',  //这里后台的地址模拟的;应该填写你们真实的后台接口
                ws: true,
                changOrigin: true,  //允许跨域
                pathRewrite: {
                    '^/api': ''  //请求的时候使用这个api就可以
                }
            }
        }
    }
};
