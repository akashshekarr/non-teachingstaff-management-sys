import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function Updatents() {

    const {NTS_ID} = useParams();
    console.log(NTS_ID)
    useEffect(()=>{
        axios.get(`http://localhost:8081/nts03/${NTS_ID}`)
        .then(res=>{
            console.log(res.data)
            setValues({
                ...values,
                NTS_ID: res.data[0].NTS_ID,
                FirstName: res.data[0].FirstName,
                SecondName: res.data[0].SecondName,
                Gender: res.data[0].Gender,
                DOB: res.data[0].DOB,
                Ph_No: res.data[0].Ph_No,
                Email: res.data[0].Email,
                Address: res.data[0].Address,
            });
        })
        .catch(err=> console.log("There is error:"+err))
    },[NTS_ID])

    const [values, setValues] = useState({
        NTS_ID: '',
        FirstName: '',
        SecondName: '',
        Gender: '',
        DOB: '',
        Ph_No: '',
        Email: '',
        Address: '',
    });

    const navigate= useNavigate();

    

    const handleUpadate = (event)=>{
        event.preventDefault();
        axios.put(`http://localhost:8081/Updatents/${NTS_ID}`,values)
        .then(res=>{
            console.log(res)
            navigate('/nts03')
        }).catch(err=>console.log("Error  found",err))

    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleUpadate}>
                <h2 style={{textAlign:'center'}}>Update Non-Teaching Staff Details</h2>
                <div className='mb-2'>
                    <label htmlFor=''>NTS_ID</label>
                    <input type='number' placeholder='Enter NTS_ID' className='form-control' onChange={e => setValues({...values,NTS_ID: e.target.value})} value={values.NTS_ID}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>FirstName</label>
                    <input type='text' placeholder='Enter FirstName' className='form-control' onChange={e => setValues({...values,FirstName: e.target.value})} value={values.FirstName}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>SecondName</label>
                    <input type='text' placeholder='Enter SecondName' className='form-control' onChange={e => setValues({...values,SecondName: e.target.value})} value={values.SecondName}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Gender</label>
                    <input type='text' placeholder='Enter Gender' className='form-control' onChange={e => setValues({...values,Gender: e.target.value})} value={values.Gender}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>DOB</label>
                    <input type='date' placeholder='Enter DOB' className='form-control' onChange={e => setValues({...values,DOB: e.target.value})} value={values.DOB}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Ph_No</label>
                    <input type='number' placeholder='Enter Ph_No' className='form-control'  onChange={e => setValues({...values,Ph_No: e.target.value})} value={values.Ph_No}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Email</label>
                    <input type='email' placeholder='Enter Email' className='form-control'  onChange={e => setValues({...values,Email: e.target.value})} value={values.Email}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Address</label>
                    <input type='text' placeholder='Enter Address' className='form-control'  onChange={e => setValues({...values,Address: e.target.value})} value={values.Address}/>
                </div>
               
                <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Updatents;