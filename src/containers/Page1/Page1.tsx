import React, { useEffect, useState } from "react";
import { Magic } from "magic-sdk";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./Page1.module.scss";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Checkbox,
  OutlinedInput,
} from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Page1.module.scss";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import dFrameHero from "../../assets/Images/d-frame-hero.png";
import { UpdateEmailModal } from "../../components/UpdateEmailModal";

function Page1() {
  const m = new Magic("pk_live_C978F3A837C4396C");
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [checkedTC, setCheckedTC] = useState(false);

  useEffect(() => {
    setLoggedIn(window.sessionStorage.getItem("loggedIn") == "true");
  });
  async function initiateMagicRequest() {
    if (!checkedTC) {
      alert("Please accept the Terms and conditions.");
      return;
    }
    try {
      const response = await m.auth.loginWithMagicLink({ email: email });
      console.log(
        "🕵️‍♂️ 🥷🏻 : ==> file: Page1.tsx : ==> line 16 : ==> response",
        response
      );
      const isLoggedIn = await m.user.isLoggedIn();
      window.sessionStorage.setItem("loggedIn", String(isLoggedIn));
      setLoggedIn(isLoggedIn);
      const user = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/login`,
        {
          headers: {
            Authorization: "Bearer " + response,
          },
        }
      );
      console.log(user);
    } catch {
      // Handle errors if required!
    }
  }

  const handleCheckboxChange = (e: any) => {
    setCheckedTC(!checkedTC);
  };
  async function initiateMagicLogout() {
    try {
      await m.user.logout();
      console.log(await m.user.isLoggedIn()); // => `false`
      setLoggedIn(false);
      window.location.reload();
    } catch {
      // Handle error
    }
  }

  return !loggedIn ? (
    <div
      style={{
        position: "relative",
        backgroundColor: "#000",
      }}
    >
      <Navbar />
      <Stack
        spacing={2}
        direction="row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div className={styles.blur1}></div>
        <div className={styles.blur2}></div>

        <div className={styles.hero}>
          <img
            src={dFrameHero}
            alt="image"
            style={{ height: "35rem", width: "37rem" }}
          />

          <div
            className="container"
            style={{
              height: "8rem",
              width: "22rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <span className={styles.formHeading}>Create Your Account</span>

            <FormControl sx={{ color: "white", width: "100%" }}>
              <OutlinedInput
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ color: "white", border: "1px solid white" }}
              />
            </FormControl>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "#49c0f3",
                      "&.Mui-checked": {
                        color: "#49c0f3",
                      },
                    }}
                    onChange={handleCheckboxChange}
                  />
                }
                label="I agree to all the Terms and Conditions."
                style={{ color: "white" }}
              />
            </FormGroup>
            <Button variant="contained" onClick={initiateMagicRequest}>
              Sign In
            </Button>
          </div>
        </div>
      </Stack>
    </div>
  ) : (
    <div
      style={{
        position: "relative",
        backgroundColor: "#000",
      }}
    >
      <Navbar signOut={initiateMagicLogout} />
      <Stack
        spacing={2}
        direction="row"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          gap: "2rem",
        }}
      >
        <div
          style={{ color: "white", fontSize: "1.5rem" }}
          className={styles.updateContainer}
        >
          User has logged in. User dashboard will reside here
        </div>
        {/* <Button variant="contained" onClick={initiateMagicLogout}>
          Sign Out
        </Button> */}
        <Button variant="contained" onClick={() => setIsOpen(true)}>
          Update Email
        </Button>
        {isOpen && <UpdateEmailModal setIsOpen={setIsOpen} magic={m} />}
      </Stack>
    </div>
  );
}

export default Page1;
