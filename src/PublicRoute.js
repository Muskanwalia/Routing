import React from "react";
import "./App.css";
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom';
import Signup from "./Signup";

const PublicRoute = ({component: Component, restricted, ...rest},{token}) => {
    console.log(token , "token");

    return(
       <>
            <Routes>
                <Route {...rest} element={setToken => (
                token && restricted ?
                    <Navigate replace to="/table" />
                : <Signup setToken={setToken} />
                )} />
            </Routes>
       </>
    );
};

export default PublicRoute;
