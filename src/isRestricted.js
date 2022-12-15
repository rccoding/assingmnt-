import { Navigate } from "react-router-dom";
import {
  RESTRICTED_URLS_ADMIN,
  RESTRICTED_URLS_PATIENT,
  RESTRICTED_URLS_DOCTOR,HOME
} from "./URLS";
// import { createBrowserHistory } from "history";

const IsRestricted = ({ Role, URL, Component }) => {
    if (
      Role ==="patient"
    ) {
      if (RESTRICTED_URLS_PATIENT.includes(URL)) {
        return (
          <Navigate to={HOME}  />
        );
      }
    } else if (Role === "dr") {
      if (RESTRICTED_URLS_DOCTOR.includes(URL)) {
        return (
          <Navigate to={HOME}  />
        );
      }
    } else if (
      Role === "admin"
    ) {
      if (RESTRICTED_URLS_ADMIN.includes(URL)) {
        return (
          <Navigate to={HOME}  />
        );
      }
    } 
  return Component;
};
export default IsRestricted;
