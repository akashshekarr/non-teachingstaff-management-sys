import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function Updatepos() {

    const {NTS_ID} = useParams();
    console.log(NTS_ID)
    useEffect(()=>{
        axios.get(`http://localhost:8081/position/${NTS_ID}`)
        .then(res=>{
            console.log(res.data)
            setValues({
                ...values,
                NTS_ID: res.data[0].NTS_ID,
                NTSPos_ID: res.data[0].NTSPos_ID,
                Pos_ID: res.data[0].Pos_ID,
                Pos_Name: res.data[0].Pos_Name,
                
            });
        })
        .catch(err=> console.log("There is error:"+err))
    },[NTS_ID])

    const [values, setValues] = useState({
        NTS_ID:'',
        NTSPos_ID: '',
        Pos_ID: '',
        Pos_Name: '',
        
    });

    const navigate= useNavigate();

    

    const handleUpdate = (event)=>{
        event.preventDefault();
        axios.put(`http://localhost:8081/Updatepos/${NTS_ID}`,values)
        .then(res=>{
            console.log(res)
            navigate('/position')
        }).catch(err=>console.log("Error  found",err))
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleUpdate}>
                <h2 style={{textAlign:'center'}}>Update Staff Working Position Details</h2>
                <div className='mb-2'>
                    <label htmlFor=''>NTS_ID</label>
                    <input type='number' placeholder='Enter NTS_ID' className='form-control'  onChange={e => setValues({...values,NTS_ID: e.target.value})} value={values.NTS_ID}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>NTSPos_ID</label>
                    <input type='text' placeholder='Enter NTSPos_ID' className='form-control' onChange={e => setValues({...values,NTSPos_ID: e.target.value})} value={values.NTSPos_ID}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Pos_ID</label>
                    <input type='text' placeholder='Enter Pos_ID' className='form-control' onChange={e => setValues({...values,Pos_ID: e.target.value})} value={values.Pos_ID}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Pos_Name</label>
                    <input type='text' placeholder='Enter Pos_Name' className='form-control' onChange={e => setValues({...values,Pos_Name: e.target.value})} value={values.Pos_Name}/>
                </div>
                
               
                <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Updatepos;