import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateNts03() {
  const [NTS_ID, setNTS_ID] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [SecondName, setSecondName] = useState('');
  const [Gender, setGender] = useState('');
  const [Ph_No, setPh_No] = useState('');
  const [DOB, setDOB] = useState('');
  const [Email, setEmail] = useState('');
  const [Address, setAddress] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event){
    event.preventDefault();
    console.log('HEllo');
    axios.post('http://localhost:8081/create', {NTS_ID, FirstName, SecondName, Gender, Ph_No, DOB, Email, Address})
    .then(res => {
        console.log(res);
        navigate('/nts03');
    })
    .catch(err => console.log(err));
  }

  const handleNTSIDChange = (e) => {
    setNTS_ID(e.target.value);
  };
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleSecondNameChange = (e) => {
    setSecondName(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handleDOBChange = (e) => {
    setDOB(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePh_NoChange = (e) => {
    setPh_No(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>
      <div className='w-120 bg-white rounded'>
        <form onSubmit={handleSubmit}>
          <h2 style={{alignItems:'center'}}>ADD NON-TEACHING STAFF</h2>
          <div className='mb-2'>
            <label htmlFor=''>NTS_ID:</label>
            <input
              type='text'
              placeholder='Enter NTS_ID'
              className='form-control'
              value={NTS_ID}
              onChange={handleNTSIDChange}
            />
          </div>

          <div className='mb-2'>
            <label htmlFor=''>FirstName:</label>
            <input type='text' placeholder='Enter First Name' className='form-control' onChange={handleFirstNameChange}/>
          </div>

          <div className='mb-2'>
            <label htmlFor=''>SecondName:</label>
            <input type='text' placeholder='Enter Second Name' className='form-control' onChange={handleSecondNameChange}/>
          </div>

          <div className='mb-2'>
            <label htmlFor='gender'>Gender:</label>
            <input type='radio' id='male'  name='gender' value='male' onChange={handleGenderChange}/>Male
            <input type='radio' id='female'  name='gender' value='female' onChange={handleGenderChange}/>Female
          </div>

          <div className='mb-2'>
            <label htmlFor=''>DOB:</label>
            <input type='date' placeholder='Enter Date Of Birth' className='form-control' onChange={handleDOBChange}/>
          </div>

          <div className='mb-2'>
            <label htmlFor=''>Ph_No:</label>
            <input type='tel' placeholder='Enter Phone No' className='form-control' onChange={handlePh_NoChange}/>
          </div>

          <div className='mb-2'>
            <label htmlFor=''>Email:</label>
            <input type='email' placeholder='Enter Email' className='form-control' onChange={handleEmailChange}/>
          </div>

          <div className='mb-2'>
            <label htmlFor='address'>Address:</label>
            <textarea id='address' placeholder='Enter Your Address' className='form-control' onChange={handleAddressChange} cols='20' />
          </div>

          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateNts03;
