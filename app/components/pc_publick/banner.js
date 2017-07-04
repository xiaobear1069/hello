import React from "react";
import { Carousel } from 'antd';
import { get } from "../../fetch/get.js";
export default class PCBanner extends React.Component {
    constructor() {
        super();
        this.state = {
            srcInfo: []
        }
    }
    componentDidMount() {
        var result = get("http://www.iwen.wiki/sxtstu/blueberrypai/getIndexBanner.php");
        var srcArr = [];
        result.then(res => {
            return res.json();
        }).then(json => {
            json.banner.map(function (element, index) {
                srcArr.push(element.img);
            })
            this.setState({
                srcInfo: srcArr
            })

        })
    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 1000
        };
        return (
            <div>
                <Carousel {...settings}>
                    <div className="banner"><a href="#"><img src={this.state.srcInfo[0]} /></a></div>
                    <div className="banner"><a href="#"><img src={this.state.srcInfo[1]} /></a></div>
                    <div className="banner"><a href="#"><img src={this.state.srcInfo[2]} /></a></div>
                    <div className="banner"><a href="#"><img src={this.state.srcInfo[3]} /></a></div>
                </Carousel>

            </div>
        )
    }
}