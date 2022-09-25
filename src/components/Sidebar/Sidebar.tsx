import React from "react";
import styles from "./Sidebar.module.scss";
import dFrameLogo from "../../assets/Images/d-frame-logo.png";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={dFrameLogo} alt="" className={styles.logo} />
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>D Frame</h3>
        </div>
      </div>
      <div className={styles.menuContainer}>
        {SidebarData.map((item) => (
          <Link className={styles.itemContainer} key={item.id} to={item.to}>
            <h5>{item.title}</h5>
          </Link>
        ))}
      </div>
    </div>
  );
};
