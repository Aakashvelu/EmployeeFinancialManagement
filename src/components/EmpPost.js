import React, { useState } from 'react';
import './EmpPost.css';
import NavBar from './Navbar';
import Navbar from './Navbar';

function EmpPost() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [bonus, setBonus] = useState('');
  const [isgiven, setGiven] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      id: id,
      name: name,
      salary: salary,
      bonus : bonus,
      isgiven : isgiven
    };

    fetch('http://localhost:8080/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div className='box'>
      {/* <Navbar/> */}
    <div>
      <h1>Create Employee Details:</h1>

    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" name="id" value={id} onChange={event => setId(event.target.value)} />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={event => setName(event.target.value)} />
      </div>
      <div>
        <label htmlFor="stars">Salary:</label>
        <input type="text" id="salary" name="salary" value={salary} onChange={event => setSalary(event.target.value)} />
      </div>
      <div>
        <label htmlFor="stars">Bonus:</label>
        <input type="text" id="salary" name="salary" value={bonus} onChange={event => setBonus(event.target.value)} />
      </div>
      <div>
        <label htmlFor="stars">Given:</label>
        <input type="text" id="isgiven" name="given" value={isgiven} onChange={event => setGiven(event.target.value)} />
      </div>
      <button className='postbut' type="submit">Submit</button>
    </form>
    </div>
    </div>
  );
}

export default EmpPost;