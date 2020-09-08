/**
 * Created by Lee on 2019/1/8.
 */
// import request from '../../utils/request'
// import config from '../../config'


const state={
    orderList:[],
    params:{}
}
const getters = {
    getOrderList: state => state.orderList
}
const mutations = {
    updateOrderList(state,payload){
        state.orderList = payload;
    }
}
const actions = {
    
}

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}