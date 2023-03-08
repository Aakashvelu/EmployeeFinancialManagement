import React from 'react';
// import { Link } from 'react-router-dom';
// import NavBar from './Navbar';

function Home() {
  return (
    <div className="welcome-page">
      {/* <NavBar/> */}

    <button className="btn">GET</button>
      <button className="btn">POST</button>
      <button className="btn">UPDATE</button>
      <button className="btn">DELETE</button>
      
      <h1>Welcome to Employee Finance Management</h1>
      
      {/* <Link to="/Empget" className="btn btn-primary">Employee Details</Link> */}
    </div>
  );
};

export default Home;