import React from "react";
import Logo from "../../static/images/iwennews.png";
import Erwei from "../../static/images/2.jpg";
import {Icon,Modal} from "antd";
import "../../static/mbcss/mb_header.css";
export default class MobileHeader extends React.Component{
	constructor(){
		super();
		this.state ={
			visible:false
		}
	}
	erweiShow(){
		 this.setState({
    		  visible: true,
    		})
	}
	handleOk(){
		 this.setState({
     		 visible: false,
   		 })
	}
	handleCancel(){
		 this.setState({
     		 visible: false,
   		 })
	}
    render(){
        return(
            <div className="header">
                <img src={Logo} alt="img"/>
              	<span>·独家新闻</span>
              <Icon type="qrcode" className="icon" onClick={this.erweiShow.bind(this)} />
             	<Modal  visible={this.state.visible} onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)}>
       			  <p><img src={Erwei} alt="er"/></p>
       			</Modal>
            </div>
        )
    }
}