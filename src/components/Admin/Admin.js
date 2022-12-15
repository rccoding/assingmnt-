import React from 'react'
import classes from "./admin.module.css"
import { useNavigate } from "react-router-dom";
import { CREATE_APPOITMENT,CREATE_PATIENT } from '../../URLS';
const Admin = () => {
    const navigate = useNavigate();
  return (

   <>
    <div><h1 className={classes.title}>WELCOME ADMIN</h1></div>
    <div className={classes.centre}>
    <div id="pickup"  onClick={()=> navigate(CREATE_APPOITMENT, { replace: false})} className={classes.take_meals_opt}>All appoitments</div>
    <div id="delivery" onClick={()=> navigate(CREATE_PATIENT, { replace: false})} className={classes.take_meals_opt}>add patient</div>
    </div>
    
    
    
    <div className={classes.clear}></div>
    {/* <div className={classes.title} style={{"display":"none"}}>Pick up datail</div> */}
   </>
  )
}

export default Admin