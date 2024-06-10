import React from 'react'
import "./Nav.css"
import logo from "../../assets/tuwiq.png"
function Nav() {
  return (
    <div>
      <nav className='Nav'>
         
        <ul>
            <li><img src={logo}></img></li>
            <li><a>الرئيسية</a></li>
            <li><a>المعسكرات والبرامج</a></li>
            <li><a>حول الأكاديمية</a></li>
            <li><a>الأكاديميات التابعة</a></li>
            <li><a>مركز الأختبارات</a></li>
        </ul>
        <div className='login'>
            <a>تسجيل الدخول</a>
            <a>English</a>
        </div>



      </nav>

      <nav className='Nav2'>
      <ul>
      <li><img src={logo}></img></li></ul>

      </nav>

   
      <div className='MainTitle'>
        <p>أكاديمية طويق</p>
      </div>
    </div>
  )
}

export default Nav
