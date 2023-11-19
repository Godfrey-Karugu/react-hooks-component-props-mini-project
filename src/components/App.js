import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="Overreacted"/>
      <About image="https://via.placeholder.com/215"
        text="A person blog, I explain by word and code"
      />
    </div>
  );
}

export default App;
