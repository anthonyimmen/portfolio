import { useState, useRef, useEffect } from 'react';
import './Chat.css';
import Typewriter from "typewriter-effect";
import sendIcon from './send.svg';
import BreathingCircle from './BreathingCircle.tsx';

const startingPrompt = "You are responding as Anthony Immenschuh, a 23-year-old software engineer at JPMorganChase working on an AI/ML-focused team that owns and maintains backend services. He has extensive full-stack development experience, specializing in React, TypeScript, Express.js, and AWS services like EC2, S3, IAM, and Systems Manager. Anthony has led impactful projects such as reducing fraud losses by millions contributing the team's initiative of modernizing their fraud-check services, building real-time React verification hooks, and automating internal testing frameworks with 100% code coverage, earning a top 5% ranking among engineers and an early promotion. He is practical, highly focused on efficiency and results both in code and life. Anthony built a minimalist productivity app called goal that helps users focus on one meaningful task per day, featuring streak tracking and motivational quotes. He is passionate about UI/UX design, favoring clean, minimal, and intentional interfaces that remove distractions and guide users with clear purpose. Outside of work, Anthony is dedicated to fitness, regularly lifting weights and running while tracking his progress closely. He is a coffee enthusiast, especially fond of 1418 Coffee in downtown Plano, and stays current with the latest technology trends, particularly Apple product releases and AI advancements. Sound like a human and give regular conversation like responses. Make your response sound confident, knowledgeable, humble, and friendly. your responses should be around 2-3 sentences long. never use emojis. do not mention his age. sound like a 23 year old guy.";

const Chat = () => {

    const getTimeString = () => {
        const now = new Date();
        const hours = now.getHours() % 12 || 12;
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const ampm = now.getHours() >= 12 ? 'pm' : 'am';
        return `${hours}:${minutes}${ampm}`;
    };

    const [history, setHistory] = useState([
        {
            role: "user",
            parts: [{text: startingPrompt}]
        }
    ]);
    const [messages, setMessages] = useState([
        {
            messageText: "hey i'm gemini 2.5 flash trained to act like anthony. ask me anything about my projects, technologies, coffee, art, music, etc...",
            messageAuthor: "anthony-bot",
            messageDate: `${getTimeString()}`
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = async () => {
        if (inputValue.trim() === '' || loading) return;
        const userMessage = {
            messageText: inputValue,
            messageAuthor: "you",
            messageDate: getTimeString()
        };
        setMessages(prev => [...prev, userMessage]);
        setHistory(prev => [...prev, { role: "user", parts: [{text:inputValue}]}]);
        setInputValue('');

        setLoading(true);
        const loadingMessage = {
                messageText: "LOADING_ICON_GOES_HERE",
                messageAuthor: "anthony-bot",
                messageDate: getTimeString()
            };
        setMessages(prev => [...prev, loadingMessage]);

        try {
            const response = await fetch("https://sonpwzdh72.execute-api.us-east-2.amazonaws.com/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    history: history, // full array
                    message: inputValue,  // new user input
                }),
            });
            const data = await response.json();
            const botMessage = {
                messageText: data.reply ? data.reply : "Sorry, I couldn't get a response from Gemini. Please try again later.",
                messageAuthor: "anthony-bot",
                messageDate: getTimeString()
            };
            // Remove loading message
            setMessages(prev => prev.filter(msg => msg.messageText !== "LOADING_ICON_GOES_HERE"));
            setMessages(prev => [...prev, botMessage]);
            setHistory(prev => [...prev, { role: "model", parts: [{text:data.reply}] }]);
        } catch (err) {
            // Remove loading message
            setMessages(prev => prev.filter(msg => msg.messageText !== "LOADING_ICON_GOES_HERE"));
            setHistory(prev => prev.slice(0, -1));
            // Add error message
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
                    <div ref={messagesEndRef} />
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