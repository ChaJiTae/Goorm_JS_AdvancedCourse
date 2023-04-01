import React,{useRef , useState} from 'react'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'

//firebase auth
import firebase from 'firebase/compat/app';  // eslint-disable-line no-unused-vars
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { updateProfile } from "firebase/auth";

//md5 module
import md5 from 'md5'

//realtime database
import { getDatabase, ref, set } from "firebase/database";
const db = getDatabase();

function RegisterPage() {

  const {register,handleSubmit,watch,formState:{errors}} = useForm({mode:"onChange"});
  const {errorFromSubmit,setErrorFromSubmit} = useState("")
  const [loading,setLoading] = useState(false)
  const password = useRef();
  password.current = watch("password");
  
  const onSubmit = async (data) => {
      try{
        setLoading(true);
        let createdUser = await  createUserWithEmailAndPassword(auth, data.email, data.password)
        console.log('createdUser',createdUser);

        await updateProfile(createdUser.user, {
          displayName: data.name,
          photoURL: `http://gravatar.com/avatar/${md5(createdUser.user.email)}?d=identicon`,
        })

        //firebase 데이터베이스에 저장하기
        await set(ref(db, "users/" + createdUser.user.uid), {
         name: createdUser.user.displayName,
         image: createdUser.user.photoURL
        });
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
          <h3>Register</h3>
        </div>  
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <input
              name="email" 
              type="email"  
              {...register("email", { required: true,pattern:/^\S+@\S+$/i})}/>
              {errors.email && <p>This field is required</p>}
          
          <label>Name</label>
          <input
              name="name"
              {...register("name",{ required: true,maxLength:10})}/>
              {errors.name && errors.name.type === "required" 
                && <p>This name field is required</p>}
              {errors.name && errors.name.type === "maxLength" 
                && <p>Your input exceed maximum length</p>}
          
          <label>Password</label>
          <input
              name="password"
              type="password"
              {...register("password",{ required: true,minLength:6})}/>
              {errors.password && errors.password.type === "required" 
                && <p>This password field is required</p>}
              {errors.password && errors.password.type === "minLength" 
                && <p>Password must have at least 6 characters</p>}

          <label>Password Confirm</label>
          <input
              name="password_confirm"    
              type="password"
              {...register("password_confirm",{ required: true, validate:(value) => value === password.current })}/>
              {errors.password_confirm && errors.password_confirm.type === "required" 
                && <p>This password confirm field is required</p>}
              {errors.password_confirm && errors.password_confirm.type === "validate" 
                && <p>The password do not match</p>}
          
              {errorFromSubmit&&
              <p>{errorFromSubmit}</p>
              }
          
          <input type="submit" value={"submit"} disabled={loading}/>
        <Link style={{color:"gray",textDecoration:'none'}} to="/login">이미 아이디가 있다면...</Link>
        </form>
    </div>
  )
}

export default RegisterPage