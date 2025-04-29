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

const Title = () => <h1>Welcome to React Components</h1>;
const heading = <h1 id="heading">Welcome to React with jsx</h1>;
const Heading = () => (
  <div id="parent">
    <div id="child">
      <Title />
      {heading}
    </div>
    <div id="child2">
      <h1>Im h1 tag</h1>
      <h2>im h2 tag</h2>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
