
import React from "react";
import { useEffect,useState } from "react";
import { RESTRICTED_URLS } from "./URLS";
import {Outlet} from "react-router-dom";
import { HOME } from "./URLS";
const PrivateRoute = ({ component: Component, ...rest }) => {

    const [allow, setAllow] = useState(null);

useEffect(() => {
    let checkURL = window.location.pathname;
    if(!RESTRICTED_URLS.includes(checkURL)){
        setAllow(true);
    }
    else{
        setAllow(false);
    }
}, [window.location.pathname])


    const callURL = () => {
        window.location.href = HOME;
    }

    return (
        <>
        {allow !== null ?
            allow ? <Outlet /> : callURL()
        : null }
        </>
    );
};

export default PrivateRoute;