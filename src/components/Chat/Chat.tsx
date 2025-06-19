import React, { useState } from 'react';
import './Chat.css';
import Typewriter from "typewriter-effect";
import sendIcon from './send.svg'; // Import the SVG

const Chat = () => {
    const [messages, setMessages] = useState([
        {
            messageText: "hey i'm gemini 1.5 trained to act like anthony. ask me anything about my projects, technologies, coffee, art, music, etc...",
            messageAuthor: "anthony-bot",
            messageDate: "11:28pm"
        },
        {
            messageText: "hey what's up!",
            messageAuthor: "you",
            messageDate: "11:30pm"
        }
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (inputValue.trim() === '') return;
        const now = new Date();
        const hours = now.getHours() % 12 || 12;
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const ampm = now.getHours() >= 12 ? 'pm' : 'am';
        const timeString = `${hours}:${minutes}${ampm}`;
        setMessages([
            ...messages,
            {
                messageText: inputValue,
                messageAuthor: "you",
                messageDate: timeString
            }
        ]);
        setInputValue('');
    };

    return (
        <div className="chat-container">
            <div className="chat-title">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .start()
                            .typeString("chat")
                            .pauseFor(1000)
                    }}
                />
            </div>
            <div className="chat-content">
                <div className="chat-messages">
                    {messages.map((message, index) => (
                        <div key={index} className="chat-message">
                            <div className="chat-message-text">{message.messageText}</div>
                            <div className="chat-message-info">{message.messageAuthor} - {message.messageDate}</div>
                        </div>
                    ))}
                </div>
                <div className="chat-input-container">
                    <input 
                        type="text" 
                        className="chat-input" 
                        placeholder="start typing..." 
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
                    />
                    <button className="chat-send-button" onClick={handleSend}>
                        <img src={sendIcon} alt="Send" style={{ width: 28, height: 28 }} />
                    </button>
                </div>
            </div>
        </div>
    );
}; 

export default Chat;