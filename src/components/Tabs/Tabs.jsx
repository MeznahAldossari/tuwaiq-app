import React from 'react'
import "./Tabs.css"
import filter from '../../assets/filter.png'
import Button from '../button/Button'

function Tabs() {
  return (
    <div className='mainTabs'>
      <div className='tab'>
       <p className='title'>المعسكرات والبرامج</p>
       <div className='btns'>
            <Button name="الكبار"/>
            <Button name="الناشئون"/>
            {/* <a className='big'>الكبار</a>
            <a className='small'>الناشئون</a> */}

       </div>
      <a className='a-filter'><img src={filter} className='filter'></img> </a>
      </div>
    </div>
  )
}

export default Tabs
