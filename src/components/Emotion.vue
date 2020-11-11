<!--
 * @Author: xuliqi
 * @Date: 2020-11-05 17:30:24
 * @Description: 自定义表情包组件  用法：<emotion @emotion="handleEmotion" :height="200" :width="400"></emotion>
-->
<template>
  <div class="ly-emotion" >
    <div class="emotion-box" :style="{height: height + 'px',width: width + 'px' }" @click.stop>
        <img style="padding:1px 6px;" class="emotion-item" :src="`https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif`" @click.stop="clickHandler(item)" v-for="(item,index) in list" :key="index" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 200,
    },
    width:{
      type: Number,
      default: 400,
    }
  },
  name: 'ly-emotion',
  methods:{
    clickHandler (i,e) {
      let emotion = `[^^${i}^^]`
      this.$emit('emotion', emotion)
    }
  },
  data(){
    return {
      list:['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗',
      '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅',
      '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀',
      '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便',
      '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖',
      '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极']
    }
  },
}
</script>
<style scoped>
.ly-emotion {
  display: inline-block
}
.emotion-box {
  margin: 0 auto;
  box-sizing: border-box;
  padding: 5px;
  border: 1px solid #b4b4b4;
  overflow: hidden;
  overflow-y: auto;
}
.emotion-box-line {
  display: flex;
}
.emotion-item {
  flex: 1;
  text-align: center;
  cursor: pointer;
}
.emotion-item:hover{
  background:#E7E7E7;
}
</style>
