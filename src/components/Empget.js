
import './Empget.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './Navbar';
import Navbar from './Navbar';
 
function Empget() {
 
    const [emps, setEmp] = useState([]);
 
    useEffect(() => {
        axios.get('http://localhost:8080/get')
            .then(response => {
                setEmp(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
 
    return (
        <div>
            {/* <Navbar/>    */}

        <div>
            <h1>Employee Salary Details:</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Bonus</th>
                        <th>Given</th>
                    </tr>
                </thead>
                <tbody>
                    {emps.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.salary}</td>
                            <td>{emp.bonus}</td>
                            <td>{emp.isgiven}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    );
 
}
 
export default Empget;