import React, { useState } from 'react';
import axios from 'axios';
import NavBar from './Navbar';
import './EmpDelete.css';
import Navbar from './Navbar';
// import './EmpDelete.css';

const EmpDelete = () => {
  const [id, setId] = useState('');
   

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/delete?id=${id}`)
      .then(response => {
        alert('Employee Details deleted successfully!');
        setId('');
         
      })
      .catch(error => {
        alert('Failed to delete Employee Details.');
        console.error(error);
      });
  };

  return (
    <div>
      {/* <Navbar/> */}
    <div>
      <h1>Delete a Response:</h1>
      <form>
        <div>
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={event => setId(event.target.value)}
            />
        </div>
         
        <button type="but" className='but' onClick={handleDelete}>Delete</button>
      </form>
    </div>
            </div>
  );
};

export default EmpDelete;