import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function Updatedept() {

    const {NTS_ID} = useParams();
    console.log(NTS_ID)
    useEffect(()=>{
        axios.get(`http://localhost:8081/dept/${NTS_ID}`)
        .then(res=>{
            console.log(res.data)
            setValues({
                ...values,
                NTS_ID: res.data[0].NTS_ID,
                NTSDept_ID: res.data[0].NTSDept_ID,
                DeptID: res.data[0].DeptID,
                DeptName: res.data[0].DeptName,
                
            });
        })
        .catch(err=> console.log("There is error:"+err))
    },[NTS_ID])

    const [values, setValues] = useState({
        NTS_ID:'',
        NTSDept_ID: '',
        DeptID: '',
        DeptName: '',
        
    });

    const navigate= useNavigate();

    

    const handleUpdate = (event)=>{
        event.preventDefault();
        axios.put(`http://localhost:8081/Updatedept/${NTS_ID}`,values)
        .then(res=>{
            console.log(res)
            navigate('/dept')
        }).catch(err=>console.log("Error  found",err))

    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleUpdate}>
                <h2 style={{textAlign:'center'}}>Update Staff Department Details</h2>
                <div className='mb-2'>
                    <label htmlFor=''>NTS_ID</label>
                    <input type='number' placeholder='Enter NTS_ID' className='form-control'  onChange={e => setValues({...values,NTS_ID: e.target.value})} value={values.NTS_ID}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>NTSDept_ID</label>
                    <input type='text' placeholder='Enter NTSDept_ID' className='form-control' onChange={e => setValues({...values,NTSDept_ID: e.target.value})} value={values.NTSDept_ID}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>DeptID</label>
                    <input type='text' placeholder='Enter DeptID' className='form-control' onChange={e => setValues({...values,DeptID: e.target.value})} value={values.DeptID}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>DeptName</label>
                    <input type='text' placeholder='Enter DeptName' className='form-control' onChange={e => setValues({...values,DeptName: e.target.value})} value={values.DeptName}/>
                </div>
                
               
                <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Updatedept;