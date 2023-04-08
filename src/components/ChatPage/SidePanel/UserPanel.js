import React,{useRef} from "react";
import { IoIosChatboxes } from "react-icons/io";
import Dropdown from "react-bootstrap/Dropdown";
import Image from 'react-bootstrap/Image';
<<<<<<< HEAD
import { useSelector } from "react-redux";
import { auth, storage } from '../../../firebase'; // firebase 추가
import mime from 'mime-types';

=======
import { useDispatch, useSelector } from "react-redux";
import { auth, storage } from '../../../firebase'; // firebase 추가
// import mime from 'mime-types';
import {setPhotoURL} from '../../../redux/actions/user_action';
import firebase from 'firebase/compat/app'; // 필요한 모듈만 import
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';
>>>>>>> happen

function UserPanel() {
  const user = useSelector(state=>state.user.currentUser);
  const dispatch = useDispatch();
  const inputOpenImageRef = useRef();

  const handleLogout = () => {
    auth.signOut();
  }

  const handleOpenImageRef = () => {
    inputOpenImageRef.current.click();
  }

  const handleUploadImage = async (event) =>{
    const file = event.target.files[0];

<<<<<<< HEAD
    const metadate = {contentType:mime.lookup(file.name)};

    try{
      //스토리지에 파일 저장하기
      let uploadTaskSnapshot = await storage.ref() // firebase storage 사용
        .child(`user_image/${user.uid}`)
        .put(file,metadate)
    }catch(error){

    }

=======
    // const metadate = {contentType:mime.lookup(file.name)};

    try{
      //스토리지에 파일 저장하기
      // let uploadTaskSnapshot = await storage.ref() // firebase storage 사용
      //   .child(`user_image/${user.uid}`)
      //   .put(file,metadate)

      // let downloadURL = await uploadTaskSnapshot.ref.getDownloadURL();

      //프로필 이미지 수정
      // await firebase.auth().currentUser.updateProfile({
      //   photoURL:downloadURL
      // })

      // dispatch(setPhotoURL(downloadURL));

      //데이터베이스 유저 이미지 수정
      // await firebase.database().ref("users")
      //     .child(user.uid)
      //     .update({image:downloadURL})

    }catch(error){
      alert(error);
    }
>>>>>>> happen
  }

  return (
    <div>
      {/*Logo*/}
      <h3 style={{ color: "white" }}>
        <IoIosChatboxes /> Chat App
      </h3>

      <div style={{ display: "flex", marginBottom: "1rem" }}>
        {user && <Image src={user.photoURL} style={{width:'30px',height:'30px',marginTop:'3px'}} roundedCircle/>}
        <Dropdown>
          <Dropdown.Toggle 
            style={{background:'transparent',border:'0px'}}
          id="dropdown-basic">
            {user && user.displayName}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={handleOpenImageRef}>프로필 사진 변경</Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>로그아웃</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <input onChange={handleUploadImage} accept="image/jpeg, image/png" style={{display:'none'}} ref={inputOpenImageRef} type="file"/>
    </div>
  );
}

export default UserPanel;
