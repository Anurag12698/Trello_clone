import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import "./Sidebar.css";
function MyTask() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className={`sidebar ${isSidebarOpen ? "open" : "collapsed"}`}>
        <div className="sidebar-header">
          <h2>Board</h2>
          <FaTimes className="close-icon" onClick={toggleSidebar} />
        </div>
        <ul>
          <li>
            <Link to="/Board-1">Board-1</Link>
          </li>
          <li>
            <Link to="/Board-2">Board-2</Link>
          </li>
          {/* <li>
            <Link to="/tasks">Tasks</Link>
          </li>
          <li>
            <Link to="/messages">Messages</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li> */}
        </ul>
      </div>
      <div
        className={`main-content-workspace ${isSidebarOpen ? "" : "expanded"}`}
      >
        {!isSidebarOpen && (
          <FaBars className="menu-icon" onClick={toggleSidebar} />
        )}
        <div className="sticky-notes-container">
          <Link to="/MyTask">
            <div className="sticky-note">Create</div>
          </Link>
          <div className="sticky-note">Board-1</div>
          <div className="sticky-note">Board-2</div>
          {/* <div className="sticky-note">Diary</div> */}
        </div>
      </div>
    </>
  );
}
export default MyTask;
