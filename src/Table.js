import React, { useState } from "react";
import "./App.css";

const TableData = ({userData, setUserData,props}) => {
  
  const [data, setData] = useState({
    id: "",
    username: "",
    phoneno: "",
    email: "",
    city: "",
  });
  const [update, setUpdate] = useState(false);
  const {setToken} = props;

  const deleteUser = (id) => {
    if (userData.length) {
      setUpdate(false);
    }
    setData({
      id: "",
      username: "",
      phoneno: "",
      email: "",
      city: "",
    });
    const filteredData = userData.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    setUserData(filteredData);
    localStorage.setItem("token", "this");
    setToken();
  };

  const userDataToUpdate = (info) => {
    setData(info);
    setUpdate(true);
  };

  return (
    <>
      <table>
        <tr>
          <th>Id</th>
          <th>Username</th>
          <th>Phone no.</th>
          <th>Email</th>
          <th>City</th>
          <th>Operation</th>
        </tr>
        {userData?.map((user, index) => (
          <tr key={index}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.city}</td>
            <td>{user.phoneno}</td>
            <td>
              <button onClick={() => deleteUser(user.id)}>Delete</button>
              <button onClick={() => userDataToUpdate(user)}>Update</button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default TableData;

