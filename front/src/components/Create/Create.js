import React, {useState} from 'react';
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api/restaurant/';
const Create = () => {

    const [name, setName] = useState('')
    const [code, setCode] = useState('')
    const [address, setAddress] = useState('')
    const [image, setImage] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
      e.preventDefault()
    await  axios.post(endpoint, {rest_name: name, rest_code: code, rest_address: address, image:image})
    navigate('/')
  }
  return (
    <div>
        <h3>Add new Restaurant</h3>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Restaurant Name</label>
                <input value={name} onChange={ (e)=>setName(e.target.value)}type='text' className='form-control'>
                </input>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Restaurant Code</label>
                <input value={code} onChange={ (e)=>setCode(e.target.value)}type='text' className='form-control'>
                </input>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Restaurant Address</label>
                <input value={address} onChange={ (e)=>setAddress(e.target.value)} type='text' className='form-control'>
                </input>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Restaurant Image URL</label>
                <input value={image} onChange={ (e)=>setImage(e.target.value)} type='text' className='form-control'>
                </input>
            </div>
            <button type='submit' className='btn btn-primary'>Save</button>
            <Link to="/" className='btn btn-primary ms-5'>Back</Link>
        </form>
    </div>
  )
  };

export default Create;
