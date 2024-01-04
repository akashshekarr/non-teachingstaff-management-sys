import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateDept03() {
  const [NTSDept_ID, setNTSDept_ID] = useState('');
  const [DeptID, setDeptID] = useState('');
  const [DeptName, setDeptName] = useState('');
  const [NTS_ID, setNTS_ID] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event){
    event.preventDefault();
    console.log('HEllo');
    axios.post('http://localhost:8081/create1', {NTSDept_ID, DeptID, DeptName, NTS_ID})
    .then(res => {
        console.log(res);
        navigate('/dept');
    })
    .catch(err => console.log(err));
  }

  const handleNTSDept_IDChange = (e) => {
    setNTSDept_ID(e.target.value);
  };
  const handleDeptIDChange = (e) => {
    setDeptID(e.target.value);
  };
  const handleDeptNameChange = (e) => {
    setDeptName(e.target.value);
  };
  const handleNTS_IDChange = (e) => {
    setNTS_ID(e.target.value);
  };

  return (
    <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>
      <div className='w-120 bg-white rounded'>
        <form onSubmit={handleSubmit}>
          <h2 style={{textAlign:'center', color:'purple'}}>ADD DEPARTMENT</h2>
          <div className='mb-2'>
            <label htmlFor=''>NTSDept_ID:</label>
            <input
              type='text'
              placeholder='Enter NTSDept_ID'
              className='form-control'
              value={NTSDept_ID}
              onChange={handleNTSDept_IDChange}
            />
          </div>

          <div className='mb-2'>
            <label htmlFor=''>DeptID:</label>
            <input type='text' placeholder='Enter Dept ID' className='form-control' onChange={handleDeptIDChange}/>
          </div>

          <div className='mb-2'>
            <label htmlFor=''>DeptName:</label>
            <input type='text' placeholder='Enter Dept Name' className='form-control' onChange={handleDeptNameChange}/>
          </div>

          <div className='mb-2'>
            <label htmlFor=''>NTS_ID:</label>
            <input type='text' placeholder='Enter NTS_ID' className='form-control' onChange={handleNTS_IDChange}/>
          </div>

          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateDept03;
