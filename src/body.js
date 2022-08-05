import React from "react";
import './body.css';
import Con1 from './body/con1'
import Con2 from './body/con2'
import Con3 from './body/con3'
import Con4 from './body/con4'
import Con5 from './body/con5'
const menuList = {
  0: <Con1 />,
  1: <Con2 />,
  2: <Con3 />,
  3: <Con4 />,
  4: <Con5 />
};

class Body extends React.Component{
  constructor(props) {
    super();

    this.state = {
      menu: 0,
    };
  }

  changeMenu = (menuIndex) =>{
    this.setState({menu : menuIndex});
  }

  render(){
    return(
      <div className="content">
        <div className="menuBar">
          <ul className="tabs">
            <li className={`${this.state.menu === 0? 'active': ''}`} onClick={() => this.changeMenu(0)}>삼성닷컴 인기제품</li>
            <li className={`${this.state.menu === 1? 'active': ''}`} onClick={() => this.changeMenu(1)}>중고가전 추가보상</li>
            <li className={`${this.state.menu === 2? 'active': ''}`} onClick={() => this.changeMenu(2)}>셀렉트샵</li>
            <li className={`${this.state.menu === 3? 'active': ''}`} onClick={() => this.changeMenu(3)}>삼성케어플러스</li>
            <li className={`${this.state.menu === 4? 'active': ''}`} onClick={() => this.changeMenu(4)}>특별한 해택</li>
          </ul>
        </div>
        <div className="contentArea">
          {menuList[this.state.menu]}
        </div>
      </div>
    )
  }
}


export default Body;