import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useNavigate, useParams, Link} from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api/restaurant/';
const Edit = () => {
  const [name, setName] = useState ('')
  const [code, setCode] = useState ('')
  const [address, setAddress] = useState ('')
  const [image, setImage] = useState ('')

  const navigate = useNavigate()
    const {id} = useParams()
    const update = async (e) => {
        e.preventDefault()
       await axios.put(`${endpoint}${id}`, {
        rest_name: name,
        rest_code: code,
        rest_address: address,
        image:image
       })
       navigate('/')
      }
      useEffect( () => {
        const getRestaurantById = async () => {
         const response = await axios.get(`${endpoint}${id}`)
         setName(response.data.rest_name)
         setCode(response.data.rest_code)
         setAddress(response.data.rest_address)
         setImage(response.data.image)
        }
        getRestaurantById()
        // eslint-disable-next-line
    }, [] )

    return (
      <div>
          <h3>Edit Restaurant Info</h3>
          <form onSubmit={update}>
              <div className='mb-3'>
                  <label className='form-label'>Restaurant Name</label>
                  <input value={name} onChange={ (e)=>setName(e.target.value)}type='text' className='form-control'>
                  </input>
              </div>
              <div className='mb-3'>
                  <label className='form-label'>Restaurant code</label>
                  <input value={code} onChange={ (e)=>setCode(e.target.value)}type='text' className='form-control'>
                  </input>
              </div>
              <div className='mb-3'>
                  <label className='form-label'>Address</label>
                  <input value={address} onChange={ (e)=>setAddress(e.target.value)}type='text' className='form-control'>
                  </input>
              </div>
              <div className='mb-3'>
                  <label className='form-label'>Edit Restaurant Image</label>
                  <input value={image} onChange={ (e)=>setImage(e.target.value)}type='text' className='form-control'>
                  </input>
              </div>
              <button type='submit' className='btn btn-primary'>Update</button>
              <Link to='/' className='btn btn-primary ms-5'>Back</Link>

          </form>
      </div>
    )
};


export default Edit;
