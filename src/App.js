import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import ChatPage from "./components/ChatPage/ChatPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";

// firebase import 부분
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { Navigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser } from "./redux/actions/user_action";

function App(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log("user", user);
      // 로그인이 된 상태
      if (user) {
        navigate("/");
        dispatch(setUser(user));
      }
      // 로그인이 되지 않은 상태
      else {
        // 로그인되지 않은 경우
        // 현재 경로를 받아옵니다.
        const currentPath = location.pathname;
  
        // 로그인 페이지로 이동합니다.
        if (
          currentPath !== "/login" &&
          currentPath !== "/register" // 이 부분을 추가하여 회원가입 페이지로 이동할 수 있도록 합니다.
        ) {
          navigate("/login", { state: { from: currentPath }, replace: true });
        }
  
        // 사용자 정보를 초기화합니다.
        dispatch(clearUser());
      }
    });
  }, [navigate, dispatch, location]);

  if (isLoading) {
    return <div>...Loading</div>;
  } else {
    return (
      <Routes>
        <Route
          path="/"
          element={
            firebase.auth().currentUser ? (
              <ChatPage />
            ) : (
              <Navigate to="/login" replace={true} />
            )
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    );
  }
}

export default App;
