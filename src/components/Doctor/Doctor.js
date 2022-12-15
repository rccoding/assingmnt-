import React from 'react'
import classes from "./doctor.module.css"
const Doctor = () => {
  return (
    <>
    <div><h1 className={classes.title}>WELCOME DOCTOR</h1></div>
    <a href=""><div id="pickup" className={classes.take_meals_opt}>My appoitments</div></a>
    <a href=""><div id="delivery" className={classes.take_meals_opt}>re-schedule/cancel appoitments</div></a>
    
    <div className={classes.clear}></div>
    {/* <div className={classes.title} style={{"display":"none"}}>Pick up datail</div> */}
   </>
  )
}

export default Doctor