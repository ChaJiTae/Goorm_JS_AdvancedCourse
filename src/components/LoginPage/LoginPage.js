import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'

//firebase auth 
import firebase from 'firebase/compat/app';                     // eslint-disable-line no-unused-vars
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { auth } from "../../firebase";                          // eslint-disable-line no-unused-vars
import { createUserWithEmailAndPassword } from "firebase/auth"; // eslint-disable-line no-unused-vars
import { updateProfile } from "firebase/auth";                  // eslint-disable-line no-unused-vars

//realtime database
import { getDatabase, ref, set } from "firebase/database";      // eslint-disable-line no-unused-vars
const db = getDatabase();                                       // eslint-disable-line no-unused-vars

function LoginPage() {

  const {register,handleSubmit,formState:{errors}} = useForm({mode:"onChange"});
  const {errorFromSubmit,setErrorFromSubmit} = useState("")
  const [loading,setLoading] = useState(false)
  
  const onSubmit = async (data) => {
      try{
        setLoading(true);
        await firebase.auth().signInWithEmailAndPassword(data.email,data.password);
        setLoading(false);
      }catch(error){
        setErrorFromSubmit(error.message)
        setLoading(false);
        setTimeout(()=>{
          setErrorFromSubmit("");
        },5000)
      }
  }

  return (
    <div className='auth-wrapper'> 
        <div style={{textAlign : 'center'}}>
          <h3>Login</h3>
        </div>  
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <input
              name="email" 
              type="email"  
              {...register("email", { required: true,pattern:/^\S+@\S+$/i})}/>
              {errors.email && <p>This field is required</p>}
          
          <label>Password</label>
          <input
              name="password"
              type="password"
              {...register("password",{ required: true,minLength:6})}/>
              {errors.password && errors.password.type === "required" 
                && <p>This password field is required</p>}
              {errors.password && errors.password.type === "minLength" 
                && <p>Password must have at least 6 characters</p>}
          
              {errorFromSubmit&&
              <p>{errorFromSubmit}</p>
              }
          
          <input type="submit" value={"submit"} disabled={loading}/>
        <Link style={{color:"gray",textDecoration:'none'}} to="/register">아직 아이디가 없다면...</Link>
        </form>
    </div>
  )
}

export default LoginPage