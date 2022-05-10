import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";
import {
  CssBaseline,
  Typography,
  Container,
  Button,
  Paper,
} from "@mui/material";
import {
  green,
  red,
  blue,
  deepOrange,
  amber,
  grey,
} from "@mui/material/colors";
import { useMemo, useState } from "react";

export default function Text() {
  const [mode, setMode] = useState("light");

  // const theme = useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode,
  //         primary: {
  //           main: "#0971f1",
  //           // darker: "#053e85",
  //         },
  //         // primary: {
  //         //   main: '#23272f',
  //         //   light: 'red',
  //         //   dark: '#343a46'
  //         // },
  //       },
  //     }),
  //   [mode]
  // );

  const getDesignTokens = (PaletteMode) => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: blue,
            divider: amber[200],
            text: {
              primary: red[900],
              secondary: red[800],
            },
            background: {
              default: 'gold',
              paper: 'red'
            }
          }
        : {
            // palette values for dark mode
            primary: deepOrange,
            divider: deepOrange[700],
            background: {
              default: deepOrange[900],
              paper: deepOrange[900],
            },
            text: {
              primary: "#fff",
              secondary: grey[500],
            },
          }),
    },
  });

  const theme = createTheme(getDesignTokens());

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <CssBaseline />

        <Paper elevation={10} variant="outlined">
          <Button
            sx={{
              "&.MuiButton-root": {
                height: "100px",
              },
              "&.MuiButton-text": {},
            }}
          >
            按钮1
          </Button>
          <Button>按钮2</Button>

          <Button
            onClick={(e) => {
              mode === "light" ? setMode("dark") : setMode("light");
            }}
          >
            setMode
          </Button>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
