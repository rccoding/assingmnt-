import React from 'react'
import * as URLS from "./../../URLS.js";
import { useNavigate } from "react-router-dom";
import classes from "./homePage.module.css"

const Home = () => {
  const navigate = useNavigate();
  const goToPage=(location,Role)=>{
    localStorage.setItem("activeRole",Role)
    navigate(location, { replace: false})
  }
  return (
    <div>Home
    <button onClick={()=>goToPage(URLS.ADMIN_PAGE,"admin")} className={classes.block}>admin</button>
    <button onClick={()=>goToPage(URLS.PATIENT_PAGE,"patient")} className={classes.block}>patient</button>
    <button onClick={()=>goToPage(URLS.DOCTOR_PAGE,"dr")} className={classes.block}>doctor</button>
    </div>
  )
}

export default Home