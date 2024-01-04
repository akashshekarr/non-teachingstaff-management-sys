import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Pos03() {
  const [Pos03, setPos03] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/position') 
      .then(res => {
        setPos03(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleDelete = async (NTS_ID) => {
    console.log(NTS_ID)
    try
    {
        await axios.delete(`http://localhost:8081/position/${NTS_ID}`)
        window.location.reload()
    }catch(err){
        console.log(err);
    }
}

  return (
    <div className='d-flex vh-200 bg-info justify-content-center align-items-center'>
      <div className='w-80 bg-white rounded'>
      <div className="container bg-image3">
    <div style={{backgroundImage:'URL("images(11).jpeg.jpg")'}}>
      <div>
            <h1 style={{alignItems:'center', color:'purple'}}>WORKING POSITION DETAILS</h1>
        </div>
        <a href="/" className='btn btn-danger'>Back</a>
        <Link to="/create2" className='btn btn-success'>Add +</Link>
        <table className='table3'>
          <thead>
            <tr>
              <th>NTSPos_ID</th>
              <th>Pos_ID</th>
              <th>Pos_Name</th>
              <th>NTS_ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Pos03.map((data) => (
              <tr key={data.NTSPos_ID}> {/* Use the correct key */}
                <td>{data.NTSPos_ID}</td>
                <td>{data.Pos_ID}</td>
                <td>{data.Pos_Name}</td>
                <td>{data.NTS_ID}</td>
                <td>
                <Link to={`/Updatepos/${data.NTS_ID}`} className='btn btn-info'>Update</Link>
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

export default Pos03;
