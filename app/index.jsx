import React from 'react';
import { render } from 'react-dom';
import MediaQuery from "react-responsive";
import {Router,Route,hashHistory,IndexRoute} from "react-router";
import PCIndex from "./components/pc/pc_index.js";
import MobileIndex from "./components/mobile/mobile_index.js";
import PCGuoNei from "./components/newstype/pc_guonei.js";
import PCGuoJi from "./components/newstype/pc_guoji.js";
import PCJunShi from "./components/newstype/pc_junshi.js";
import PCKeJi from "./components/newstype/pc_keji.js";
import PCShiShang from "./components/newstype/pc_shishang.js";
import PCTiYu from "./components/newstype/pc_tiyu.js";
import PCTop from "./components/newstype/pc_top.js";
import PCYuLe from "./components/newstype/pc_yule.js";

class App extends React.Component {
    render() {
        return (
            <div>
                {/* PC端 */}
                <MediaQuery query="(min-device-width:1224px)">
                    <Router history={hashHistory}>
        			<Route path="/" component={PCIndex}>
                        <IndexRoute component={PCTop} />
                        <Route path="/guonei" component={PCGuoNei}></Route>
                        <Route path="/guoji" component={PCGuoJi}></Route>
                        <Route path="/tiyu" component={PCTiYu}></Route>
                        <Route path="/yule" component={PCYuLe}></Route>
                        <Route path="/junshi" component={PCJunShi}></Route>
                        <Route path="/keji" component={PCKeJi}></Route>
                        <Route path="/shishang" component={PCShiShang}></Route>
                    </Route>
        			</Router>
                </MediaQuery>
                
                {/* 移动端 */}
                <MediaQuery query="(max-device-width:1224px)">
                    <MobileIndex />
                </MediaQuery>
            </div>
        )
    }
}

render(
    <App/>,
    document.getElementById('root')
)
