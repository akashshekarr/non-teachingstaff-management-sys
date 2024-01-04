import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateSal03() {
  const [NTSSal_ID, setNTSSal_ID] = useState('');
  const [Sal_ID, setSal_ID] = useState('');
  const [Sal_Amnt, setSal_Amnt] = useState('');
  const [Sal_CreditDate, setSal_CreditDate] = useState('');
  const [NTS_ID, setNTS_ID] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event){
    event.preventDefault();
    console.log('HEllo');
    axios.post('http://localhost:8081/create3', {NTSSal_ID, Sal_ID, Sal_Amnt, Sal_CreditDate, NTS_ID})
    .then(res => {
        console.log(res);
        navigate('/salary');
    })
    .catch(err => console.log(err));
  }

  const handleNTSSal_IDChange = (e) => {
    setNTSSal_ID(e.target.value);
  };
  const handleSal_IDChange = (e) => {
    setSal_ID(e.target.value);
  };
  const handleSal_AmntChange = (e) => {
    setSal_Amnt(e.target.value);
  };
  const handleSal_CreditDate = (e) => {
    setSal_CreditDate(e.target.value);
  };
  const handleNTS_IDChange = (e) => {
    setNTS_ID(e.target.value);
  };

  return (
    <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>
      <div className='w-120 bg-white rounded'>
        <form onSubmit={handleSubmit}>
          <h2 style={{textAlign:'center', color:'purple'}}>ADD SALARY</h2>
          <div className='mb-2'>
            <label htmlFor=''>NTSSal_ID:</label>
            <input
              type='text'
              placeholder='Enter NTSSal_ID'
              className='form-control'
              value={NTSSal_ID}
              onChange={handleNTSSal_IDChange}
            />
          </div>

          <div className='mb-2'>
            <label htmlFor=''>Sal_ID:</label>
            <input type='text' placeholder='Enter Salary ID' className='form-control' onChange={handleSal_IDChange}/>
          </div>

          <div className='mb-2'>
            <label htmlFor=''>Sal_Amnt:</label>
            <input type='text' placeholder='Enter Salary Amount' className='form-control' onChange={handleSal_AmntChange}/>
          </div>

          <div className='mb-2'>
            <label htmlFor=''>Sal_CreditDate:</label>
            <input type='date' placeholder='Enter Salary CreditDate' className='form-control' onChange={handleSal_CreditDate}/>
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

export default CreateSal03;
