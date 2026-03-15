"use client";

import { Box, Container, Typography } from "@mui/material";

interface BenchmarkRow {
  library: string;
  is: string;
  assert: string;
  stringify: string;
  highlight?: boolean;
}

const rows: BenchmarkRow[] = [
  {
    library: "typia",
    is: "103,389",
    assert: "83,037",
    stringify: "811",
    highlight: true,
  },
  {
    library: "TypeBox",
    is: "103,389",
    assert: "17,026",
    stringify: "—",
  },
  {
    library: "ajv",
    is: "3,321",
    assert: "86",
    stringify: "—",
  },
  {
    library: "io-ts",
    is: "303",
    assert: "113",
    stringify: "—",
  },
  {
    library: "Zod",
    is: "41",
    assert: "40",
    stringify: "—",
  },
  {
    library: "class-validator",
    is: "3.56",
    assert: "2.41",
    stringify: "3.47",
  },
];

const cellSx = {
  px: 2.5,
  py: 1.8,
  fontSize: "0.88rem",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  fontFamily: "'JetBrains Mono', monospace",
};

const headerSx = {
  ...cellSx,
  fontWeight: 700,
  fontSize: "0.8rem",
  textTransform: "uppercase" as const,
  letterSpacing: 0.8,
  color: "rgba(255,255,255,0.5)",
  fontFamily: "inherit",
  borderBottom: "1px solid rgba(255,255,255,0.12)",
};

const HomeBenchmarkMovie = () => (
  <Box sx={{ py: { xs: 6, md: 10 } }}>
    <Container maxWidth="md">
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.6rem", md: "2.2rem" },
            mb: 2,
            color: "rgba(255,255,255,0.95)",
          }}
        >
          Benchmark Results
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "1.05rem",
            maxWidth: 600,
            mx: "auto",
          }}
        >
          Measured in MB/sec on an 11th Gen Intel i5-1135G7.
          <br />
          Higher is better.
        </Typography>
      </Box>
      <Box
        sx={{
          borderRadius: 2,
          border: "1px solid rgba(255,255,255,0.1)",
          overflow: "hidden",
        }}
      >
        <Box
          component="table"
          sx={{
            width: "100%",
            borderCollapse: "collapse",
            "& td, & th": { textAlign: "right" },
            "& td:first-of-type, & th:first-of-type": { textAlign: "left" },
          }}
        >
          <thead>
            <tr>
              <Box component="th" sx={headerSx}>
                Library
              </Box>
              <Box component="th" sx={headerSx}>
                is()
              </Box>
              <Box component="th" sx={headerSx}>
                assert()
              </Box>
              <Box component="th" sx={headerSx}>
                stringify()
              </Box>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.library}>
                <Box
                  component="td"
                  sx={{
                    ...cellSx,
                    fontWeight: row.highlight ? 700 : 400,
                    color: row.highlight
                      ? "rgb(0,180,255)"
                      : "rgba(255,255,255,0.8)",
                  }}
                >
                  {row.library}
                </Box>
                <Box
                  component="td"
                  sx={{
                    ...cellSx,
                    color: row.highlight
                      ? "rgba(80,220,100,0.9)"
                      : "rgba(255,255,255,0.65)",
                  }}
                >
                  {row.is}
                </Box>
                <Box
                  component="td"
                  sx={{
                    ...cellSx,
                    color: row.highlight
                      ? "rgba(80,220,100,0.9)"
                      : "rgba(255,255,255,0.65)",
                  }}
                >
                  {row.assert}
                </Box>
                <Box
                  component="td"
                  sx={{
                    ...cellSx,
                    color: row.highlight
                      ? "rgba(80,220,100,0.9)"
                      : "rgba(255,255,255,0.65)",
                  }}
                >
                  {row.stringify}
                </Box>
              </tr>
            ))}
          </tbody>
        </Box>
      </Box>
    </Container>
  </Box>
);
export default HomeBenchmarkMovie;
