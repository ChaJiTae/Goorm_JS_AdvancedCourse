import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Image from "react-bootstrap/Image";
import Accordion from 'react-bootstrap/Accordion'
import { FaLock } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";


function MessageHeader({ handleSearchChange }) {
  const chatRoom = useSelector(state=>state.chatRoom.currentChatRoom)
  const isPrivateChatRoom = useSelector(state=>state.chatRoom.isPrivateChatRoom)
  return (
    <div
      style={{
        width: "100%",
        height: "170px",
        border: ".2rem solid #ececec",
        borderRadius: "4px",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <Container>
        <Row>
          <Col>
            <h2>
              {isPrivateChatRoom ? 
              <FaLock style={{marginBottom:'10px'}} /> : <FaLockOpen style={{marginBottom:'10px'}} />
              }
              {chatRoom&&chatRoom.name} 
              <MdFavorite />
            </h2>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <AiOutlineSearch />
              </InputGroup.Text>
              <FormControl
                onChange={handleSearchChange}
                placeholder="Search Messages"
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
        </Row>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <p>
            <Image /> user name
          </p>
        </div>
        <Row>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0" style={{padding:'0 1rem'}}>
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  {/* Add content here */}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0" style={{padding:'0 1rem'}}>
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  {/* Add content here */}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MessageHeader;
