
import React, { Component } from "react";
import './style.css';
import './con4.css';
class Con4 extends React.Component{
    constructor(props) {
      super();
  
      this.state = {
        menu: 0,
      };
    }

    render(){
        return(
            <div className="con4_c">
              <img src="https://images.samsung.com/kdp/cms_contents/124341/27023939-9bcb-4449-b0ab-f2e702e34bc9.jpg?$684_684_JPG$"width={'700px'}/>
              <img src="https://images.samsung.com/kdp/cms_contents/124341/5b9a24da-5285-43c5-aba3-24b73898bd36.jpg?$684_684_JPG$"/>
            </div>
        )
    }
  }
  
  
  export default Con4;