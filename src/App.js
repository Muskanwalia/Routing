import React, { useState, useEffect } from "react";
import "./App.css";
import Signup from "./Signup.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import TableData from "./Table.js";

const App = () => {
  const [userData, setUserData] = useState([]);

  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  });

  return (
    <>
      <Router>
        <div>
          <Signup />

          {/* <Routes>
                <Route path="/table" element={<TableData userData={userData} setUserData={setUserData}></TableData>}></Route>
                <Route path="/signup" element={<Signup userData={userData} setUserData={setUserData}></Signup>}></Route>
             </Routes> */}

          <PublicRoute
            restricted={true}
            element={
              <Signup
                userData={userData}
                setUserData={setUserData}
                setToken={setToken}
              />
            }
            path="/signup"
            exact
          ></PublicRoute>
          <PrivateRoute
            element={
              <TableData
                userData={userData}
                setUserData={setUserData}
                setToken={setToken}
              />
            }
            path="/table"
            exact
          ></PrivateRoute>
        </div>
      </Router>
    </>
  );
};

export default App;
