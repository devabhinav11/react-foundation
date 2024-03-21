import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Namaste React 🚀 ")
  )
);

const Title = () => {
  return (
    <div>
      <h2>This is a title.</h2>
    </div>
  );
};
// React Element
const jsxHeading = <h1>Hello, This is a jsx heading 🚀</h1>;

// React Component
const HeadingComponent = () => (
  <div>
    <h1>This is a Heading made by a Functional Component 🚀</h1>
    <Title />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
