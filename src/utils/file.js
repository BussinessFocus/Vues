/*
 * @Author: 李祥雨
 * @Date: 2020-10-09 20:14:56
 * @Description: 封装和处理文件相关函数，包括图片视频等
 */

/**
 * 上传图片时读取上传图片的宽高信息
 * @file 上传的图片文件
 * @return 一个promise异步函数，resolve myImg{imgWidth:图片的宽,imgHeight:图片的高}
 */
function getUploadImgWidthAndHeight(file){
    let promise = new Promise(function(resolve, reject){
        // ... some code
        let myImg={};
        let fileReader = new FileReader();
        fileReader.readAsDataURL(file); //根据图片路径读取图片
        fileReader.onload = function (e) {
            let base64 = this.result;
            let img = new Image();
            img.src = base64;
            img.onload = function () {
                myImg.imgWidth = img.naturalWidth;
                myImg.imgHeight = img.naturalHeight;
                if (myImg.imgWidth) {
                    resolve(myImg);
                } else {
                    reject(error);
                }
            }
        }
    })
    return promise;
}

/**
 * 把一个文件base64格式的url转换成blob对象,主要应用在把base64的 url 图片转换成blob对象
 * @param dataURI 文件的url
 * @param type 要转换成的文件类型，原图片是什么类型的格式就要传什么类型的字符串，例："image/png"
 * @returns {Blob}
 */
function dataURL2Blob(dataURI) {
    let arr = dataURI.split(",")
    let mime = arr[0].match(/:(.*?);/)[1]
    var binary = atob(dataURI.split(',')[1]);//解码使用base64编码的字符串
    var array = [];
    for(var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type:mime});
}

/**
 * 把base64格式的图片转化成图片文件
 * @param dataURI base64的文件
 * @param fileName 生成的文件名
 * @return 生成的文件
 */
function imgBase64DataURL2File(dataURI,fileName=Date.now()) {
    let arr = dataURI.split(",")
    let mime = arr[0].match(/:(.*?);/)[1]
    let lastName = mime.split('/')[1];
    let blob = dataURL2Blob(dataURI);
    let file = new File([blob], `${fileName}.${lastName}`, { type: mime, lastModified: Date.now() })
    return file
}

/**
 * 根据链接地址生成视频文件的缩略图，缩略图取的是视频的第一帧
 * @param videoFileSrc 上传的视频文件
 * @scale 缩放的比例，为0到1之间的值
 * @param fileName 生成的缩略图文件名称,默认为当前时间戳
 * @returns {Promise<any>} resolve参数:{file:,base64Src:}  file:生成的图片文件，一般用于上传， base64Src：base64的图片，一般用于显示
 */
function creatVideoThumbImg(videoFileSrc,scale,fileName=Date.now()) {
    let prom =  new Promise((resolve, reject)=>{
        let videoElem = document.createElement('video');
        videoElem.src = videoFileSrc
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        videoElem.crossOrigin = 'anonymous' // 解决跨域问题，也就是提示污染资源无法转换视频
        videoElem.currentTime = 1 // 指定当前帧为第一帧
        videoElem.addEventListener('loadeddata', (e) => {
            const imgHeight = videoElem.videoHeight;
            const imgWidth = videoElem.videoWidth;
            canvas.width = imgWidth*scale
            canvas.height = imgHeight*scale
            ctx.drawImage(e.target, 0, 0, imgWidth*scale, imgHeight*scale);
            let imgSrc = canvas.toDataURL('image/png');
            var blob = dataURL2Blob(imgSrc)//base64转blob，工具函数
            var file = new File([blob], `${fileName}.png`, { type: "image/png", lastModified: Date.now() })//blob转file
            resolve({file:file,base64Src:imgSrc});
        })
    })
    return prom;
}

/**
 * 压缩图片，返回base64的图片地址，一般用于图片上传时压缩图片，或生成图片的缩略图
 * @param img 上传上来的图片文件
 * @param scale 压缩的比率，在 0到1之间取值
 * @returns {Promise<any>} resolve参数为base64编码的图片地址，reject 报错信息
 */
async function creatImgThumbImg(img,scale){
    let pro = new Promise((resolve,reject)=>{
        try{
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            let reads = new FileReader();
            reads.readAsDataURL(img)
            reads.onload = function (e) {
                let newImg = new Image();
                newImg.src = this.result;
                newImg.onload = function(){
                    canvas.width  = this.naturalWidth*scale;
                    canvas.height = this.naturalHeight*scale;
                    ctx.drawImage(this, 0, 0, this.naturalWidth*scale, this.naturalHeight*scale);
                    let imgSrc = canvas.toDataURL('image/png');
                    resolve(imgSrc);
                }
            }
        }catch(error){
            reject(error)
        }
    })
    return pro
}

/**
 * 将上传上来的视频文件生成url，赋给vedio元素后后可以播放
 * @param video 上传上来的video文件
 * @returns {string} 返回视频的链接地址
 */
function generatorLocalUploadVideoFileUrl(video){
    return URL.createObjectURL(video)
}

/**
 * 把上传的图片文件转化成base64的图片地址，一般用于图片上传时的预览
 * @param img
 * @returns {Promise<any>} resolve传入的参数为base64的地址，reject传入的为报错信息
 */
async function generatorLocalUploadImgBase64Url(img){
    let pro = new Promise((resolve,reject)=>{
        try{
            let reads = new FileReader();
            reads.readAsDataURL(img)
            reads.onload = function (e) {
                resolve(this.result);
            }
        }catch(error){
            reject(error)
        }
    })
    return pro
}

/**
 * 路径文件下载
 * @param url 请求文件的地址
 * @param fileName 文件名称
 */
function fileDownload(url,fileName){
    var a = document.createElement('a');
    a.download = fileName;
    a.href = url;
    a.click();
}

/**
 * 流文件下载
 * @param blobStream 后端返回的二进制文件流
 * @param fileName 文件名称
 */
function streamFileDownload(blobStream,fileName) {
    var a = document.createElement('a');
    a.download = fileName;
    a.href =  URL.createObjectURL(blobStream);
    a.click();
}

export default{
    getUploadImgWidthAndHeight,
    dataURL2Blob,
    imgBase64DataURL2File,
    creatVideoThumbImg,
    creatImgThumbImg,
    generatorLocalUploadVideoFileUrl,
    generatorLocalUploadImgBase64Url,
    fileDownload,
    streamFileDownload
}

