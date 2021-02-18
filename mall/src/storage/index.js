/*定义大模块下的key
 */
const STORAGE_KEY="mall";

export default{
    //存储值==>第一个参数是想要存入的属性，第二个参数是属性值，第三个是存入的模块
    setItem(key,value,module_name){
        //判断是否有传入模块对象
        if(module_name){
            //取出模块对象
            let val=this.getItem(module_name);
            //给他添加属性值
            val[key]=value;
            //重新写进去里面val覆盖module_name
            this.setItem(module_name,val);
        }else{
            //如果没有的模块直接执行==>取出所有的数据
            let val=this.getStorage();
            //添加属性值
            val[key]=value;
            //将添加的值转为字符串形式再覆盖回原来的数据
            window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));
        }
        
    },
    //获取值==>需要个key值才知道你要获取哪个值,如果需要获取某个模块下的key，需要传入第二个参数module_name
    getItem(key,module_name){
        //如果有module_name就先获取他
        if(module_name){
            //获取模块
            let val=this.getItem(module_name);
            //获取成功后获取他的指定key
            if(val){
                return val[key]
            }
        }
        //如果没有模块就直接获取数据的 key
        return this.getStorage()[key]
    },
    //获取整个数据
    getStorage(){
        //信息存在mall里面所有直接获取他的值就行了,也有可能获取不到所以加个空对象，最后转成JSON来操作。
      return  JSON.parse(window.sessionStorage.getItem("mall")||'{}')
    },
    //清除数据==>第一个为属性值，第二个为模块
    clear(key,module_name){
        //先获取所有的值
        let val=this.getStorage();
        //判断模块是否存在
        if(module_name){
            //删除模块的下的属性值
            delete val[module_name][key];
        }else{
            //如果不存在就直接删除属性值
            delete val[key];
        }
        //将完成后的值重新放回去
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));
    }
}