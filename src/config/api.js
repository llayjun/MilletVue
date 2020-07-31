import request from '../service/base/basic_service.js'

const api = {

    get_pro_list(params) {
        return request({
            url: '/companyTaskListSearch',
            method: 'post',
            data: params
        })
    },
    get_pro_detail(params) {
        return request({
            url: '/companyTaskDetail',
            method: 'post',
            data: params
        })
    },
    get_user_info(params) {
        return request({
            url: '/userInfoSearch',
            method: 'post',
            data: params
        })
    },
    update_pro_finishNum(params) {
        return request({
            url: '/companyTaskFinishNum',
            method: 'post',
            data: params
        })
    },
    get_com_certification(params) {
        return request({
            url: '/getCompanyCertification',
            method: 'post',
            data: params
        })
    },
    get_com_contract(params) {
        return request({
            url: '/getCompanyContract',
            method: 'post',
            data: params
        })
    },
    company_detail(params) {
        // 查看公司详情
        return request({
            url: '/companyDetail',
            method: 'post',
            data: params
        })
    },
    get_task_list(params) {
        // 查看用户任务列表
        return request({
            url: '/getUserTaskList',
            method: 'post',
            data: params
        })
    },
};

export default user;