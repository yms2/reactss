
import React, { Component } from "react";
import './style.css';
import './con5.css'

class Con5 extends React.Component{
    constructor(props) {
      super();
  
      this.state = {
        menu: 0,
      };
    }

    render(){
        return(
            <div className="con5_c">

              <img src="https://images.samsung.com/kdp/cms_contents/164159/27b9f9b9-a4a7-4f67-9b2e-6dad59cbc0fa.png?$448_684_PNG$"/>
              <img src="https://images.samsung.com/kdp/cms_contents/164159/6c55038b-4c46-4203-8c3a-d7863d2303f7.jpg?$448_684_JPG$"/>
              <img src="https://images.samsung.com/kdp/cms_contents/162535/a87fb598-c734-4a2a-85ab-0b67d372f3bf.jpg?$448_684_JPG$"/>
            </div>
        )
    }
  }
  
  
  export default Con5;