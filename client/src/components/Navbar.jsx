import React, { useState } from "react";

const Sidebar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className={`bg-primary text-white vh-100 d-flex flex-column ${
          isToggled ? "p-3" : "p-1"
        }`}
        style={{
          width: isToggled ? "244px" : "80px",
          transition: "width 0.3s",
          position: "relative",
        }}
      >
        {/* Logo */}
        <div className="text-center mb-3">
          <img
            src="/logo.png"
            alt="Logo"
            style={{
              width: isToggled ? "120px" : "70px",
              height: "auto",
              transition: "width 0.3s",
            }}
          />
        </div>

        {/* User Section */}
        <div
          className={`mb-4 ${
            isToggled ? "text-start" : "text-center"
          }`}
        >
          <i class='bx bxs-user-circle' ></i>
          {isToggled && (
            <div className="mt-2">
              <p className="mb-0">John Doe</p>
              <small className="text-muted">Administrator</small>
            </div>
          )}
        </div>

        {/* Navigation */}
        <ul className="list-unstyled flex-grow-1">
          <li className="mb-2">
            <a href="/" className="text-white text-decoration-none d-flex align-items-center">
              <i className="bx bx-home me-2"></i>
              {isToggled && <span>Home</span>}
            </a>
          </li>
          <li className="mb-2">
            <a href="/about" className="text-white text-decoration-none d-flex align-items-center">
              <i className="bx bx-info-circle me-2"></i>
              {isToggled && <span>About</span>}
            </a>
          </li>
          <li className="mb-2">
            <a href="/functions" className="text-white text-decoration-none d-flex align-items-center">
              <i className="bx bx-cog me-2"></i>
              {isToggled && <span>Other Functions</span>}
            </a>
          </li>
        </ul>

        {/* Floating Toggle Button */}
        <button
          onClick={handleToggle}
          className="btn btn-secondary position-absolute"
          style={{
            top: "10%",
            right: "-20px",
            zIndex: 10,
            fontSize: "0.8rem",
          }}
        >
          {isToggled ? "<" : ">"}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        <h1>Main Content</h1>
        <p>This is where the main content will go.</p>
      </div>
    </div>
  );
};

export default Sidebar;
