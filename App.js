//{} is an object(to fill attributes of the h1 tag)
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World using React!!!"
// );
import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 as superchild1"),
    React.createElement("h1", {}, "I am sibling of h1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 as superchild2"),
    React.createElement("h1", {}, "I am sibling of h1"),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
