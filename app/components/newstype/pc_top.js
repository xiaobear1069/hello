import React from "react";
import {Row, Col, Carousel} from "antd";
import  "../../static/css/pc_top.css";
import PCBanner from "../pc_publick/banner.js";
import PCBody from "../pc_publick/pc_body.js";
export default class PCTop extends React.Component{
    render(){
         var settings = {
                           dots: true,
                           infinite: true,
                           speed: 500,
                           autoplay: true,
                           autoplaySpeed: 1000
                          };
        return(
             <div>
             <Row>
                   <Col span={2}></Col>
                   <Col span={20}>
                       <Row>
                            <Col span={7}>
                                <div>
                                    <PCBody url="http://www.iwen.wiki/sxtstu/news/juhenews.php?type=guoji&count=3"/>
                                </div>
                            </Col>
                            <Col span={10}>
                                 <PCBanner />
                            </Col>
                            <Col span={7}>
                                 <PCBody url="http://www.iwen.wiki/sxtstu/news/juhenews.php?type=yule&count=3"/>
                            </Col>
                       </Row>
                   </Col>
                   <Col span={2}></Col>
                </Row>

            </div>
        )
    }
}