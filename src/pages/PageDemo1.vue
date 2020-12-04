<template>
<div id="app">
    <img alt="Vue logo" src="../assets/logo.png">
    pageDemo1
    <Button type="primary">ceshianniu</Button><br/>
    vuex数据：<br/>
    {{article }}
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Emotion @emotion="emHandle"></Emotion>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import { Button } from 'view-design';
import {mapState,mapActions} from 'vuex'
import Emotion from '../components/Emotion.vue'
import time from '../utils/time.js'
import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import file from '../utils/file'
import request from '../utils/request'

dayjs.extend(isLeapYear)
dayjs.extend(weekOfYear)
dayjs.extend(isoWeeksInYear)

export default {
  name: 'App',
  components: {
    HelloWorld,Button,Emotion
  },
  computed: {
    ...mapState('article', ['article']),
  },
  methods:{
    ...mapActions('article',['saveText']),
    emHandle(em){
      console.log(em)
    }
  },
  created() {
    //下载流文件
    // request.getBlobRequest('http://localhost:3000/img.png').then((res)=>{
    //   file.streamFileDownload(res,"aaaa.png");
    // })
    console.log(dayjs().week());
    console.log(dayjs().week(45).format('YYYY-MM-DD'));
    console.log(dayjs().isoWeeksInYear());
    this.saveText({a:1});
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
