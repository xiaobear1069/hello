import React from "react";
import {Icon,} from "antd";
export default class MobileHeader extends React.Component{
    render(){
        return(
            <div className="header">
                <img src={Logo} alt="img"/>
              	<span>·独家新闻</span>
              <Icon type="qrcode" className="icon" />
            </div>
        )
    }
}