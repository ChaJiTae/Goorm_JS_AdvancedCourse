import React from 'react'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'

function RegisterPage() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm({mode:"onChange"});
  const onSubmit = data => console.log(data);

  console.log(watch("email"));

  return (
    <div className='auth-wrapper'>
        <div style={{textAlign : 'center'}}>
          <h3>Register</h3>
        </div>  
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <label>Email</label>
          <input
              name="email" 
              type="email"  
              {...register("email", { required: true,maxLength:10 })}/>
              {errors.email && <span>This field is required</span>}
          
          <label>Name</label>
          <input
              name="name"    
          />
          
          <label>Password</label>
          <input
              name="password"
              type="password"    
          />

          <label>Password Confirm</label>
          <input
              name="password_confirm"    
              type="password"
          />

          <input type="submit" value={"submit"}/>
        <Link style={{color:"gray",textDecoration:'none'}} to="/login">이미 아이디가 있다면...</Link>
        </form>
    </div>
  )
}

export default RegisterPage