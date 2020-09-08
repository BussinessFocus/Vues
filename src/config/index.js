
let BaseUrl = ""; //后台访问基地址

//开发环境配置
if (process.env.NODE_ENV === "development") {
    BaseUrl="http://localhost:7001/";
}
//测试环境地址
if (process.env.NODE_ENV === "test") {
    BaseUrl="";
}
//正式环境地址
if (process.env.NODE_ENV === "production") {
    BaseUrl="";
}

console.log(process.env.NODE_ENV);

export default {
    BaseUrl
}