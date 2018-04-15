class TestServiceImpl implements TestService{

    public printHello( name:String ):String{
        return "hello"+name;
    }

}
let instance = new TestServiceImpl();
export=instance;