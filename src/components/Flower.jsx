// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./flower.css";

const Flower = () => {
  const [emotion, setEmotion] = useState("happy");
  const [message, setMessage] = useState("");

  const emotions = {
    happy: "😊",
    cry: "😢",
    cool: "😎",
    angry: "😠",
    love: "😍",
    lonely: "😔",
  };

  const handleClick = (emo) => {
    setEmotion(emo);
    switch (emo) {
        case "happy":
            setMessage(`You are feeling ${emo}! `);
            break;
        case "cry":
            setMessage(`You are feeling ${emo}! Oh! don't cry sis`);
            break;
        case "cool":
            setMessage(`You are feeling ${emo}!`);
            break;
        case "angry":
            setMessage(`You are feeling ${emo}! Sometimes you might want to drink coffee`);
            break;
        case "love":
            setMessage(`You are feeling ${emo}!`);
            break;
        case "lonely":
          setMessage(`You are feeling ${emo}! You can chat with me on <br/> <br/><a href="https://www.instagram.com/direct/t/108288407234391/">Instagram</a> <p>Or</p> <a href="https://www.messenger.com/t/100006772776288" target="_blank" rel="noopener noreferrer">Messenger</a> <p>Or</p> <a href="https://whatsapp.com/send?phone=+856 20 54867757">WhatsApp</a>
          `);
          break;
        default:
            setMessage("Unknown emotion");
            break;
    }
};


  return (
    <div className="flower-container">
      <div className="emoji">{emotions[emotion]}</div>
      <div className="buttons">
        {Object.keys(emotions).map((emo) => (
          <button key={emo} onClick={() => handleClick(emo)}>
            {emo.charAt(0).toUpperCase() + emo.slice(1)}
          </button>
        ))}
      </div>
      {message && (
        <div
          className="sms-message"
          dangerouslySetInnerHTML={{ __html: message }}
        ></div>
      )}
    </div>
  );
};

export default Flower;
