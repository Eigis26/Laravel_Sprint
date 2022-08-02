import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

  const endpoint = 'http://127.0.0.1:8000/api'
  const Index = () => {
  
      const [restaurant, setRestaurant] = useState([])
  
      useEffect ( ()=> {
          getAllRestaurants()
      }, [])
  
      const getAllRestaurants = async () => {
          const response = await axios.get(`${endpoint}/restaurants`)
          setRestaurant(response.data)
  
      }
  
      const deleteRestaurant = async (id) => {
         await axios.delete(`${endpoint}/restaurant/${id}`)
         getAllRestaurants()
      }
    return (
      <div>
          <div className='d-grid gap-2'>
              <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Add new Restaurant</Link>
          </div>
          <table className='table table-striped'>
              <thead className='bg-primary text-white'>
                  <tr>
                      <th>Image</th>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Code</th>
                      <th>Address</th>
                      <th>Actions</th>
                  </tr>
              </thead>
              <tbody>
                  {restaurant.map ((restaurant) => (
                      <tr key={restaurant.id}>
                          <td><img className='rounded w-50 p-1' src={restaurant.image} alt ={restaurant.rest_name}></img></td>
                          <td>{restaurant.id}</td>
                          <td>{restaurant.rest_name}</td>
                          <td>{restaurant.rest_code}</td>
                          <td>{restaurant.rest_address}</td>
                          <td>
                              <Link to={`/edit/${restaurant.id}`} className='btn btn-warning me-2'>Edit</Link>
                              <button onClick={() => deleteRestaurant(restaurant.id)} className='btn btn-danger'>Delete</button>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
          <div className='d-grid gap-2'>
              <Link to="/login" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Login</Link>
              <Link to="/register" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Register</Link>
          </div>
      </div>
    )
  }


export default Index;
