import React from "react";
import { Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import db from "../firebase";
import firebase from "firebase";

const Form = ({ text, setText, username }) => {
  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      message: text,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setText("");
  };
  return (
    <>
      <form id="msgbox" action="">
        <input
          placeholder="Write your message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
        />
        <Button
          type="submit"
          disabled={!text}
          variant="outlined"
          onClick={sendMessage}
        >
          <SendIcon />
        </Button>
      </form>
    </>
  );
};

export default Form;
