import React from 'react'
import classes from "./patient.module.css"
const Patient = () => {
  return (
    <div >
    {/* ${patient_name} */}
    <div><h1 className={classes.title}>{`WELCOME `}</h1></div>
  <div className={classes.centre}>
  <div id="pickup" className={classes.take_meals_opt}>My appoitments</div>
    <div id="delivery" className={classes.take_meals_opt}>schedule/make appoitments</div>
  </div>
    
    <div className={classes.clear}></div>
    {/* <div className={classes.title} style={{"display":"none"}}>Pick up datail</div> */}
   </div>
  )
}

export default Patient