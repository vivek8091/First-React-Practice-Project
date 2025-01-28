import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const style = {
    cursor: "pointer",
    listStyle: "none",
    padding: "10px",
  };

  const getActiveStyle = (path) => {
    return location.pathname === path
      ? { color: "red", fontWeight: "bold" } // Highlight active link
      : {};
  };
  return (
    <>
      <h3>Header</h3>

      <ul>
        <li
          onClick={() => navigate("/")}
          style={{ ...style, ...getActiveStyle("/") }}
        >
          Home
        </li>
        <li
          onClick={() => navigate("/About")}
          style={{ ...style, ...getActiveStyle("/About") }}
        >
          About
        </li>
      </ul>
    </>
  );
}

export default Header;
