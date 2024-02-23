import { useEffect, useState } from "react";
import { CustomThemeContext } from "./CustomThemeContext";

export const CustomThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    } else {
      const isDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return isDarkMode ? "dark" : "light";
    }
  };

  const [currentTheme, setCurrentTheme] = useState(getInitialTheme);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      setCurrentTheme(e.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const saveThemeToLocalStorage = (theme) => {
    localStorage.setItem("theme", theme);
  };
  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      saveThemeToLocalStorage(newTheme);
      return newTheme;
    });
  };

  return (
    <CustomThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </CustomThemeContext.Provider>
  );
};
