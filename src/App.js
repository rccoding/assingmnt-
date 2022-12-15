import './App.css';
import * as URLS from "./URLS";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import IsRestricted from './isRestricted';
import Doctor from './components/Doctor/Doctor';
import Admin from './components/Admin/Admin';
import Patient from './components/Patient/Patient';
import Home from './components/homePage/homePage';
import Appoitment from './components/Appoitments/Appoitment';
import AddPatient from './components/AddPatient/AddPatient';
function App() {
  let Role = localStorage.getItem("activeRole");
  return (
    <div className="App">
      
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route exact path={URLS.HOME} element={<IsRestricted Role={Role}   URL={URLS.HOME} Component={<Home />} />} />
            <Route exact path={URLS.ADMIN_PAGE}  element={<IsRestricted Role={Role}   URL={URLS.ADMIN_PAGE} Component={<Admin />}/>} />
            <Route exact path={URLS.DOCTOR_PAGE}  element={<IsRestricted Role={Role}   URL={URLS.DOCTOR_PAGE} Component={<Doctor  />}/>} />
            <Route exact path={URLS.CREATE_APPOITMENT}  element={<IsRestricted Role={Role}   URL={URLS.CREATE_APPOITMENT} Component={<Appoitment />}/>} />
            <Route exact path={URLS.CREATE_PATIENT}  element={<IsRestricted Role={Role}   URL={URLS.CREATE_PATIENT} Component={<AddPatient />}/>} />
            <Route exact path={URLS.PATIENT_PAGE}  element={<IsRestricted Role={Role}   URL={URLS.PATIENT_PAGE} Component={<Patient />}/>} />
           </Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
