import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "../styles/style.css";

import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useMemo, createContext } from "react";
import React, { useEffect } from "react";
import { lightTheme, darkTheme } from "../theme/theme";
import Cookies from "js-cookie";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

const colorMode = Cookies.get("colorMode") || "dark";

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    const colorMode = Cookies.get("colorMode");
    if (colorMode !== undefined) {
      setMode(colorMode);
    } else {
      Cookies.set("colorMode", "dark");
      setMode("dark");
    }
  }, []);

  const toggleColorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((preMode) => {
          if (preMode === "dark") {
            setMode("light");
            Cookies.set("colorMode", "light");
          } else {
            setMode("dark");
            Cookies.set("colorMode", "dark");
          }
        });
      },
    }),
    []
  );
  const theme = useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );
  const Layout = Component.getLayout ?? (({ children }) => children);

  return (
    <ColorModeContext.Provider value={toggleColorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default MyApp;
