import React, { Component } from "react";

import './style.css';
import './con2.css';
class Con2 extends React.Component{
    constructor(props) {
      super();
  
      this.state = {
        menu: 0,
      };
    }

    render(){
        return(
            <div className="con2_c">
                  
                    <img src="https://images.samsung.com/kdp/cms_contents/162149/5afee76d-98b4-436f-a024-bdc73c998299.png?$684_684_PNG$"/>
                  
                <div className="sub1">
                  <li>
                    <img src="https://images.samsung.com/kdp/cms_contents/162149/c0941d6c-bc3a-40dc-baf5-3e8679af28c9.png?$330_330_PNG$"></img>
                  </li>
                  <li>
                    <img src="https://images.samsung.com/kdp/cms_contents/162149/c463d77c-f050-420e-b793-0242db4c341a.png?$330_330_PNG$"></img>
                  </li>
                </div>
                <div className="sub2">
                  <li>
                    <img src="https://images.samsung.com/kdp/cms_contents/162149/43110aaf-c492-4794-8e60-ae9844a9e860.png?$330_330_PNG$"></img>
                  </li>
                  <li>
                    <img src="https://images.samsung.com/kdp/cms_contents/162149/71525582-911f-4183-9399-5f5643a9bdee.png?$330_330_PNG$"></img>
                  </li>
                </div>
              
            </div>
        )
    }
  }
  
  
  export default Con2;