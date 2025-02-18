import React from "react";

// sample comments commentsData structure
const commentsData = [
  {
    name: "Rajiv",
    text: "some comments",
    replies: [
      {
        name: "Sachin",
        text: "reply comment",
        replies: [],
      },
    ],
  },
  {
    name: "Rajiv",
    text: "some comments",
    replies: [
      {
        name: "Sachin",
        text: "reply comment",
        replies: [
          {
            name: "Rajiv",
            text: "some comments",
            replies: [
              {
                name: "Sachin",
                text: "reply comment",
                replies: [
                  {
                    name: "Rajiv",
                    text: "some comments",
                    replies: [
                      {
                        name: "Sachin",
                        text: "reply comment",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Rajiv",
    text: "some comments",
    replies: [
      {
        name: "Sachin",
        text: "reply comment",
        replies: [],
      },
    ],
  },
];

const CommentList = ({ comments }) => {
  // dont use index as key
  return comments.map((cmm, index) => (
    <div>
      <Comment key={index} data={cmm} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList key={index} comments={cmm.replies} />
      </div>
    </div>
  ));
};

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="h-8 w-8"
        alt="user-image"
        src="https://static.vecteezy.com/system/resources/previews/005/005/840/non_2x/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">comments: </h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
