"use client";

import { Box, Container, Grid, Typography } from "@mui/material";

const ComparisonColumn = (props: {
  label: string;
  labelColor: string;
  items: { icon: string; text: string }[];
  borderColor: string;
}) => (
  <Grid item xs={12} md={6}>
    <Box
      sx={{
        borderRadius: 2,
        border: `1px solid ${props.borderColor}`,
        overflow: "hidden",
        height: "100%",
      }}
    >
      <Box
        sx={{
          px: 3,
          py: 1.5,
          backgroundColor: `${props.borderColor}15`,
          borderBottom: `1px solid ${props.borderColor}`,
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            color: props.labelColor,
            fontSize: "0.95rem",
          }}
        >
          {props.label}
        </Typography>
      </Box>
      <Box sx={{ p: 3 }}>
        {props.items.map((item, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 1.5,
              mb: i < props.items.length - 1 ? 2.5 : 0,
            }}
          >
            <Typography sx={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
              {item.icon}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.6,
                fontSize: "0.9rem",
              }}
            >
              {item.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  </Grid>
);

const HomeInnovationMovie = () => (
  <Box sx={{ py: { xs: 6, md: 10 } }}>
    <Container maxWidth="lg">
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
          Why AOT Compilation?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "1.05rem",
            maxWidth: 700,
            mx: "auto",
          }}
        >
          Traditional validators parse schemas at runtime. Typia generates
          dedicated validation code at compile time — the difference is
          measured in orders of magnitude.
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <ComparisonColumn
          label="Traditional Approach"
          labelColor="rgba(255,100,100,0.9)"
          borderColor="rgba(255,100,100,0.25)"
          items={[
            {
              icon: "✕",
              text: "Define a separate schema object (Zod, io-ts, class-validator decorators)",
            },
            {
              icon: "✕",
              text: "Schema is parsed and interpreted at every function call — runtime overhead",
            },
            {
              icon: "✕",
              text: "TypeScript type and schema easily drift apart — double maintenance",
            },
            {
              icon: "✕",
              text: "Complex union types and nested objects require verbose, manual handling",
            },
          ]}
        />
        <ComparisonColumn
          label="Typia — AOT Compilation"
          labelColor="rgba(0,200,100,0.9)"
          borderColor="rgba(0,200,100,0.25)"
          items={[
            {
              icon: "✓",
              text: "Write pure TypeScript types — no schema DSL, no decorators, no duplication",
            },
            {
              icon: "✓",
              text: "Compiler analyzes the type AST and emits optimized native code — zero runtime parsing",
            },
            {
              icon: "✓",
              text: "Type and validator are always in sync — single source of truth",
            },
            {
              icon: "✓",
              text: "Full support for unions, intersections, recursion, template literals, and tagged types",
            },
          ]}
        />
      </Grid>
    </Container>
  </Box>
);
export default HomeInnovationMovie;
