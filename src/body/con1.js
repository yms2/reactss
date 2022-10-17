
import React, { Component } from "react";
import'./style.css'
import './con1.css'

class Con1 extends React.Component{
    constructor(props) {
      super();
  
      this.state = {
        menu: 0,
      };
    }

    render(){
        return(
            <div className="con1_c">
              <div>
                <div className ="item">
                  <li>
                    <img src="https://images.samsung.com/kdp/goods/2022/03/24/398773d5-ab1e-4c64-9a80-3f5a57c67d44.png?$240_240_PNG$"></img>
                    <p>무풍에어컨 클래식 (58.5 ㎡ + 18.7 ㎡)</p>
                  </li>
                  <li>
                    <img src="https://images.samsung.com/kdp/goods/2022/03/24/ba5cbe41-9e3b-48c9-b4bd-84e541cf7da8.png?$240_240_PNG$"></img>
                    <p>무풍에어컨 클래식 (58.5 ㎡ + 18.7 ㎡)</p>
                  </li>
                  <li>
                    <img src="https://images.samsung.com/kdp/goods/2022/03/29/78450554-c03d-4810-8b15-ba27f9ab2a81.png?$240_240_PNG$"></img>
                    <p>무풍에어컨 클래식 (58.5 ㎡ + 18.7 ㎡)</p>
                  </li>
                  <li>
                    <img src="https://images.samsung.com/kdp/goods/2022/01/27/afa9f3de-ded4-46a3-91a8-23c5fc75e300.png?$240_240_PNG$"></img>
                    <p>무풍에어컨 클래식 (58.5 ㎡ + 18.7 ㎡)</p>
                  </li>
                </div>
                <div className ="item2">
                  <li>
                    <img src="https://images.samsung.com/kdp/goods/2021/07/16/cf427e34-0a69-438a-ac2b-d5146c75bea2.png?$240_240_PNG$"></img>
                    <p>무풍에어컨 클래식 (58.5 ㎡ + 18.7 ㎡)</p>
                  </li>
                  <li>
                    <img src="https://images.samsung.com/kdp/goods/2022/06/28/e307db11-53c9-456a-b20c-4f41c05e1cfa.png?$240_240_PNG$"></img>
                    <p>무풍에어컨 클래식 (58.5 ㎡ + 18.7 ㎡)</p>
                  </li>
                  <li>
                    <img src="https://images.samsung.com/kdp/goods/2022/01/26/468fac6e-2dcc-4ff7-8cb9-7b138a618f72.png?$240_240_PNG$"></img>
                    <p>무풍에어컨 클래식 (58.5 ㎡ + 18.7 ㎡)</p>
                  </li>
                  <li>
                    <img src="https://images.samsung.com/kdp/goods/2022/04/08/695bf709-dd99-4bc5-9723-503b5fbd111b.png?$240_240_PNG$"></img>
                    <p>무풍에어컨 클래식 (58.5 ㎡ + 18.7 ㎡)</p>
                  </li>
                </div>

              </div>
            </div>
        )
    }
  }
  export default Con1;