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
          Thanks for your support. Your donation encourages typia development.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "rgba(255,255,255,0.4)",
            fontSize: "0.9rem",
            mt: 1.5,
            mb: 4,
          }}
        >
          Also, typia is re-distributing quarter of donations to{" "}
          <Box
            component="a"
            href="https://github.com/nonara/ts-patch"
            sx={{
              color: "rgb(0,180,255)",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            nonara/ts-patch
          </Box>
          .
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Box
          component="a"
          href="https://opencollective.com/typia"
          sx={{ display: "inline-block" }}
        >
          <Box
            component="img"
            src="https://opencollective.com/typia/badge.svg?avatarHeight=75&width=600"
            alt="Sponsors"
            sx={{
              maxWidth: "100%",
              borderRadius: 2,
            }}
          />
        </Box>
      </Box>
    </Container>
  </Box>
);
export default HomeSponsorMovie;
