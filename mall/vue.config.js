module.exports = {
    devServer:{
      host:'localhost',                    //主机
      port:8080,                           //设置端口号
      proxy:{                              //代理
        '/api':{       
          //后台的地址                    //访问/api时，拦截
        target:'http://mall-pre.springboot.cn',  //目标，代理到那里去
          changeOrigin:true,               //是否要将主机头改为目标的url地址
          pathRewrite:{                    //转发地址
            '/api':''                      //  /api代理到''    
          }
        }
      }
    },
  }