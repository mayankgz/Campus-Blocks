import React from 'react'
import '../../css/previous events/Roadmap.css'
import Road1 from '../../assets/images/road1.jpg'
const Roadmap = () => {
  return (
    <>
     <div class="header">
      <div class="left">
        <span class="dot1 dot"></span>
        <span class="dot2 dot"></span>
        <span class="dot3 dot"></span>
      </div>
      <div class="center">
        ROADMAP TO DSA
        <div class="line1"></div>
      </div>
      <div class="right">
        <span class="dot3 dot"></span>
        <span class="dot2 dot"></span>
        <span class="dot1 dot"></span>
      </div>
    </div>
    <div class="body">
      <div class="left_image"></div>
      <div class="middle_image">
        <img src={Road1} alt=""/>
      </div>
      <div class="right_image"></div>
    </div>
    <div class="down">
        <div class="one bottom">
          <h2 style={{marginbottom: "2px"}}>CONDUCTED ON:</h2>
          <div class="line1">
          </div>
          <h3 style={{marginbottom: "0px"}}> 17 May 2022 </h3>
          <h2 style={{marginbottom: "2px"}}>SPEAKER</h2>
          <div class="line2"></div>
          <h3 style={{marginbottom: "0px"}}>Mr.Monu Kumar</h3> 
          <h2 style={{marginbottom: "2px"}}>OTHER INFO</h2>
          <div class="line2"></div>
          <h3>100+ Attendies</h3>
        </div>
        <div class="two bottom">
             <h1 style={{marginbottom: "2px"}}>ABOUT:</h1>
             <div class="line3" ></div>
            <p>Offline coding event where<br/> students were given<br/> questions of DSA to improve <br/>their skills</p>
        </div>
    </div>
    </>
  )
}

export default Roadmap