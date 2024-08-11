import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import "./Sidebar.css";

function Workspace() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className={`sidebar ${isSidebarOpen ? "open" : "collapsed"}`}>
        <div className="sidebar-header">
          <h2>Workspace</h2>
          <FaTimes className="close-icon" onClick={toggleSidebar} />
        </div>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
          <li>
            <Link to="/messages">Messages</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </div>
      <div
        className={`main-content-workspace ${isSidebarOpen ? "" : "expanded"}`}
      >
        {!isSidebarOpen && (
          <FaBars className="menu-icon" onClick={toggleSidebar} />
        )}
        <div className="sticky-notes-container">
        <Link to="/MyTask"><div className="sticky-note">My Task</div></Link>
          <div className="sticky-note">Team Workspace</div>
          <div className="sticky-note">Family</div>
          <div className="sticky-note">Diary</div>
        </div>
      </div>
    </>
  );
}

export default Workspace;
