import React from "react";
import "./About.css";

function About() {
  return (
    <div className="main-content">
      <h2>About Trello Clone</h2>
      <p>
        This is a Trello Clone built using React. It allows users to create
        boards, lists, and cards to organize tasks efficiently.
      </p>
      <h3>Features</h3>
      <ul>
        <li>Create and manage boards</li>
        <li>Add lists to boards</li>
        <li>Create and move cards</li>
        <li>Drag and drop functionality</li>
      </ul>
      <h3>Getting Started</h3>
      <p>
        To get started, simply create an account and log in. You can then create
        your first board and start organizing your tasks!
      </p>
    </div>
  );
}

export default About;
