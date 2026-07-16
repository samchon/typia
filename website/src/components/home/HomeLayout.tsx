"use client";

import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import { ReactNode } from "react";

/**
 * The landing page renders MUI components inside Nextra's article column.
 * Without a theme of its own MUI falls back to its stock palette, which
 * paints `contained` buttons in MUI blue (#1976d2) — close enough to the
 * site blue to look like a mistake rather than a choice. Bind the palette
 * to the same tokens `global.css` defines so the two agree.
 */
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#235fa9",
      dark: "#154279",
      light: "#2d73be",
      contrastText: "#ffffff",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#0d1f36",
      secondary: "#50647c",
    },
  },
  typography: {
    fontFamily: "inherit",
  },
});

/**
 * No negative margins here: `global.css` drops Nextra's sidebar spacer and
 * content-width cap for `.typia-landing`, so the article is already full
 * bleed. The old -15rem pull was compensating for that column and would now
 * push the sections off-center and past the viewport.
 */
const Root = styled("div")({
  "& > *": {
    maxWidth: "100%",
  },
});

const HomeLayout = (props: { children?: ReactNode; className?: string }) => (
  <ThemeProvider theme={theme}>
    <Root className={props.className}>{props.children}</Root>
  </ThemeProvider>
);
export default HomeLayout;
