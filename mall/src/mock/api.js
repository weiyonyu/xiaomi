import Mock from 'mockjs';
//第一参数访问路径，第二参数返回值
Mock.mock("/api/user/login",{
    "status":0,
    "data":{
        "id":22,
        "username":"admin",
        "email":"admin@55purse.com",
        "phone":null,
        "role":0,
        "createTime":1479048325000,
        "updateTime":1479048325000
    }
})