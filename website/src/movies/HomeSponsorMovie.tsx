"use client";

import { Box, Container, Typography } from "@mui/material";

const HomeSponsorMovie = () => (
  <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#ffffff" }}>
    <Container maxWidth="md">
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.6rem", md: "2.2rem" },
            mb: 2,
            color: "#0d1f36",
          }}
        >
          Sponsors
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        {/* The OpenCollective strip draws its avatars as near-white plates
            (#e6f3ff letter circles, #f0f1f2 guest circles) that sat on the
            old dark background. On white they measure ~1.13:1 and read as
            loose marks, so the strip gets a tinted plate of its own. */}
        <Box
          component="a"
          href="https://opencollective.com/typia"
          sx={{
            display: "inline-block",
            p: { xs: 1.5, md: 2 },
            borderRadius: 2,
            backgroundColor: "#f6fafd",
            border: "1px solid #c0d4ed",
            lineHeight: 0,
          }}
        >
          <Box
            component="img"
            src="https://opencollective.com/typia/backers.svg?avatarHeight=75&width=600"
            alt="Backers"
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
            color: "#50647c",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            maxWidth: 550,
            mx: "auto",
          }}
        >
          Thanks for your support. Your{" "}
          <Box
            component="a"
            href="https://opencollective.com/typia"
            sx={{
              color: "#235fa9",
              textDecoration: "underline",
              transition: "color 0.2s",
              "&:hover": {
                color: "#154279",
              },
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
