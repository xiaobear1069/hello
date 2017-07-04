import React from "react";
import { Carousel } from 'antd';
import { get } from "../../fetch/get.js";
export default class PCBanner extends React.Component {
    constructor() {
        super();
        this.state = {
           textInfo: [{
                title: "",
                thumbnail_pic_s: ""
            }]
        }
    }
    componentDidMount() {
        var result = get(this.props.url);
        result.then(res => {
            return res.json();
        }).then(json => {

            this.setState({
                textInfo: json
            })
            this.state.textInfo.map(function (item, index) {
                console.log(item.url)
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
                {
                    this.state.textInfo.map(function (item, index) {
                        return (
                            <div className="top_left" key={index}>
                                <img src={item.thumbnail_pic_s} alt="" />
                                <p>{item.title} </p>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}