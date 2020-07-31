// import { logout, getUserInfo } from '@/api/service/user'  // 导入用户信息相关接口
import { getToken, setToken, removeToken } from '../../service/base/auth'

const user = {
    state: {
        // 全局参数
        name: localStorage.getItem('user_name'),
        avatar: '',
        token: getToken('Token')
        // token: localStorage.getItem('token'),
    },
    getters: {
        // get方法
        token: state => state.token,
        avatar: state => state.avatar,
        name: state => state.name,
    },
    mutations: {
        // set方法
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        REMOVE_TOKEN: (state) => {
            state.token = ''
        }
    },
    actions: {
        // 登出
        LogOut({commit}) {
            commit('REMOVE_TOKEN');
            removeToken('Token');
        },
    }
};

export default user;

/**
 * 1、用户退出,需要调取后台接口吗？后台具体的业务逻辑是什么？
 *
 *
 */