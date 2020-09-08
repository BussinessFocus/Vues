/*
 * @Author: xuliqi
 * @Date: 2019-12-26 14:58:31
 * @Description:
 */
import axios from 'axios'
import router from '../routers'
import {BaseUrl} from '../config'

axios.defaults.baseURL = BaseUrl; // 设置全局默认基本信息
axios.defaults.headers['Content-Type'] = 'application/json'; // 设置默认的请求头的Content-Type

/**
 * @description 封装post请求的方法
 * @param {*} url 请求的地址
 * @param {*} data 请求的数据
 * @returns 数据请求的promise对象
 */
const postRequest = (url, data) => axios.post(url, data)

/**
 * @description 封装的get请求的方法npm
 * @param {*} url 请求的地址
 * @param {*} data  请求的数据
 * @returns 数据请求的promise对象
 */
const getRequest = (url, data) => axios.get(url, { params: data })

// 请求拦截器
axios.interceptors.request.use(config => {
    if (sessionStorage.getItem('authorization')) {
        config.headers.Authorization = sessionStorage.getItem('authorization')
    }
    return config
})

// 响应拦截器
axios.interceptors.response.use(response => {
    if (response.headers.authorization) {
        sessionStorage.setItem('authorization', response.headers.authorization)
    }
    return response.data
}, err => {
    // 对响应错误做些什么
    // router.replace("/login");
    console.log("发送请求报错！");
    console.log(err.response);
    if(err.response.status == 401){
        router.replace("/login");
    }
})

export default {
    postRequest,
    getRequest
}