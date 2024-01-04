import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Leave03() {
  const [Leave03, setLeave03] = useState([]);
  console.log("hiii")
  useEffect(() => {
    axios.get('http://localhost:8081/ntsleave') 
      .then(res => {
        console.log(res);
        setLeave03(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='d-flex vh-200 bg-info justify-content-center align-items-center'>
      <div className='w-80 bg-white rounded'>
      <div className="container bg-image5">
    <div style={{backgroundImage:'URL("lea1.jpg")'}}>
      <div>
            <h1 style={{textAlign:'center', color:'purple'}} >STAFF LEAVE DETAILS</h1>
        </div>
        <a href="/" className='btn btn-danger'>Back</a>
        <Link to="/create4" className='btn btn-success'>Add +</Link>
        <table className='table5'>
          <thead>
            <tr>
              <th>Leave_ID</th>
              <th>Leave_Reason</th>
              <th>Leave_Start_Date</th>
              <th>Leave_End_Date</th>
              <th>NTS_ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Leave03.map((data) => (
              <tr key={data.Leave_ID}> {/* Use the correct key */}
                <td>{data.Leave_ID}</td>
                <td>{data.Leave_Reason}</td>
                <td>{data.Leave_Start_Date}</td>
                <td>{data.Leave_End_Date}</td>
                <td>{data.NTS_ID}</td>
                <td>
                <Link to={`/Updatelev/${data.NTS_ID}`} className='btn btn-info'>Update</Link>
                <button className='btn btn-danger'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Leave03;
