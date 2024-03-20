const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "This is a h1 Tag")
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
