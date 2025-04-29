{
  /* <div id="parent">
    <div id="child">
      <h1>Im h1 tag</h1>
      <h2>im h2 tag</h2>
    </div>
      <div id="child2">
        <h1>Im h1 tag</h1>
        <h2>im h2 tag</h2>
      </div>
</div> */
}
import React from "react";
import ReactDOM from "react-dom/client";

const nestedElement = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "im h1 tag"),
    React.createElement("h2", { id: "heading2" }, "im h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading3" }, "im h1 tag"),
    React.createElement("h2", { id: "heading4" }, "im h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nestedElement);
