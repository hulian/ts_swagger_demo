import * as log4j from "log4js";

class TestController{
    public seyHello( name:String){
        log4j.getLogger().info(name+"test");
    }
} 
var instance = new TestController();
export = instance;   