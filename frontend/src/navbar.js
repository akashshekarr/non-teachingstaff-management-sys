import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-bs-teal">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/"><strong>Home</strong></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/nts03" ><strong>Non-TeachingStaff</strong></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/dept" ><strong>Department</strong></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/position" ><strong>Position</strong></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/salary" ><strong>Salary</strong></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ntsleave" ><strong>Leaves</strong></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/report"><strong>SalaryReport</strong></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/levreport"><strong>LeaveReport</strong></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;