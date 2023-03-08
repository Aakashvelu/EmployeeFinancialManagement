import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./Navbar";
import './EmpUpdate.css';
import Navbar from "./Navbar";

function EmpUpdate() {
  const [emp, setEmp] = useState({
    id: "",
    name: "",
    salary: "",
    bonus: "",
    isgiven: "",
  });   

  const handleChange = (event) => {
    setEmp({ ...emp, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8080/put`, emp).then((res) => {
      console.log(res.data);
      setEmp({ id: "", name: "", salary: "",bonus: "",isgiven: "" });
    });
  };
  
  return (
    <div>
      {/* <Navbar/> */}
      <h1>Update Employee Details:</h1>
      <div className="box">

      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" name="id" value={emp.id} onChange={handleChange} />
        </label>
        <label>
          Name:
          <input type="text" name="name" value={emp.name} onChange={handleChange} />
        </label>
        <label>
          Salary:
          <input type="text" name="salary" value={emp.salary} onChange={handleChange} />
        </label>
        <label>
          Bonus:
          <input type="text" name="bonus" value={emp.bonus} onChange={handleChange} />
        </label>
        <label>
          Given:
          <input type="text" name="isgiven" value={emp.isgiven} onChange={handleChange} />
        </label>
        <button type="submit">Update</button>
      </form>
      </div>
    </div>
  );
}

export default EmpUpdate;