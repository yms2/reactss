import { render } from '@testing-library/react';
import React from 'react'
import  './mainimg.css'


function Mainimg(){
  let slides = document.querySelector('.mainimg');
  function move(){

    var curIndex = 0;
  
    setInterval(function(){
        slides.style.transition = '1.5s';
        slides.style.transform = "translate3d(-"+1920*(curIndex+1)+"px, 0px, 0px)";
  
        curIndex++;
  
        if(curIndex === 6){
            curIndex = -1;
        }
    },3000)
   }
   document.addEventListener("DOMContentLoaded",function(){
    move();
});
render()
    return(
        <div className='main_img'>
          <div className='mainimg'>
            <img className='slide_item' src="https://images.samsung.com/kdp/cms_contents/164564/fca26389-20b9-4c16-9331-58cdab239fdf.gif?$ORIGIN_JPG$"></img>
            <img className='slide_item' src="https://images.samsung.com/kdp/cms_contents/164981/9b1c712a-10d7-4d97-9c26-9cbfa62c2625.jpg?$ORIGIN_JPG$"></img>
            <img className='slide_item' src="https://images.samsung.com/kdp/cms_contents/164981/9b1c712a-10d7-4d97-9c26-9cbfa62c2625.jpg?$ORIGIN_JPG$"></img>
            <img className='slide_item' src="https://images.samsung.com/kdp/cms_contents/160164/d11e8cdc-49e2-44ab-96b0-c857b11d05c3.png?$ORIGIN_JPG$"></img>
            <img className='slide_item' src="https://images.samsung.com/kdp/cms_contents/160164/d11e8cdc-49e2-44ab-96b0-c857b11d05c3.png?$ORIGIN_JPG$"></img>
            <img className='slide_item' src="https://images.samsung.com/kdp/cms_contents/160164/d11e8cdc-49e2-44ab-96b0-c857b11d05c3.png?$ORIGIN_JPG$"></img>
            <img className='slide_item' src="https://images.samsung.com/kdp/cms_contents/160164/d11e8cdc-49e2-44ab-96b0-c857b11d05c3.png?$ORIGIN_JPG$"></img>
          </div>
        </div>
    )
  } 

export default Mainimg
