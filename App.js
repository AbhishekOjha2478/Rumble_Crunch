import React from "react";
import ReactDOM from "react-dom/client";

//React element
const me = <h1>"My name is george"</h1>;
//normal var
const age = 24;

//React functional Component
const Heading = () => (
  <>
    <h1 id="jsxHeading">"Namaste React using JSX"</h1>
    {me}
    <h2>"My age is {age}</h2>
  </>
);
//React functional Component
const HeadingComponent = () => (
  <div>
    <Heading />
    <h1 id="Heading">"Namaste React functional Component"</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
