/*
 * @Author: 李祥雨
 * @Date: 2020-10-24 06:47:55
 * @Description: 封装操作前端缓存的文件
 */

//local相关，存储时会将真实的数据再包装成一个对象，格式为：{val:'存储值',expired：'过期时间'}
let local = {}

if(!window.localStorage){
    local.support = false
    window.alert('当前浏览器不支持localStorage，请开启此功能后再试！')
}else{
    local.support = true
}

/**
 * 保存local,如果local对应的key值已存在则覆盖
 * @param key 必须，存储的key
 * @param val 必须，存储的值
 * @param expired 非必须，过期时间，以秒为单位，如果不传则不设置过期时间
 */
local.saveLocal = function (key,val,expired=0){
    if(this.support){
        let value = {
            val:val,
            expired: expired == 0 ? 0 : Date.now() + expired * 1000
        }
        window.localStorage.setItem(key,JSON.stringify(value));
    }
}

/**
 * 读取local,如果缓存已过期则返回false，如果key不存在，则返回null
 * @param key
 * @return {data:'值',msg:'提示信息'}
 */
local.getLocal = function (key) {
    if(this.support){
        let ret = {};
        if(!window.localStorage.getItem(key)){
            ret ={data:null,msg:'key不存在'}
            return ret;
        }
        let value = JSON.parse(window.localStorage.getItem(key))
        if(value.expired == 0 || value.expired > Date.now()){
            ret = {data:value.val,msg:'获取成功'}
            return ret;
        } else {
            ret = {data:false,msg:'local过期，获取失败'}
            this.removeLocal(key)
            return ret
        }
    }
}

/**
 * 删除local
 * @param key
 */
local.removeLocal = function (key) {
    window.localStorage.removeItem(key)
}

/**
 * 清除所有local
 */
local.clear = function () {
    window.localStorage.clear()
}

//session相关
let session = {}

if(!window.sessionStorage){
    session.support = false
    window.alert('当前浏览器不支持sessionStorage，请开启此功能后再试！')
}else{
    session.support = true
}

/**
 * 保存session,如果session对应的key值已存在则覆盖
 * @param key 必须，存储的key
 * @param val 必须，存储的值
 * @param expired 非必须，过期时间，以秒为单位，如果不传则不设置过期时间
 */
session.saveSession = function (key,val,expired=0){
    if(this.support){
        let value = {
            val:val,
            expired: expired == 0 ? 0 : Date.now() + expired * 1000
        }
        window.sessionStorage.setItem(key,JSON.stringify(value));
    }
}

/**
 * 读取session,如果缓存已过期则返回false，如果key不存在，则返回null
 * @param key
 * @return {data:'值',msg:'提示信息'}
 */
session.getSession = function (key) {
    if(this.support){
        let ret = {};
        if(!window.sessionStorage.getItem(key)){
            ret ={data:null,msg:'key不存在'}
            return ret;
        }
        let value = JSON.parse(window.sessionStorage.getItem(key))
        if(value.expired == 0 || value.expired > Date.now()){
            ret = {data:value.val,msg:'获取成功'}
            return ret;
        } else {
            ret = {data:false,msg:'local过期，获取失败'}
            this.removeSession(key)
            return ret
        }
    }
}

/**
 * 删除session
 * @param key
 */
session.removeSession = function (key) {
    window.sessionStorage.removeItem(key)
}

/**
 * 清除所有session
 */
local.clear = function () {
    window.sessionStorage.clear()
}

export default{
    local,
    session
}

