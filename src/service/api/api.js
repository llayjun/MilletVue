import request from '../base/basic_service.js'

const api = {

    getSmsCode(params) {
        return request({
            url: '/sendSmsCode',
            method: 'post',
            data: params
        })
    },
};

export default api;