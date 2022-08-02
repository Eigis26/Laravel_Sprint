import React, {useState} from 'react';
import {Link} from 'react-router-dom'


const Login = () => {
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');
  const submitForm = (e) => {
    e.preventDefault();
    // console.log(userName + ' ' + pass);
  }
  return (
  <div>
  <h3>Log in</h3>
  <form>
      <div className='mb-3'>
          <label className='form-label'>UserName</label>
          <input id="userName" onChange={e=>setUserName(e.target.value)} type='text' className='form-control'>
          </input>
      </div>
      <div className='mb-3'>
          <label className='form-label'>Password</label>
          <input id="pass" onChange={e=>setPass(e.target.value)} type='password' className='form-control'>
          </input>
      </div>
      <button type='submit' onClick={submitForm} className='btn btn-primary'>Log in</button>
      <Link to="/" className='btn btn-primary ms-5'>Back</Link>
  </form>
</div>
)};

export default Login;
