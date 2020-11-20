/* 
 * @Author: 李祥雨
 * @Date: 2020-10-29 14:26:04
 * @Description: 在没有找到其他更好的第三方库的情况下，自己编写的处理数组，对象，正则，字符串等的函数
 */

/**
 * 调换数组中两个元素的位置
 * @param arr 需要调换的数组
 * @param index1 元素索引1
 * @param index2 元素索引2
 * @returns {*} 调换后的数组
 */
function swapArrItem(arr, index1, index2) {
  arr[index1] = arr.splice(index2, 1, arr[index1])[0];
  return arr;
}

/**
 * 将数组元素向前移一位
 * @param fieldData 数组
 * @param index 元素索引
 */
function upGoArrItem(fieldData,index){
  if(index!=0){
    fieldData[index] = fieldData.splice(index-1, 1, fieldData[index])[0];
  }else{
    fieldData.push(fieldData.shift());
  }
}

/**
 * 将数组元素向后移一位
 * @param fieldData 数组
 * @param index 元素索引
 */
function downGoArrItem(fieldData,index) {
  if (index != fieldData.length - 1) {
    fieldData[index] = fieldData.splice(index + 1, 1, fieldData[index])[0];
  } else {
    fieldData.unshift(fieldData.splice(index, 1)[0]);
  }
}

/**
 * 将某个数组元素置顶
 * @param fieldData 数组
 * @param index 元素索引
 */
function setArrItemToFirst(fieldData,index) {
  if (index != 0) {
    fieldData.unshift(fieldData.splice(index, 1)[0]);
  }
}

/**
 * 无限级分类,一般用于关系型数据库返回的分类表的数据的嵌套格式的构建
 * @param arr 传出的数组，每个元素的格式必须为{id:,parent_id:,....},必须包含id:id，和父级id：parent_id，顶级分类的父级id为0
 * @returns {Array}
 */
function generateInfiniteCategory(arr){
// 查询一级分类
  function findChild(arr,id) {
    let childs = [];
    arr.forEach(v=>{
      if (v.parent_id == id){
        childs.push(v);
      }
    });
    return childs;
  }
  // 根据id构建子级
  function build_tree(id) {
    let childs=  findChild(arr,id);
    if (childs.length==0){
      return null;
    }
    // 对于父节点为0的进行循环，然后查出父节点为上面结果id的节点内容
    childs.forEach((v,k)=>{
      let buildTree = build_tree(v.id);
      if (null != buildTree){
        v['children'] = buildTree;
      }
    });
    return childs;
  }
  return build_tree(0);
}

/**
 * 正则截取字符串指定开头和结尾之间的内容，但不包含开头和结尾
 * @param str 需要截取的字符串
 * @param start 指定的开头
 * @param end 指定的结尾
 * @returns 如果查询到结果返回匹配结果的数组，否则返回空数组
 */
function regMatchCenterStr(str,start,end) {
  var matchReg = `/(?<=${start}).*?(?=${end})/g`
  var regstr = eval(matchReg);
  let ret = str.match(regstr);
  if(ret){
    return  ret;
  }else{
    return [];
  }
}

export default{
  swapArrItem,
  upGoArrItem,
  downGoArrItem,
  setArrItemToFirst,
  generateInfiniteCategory,
  regMatchCenterStr
}
