class TestServiceImpl implements TestService{

    public printHello( name:String ):String{
        return "hello"+name;
    }

}
var instance = new TestServiceImpl();
export=instance;