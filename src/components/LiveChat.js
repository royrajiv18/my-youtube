import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  useEffect(() => {
    const i = setInterval(() => {
      console.log("API polling");
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="w-full h-[600px] p-2 ml-2 border border-black bg-slate-100 rounded-lg">
      <ChatMessage name="Rajiv" message="This is a sample chat 🔥" />
      <ChatMessage name="Rajiv" message="This is a sample chat 🔥" />
      <ChatMessage name="Rajiv" message="This is a sample chat 🔥" />
      <ChatMessage name="Rajiv" message="This is a sample chat 🔥" />
    </div>
  );
};

export default LiveChat;
