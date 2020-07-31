import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import module from '../../config/config';
import { getToken } from  './auth'
import store from '../../store'
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
// status状态
const showStatus = (status) => {
    let message = '';
    switch (status) {
        case 400:
            message = '请求错误(400)';
            break;
        case 401:
            message = '未授权，请重新登录(401)';
            break;
        case 403:
            message = '拒绝访问(403)';
            break;
        case 404:
            message = '请求出错(404)';
            break;
        case 408:
            message = '请求超时(408)';
            break;
        case 500:
            message = '服务器错误(500)';
            break;
        case 501:
            message = '服务未实现(501)';
            break;
        case 502:
            message = '网络错误(502)';
            break;
        case 503:
            message = '服务不可用(503)';
            break;
        case 504:
            message = '网络超时(504)';
            break;
        case 505:
            message = 'HTTP版本不受支持(505)';
            break;
        default:
            message = `连接出错(${status})!`
    }
    return `${message}，请检查网络或联系管理员！`
};


// 创建axios实例

const service = axios.create({
    // 联调
    baseURL: module.BASE_API,
    headers: {
        get: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        post: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        'Access-Control-Allow-Origin':'*'
    },
    // 是否跨站点访问控制请求
    // withCredentials: true,
    timeout: 30000,
    transformRequest: [(data) => {
        data = JSON.stringify(data);
        return data
    }],
    validateStatus () {
        // 使用async-await，处理reject情况较为繁琐，所以全部返回resolve，在业务代码中处理异常
        return true
    },
    transformResponse: [(data) => {
        if (typeof data === 'string' && data.startsWith('{')) {
            data = JSON.parse(data)
        }
        return data
    }]
});

// request 拦截器
service.interceptors.request.use(config => {
    config.headers = {
        'Content-Type': 'application/json;charset=utf-8'
    };
    if (store.getters.token) {
        config.headers = {
            'Authorization' : getToken('Token'), //携带权限参数
            'Content-Type': 'application/json;charset=utf-8'
        };
    }
    return config
}, error => {
    Promise.reject(error)
});

// response 拦截器
service.interceptors.response.use((response) => {
    const status = response.status;
    let msg = '';
    if (status < 200 || status >= 300) {
        // 处理http错误，抛到业务代码
        msg = showStatus(status);
        if (typeof response.data === 'string') {
            response.data = {msg}
        } else {
            response.data.msg = msg
        }
    }
    return response.data
}, (error) => {
    // 错误抛到业务代码
    error.data = {};
    error.data.msg = '请求超时或服务器异常，请检查网络或联系管理员！';
    return Promise.resolve(error)
});

export default service
