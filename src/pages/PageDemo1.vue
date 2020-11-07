<template>
<div id="app">
    <img alt="Vue logo" src="../assets/logo.png">
    pageDemo1
    <Button type="primary">ceshianniu</Button><br/>
    vuex数据：<br/>
    {{article }}
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Emotion></Emotion>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import { Button } from 'view-design';
import {mapState,mapActions} from 'vuex'
import Emotion from '../components/Emotion.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,Button,Emotion
  },
  computed: {
    ...mapState('article', ['article']),
  },
  methods:{
    ...mapActions('article',['saveText'])
  },
  created() {
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
