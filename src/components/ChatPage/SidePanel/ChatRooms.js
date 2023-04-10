import React, { Component } from "react";
import { FaRegSmileWink } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { Modal, Button, Form,Badge } from "react-bootstrap";
import { connect } from "react-redux";
import firebase from 'firebase/compat/app'; // 필요한 모듈만 import
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';
import {setCurrentChatRoom, setPrivateChatRoom} from '../../../redux/actions/chatRoom_action'

export class ChatRooms extends Component {
  state = {
    show: false,
    name: "",
    description: "",
    chatRoomsRef: firebase.database().ref("chatRooms"),
    messagesRef : firebase.database().ref("messages"),
    chatRooms:[],
    firstLoad : true,
    activeChatRoomId:"",
    notifications:[]
  };

  componentDidMount(){
    this.AddChatRoomsListeners();
  }

  componentWillUnmount(){
    this.state.chatRoomsRef.off();
  }

  setFirstChatRoom = ()=>{
    const firstChatRoom = this.state.chatRooms[0]
    if(this.state.firstLoad&&this.state.chatRooms.length>0){
      this.props.dispatch(setCurrentChatRoom(firstChatRoom))
      this.setState({activeChatRoomId:firstChatRoom.id})
    }
    this.setState({firstLoad:false})
  }

  AddChatRoomsListeners=()=>{
    let chatRoomsArray = [];
    this.state.chatRoomsRef.on("child_added",DataSnapshot=>{
      chatRoomsArray.push(DataSnapshot.val());
      this.setState({chatRooms:chatRoomsArray},
          ()=>this.setFirstChatRoom());
    
    this.addNotificationListener(DataSnapshot.key);
        })
  }

  addNotificationListener=(chatRoomId)=>{
    this.state.messagesRef.child(chatRoomId).on("value",DataSnapshot=>{
      if(this.props.chatRoom){
        this.handleNotification(
          chatRoomId,
          this.props.chatRoom.id,
          this.state.notifications,
          DataSnapshot
        )
      }
    })
  }

  handleNotification=(chatRoomId,currentChatRoomId,notifications,DataSnapshot)=>{
    //이미 notifications state 안에 알림 정보가 들어있는 채팅방과 그렇지 않은 채팅방을 나눠주기
    let index = notifications.findIndex(notification=>
      notification.id===chatRoomId)
    
    //목표는 방 하나 하나의 맞는 알림 정보를 notifications state에 넣어주기
  }

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, description } = this.state;

    if (this.isFormValid(name, description)) {
      this.addChatRoom();
    }

  }

  addChatRoom = async () => {
    const key = this.state.chatRoomsRef.push().key;
    const { name, description } = this.state;
    const { user } = this.props;
    const newChatRoom = {
      id: key,
      name: name,
      description: description,
      createBy: {
        name: user.displayName,
        image: user.photoURL,
      },
    };
    try {
      await this.state.chatRoomsRef.child(key).update(newChatRoom);
      this.setState({
        name: "",
        description: "",
        show: false,
      });
    } catch (error) {
      alert(error);
    }
  };


  isFormValid = (name, description) => name && description;

  changeChatRoom = (room) =>{
    this.props.dispatch(setCurrentChatRoom(room));
    this.props.dispatch(setPrivateChatRoom(false))
    this.setState({activeChatRoomId:room.id});
  }

  renderChatRooms = (chatRooms)=>{
    return chatRooms.length > 0 && // 추가된 부분: return 키워드 추가
      chatRooms.map(room=>(
        <li 
          key={room.id} 
          style={{backgroundColor:room.id===this.state.activeChatRoomId && "#ffffff45"}}
          onClick={()=> this.changeChatRoom(room)
        }>
          # {room.name}
          <Badge style={{float:'right',marginTop:'3px',alignItems:'right'}} variant="danger">
              1
          </Badge>
        </li>
      ))
  }

  render() {
    return (
      <div>
        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FaRegSmileWink style={{ marginRight: 3 }} />
          채팅방 (1)
          <FaPlus
            onClick={this.handleShow}
            style={{
              position: "absolute",
              right: 0,
              cursor: "pointer",
            }}
          />
        </div>

        <ul style={{listStyleType:'none',padding:0}}>
            {this.renderChatRooms(this.state.chatRooms)}
        </ul>

        {/*채팅방 추가 모달 */}
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>채팅방 생성</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>방 이름</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="채팅방 이름을 입력하세요"
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>방 설명</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="채팅방 설명을 입력하세요"
                  onChange={(e) => this.setState({ description: e.target.value })}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              닫기
            </Button>
            <Button variant="primary" onClick={this.handleSubmit}>
              생성
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.currentUser,
    chatRoom:state.chatRoom.currentChatRoom
  }
}

export default connect(mapStateToProps)(ChatRooms);
