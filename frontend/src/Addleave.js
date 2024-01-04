import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateLeave03() {
  const [Leave_ID, setLeave_ID] = useState('');
  const [Leave_Reason, setLeave_Reason] = useState('');
  const [Leave_Start_Date, setLeave_Start_Date] = useState('');
  const [Leave_End_Date, setLeave_End_Date] = useState('');
  const [NTS_ID, setNTS_ID] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event){
    event.preventDefault();
    console.log(Leave_Start_Date);
    axios.post('http://localhost:8081/create4', {Leave_ID, Leave_Reason, Leave_Start_Date, Leave_End_Date, NTS_ID})
    .then(res => {
        console.log(res);
        navigate('/ntsleave');
    })
    .catch(err => console.log(err));
  }

  const handleLeave_IDChange = (e) => {
    setLeave_ID(e.target.value);
  };
  const handleLeave_ReasonChange = (e) => {
    setLeave_Reason(e.target.value);
  };
  const handleLeave_Start_DateChange = (e) => {
    setLeave_Start_Date(e.target.value);
  };
  const handleLeave_End_DateChange = (e) => {
    setLeave_End_Date(e.target.value);
  };
  const handleNTS_IDChange = (e) => {
    setNTS_ID(e.target.value);
  };

  return (
    <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>
      <div className='w-120 bg-white rounded'>
        <form onSubmit={handleSubmit}>
          <h2 style={{textAlign:'center', color:'purple'}}>ADD LEAVE</h2>
          <div className='mb-2'>
            <label htmlFor=''>Leave_ID:</label>
            <input
              type='text'
              placeholder='Enter Leave_ID'
              className='form-control'
              value={Leave_ID}
              onChange={handleLeave_IDChange}
            />
          </div>

          <div className='mb-2'>
            <label htmlFor=''>Leave_Reason:</label>
            <input type='text' placeholder='Enter leave Reason' className='form-control' onChange={handleLeave_ReasonChange}/>
          </div>

          <div className='mb-2'>
            <label htmlFor=''>Leave_Start_Date:</label>
            <input type='date' placeholder='Enter Leave Start Date' className='form-control' onChange={handleLeave_Start_DateChange}/>
          </div>

          <div className='mb-2'>
            <label htmlFor=''>Leave_End_Date:</label>
            <input type='date' placeholder='Enter Leave End Date' className='form-control' onChange={handleLeave_End_DateChange}/>
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

export default CreateLeave03;
