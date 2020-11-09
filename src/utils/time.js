/* 
 * @Author: 李祥雨
 * @Date: 2020-11-07 12:24:13
 * @Description: 和处理时间相关的函数
 */

/**
 * @description 倒计时方法 按秒计算
 * @param {Number} sec 倒计时时间 秒
 * @param {Function} callback1 执行倒计时的回调函数 一个参数为当前剩余秒数
 * @param {Function} callback2 倒计时执行完毕后的回调函数 无参数
 * @return null
 */
function countDown(sec, callback1, callback2) {
  var count = sec
  callback1 && callback1(count)
  var setintervalID = setInterval(function () {
    count--;
    callback1 && callback1(count)
    if (count <= 0) {
      callback2 && callback2()
      clearInterval(setintervalID)
      setintervalID = null
    }
  }, 1000)
}

export default{
  countDown
}