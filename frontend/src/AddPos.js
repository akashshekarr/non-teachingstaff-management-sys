import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreatePos03() {
  const [NTSPos_ID, setNTSPos_ID] = useState('');
  const [Pos_ID, setPos_ID] = useState('');
  const [Pos_Name, setPos_Name] = useState('');
  const [NTS_ID, setNTS_ID] = useState('');
  const navigate = useNavigate();

  const val = {
    NTSPos_ID:NTSPos_ID,
    Pos_ID:Pos_ID,
    Pos_Name:Pos_Name,
    NTS_ID:NTS_ID,
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8081/createpos', val)
    .then(res => {
        console.log("hello world");
        console.log(res);
        navigate('/position');
    })
    .catch(err => console.log(err));
    // axios
    //   .post('http://localhost:8081/create2', {
    //     NTSPos_ID,
    //     Pos_ID,
    //     Pos_Name,
    //     NTS_ID
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     //navigate('/position');
    //   })
    //   .catch((err) => console.log(err));
  }

  const handleNTSPos_IDChange = (e) => {
    setNTSPos_ID(e.target.value);
  };
  const handlePos_IDChange = (e) => {
    setPos_ID(e.target.value);
  };
  const handlePos_NameChange = (e) => {
    setPos_Name(e.target.value);
  };
  const handleNTS_IDChange = (e) => {
    setNTS_ID(e.target.value);
  };

  return (
    <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>
      <div className='w-120 bg-white rounded'>
        <form onSubmit={handleSubmit}>
          <h2 style={{ textAlign: 'center', color: 'purple' }}>ADD POSITION</h2>
          <div className='mb-2'>
            <label htmlFor='NTSPos_ID'>NTSPos_ID:</label>
            <input
              type='text'
              id='NTSPos_ID'
              placeholder='Enter NTSPos_ID'
              className='form-control'
              value={NTSPos_ID}
              onChange={handleNTSPos_IDChange}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='Pos_ID'>Pos_ID:</label>
            <input
              type='text'
              id='Pos_ID'
              placeholder='Enter Pos_ID'
              className='form-control'
              value={Pos_ID}
              onChange={handlePos_IDChange}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='Pos_Name'>Pos_Name:</label>
            <input
              type='text'
              id='Pos_Name'
              placeholder='Enter Position Name'
              className='form-control'
              value={Pos_Name}
              onChange={handlePos_NameChange}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='NTS_ID'>NTS_ID:</label>
            <input
              type='text'
              id='NTS_ID'
              placeholder='Enter NTS_ID'
              className='form-control'
              value={NTS_ID}
              onChange={handleNTS_IDChange}
            />
          </div>
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreatePos03;
