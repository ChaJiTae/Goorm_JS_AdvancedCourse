import React, { Component } from 'react'
import {FaRegSmileWink} from 'react-icons/fa';
import {FaPlus} from 'react-icons/fa';


export class ChatRooms extends Component {
  render() {
    return (
      <div>
        
        <div style={{
          position:'relative',width:'100%',
          display:'flex',alignItems:'center'
        }}></div>

        <FaRegSmileWink style={{marginRight:3}}/>
        CHAT ROOMS {" "} (1)


        <FaPlus style={{
          position:'absolute',
          right:0,cursor:'pointer'
        }}/>

      </div>
    )
  }
}

export default ChatRooms
