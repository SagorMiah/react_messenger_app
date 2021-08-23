import React, { useEffect, useState } from "react";
import Form from "./messgerfile/Form";
import List from "./messgerfile/List";
import db from "./firebase";
import FlipMove from "react-flip-move";

const Messenger = () => {
  const [text, setText] = useState("");
  const [send, setSend] = useState([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((sanpshot) => {
        setSend(
          sanpshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);
  useEffect(() => {
    setUsername(prompt("Enter your name here!"));
  }, []);
  return (
    <>
      <div className="main">
        <div className="listMain">
          <FlipMove>
            {send.map(({ id, message }) => (
              <List key={id} message={message} username={username} />
            ))}
          </FlipMove>
        </div>
        <Form
          text={text}
          setText={setText}
          send={send}
          setSend={setSend}
          username={username}
        />
      </div>
    </>
  );
};

export default Messenger;
