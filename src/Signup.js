import React, {useState,useEffect} from "react";
import "./App.css";

const Signup = ({userData, setUserData, token, setToken}) => {
  
  const [data, setData] = useState({
    id: "",
    username: "",
    phoneno: "",
    email: "",
    city: "",
  });
  const [update, setUpdate] = useState(false);

  const handleChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
    console.log(data);
  };

  const addRows = () => {
    if (
      data.id !== "" &&
      data.username !== "" &&
      data.phoneno !== "" &&
      data.email !== "" &&
      data.city !== ""
    ) {
      setUserData([...userData, data]);
      setData({
        id: "",
        username: "",
        phoneno: "",
        email: "",
        city: "",
      });
      localStorage.setItem("data", JSON.stringify([data]));
      
      localStorage.setItem("token",token);
      setToken();
    } else {
      alert("Enter the required fields");
    }
  };

  const userDataToUpdate = (info) => {
    setData(info);
    setUpdate(true);
  };

  const updateUser = () => {

  
    console.log("start")
    const filteredData = userData.filter((item) => {
      if (item.id !== data.id) {
        return item;
      }
    });
    console.log("filterData",filteredData);
    console.log("data",data);
    setUserData([...filteredData, data]);
    setData({
      id: "",
      username: "",
      phoneno: "",
      email: "",
      city: "",
    });
    setUpdate(false);
    localStorage.setItem("data", JSON.stringify([data]));
  };

  const ResetForm = () => {
    setUpdate(false);
    setData({
      id: "",
      username: "",
      phoneno: "",
      email: "",
      city: "",
    });
  };

  return (
    <>
      <div className="box">
        <form>
          <input
            type="text"
            value={data.id}
            name="id"
            placeholder="Enter id"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            value={data.username}
            name="username"
            placeholder="Enter name"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            value={data.phoneno}
            name="phoneno"
            placeholder="Enter phone no."
            onChange={handleChange}
            required
          />
          <input
            type="email"
            value={data.email}
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            value={data.city}
            name="city"
            placeholder="Enter city"
            onChange={handleChange}
            required
          />
          {update ? (
            <div>
              <button type="button" onClick={updateUser}>
                update
              </button>
              <button type="submit" onClick={ResetForm}>
                Cancel
              </button>
              <div>
                <button>Login again</button>
              </div>
              <div>
              <button></button>
              </div>
            </div>
          ) : (
            <div>
              <button type="submit" onClick={addRows}>
                Login
              </button>
              <button type="submit" onClick={ResetForm}>
                Cancel
              </button>
            </div>
          )}
        </form>
      </div>

    </>
  );
};

export default Signup;
