import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        alt="user"
        className="h-10"
        src="https://static.vecteezy.com/system/resources/previews/005/005/840/non_2x/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"
      />
      <span className="font-bold px-2">{name}: </span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
