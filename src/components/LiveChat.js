import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
      setLiveMessage("");
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[600px] p-2 ml-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="p-2 ml-2 w-full border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Rajiv",
              message: liveMessage,
            })
          );
        }}
      >
        <input
          className="p-2 w-72 border border-black"
          type="text"
          placeholder="Chat"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        ></input>
        <button className="px-2 mx-2 bg-green-300">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
