import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import TableData from "./Table";

const PrivateRoute = (
  { component: Component, restricted, ...rest },
  { token }
) => {
  return (
      <>
        <Routes>
            <Route
            {...rest}
            render={(setToken) =>
                token ? (
                <TableData setToken={setToken} />
                ) : (
                <Navigate replace to="/signup" />
                )
            }
            />
        </Routes>
    </>
  );
};

export default PrivateRoute;
