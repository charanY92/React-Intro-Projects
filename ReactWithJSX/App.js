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

const jsxHeading = <h1 id="heading">Welcome to React with jsx</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
