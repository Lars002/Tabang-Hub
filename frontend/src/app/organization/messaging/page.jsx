"use client";

import React, { useState, useEffect, useRef } from 'react';

export default function MessagingPage() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello!", sender: "John", timestamp: "10:01 AM" },
    { id: 2, text: "Hi, how are you?", sender: "You", timestamp: "10:02 AM" },
    { id: 3, text: "I'm good, thanks! What about you?", sender: "John", timestamp: "10:03 AM" },
    { id: 4, text: "Doing great, working on a project.", sender: "You", timestamp: "10:04 AM" },
  ]);
  const [input, setInput] = useState('');
  const [activeUser, setActiveUser] = useState('John');
  const chatBoxRef = useRef(null);

  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
  ];

  // Auto-scroll to the bottom when a new message is added
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: input,
        sender: 'You',
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, newMessage]);
      setInput(''); // Clear the input field
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleUserClick = (user) => {
    setActiveUser(user.name);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar (User List) */}
      <div className="w-1/4 p-4 bg-white border-r border-gray-300 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Contacts</h2>
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              onClick={() => handleUserClick(user)}
              className={`mb-2 p-2 rounded-lg cursor-pointer ${
                user.name === activeUser
                  ? 'bg-lime-600 text-white'
                  : 'bg-lime-500 hover:bg-gray-200'
              }`}
            >
              {user.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side (Chat Area) */}
      <div className="flex flex-col w-3/4 h-full">
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-lime-600 text-white shadow-md">
          <h2 className="text-xl font-bold">Chat with {activeUser}</h2>
        </div>

        {/* Chat Box */}
        <div
          ref={chatBoxRef}
          className="flex-grow p-4 overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-md"
        >
          {messages.length === 0 ? (
            <p className="text-center text-gray-400">No messages yet...</p>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 p-3 rounded-lg max-w-xs ${
                  message.sender === 'You'
                    ? 'bg-lime-700 text-white self-end ml-auto'
                    : 'bg-gray-200 text-gray-800 self-start mr-auto'
                }`}
              >
                <p>{message.text}</p>
                <p className="text-xs text-gray-300 mt-1">{message.timestamp}</p>
              </div>
            ))
          )}
        </div>

        {/* Input Box */}
        <div className="p-4 border-t border-gray-300 bg-gray-50 flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-700"
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 px-4 py-2 bg-lime-700 text-white rounded-lg hover:bg-lime-800 focus:outline-none focus:ring-2 focus:ring-lime-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
