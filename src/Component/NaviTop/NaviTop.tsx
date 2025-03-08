import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./NaviTop.module.css";

const NaviTop: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "About", path: "/main/about" },
    { name: "Service", path: "/main/service" },
    { name: "Portfolio", path: "/main/portfolio" },
    { name: "Client", path: "/main/client" },
    { name: "Contact us", path: "/main/contact" },
  ];

  return (
    <div className={styles.NaviTop}>
      <img
        src="/insomeCI.png"
        alt="CI"
        className={styles.CI}
        onClick={() => navigate("/main")}
      />
      {menuItems.map((item) => (
        <div
          key={item.name}
          onClick={() => navigate(item.path)}
          className={`${styles.Topitem} ${
            location.pathname === item.path ? styles.active : ""
          }`}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default NaviTop;
