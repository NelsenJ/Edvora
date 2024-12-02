
import React, { useState } from "react";

const Sidebar = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => setIsToggled(!isToggled);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const menuItems = [
    { icon: "bx-grid-alt", label: "Dashboard", link: "/dashboard" },
    { icon: "bx-line-chart", label: "Analytics", link: "/analytics" },
    { icon: "bx-folder", label: "Projects", link: "/projects" },
    { icon: "bx-task", label: "Tasks", link: "/tasks" },
    { icon: "bx-message-dots", label: "Messages", link: "/messages" },
    { icon: "bx-calendar", label: "Calendar", link: "/calendar" },
    { icon: "bx-slider", label: "Settings", link: "/settings" },
    { icon: "bx-help-circle", label: "Support", link: "/support" },
  ];

  return (
    <div className="d-flex position-relative">
      {/* Sidebar */}
      <div
        className={`vh-100 d-flex flex-column shadow ${
          darkMode ? "bg-dark text-white" : "bg-light text-dark"
        }`}
        style={{
          width: isToggled ? "200px" : "80px",
          transition: "width 0.3s ease",
        }}
      >
        {/* Logo */}
        <div
          className="d-flex align-items-center p-3"
          style={{ gap: "10px", transition: "all 0.3s ease" }}
        >
          <img
            src="/logo.png"
            alt="Logo"
            style={{
              width: "40px",
              height: "40px",
              transition: "all 0.3s ease",
            }}
          />
          {isToggled && (
            <span className="fw-bold" style={{ fontSize: "1.2rem" }}>
              Edvora
            </span>
          )}
        </div>

        {/* User Profile */}
        <div className="d-flex flex-column align-items-center p-3">
          <div
            className="rounded-circle"
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "white",
              border: "3px solid black",
            }}
          ></div>
          {isToggled && (
            <div className="text-center mt-2">
              <div>Nama User</div>
              <small className="text-muted">Guru</small>
            </div>
          )}
        </div>

        {/* Navigation Links */}
        <ul className="list-unstyled flex-grow-1">
          {menuItems.map((item, index) => (
            <li key={index} className="w-100">
              <a
                href={item.link}
                className="d-flex align-items-center text-decoration-none p-2"
                style={{
                  color: darkMode ? "white" : "black",
                  gap: "15px",
                  paddingLeft: "10px",
                  transition: "all 0.3s ease",
                }}
              >
                <i className={`bx ${item.icon}`} style={{ fontSize: "1.6rem" }}></i>
                {isToggled && <span>{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>

        {/* Dark Mode & Settings */}
        <div className="p-3 d-flex flex-column gap-2">
          <button
            onClick={toggleDarkMode}
            className="btn btn-light w-100 d-flex align-items-center justify-content-center"
          >
            <i className={`bx ${darkMode ? "bx-sun" : "bx-moon"}`} style={{ fontSize: "1.4rem" }}></i>
            {isToggled && (
              <span className="ms-2">{darkMode ? "Light Mode" : "Dark Mode"}</span>
            )}
          </button>
          <button className="btn btn-primary w-100 d-flex align-items-center justify-content-center">
            <i className="bx bx-cog" style={{ fontSize: "1.4rem" }}></i>
            {isToggled && <span className="ms-2">Settings</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="flex-grow-1 p-4"
        style={{
          backgroundColor: darkMode ? "#f4f4f4" : "white",
          transition: "all 0.3s ease",
        }}
      >
        {children}
      </div>

      {/* Floating Toggle Button */}
      <button
        onClick={handleToggle}
        className="btn btn-light position-absolute rounded-circle shadow-sm"
        style={{
          top: "50px",
          left: isToggled ? "180px" : "70px",
          zIndex: 10,
          transition: "all 0.3s ease",
        }}
      >
        {isToggled ? "<" : ">"}
      </button>
    </div>
  );
};

export default Sidebar;

