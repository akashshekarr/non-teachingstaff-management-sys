import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



function Nts03() {
  const [Nts03, setNts03] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8081/nts03')
      .then(res => {
        
        setNts03(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleDelete = async (NTS_ID) => {
    console.log(NTS_ID)
    try
    {
        await axios.delete(`http://localhost:8081/nts03/${NTS_ID}`)
        window.location.reload()
    }catch(err){
        console.log(err);
    }
}

  return (
    <div className='d-flex vh-200  justify-content-center align-items-center'>
      <div className='w-80 bg-white rounded'>
      <div className="container bg-image1">
    <div style={{backgroundImage:'URL("clg.jpg")'}}>
      <div>
            <h1 style={{textAlign:'center', color:'purple'}}>NON-TEACHING STAFF DETAILS</h1>
        </div>
        <a href="/" className='btn btn-danger'>Back</a>
        <Link to="/create" className='btn btn-success'>Add +</Link>
        <table className='table1'>
          <thead>
            <tr>
              <th>NTS_ID</th>
              <th>FirstName</th>
              <th>SecondName</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>Ph_No</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Nts03.map((data) => (
              <tr key={data.NTS_ID}>
                <td>{data.NTS_ID}</td>
                <td>{data.FirstName}</td>
                <td>{data.SecondName}</td>
                <td>{data.Gender}</td>
                <td>{data.DOB}</td>
                <td>{data.Ph_No}</td>
                <td>{data.Email}</td>
                <td>{data.Address}</td>
                <td>
                <Link to={`/Updatents/${data.NTS_ID}`} className='btn btn-info'>Update</Link>
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

export default Nts03;
