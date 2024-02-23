import { useContext } from "react";

import { CssBaseline, ThemeProvider } from "@mui/material";

import { DarkTheme, LightTheme } from "./themeMui";
import { CustomThemeContext } from "../contexts/CustomThemeContext";

export const AppTheme = ({ children }) => {
  const { currentTheme } = useContext(CustomThemeContext);

  const appTheme = currentTheme === "light" ? LightTheme : DarkTheme;

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
