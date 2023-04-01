import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import ChatPage from "./components/ChatPage/ChatPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";

// firebase import 부분
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

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
        navigate("/login");
      }
    });
  }, [navigate]);

  return (
    <Routes>
      <Route exact path="/" element={<ChatPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
