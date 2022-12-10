// 1. Components are simple javascript functions
// 2. Function name should start with uppercase letter
// 3.Function must return a single JSX elements.
// 4. Function should be exported from its file.
//

import React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

const Login = () => {
  const loginSubmit = (formdata) => {
    console.log(formdata);
  }

return (

    <div className='containerlog'>
    <div className='bardi'>
    <div className='card-body'>

    <Formik initialValues={{ email : '', password : ''}} onSubmit= {loginSubmit}> 
    { 
      ({values, handleChange, handleSubmit}) => (
        <form onSubmit={ handleSubmit }> 
    <h2 className='mytextt'> Login </h2>
    <hr /> <br />
    <label  style={{color: 'white'}}> Email </label>
    <input type="email" className="form-control mb-4" name="email" onChange={handleChange} value={values.email} placeholder='abc@xyyz' />
    
    <label style={{color: 'white'}}>PASSWORD</label>
    <input type="password" className="form-control mb-4" name="password" onChange={handleChange} value={values.password} placeholder='abc1V123' />

    <button className='btn btn-secondary w-100 mt-4' onClick={() => {alert('Enter your credentials') }}> Submit </button>
    </form>

      )
    }
    </Formik>
    <br></br>
    <p className='pp'> Or </p>
    <p className='pp'> New here? </p>
    </div>
    </div>
    </div>

  )
}
export default Login;
