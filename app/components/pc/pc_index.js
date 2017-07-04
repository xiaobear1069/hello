import React from "react";
import Pc_Header from "./Pc_header.js";

export default class PCIndex extends React.Component{
    render(){
        return(
        	<div>
        		<Pc_Header />
        		{this.props.children}
        	</div>
           
        )
    }
}