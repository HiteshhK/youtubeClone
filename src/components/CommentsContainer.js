import React from "react";
import Comment from "./Comment";

const commentsData = [
  {
    name: "Hitesh",
    text: "Lorem ipsum was orignated in 1950....",
    replies: [],
  },
  {
    name: "Hitesh",
    text: "Lorem ipsum was orignated in 1950....",
    replies: [],
  },
  {
    name: "Hitesh",
    text: "Lorem ipsum was orignated in 1950....",
    replies: [
      {
        name: "Hitesh",
        text: "Lorem ipsum was orignated in 1950....",
        replies: [
          {
            name: "Hitesh",
            text: "Lorem ipsum was orignated in 1950....",
            replies: [],
          },
        ],
      },
      {
        name: "Hitesh",
        text: "Lorem ipsum was orignated in 1950....",
        replies: [],
      },
      {
        name: "Hitesh",
        text: "Lorem ipsum was orignated in 1950....",
        replies: [],
      },
    ],
  },
  {
    name: "Hitesh",
    text: "Lorem ipsum was orignated in 1950....",
    replies: [
      {
        name: "Hitesh",
        text: "Lorem ipsum was orignated in 1950....",
        replies: [
          {
            name: "Hitesh",
            text: "Lorem ipsum was orignated in 1950....",
            replies: [
              {
                name: "Hitesh",
                text: "Lorem ipsum was orignated in 1950....",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => {
    return (
      <div key={index} className="">
        <Comment data={comment} />
        <div className="pl-5 ml-5 border border-l-black">
          <CommentList comments={comment.replies} />
        </div>
      </div>
    );
  });
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
