import React from "react";
import styles from "./Navbar.module.scss";
import dFrameLogo from "../../assets/Images/d-frame-logo.png";
import Button from "@mui/material/Button";

const Navbar = (props: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={dFrameLogo} alt="logo" className={styles.logo} />
        <span className={styles.name}>D Frame</span>
      </div>
      {props.signOut && (
        <Button
          className={styles.signOutButton}
          variant="contained"
          onClick={props.signOut}
          sx={{ marginRight: "2rem" }}
        >
          Sign Out
        </Button>
      )}
    </div>
  );
};

export default Navbar;
