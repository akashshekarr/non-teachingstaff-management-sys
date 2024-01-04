import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Dept03() {
  const [Dept03, setDept03] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/dept') 
      .then(res => {
        console.log(res);
        setDept03(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleDelete = async (NTS_ID) => {
    console.log(NTS_ID)
    try
    {
        await axios.delete(`http://localhost:8081/dept/${NTS_ID}`)
        window.location.reload()
    }catch(err){
        console.log(err);
    }
}

  return (
    <div className='d-flex vh-200 bg-info justify-content-center align-items-center'>
      <div className='w-80 bg-white rounded'>
      <div className="container bg-image2">
    <div style={{backgroundImage:'URL("images(10).jpeg.jpg")'}}>
        <div>
            <h1 style={{textAlign:'center', color:'purple'}}>DEPARTMENT DETAILS</h1>
        </div>
        <a href="/" className='btn btn-danger'>Back</a>
        <Link to="/create1" className='btn btn-success'>Add +</Link>
        <table className='table2'>
          <thead>
            <tr>
              <th>NTSDept_ID</th>
              <th>DeptID</th>
              <th>DeptName</th>
              <th>NTS_ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Dept03.map((data) => (
              <tr key={data.NTSDept_ID}> {/* Use the correct key */}
                <td>{data.NTSDept_ID}</td>
                <td>{data.DeptID}</td>
                <td>{data.DeptName}</td>
                <td>{data.NTS_ID}</td>
                <td>
                <Link to={`/Updatedept/${data.NTS_ID}`} className='btn btn-info'>Update</Link>
                <button onClick={()=>handleDelete(data.NTS_ID)}  className='btn btn-sm  btn-danger'>Delete</button>
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

export default Dept03;
