import React, { useState} from 'react';
import axios from 'axios';

function InputForm() {
  const [NTS_ID, setNTS_ID] = useState('');
  const [responseData, setResponseData] = useState([]);

  const handleChange = (e) => {
    setNTS_ID(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8081/getreport1/${NTS_ID}`);
      setResponseData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>
      <div className='w-80 bg-white rounded'>
        <div>
          <h1 style={{ textAlign:'center', color: 'purple' }}>NON-TEACHING STAFF WITH LEAVE DETAILS</h1>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
          <a href="/" className='btn btn-danger'>Back</a>
            <div className='mb-2'>
              <label htmlFor=''><strong>NTS_ID:</strong></label>
              <input type='number' placeholder='Enter NTS_ID' className='form-control' onChange={handleChange} />
            </div>
            <button className='btn btn-success'>Submit</button>
          </form>
          <div>
            <h1>FirstName :{responseData[0]?.FirstName || 'No data available'}</h1>
            <h1>SecondName:{responseData[0]?.SecondName || 'No data available'}</h1>
            <h1>Gender:{responseData[0]?.Gender|| 'No data available'}</h1>
            <h1>DOB:{responseData[0]?.DOB || 'No data available'}</h1>
            <h1>DeptName:{responseData[0]?.DeptName || 'No data available'}</h1>
            <h1>Pos_Name:{responseData[0]?.Pos_Name || 'No data available'}</h1>
            <h1>Leave_Reason:{responseData[0]?.Leave_Reason|| 'No data available'}</h1>
            <h1>Leave_Start_Date:{responseData[0]?.Leave_Start_Date|| 'No data available'}</h1>
            <h1>Leave_End_Date:{responseData[0]?.Leave_End_Date|| 'No data available'}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputForm;
