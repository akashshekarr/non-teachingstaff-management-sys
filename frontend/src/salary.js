import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Sal03() {
  const [Sal03, setSal03] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/salary') 
      .then(res => {
        console.log(res);
        setSal03(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='d-flex vh-200 bg-info justify-content-center align-items-center'>
      <div className='w-80 bg-white rounded'>
      <div className="container bg-image4">
    <div style={{backgroundImage:'URL("sa1.jpg")'}}>
      <div>
            <h1 style={{textAlign:'center', color:'purple'}}>SALARY DETAILS</h1>
        </div>
        <a href="/" className='btn btn-danger'>Back</a>
        <Link to="/create3" className='btn btn-success'>Add +</Link>
        <table className='table4'>
          <thead>
            <tr>
              <th>NTSSal_ID</th>
              <th>Sal_ID</th>
              <th>Sal_Amnt</th>
              <th>Sal_CreditDate</th>
              <th>NTS_ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Sal03.map((data) => (
              <tr key={data.NTSSal_ID}> {/* Use the correct key */}
                <td>{data.NTSSal_ID}</td>
                <td>{data.Sal_ID}</td>
                <td>{data.Sal_Amnt}</td>
                <td>{data.Sal_CreditDate}</td>
                <td>{data.NTS_ID}</td>
                <td>
                <Link to={`/Updatesal/${data.NTS_ID}`} className='btn btn-info'>Update</Link>
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

export default Sal03;
