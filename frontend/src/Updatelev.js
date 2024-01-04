import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function Updateleave() {

    const {NTS_ID} = useParams();
    console.log(NTS_ID)
    useEffect(()=>{
        axios.get(`http://localhost:8081/ntsleave/${NTS_ID}`)
        .then(res=>{
            console.log(res.data)
            setValues({
                ...values,
                NTS_ID: res.data[0].NTS_ID,
                Leave_ID: res.data[0].Leave_ID,
                Leave_Reason: res.data[0].Leave_Reason,
                Leave_Start_Date: res.data[0].Leave_Start_Date,
                Leave_End_Date: res.data[0].Leave_End_Date,
                
            });
        })
        .catch(err=> console.log("There is error:"+err))
    },[NTS_ID])

    const [values, setValues] = useState({
        NTS_ID:'',
        NTSLeave_ID: '',
        Leave_ID: '',
        Leave_Reason: '',
        Leave_Start_Date: '',
        Leave_End_Date: '',
        
    });

    const navigate= useNavigate();

    

    const handleUpdate = (event)=>{
        event.preventDefault();
        axios.put(`http://localhost:8081/Updatelev/${NTS_ID}`,values)
        .then(res=>{
            console.log(res)
            navigate('/ntsleave')
        }).catch(err=>console.log("Error  found",err))

    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleUpdate}>
                <h2 style={{textAlign:'center'}}>Update Staff Leaveary Details</h2>
                <div className='mb-2'>
                    <label htmlFor=''>NTS_ID</label>
                    <input type='number' placeholder='Enter NTS_ID' className='form-control'  onChange={e => setValues({...values,NTS_ID: e.target.value})} value={values.NTS_ID}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Leave_ID</label>
                    <input type='text' placeholder='Enter Leave_ID' className='form-control' onChange={e => setValues({...values,Leave_ID: e.target.value})} value={values.Leave_ID}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Leave_Reason</label>
                    <input type='text' placeholder='Enter Leave_Reason' className='form-control' onChange={e => setValues({...values,Leave_Reason: e.target.value})} value={values.Leave_Reason}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Leave_Start_Date</label>
                    <input type='date' placeholder='Enter Leave_Start_Date' className='form-control' onChange={e => setValues({...values,Leave_Start_Date: e.target.value})} value={values.Leave_Start_Date}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Leave_End_Date</label>
                    <input type='date' placeholder='Enter Leave_End_Date' className='form-control' onChange={e => setValues({...values,Leave_End_Date: e.target.value})} value={values.Leave_End_Date}/>
                </div>
               
                <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Updateleave;