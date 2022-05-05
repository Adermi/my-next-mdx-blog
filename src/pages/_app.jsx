import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "../styles/style.css";

import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useCallback, useMemo, createContext } from "react";
import React from "react";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

function MyApp({ Component, pageProps }) {
  const Layout = Component.getLayout ?? (({ children }) => children);

  const [mode, setMode] = useState("light");

  const toggleColorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((preMode) => (preMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode },
      }),
    [mode]
  );

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
