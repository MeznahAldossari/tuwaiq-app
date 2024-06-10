import React from 'react'
import "./Register.css"
import step1 from "../../assets/course1.svg"
import step2 from "../../assets/course2.svg"
import step3 from "../../assets/course3.svg"

function Register() {
  return (
    <div className='steps'>
      <h2>خطوات التسجيل</h2>
      <div className='subSteps'>
        <div className='step1'>
        <div className='imgStep'>
            <img src={step1}></img>
            </div>
            <p>
            الانضمام إلى المنصة
            </p>
        </div>
        <div className='step1'>
        <div className='imgStep'>
            <img src={step2}></img>
            </div>
            <p>
            التــســــــــجيــــــــــــل في المعسكر أو البرنامج
            </p>
        </div>
        <div className='step1'>
            <div className='imgStep'>
            <img src={step3}></img>
            </div>
            
            <p>
            انتظار رسالة القــــبــــــــــــول
            </p>
        </div>
      </div>
    </div>
  )
}

export default Register
