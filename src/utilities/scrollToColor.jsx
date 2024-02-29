import { useScrollTrigger } from "@mui/material";
import { cloneElement, useContext } from "react";

import { CustomThemeContext } from "../contexts/CustomThemeContext";
import { DarkTheme, LightTheme } from "../theme/themeMui";

const ScrollHandler = (props) => {
  const { currentTheme } = useContext(CustomThemeContext);

  const theme = currentTheme === "dark" ? DarkTheme : LightTheme;

  console.log(theme.palette);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined,
  });

  return cloneElement(props.children, {
    sx: {
      backgroundColor: trigger ? "theme.palette.primary" : "transparent",
      transition: trigger ? "0.3s" : "0.5s",
      boxShadow: "none",
      padding: "10px 0px",
      backgroundImage: "none",
    },
  });
};

const ScrollToColor = (props) => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default ScrollToColor;
