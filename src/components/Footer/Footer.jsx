import React from 'react'
import "./Footer.css"
import logo from "../../assets/tuwiq.png"
import twitter from "../../assets/twitter.svg"
import youtube from "../../assets/youtube.svg"
import snapchat from "../../assets/snapchat.svg"
import linkedin from "../../assets/linkedin.svg"
import discord from "../../assets/discord.svg"
import logos2 from "../../assets/logos.svg"

function Footer() {
  return (
    <div className='fullFooter'>
      <div className='mainFooter'>
        <img src={logo}></img>
        <div className='About'>
            <p><a>شارك كمتدرب</a></p>
            <p><a>حول الأكاديمية</a></p>
        </div>
        <div className='Policy'>
            <p><a>الشروط والأحكام</a></p>
            <p><a>سياسة الخصوصية</a></p>
        </div>
        <div className='social'>
           <div className='icons'>
            <img src={twitter}></img>
            <img src={discord}></img>
            <img src={linkedin}></img>
            <img src={snapchat}></img>
            <img src={youtube}></img>

           </div>
           <p>TuwaiqAcademy@</p>
        </div>
        <img src={logos2}></img>

      </div>
      <p>جميع الحقوق محفوظة لأكاديمية طويق 2024</p>
    </div>
  )
}

export default Footer
