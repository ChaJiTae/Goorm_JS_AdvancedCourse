import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import ChatPage from "./components/ChatPage/ChatPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import UserPage from "./components/UserPage/UserPage";

// firebase import 부분
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { Navigate } from "react-router-dom";

function App(props) {
  const navigate = useNavigate();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log("user", user);
      // 로그인이 된 상태
      if (user) {
        navigate("/");
      }
      // 로그인이 되지 않은 상태
      else {
        //register 페이지나 login 페이지로 이동되게끔 작성됨
        //만약 ChatPage 말고 다른 페이지가 있을 경우 제어해야함
      }
    });
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={firebase.auth().currentUser ? (<ChatPage />) : (<Navigate to="/login" replace={true} />)}/>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/user" element={firebase.auth().currentUser ? (<UserPage />) : (<Navigate to="/login" replace={true} />)}/>
    </Routes>
  );
}

export default App;
