import React from "react";
import {  Row, Col,Menu, Icon,Button,Modal,Tabs,Form,Input } from 'antd';
import Logo from "../../static/images/iwennews.png";
import {Link}  from "react-router";
import {get} from "../../fetch/get.js";
import  "../../static/css/pc_header.css";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
 class PCIndex extends React.Component{
  constructor(){
    super();
    this.state={
      current:"top",
      UserName:"肉肉",
      isLogin:false,
      modalVisible:false,
      action:"login"
    }
  }
   //进入是，判断用户名和秘密是否存在，如果存在则直接登录状态，如果不出在，爱那那去
    componentWillMount(){
        if(localStorage.getItem("username")){
            this.setState({
                UserName:localStorage.getItem("username"),
                isLogin:true
            })
        }
    }

  currentClick(event){

    this.setState({
      current:event.key
    })
  }

  clickOut(){
    this.setState({
      isLogin:true
    })
  }
  clickLogin(){
    this.setState({
      isLogin:false
    })
  }
    clickShow(flag){
        this.setState({
             modalVisible:flag
        })
    }
     /**
     * 区分是登录还是注册
     * action:代表登录和注册的状态
     */
    callback(key){
        if(key == "1"){
            this.setState({
                action:"login"
            })
        }else if(key == "2"){
            this.setState({
                action:"register"
            })
        }
    }

    handlerSubmit(event){
      event.preventDefault();
       var formData = this.props.form.getFieldsValue();
         if(this.state.action=="login"){
             let result = fetch("http://www.iwen.wiki/sxtstu/news/selectuser.php?username="+formData.userName+"&password="+formData.password);
                    result.then(res=>{
                      return res.json();
                    }).then(json=>{
                      console.log(json);
                       this.setState({
                        UserName:json.username,
                        isLogin:false,
                        modalVisible:false
                       })
                        localStorage.setItem("username",json.username) ;
                        localStorage.setItem("password",json.password) ;
                    })
        }else if(this.state.action=="register"){
           let result =fetch("http://www.iwen.wiki/sxtstu/news/adduser.php?username="+formData.r_userName+"&password="+formData.r_password+"&repassword="+formData.r_cpassword);
                    result.then(res=>{
                      return res.json();
                    }).then(json=>{
                      console.log(json);
                       this.setState({
                        UserName:formData.r_userName,
                        isLogin:false,
                        modalVisible:false
                       })
                       
                    })
        }
    }
    render(){
   const { getFieldDecorator } = this.props.form;
      var show = this.state.isLogin 
      ?<Menu.Item key="Login" className="login" >
                 <span onClick={()=>this.clickShow(true)}>登陆|注册</span>
             </Menu.Item>
      :<Menu.Item key="Login" className="login">
          <Button>{this.state.UserName}</Button>
          <Button type="dashed">个人中心</Button>
                  <Button type="primary" onClick={this.clickOut.bind(this)}>退出</Button>
             </Menu.Item>
        return(
            <div>
              <Row >
          <Col span={2} ></Col>
          <Col span={20} >
            <Row>
              <Col span={1}>
                <div className="logo">
                  <img src={Logo} alt="logo"/>
                </div>
              </Col>
              <Col span={22}>
                 <Menu  className="menu" mode="horizontal" selectedKeys={[this.state.current]} onClick={this.currentClick.bind(this)}>
                                    <Menu.Item key="top">
                                       <Link to={`/`}>
                                         <Icon type="to-top" />
                                          头条
                                       </Link>
                                    </Menu.Item>
                                    <Menu.Item key="guonei">
                                       <Link to={`/guonei`}>
                                           <Icon type="minus-square" />
                                            国内
                                       </Link>
                                    </Menu.Item>
                                    <Menu.Item key="guoji">
                                        <Link to={`/guoji`}>
                                             <Icon type="global" />
                                              国际
                                        </Link>
                                       
                                    </Menu.Item>
                                    <Menu.Item key="tiyu">

                                        <Link to={`/tiyu`}>
                                           <Icon type="smile" />  
                                           体育
                                        </Link>
                                        
                                    </Menu.Item>
                                    <Menu.Item key="yule">
                                        <Link to={`/yule`}>
                                          <Icon type="appstore" />
                                           娱乐
                                        </Link>
                                        
                                    </Menu.Item>
                                    <Menu.Item key="junshi">

                                        <Link to={`/junshi`}>
                                             <Icon type="rocket" />
                                            军事
                                        </Link>
                                       
                                    </Menu.Item>
                                    <Menu.Item key="keji">

                                       <Link to={`/keji`}>
                                             <Icon type="fork" />
                                             科技
                                        </Link>
                                       
                                    </Menu.Item>
                                    <Menu.Item key="shishang">
                                         <Link to={`/shishang`}>
                                             <Icon type="apple" />
                                             时尚
                                        </Link>
                                       
                                    </Menu.Item>
                                    {show}
                                    
                                      <Modal visible={this.state.modalVisible} onCancel={()=>this.clickShow(false)} onOk={()=>this.clickShow(false)}>
                                           <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)} >
                                              <TabPane tab="登陆" key="1">
                                                 <Form  onSubmit = {this.handlerSubmit.bind(this)}>
                                                    <FormItem label="用户名" >
                                                       {getFieldDecorator('userName', {
                                                             rules: [{ required: true, message: '请输入用户名' }],
                                                           })(
                                                             <Input placeholder="请输入用户名" />
                                                           )}    
                                                    
                                              
                                                    </FormItem> 
                                                    <FormItem label="密码"> 
                                                     {getFieldDecorator('password', {
                                                             rules: [{ required: true, message: '请输入密码' }],
                                                           })(
                                                             <Input placeholder="请输入密码"  type="password"/>
                                                           )}    
                                              
                                                    </FormItem> 

                                                    <Button type="primary" htmlType="submit">登陆</Button>
                                                 </Form>
                                              </TabPane>
                                              <TabPane tab="注册" key="2" >
                                                <Form  onSubmit ={this.handlerSubmit.bind(this)}>
                                                    <FormItem label="用户名">
                                                         {getFieldDecorator('r_userName', {
                                                             rules: [{ required: true, message: '请输入用户名' }],
                                                           })(
                                                             <Input placeholder="请输入用户名" />
                                                           )}   
                                                    </FormItem> 
                                                    <FormItem label="密码">
                                                        {getFieldDecorator('r_password', {
                                                             rules: [{ required: true, message: '请输入密码' }],
                                                           })(
                                                             <Input placeholder="请输入密码"  type="password"/>
                                                           )}    
                                                    </FormItem> 
                                                     <FormItem label="确认密码">
                                                         {getFieldDecorator('r_cpassword', {
                                                             rules: [{ required: true, message: '请输入密码' }],
                                                           })(
                                                             <Input placeholder="请输入密码"  type="password"/>
                                                           )}    
                                                    </FormItem> 
                                                    <Button type="primary" htmlType="submit">注册</Button>
                                                 </Form>
                                              </TabPane>
                                            </Tabs> 
                                      </Modal>
                              
                                </Menu>
                                
              </Col>
              <Col span={1}></Col>
            </Row>
          </Col>
          <Col span={2} ></Col>
        </Row>
            </div>
        )
    }
}
export default  PCIndex = Form.create({})(PCIndex);

