"use client";

import { Box, Container, Typography } from "@mui/material";

const HomeSponsorMovie = () => (
  <Box sx={{ py: { xs: 6, md: 10 } }}>
    <Container maxWidth="md">
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.6rem", md: "2.2rem" },
            mb: 2,
            color: "rgba(255,255,255,0.95)",
          }}
        >
          Sponsors
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Box
          component="a"
          href="https://github.com/sponsors/samchon"
          sx={{ display: "inline-block" }}
        >
          <Box
            component="img"
            src="https://raw.githubusercontent.com/samchon/sponsor-images/refs/heads/master/public/circle.svg"
            alt="Sponsors"
            sx={{
              maxWidth: "100%",
              borderRadius: 2,
            }}
          />
        </Box>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="body1"
          sx={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            maxWidth: 550,
            mx: "auto",
          }}
        >
          Thanks for your support. Your{" "}
          <Box
            component="a"
            href="https://github.com/sponsors/samchon"
            sx={{
              color: "rgba(255,255,255,0.75)",
              textDecoration: "underline",
            }}
          >
            donation
          </Box>{" "}
          encourages typia development.
        </Typography>
      </Box>
    </Container>
  </Box>
);
export default HomeSponsorMovie;
