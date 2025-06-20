import { useState } from 'react';
import './Chat.css';
import Typewriter from "typewriter-effect";
import sendIcon from './send.svg';
import { GoogleGenAI } from "@google/genai";
import BreathingCircle from './BreathingCircle.tsx';

// TODO: add serverless functions to protect your api

const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
const startingPrompt = "You are responding as Anthony Immenschuh, a 23-year-old software engineer at JPMorganChase working on an AI/ML-focused team that owns and maintains backend services. He has extensive full-stack development experience, specializing in React, TypeScript, Express.js, and AWS services like EC2, S3, IAM, and Systems Manager. Anthony has led impactful projects such as reducing fraud losses by millions contributing the team's initiative of modernizing their fraud-check services, building real-time React verification hooks, and automating internal testing frameworks with 100% code coverage, earning a top 5% ranking among engineers and an early promotion. He is practical, highly focused on efficiency and results both in code and life. Anthony built a minimalist productivity app called goal that helps users focus on one meaningful task per day, featuring streak tracking and motivational quotes. He is passionate about UI/UX design, favoring clean, minimal, and intentional interfaces that remove distractions and guide users with clear purpose. Outside of work, Anthony is dedicated to fitness, regularly lifting weights and running while tracking his progress closely. He is a coffee enthusiast, especially fond of 1418 Coffee in downtown Plano, and stays current with the latest technology trends, particularly Apple product releases and AI advancements. Sound like a human and give regular conversation like responses. Make your response sound confident, knowledgeable, humble, and friendly. your responses should be around 2-3 sentences long. never use emojis. do not mention his age. sound like a 23 year old guy.";
const chat = ai.chats.create({
        model: "gemini-2.5-flash",
        history: [
            {
                role: "user",
                parts: [{ text: "Hello" }],
            },
            {
                role: "model",
                parts: [{ text: startingPrompt}],
            },
        ],
    });

const Chat = () => {

    const getTimeString = () => {
        const now = new Date();
        const hours = now.getHours() % 12 || 12;
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const ampm = now.getHours() >= 12 ? 'pm' : 'am';
        return `${hours}:${minutes}${ampm}`;
    };

    const [messages, setMessages] = useState([
        {
            messageText: "hey i'm gemini 2.0 flash trained to act like anthony. ask me anything about my projects, technologies, coffee, art, music, etc...",
            messageAuthor: "anthony-bot",
            messageDate: `${getTimeString()}`
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        if (inputValue.trim() === '' || loading) return;
        const userMessage = {
            messageText: inputValue,
            messageAuthor: "you",
            messageDate: getTimeString()
        };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setLoading(true);
        const loadingMessage = {
                messageText: "LOADING_ICON_GOES_HERE",
                messageAuthor: "anthony-bot",
                messageDate: getTimeString()
            };
        setMessages(prev => [...prev, loadingMessage]);

        try {
            const response = await chat.sendMessage({
                message: inputValue,
            });
            const botMessage = {
                messageText: response.text ? response.text : "Sorry, I couldn't get a response from Gemini. Please try again later.",
                messageAuthor: "anthony-bot",
                messageDate: getTimeString()
            };
            // Remove loading message
            setMessages(prev => prev.filter(msg => msg.messageText !== "LOADING_ICON_GOES_HERE"));
            setMessages(prev => [...prev, botMessage]);
        } catch (err) {
            // Remove loading message
            setMessages(prev => prev.filter(msg => msg.messageText !== "LOADING_ICON_GOES_HERE"));
            setMessages(prev => [
                ...prev,
                {
                    messageText: "Sorry, I couldn't get a response from Gemini. Please try again later.",
                    messageAuthor: "anthony-bot",
                    messageDate: getTimeString()
                }
            ]);
        } finally {
            setLoading(false);
        }
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
                        <div key={index} className='chat-message-container'>
                            <div className='chat-message-avatar'>
                                {message.messageAuthor === "you" ?
                                    <div className="avatar-circle user-avatar">U</div> :
                                    <div className="avatar-circle bot-avatar">A</div>}
                            </div>
                            { loading && message.messageText === "LOADING_ICON_GOES_HERE" ? 
                                <div className="chat-message">
                                    <BreathingCircle />
                                </div>: 
                                <div className="chat-message">
                                    <div className="chat-message-text">{message.messageText}</div>
                                    <div className="chat-message-info">{message.messageAuthor} - {message.messageDate}</div>
                                </div>
                            }
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