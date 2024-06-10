import React from 'react'
import "./Button.css"
function Button({name}) {
  return (
    <div className='div'>
      <a className={name==="الكبار"? "big": name==="الناشئون"? "small":"default" }>{name}</a>
    </div>
  )
}

export default Button
