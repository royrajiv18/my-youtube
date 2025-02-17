import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Cricket",
  "Soccer",
  "Cooking",
  "Valentine",
  "Comedy",
  "Trailer",
  "Horror",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item) => {
        return <Button key={item} name={item} />;
      })}
    </div>
  );
};

export default ButtonList;
