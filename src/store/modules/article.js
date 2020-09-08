/**
 * Created by Lee on 2019/1/8.
 */
import request from '../../utils/request'
import config from '../../config'

const state={
    newContent:'',
    newArticleTitle:'',
    articles:[
        {
            title:'第一篇文章的题目',
            id:1
        },
        {
            title:'第2篇文章的题目',
            id:2
        },
        {
            title:'第3篇文章的题目',
            id:3
        }
    ],
    article:{
        id:1,
        title:'第一篇文章的题目',
        content:'这是第一篇文章的内容。'
    }
}
const getters = {
}
const mutations = {
    updateNewContent(state,payload){
        state.newContent = payload;
    },
    updateNewArticleTitle(state,payload){
        state.newArticleTitle = payload;
    }
}
const actions = {
    //保存文章内容
    saveText(context,payload){
        if(payload){
            request.getRequest(config.BaseUrl)
        }
    }
}

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}