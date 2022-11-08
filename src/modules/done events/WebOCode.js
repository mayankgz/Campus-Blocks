import React from 'react'
import "../../css/done events/WebOCode.css"
const WebOCode = () => {
  return (
    <>
     <div class="header">
      <div class="left">
        <span class="dot1 dot"></span>
        <span class="dot2 dot"></span>
        <span class="dot3 dot"></span>
      </div>
      <div class="center">
        WEB-O-CODE
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
        <img src="./4.jpeg" alt=""/>
      </div>
      <div class="right_image"></div>
    </div>
    <div class="down">
        <div class="one bottom">
          <h2 style="margin-bottom: 2px;">CONDUCTED ON:</h2>
          <div class="line1">
          </div>
          <h3> 28-29 October  2021 </h3> 
          <h2 style="margin-bottom: 2px;">OTHER INFO</h2>
          <div class="line2"></div>
          <h3>100+ Registrations</h3>
        </div>
        <div class="two bottom">
             <h1 style="margin-bottom: 2px;">ABOUT:</h1>
             <div class="line3" ></div>
            <p>12 hour frontend development <br/> event where students<br/> developed web pages on the <br/>topic "Global Innovation"</p>
        </div>
    </div>
    </>
  )
}

export default WebOCode