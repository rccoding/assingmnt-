import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { HOME } from '../../URLS';
const AddPatient = () => {
    const navigate = useNavigate();
    const [Patient, setPatient] = useState({
          id: Date.now(),
          name: "",
          age:"",
          illness: "",  
    })
    const HandleInputChange = (e) => {
        const name = e.target.id;
        const value = e.target.value;
        setPatient({...Patient,[name]:value})
      };
  
    function handleSubmit(e) {
      e.preventDefault();
      sendFormData()
    }
  
 function sendFormData(e) {
    var formData = {
        Name: Patient.name,
        age: Patient.age,
        illness: Patient.illness};
    setTimeout(() => { 
      console.log(formData);
      alert("sent successfully")
      navigate(HOME, { replace: false})
    }, 1000);
  }
  return (
    <div>
    <form onSubmit={handleSubmit}>
        <p> <label for="title">Name</label><input  onChange={HandleInputChange} id="name" type="text" value={Patient.name} /></p>
        <p><label for="author">Age</label><input onChange={HandleInputChange}  id="age" type="text" value={Patient.age} /></p>
        <p><label for="genre">Illness</label><input  onChange={HandleInputChange} id="illness" type="text" value={Patient.illness} /></p>
        <p><input type="submit" /></p>
    </form>
  </div>
  )
}

export default AddPatient