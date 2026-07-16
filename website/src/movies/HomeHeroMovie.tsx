"use client";

import ComputerIcon from "@mui/icons-material/Computer";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { ReactNode } from "react";

const HeroButton = (props: {
  title: string;
  href: string;
  icon: ReactNode;
  variant: "contained" | "outlined";
}) => (
  <Button
    variant={props.variant}
    size="large"
    component="a"
    href={props.href}
    startIcon={props.icon}
    sx={{
      fontWeight: 700,
      fontSize: "0.95rem",
      px: 3,
      py: 1.2,
      borderRadius: 2,
      textTransform: "none",
      borderColor:
        props.variant === "outlined" ? "rgba(255,255,255,0.3)" : undefined,
      // On the blue hero band the contained button must not inherit the theme
      // blue -- blue-on-blue would vanish. It mirrors ttsc's primary CTA:
      // a white button with blue-deep text.
      backgroundColor: props.variant === "contained" ? "#ffffff" : undefined,
      color: props.variant === "outlined" ? "rgba(255,255,255,0.9)" : "#154279",
      "&:hover": {
        borderColor:
          props.variant === "outlined" ? "rgba(255,255,255,0.6)" : undefined,
        backgroundColor:
          props.variant === "outlined" ? "rgba(255,255,255,0.05)" : "#f6fafd",
      },
    }}
  >
    {props.title}
  </Button>
);

const HomeHeroMovie = () => {
  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 10, md: 16 },
        textAlign: "center",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #154279 0%, #235fa9 60%, #2d73be 100%)",
      }}
    >
      {/* Gradient background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          component="img"
          src="/logo.png"
          alt="Typia"
          sx={{
            display: "block",
            mx: "auto",
            mb: 3,
            // logo.png is a blue-gradient wordmark on transparency; its ink
            // lands at 1.05-1.96:1 against this band and reads as a watermark.
            // Knock it out to solid white -- the pixel-dissolve silhouette is
            // what carries the mark, and it survives the flatten.
            filter: "brightness(0) invert(1)",
          }}
        />
        <Typography
          variant="h5"
          sx={{
            color: "rgba(255,255,255,0.92)",
            fontWeight: 400,
            fontSize: { xs: "1rem", sm: "1.15rem", md: "1.3rem" },
            lineHeight: 1.7,
            maxWidth: 700,
            mx: "auto",
            mb: 2,
          }}
        >
          Transform pure TypeScript types into
          <br />
          <strong style={{ color: "#ffffff", fontWeight: 700 }}>
            20,000x faster
          </strong>{" "}
          runtime validators, JSON serializers, and LLM schemas
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "rgba(255,255,255,0.66)",
            fontSize: "1rem",
            mb: 5,
          }}
        >
          Zero schema. Zero overhead. Just TypeScript.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <HeroButton
            title="Guide Documents"
            icon={<MenuBookIcon />}
            href="/docs"
            variant="contained"
          />
          <HeroButton
            title="Playground"
            icon={<ComputerIcon />}
            href="/playground"
            variant="outlined"
          />
          <HeroButton
            title="GitHub"
            icon={<GitHubIcon />}
            href="https://github.com/samchon/typia"
            variant="outlined"
          />
        </Box>
      </Container>
    </Box>
  );
};
export default HomeHeroMovie;
