import React, { useState } from "react";

const Sidebar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

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
          darkMode ? "bg-dark text-white" : "bg-white text-dark"
        }`}
        style={{
          minWidth: isToggled ? "200px" : "80px",
          transition: "min-width 0.3s ease",
        }}
      >
        {/* Logo */}
        <div
          className={`d-flex align-items-center p-3`}
          style={{ transition: "all 0.3s ease" }}
        >
          <img
            src="/logo.png"
            alt="Logo"
            style={{
              width: "50px",
              height: "auto",
              transition: "all 0.3s ease",
            }}
          />
          {isToggled && (
            <span className="ms-3 fw-bold" style={{ fontSize: "1.2rem" }}>
              Edvora
            </span>
          )}
        </div>

        {/* User Profile */}
        <div
          className="d-flex flex-column align-items-center pb-3 px-3"
          style={{ gap: "10px" }}
        >
          <div className="d-flex align-items-center w-100">
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "white",
                border: "3px solid black",
                marginLeft: "2px"
              }}
            ></div>
            {isToggled && (
              <div className="ms-3">
                <div>Nama User</div>
                <div className="text-muted">Guru</div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="list-unstyled flex-grow-1 d-flex flex-column align-items-center">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="w-100"
              style={{
                textAlign: "left",
                paddingLeft: "7px", // Menjaga posisi ikon tetap stabil
                transition: "all 0.3s ease",
              }}
            >
              <a
                href={item.link}
                className="d-flex align-items-center text-decoration-none"
                style={{
                  gap: "25px",
                  padding: "10px 20px",
                }}
              >
                <i
                  className={`bx ${item.icon}`}
                  style={{
                    fontSize: "1.8rem",
                    minWidth: "30px",
                  }}
                ></i>
                {isToggled && <span>{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>

        {/* Dark Mode & Settings */}
        <div className="p-3 d-flex flex-column gap-3 align-items-center">
          <button
            onClick={toggleDarkMode}
            className="btn btn-light d-flex align-items-center justify-content-center w-100"
          >
            <i
              className={`bx ${darkMode ? "bx-sun" : "bx-moon"}`}
              style={{ fontSize: "1.8rem" }}
            ></i>
            {isToggled && (
              <span className="ms-2">
                {darkMode ? "Light Mode" : "Dark Mode"}
              </span>
            )}
          </button>
          <button className="btn btn-primary d-flex align-items-center justify-content-center w-100">
            <i className="bx bx-cog" style={{ fontSize: "1.8rem" }}></i>
            {isToggled && <span className="ms-2">Settings</span>}
          </button>
        </div>
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
