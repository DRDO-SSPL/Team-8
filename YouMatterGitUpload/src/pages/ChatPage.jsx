import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useTheme } from "../contexts/ThemeContext";
import BreathingModal from "../components/BreathingModal";

const NGROK_URL = "https://3e218aa5943a.ngrok-free.app";  // Use your actual ngrok URL

const ChatPage = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]); // { sender: 'user' | 'ai', text: string }
  const chatEndRef = useRef(null);
  const { isDarkMode } = useTheme();
  const [showBreathing, setShowBreathing] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    try {
      const res = await axios.post(`${NGROK_URL}/chat`, { message: input });
      const aiText = res.data.response || res.data.reply || "No response from AI.";
      setMessages((prev) => [...prev, { sender: "ai", text: aiText }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Error: " + err.message }
      ]);
    }
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-64px)] w-full bg-[#FDFCF9] dark:bg-[#1E1B2E] transition-colors duration-300">
      <BreathingModal isOpen={showBreathing} onClose={() => setShowBreathing(false)} breathingType="4-4-6" />
      <div className="w-full max-w-2xl flex flex-col h-[80vh] sm:h-[75vh] md:h-[70vh] border border-gray-300 dark:border-gray-700 rounded-2xl bg-[#23272F] dark:bg-[#EDE9FE] shadow-lg transition-colors duration-300">
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700 dark:border-gray-200 bg-[#18181B] dark:bg-[#F5F7FA] rounded-t-2xl">
          <span className="font-bold text-xl text-[#EDE9FE] dark:text-[#23272F] transition-colors duration-300">YouMatter Chatbot</span>
          <button
            className="ml-2 px-4 py-2 rounded-lg font-semibold text-base bg-[#A78BFA] dark:bg-[#C4B5FD] text-white dark:text-[#23272F] hover:bg-[#9333EA] dark:hover:bg-[#A78BFA] transition-colors duration-200 shadow"
            onClick={() => setShowBreathing(true)}
          >
            Emergency Calm
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-[#23272F] dark:bg-[#EDE9FE] transition-colors duration-300">
          {messages.length === 0 && (
            <div className="text-gray-400 dark:text-gray-500 text-center mt-10">
              Start the conversation!
            </div>
          )}
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-[75%] px-4 py-2 rounded-2xl shadow-sm text-base break-words ${
                msg.sender === "user"
                  ? "self-end bg-[#18181B] text-[#EDE9FE] dark:bg-[#F5F7FA] dark:text-[#23272F]"
                  : "self-start bg-[#353945] text-[#EDE9FE] dark:bg-[#E0E7FF] dark:text-[#23272F]"
              }`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <div className="flex items-center border-t border-gray-700 dark:border-gray-200 px-4 py-3 bg-[#18181B] dark:bg-[#F5F7FA] transition-colors duration-300 rounded-b-2xl">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 rounded-full border border-gray-600 dark:border-gray-300 bg-[#23272F] dark:bg-[#EDE9FE] text-[#EDE9FE] dark:text-[#23272F] outline-none text-base transition-colors duration-300"
          />
          <button
            onClick={sendMessage}
            className="ml-3 px-5 py-2 rounded-full font-semibold text-base bg-[#4f8cff] dark:bg-[#A78BFA] text-white dark:text-[#23272F] hover:bg-[#2563eb] dark:hover:bg-[#C4B5FD] transition-colors duration-200 shadow"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
