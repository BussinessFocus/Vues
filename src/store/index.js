/**
 * Created by Lee on 2019/1/8.
 */
import Vuex from 'vuex'
import Vue from 'vue'
import article from './modules/article'
import test from './modules/test'

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        article,
        test
    }
})