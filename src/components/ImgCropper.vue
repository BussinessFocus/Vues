<template>
    <Modal v-model="show" :footer-hide="true" :mask-closable="false" :closable="false" title="裁剪图片" :width="cropZoneWidth">
    <div class="cropper-content">
        <div :style="{textAlign:'center',height:cropZoneHeight}">
            <VueCropper
                    ref="cropper"
                    :img="img"
                    :outputSize="option.outputSize"
                    :outputType="option.outputType"
                    :info="option.info"
                    :canScale="option.canScale"
                    :autoCrop="option.autoCrop"
                    :autoCropWidth="autoCropWidth"
                    :autoCropHeight="autoCropHeight"
                    :fixed="option.fixed"
                    :fixedNumber="option.fixedNumber"
                    :full="option.full"
                    :fixedBox="option.fixedBox"
                    :canMove="option.canMove"
                    :canMoveBox="option.canMoveBox"
                    :original="option.original"
                    :centerBox="option.centerBox"
                    :infoTrue="option.infoTrue"
                    :enlarge="option.enlarge"
            ></VueCropper>
        </div>
        <div class="btn-box">
            <Button class="btn" type="primary" @click="sure">确认裁剪</Button>
            <Button class="btn" @click="cancel" >取消裁剪</Button>
        </div>
    </div>
    </Modal>
</template>

<script>
    import { VueCropper }  from 'vue-cropper'
    import { Button } from 'view-design'
    export default {
        name: "ImgCropper",
        components:{VueCropper},
        props:{
            img: String, // 裁剪图片的地址
            autoCropWidth:{
                type:Number,
                default:300
            }, // 默认生成截图框宽度
            autoCropHeight:{
                type:Number,
                default:200
            }, // 默认生成截图框高度
            cropZoneWidth:{
                type:String,
                default:'auto'
            }, // 截图区域所占宽度
            cropZoneHeight:{
                type:String,
                default:'450px'
            }, // 截图区域所占高度
            show:{
                type:Boolean,
                default:false
            } // 是否显示
        },
        model: {
            prop: 'show',
            event: 'onCancel'
        },
        data(){
            return {
                // 裁剪组件的基础配置option
                option: {
                    info: true, // 裁剪框的大小信息
                    outputSize: 0.6, // 裁剪生成图片的质量
                    outputType: 'jpeg', // 裁剪生成图片的格式
                    info:true,
                    canScale: true, // 图片是否允许滚轮缩放
                    autoCrop: true, // 是否默认生成截图框
                    fixed: false, // 是否开启截图框宽高固定比例
                    fixedNumber: [7, 5], // 截图框的宽高比例
                    full: false, // 是否输出原图比例的截图
                    fixedBox: true, // 固定截图框大小 不允许改变
                    canMove:true,//上传图片是否可以移动
                    canMoveBox: false, // 截图框能否拖动
                    original: true, // 上传图片按照原始比例渲染
                    centerBox: false, // 截图框是否被限制在图片里面
                    infoTrue: true, // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
                    enlarge:1,// 图片根据截图框输出比例倍数,0-max(建议不要太大不然会卡死的呢)
                    mode:"contain" //图片默认渲染方式,可选值：contain , cover, 100px, 100% auto
                },
            }
        },
        methods:{
            cancel(){
                this.$emit("onCancel",false)
            },
            sure(){
                this.$refs.cropper.getCropData((data) => {
                    this.$emit("onSure",data)
                    // console.log(data)
                })

            }
        }
    }
</script>

<style scoped>
    .cropper-content .cropper {
        width: 1200px;
        height: 800px;
    }
    .btn-box{
        margin-top:8px;
        margin-bottom:8px;
        overflow: hidden;
    }
    .btn-box .btn{
        float:right;
        margin-right:8px;
    }
</style>