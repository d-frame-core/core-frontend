import { createTheme } from "@mui/material/styles";
import purple from "@mui/material/colors/purple";
import green from "@mui/material/colors/green";

export const useTheme = () => {
  const theme = createTheme({
    direction: "ltr",
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[100],
      },
    },
  });

  return theme;
};
