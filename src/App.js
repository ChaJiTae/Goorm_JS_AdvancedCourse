import './App.css';
import React,{useEffect} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import ChatPage from './components/ChatPage/ChatPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';

//firebase import 부분
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

function App(props) {

  useEffect(()=>{
    firebase.auth().onAuthStateChanged(user=>{
      console.log('user', user)
      //로그인이 된 상태
      if(user){
          props.history.push("/");
      }
      //로그인이 되지 않은 상태
      else{
          props.history.push("/login");
      }
    })
  },[])

  return (
    <Router>
        <Routes>
          <Route exact path="/" element = {<ChatPage/>} />
          <Route path="/login" element = {<LoginPage />} />
          <Route path="/register" element = {<RegisterPage />} />
        </Routes>
    </Router>
  );
}

export default App;