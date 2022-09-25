import { Button, Stack } from "@mui/material";
import React, { useState } from "react";
import styles from "./Modal.module.scss";
import { FormControl, OutlinedInput } from "@mui/material";
import axios from "axios";

interface IBool {
  setIsOpen: (value: boolean) => any;
  magic: any;
}

const UpdateEmailModal = ({ setIsOpen, magic }: IBool) => {
  const [email, setEmail] = useState("");

  // async function magicUpdateEmail(email: string) {
  // 	try {
  // 		await magic.user.updateEmail({ email: email });
  //         setIsOpen(false)
  // 	} catch {
  // 		console.log("Error occured while updating email.")
  // 	}
  // }

  return (
    <div
      style={{
        backgroundColor: "#000",
      }}
    >
      <Stack
        spacing={2}
        direction="row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormControl sx={{ color: "white", width: "100%" }}>
          <OutlinedInput
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ color: "white", border: "1px solid white" }}
          />
        </FormControl>
        <Button
          onClick={async () => {
            try {
              await magic.user.updateEmail({ email: email });
              setIsOpen(false);
              const response = await magic.auth.loginWithMagicLink({ email: email });
              console.log(
                "🕵️‍♂️ 🥷🏻 : ==> file: Page1.tsx : ==> line 16 : ==> response",
                response
              );
              const user = await axios.get(
                `${process.env.REACT_APP_BACKEND_URL}/api/user/update-email?email=${email}`,
                {
                  headers: {
                    Authorization: "Bearer " + response,
                  },
                }
              );
              console.log(user)
            } catch {
              console.log("Error occured while updating email.");
            }
          }}
        >
          Update
        </Button>
        <Button className={styles.cancelBtn} onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
      </Stack>
    </div>
  );
};

export { UpdateEmailModal };
