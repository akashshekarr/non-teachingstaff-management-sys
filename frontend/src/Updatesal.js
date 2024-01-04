import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function Updatesal() {

    const {NTS_ID} = useParams();
    console.log(NTS_ID)
    useEffect(()=>{
        axios.get(`http://localhost:8081/salary/${NTS_ID}`)
        .then(res=>{
            console.log(res.data)
            setValues({
                ...values,
                NTS_ID: res.data[0].NTS_ID,
                NTSSal_ID: res.data[0].NTSSal_ID,
                Sal_ID: res.data[0].Sal_ID,
                Sal_Amnt: res.data[0].Sal_Amnt,
                Sal_CreditDate: res.data[0].Sal_CreditDate,
                
            });
        })
        .catch(err=> console.log("There is error:"+err))
    },[NTS_ID])

    const [values, setValues] = useState({
        NTS_ID:'',
        NTSSal_ID: '',
        Sal_ID: '',
        Sal_Amnt: '',
        Sal_CreditDate: '',
        
    });

    const navigate= useNavigate();

    

    const handleUpdate = (event)=>{
        event.preventDefault();
        axios.put(`http://localhost:8081/Updatesal/${NTS_ID}`,values)
        .then(res=>{
            console.log(res)
            navigate('/salary')
        }).catch(err=>console.log("Error  found",err))

    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleUpdate}>
                <h2 style={{textAlign:'center'}}>Update Staff Salary Details</h2>
                <div className='mb-2'>
                    <label htmlFor=''>NTS_ID</label>
                    <input type='number' placeholder='Enter NTS_ID' className='form-control'  onChange={e => setValues({...values,NTS_ID: e.target.value})} value={values.NTS_ID}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>NTSSal_ID</label>
                    <input type='text' placeholder='Enter NTSSal_ID' className='form-control' onChange={e => setValues({...values,NTSSal_ID: e.target.value})} value={values.NTSSal_ID}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Sal_ID</label>
                    <input type='text' placeholder='Enter Sal_ID' className='form-control' onChange={e => setValues({...values,Sal_ID: e.target.value})} value={values.Sal_ID}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Sal_Amnt</label>
                    <input type='text' placeholder='Enter Sal_Amnt' className='form-control' onChange={e => setValues({...values,Sal_Amnt: e.target.value})} value={values.Sal_Amnt}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Sal_CreditDate</label>
                    <input type='text' placeholder='Enter Sal_CreditDate' className='form-control' onChange={e => setValues({...values,Sal_CreditDate: e.target.value})} value={values.Sal_CreditDate}/>
                </div>
               
                <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Updatesal;