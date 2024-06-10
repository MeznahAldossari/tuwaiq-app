import React from 'react'
import location from "../../assets/location.png"
// import calenders from "../../assets/calendars.png"
// import calendar from "../../assets/calender.png"
import "./Cards.css"

function Crads({type, title, eventLocation, period, start }) {
    let date = new Date()
    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = date.getFullYear();

    let current = `${day}-${month}-${year}`;
    console.log("#",current)
    console.log("hello ", start)
    let check = start>current

    let btnValue = "التفاصيل"
    let closeValue = "مغلق"

    


   
    
  
  
  return (
    <div>
        <div className={check? "mainCards": "NotMain"} style={{borderRight:check? (type==="لقاء"? "12px solid #c084fc": type==="برنامج"? "12px solid #91d8db": type==="معسكر"? "12px solid #abadf5":"12px solid gray"): "12px solid gray"}}>
            <div className='CardTitle'>
                <p style={{color:check? (type==="لقاء"? "#c084fc": type==="برنامج"? "#91d8db": type==="معسكر"? "#abadf5":"gray"): "gray"}}>{type}</p>
                <p>{title}</p>
            </div>
            <div className='location'>
                <span><img src={location}></img>{eventLocation}</span>
                <span><img src={location}></img>{period}</span>

            </div>

            <div className='details'>
      
                <span><img src={location}></img>{start}</span>

                <a style={{border:check?(type==="لقاء"? "2px solid #c084fc": type==="برنامج"? "2px solid #91d8db": type==="معسكر"? "2px solid #abadf5":"2px solid gray"): "2px solid gray"}} className={check?(type==="لقاء"? "Lclass": type==="برنامج"? "Pclass": type==="معسكر"? "Mclass":""):""}>{check? btnValue:closeValue}</a>
            </div>
            
        </div>
      
    </div>
  )
}

export default Crads
