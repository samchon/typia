"use client";

import { Box, Container, Typography } from "@mui/material";
import HomeCodeHighlight from "../components/home/HomeCodeHighlight";

const BEFORE_CODE = `import typia, { tags } from "typia";

interface IMember {
  id: string & tags.Format<"uuid">;
  email: string & tags.Format<"email">;
  age: number &
    tags.Type<"uint32"> &
    tags.ExclusiveMinimum<19> &
    tags.Maximum<100>;
}

// just one line, with pure TypeScript type
const check: boolean = typia.is<IMember>(input);`;

const AFTER_CODE = `// compiled JavaScript — no schema overhead
((input) => {
  return (
    "object" === typeof input &&
    null !== input &&
    "string" === typeof input.id &&
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5].*$/.test(input.id) &&
    "string" === typeof input.email &&
    /^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$/.test(input.email) &&
    "number" === typeof input.age &&
    Number.isInteger(input.age) &&
    input.age >= 0 &&
    19 < input.age &&
    100 >= input.age
  );
})`;

const CodePanel = (props: {
  title: string;
  label: string;
  labelColor: string;
  code: string;
}) => (
  <Box
    sx={{
      flex: 1,
      minWidth: 0,
      borderRadius: 2,
      border: "1px solid rgba(255,255,255,0.1)",
      overflow: "hidden",
      backgroundColor: "rgba(0,0,0,0.3)",
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        px: 2.5,
        py: 1.5,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        backgroundColor: "rgba(255,255,255,0.03)",
      }}
    >
      <Box
        sx={{
          px: 1.5,
          py: 0.3,
          borderRadius: 1,
          fontSize: "0.7rem",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 0.5,
          backgroundColor: props.labelColor,
          color: "#fff",
        }}
      >
        {props.label}
      </Box>
      <Typography
        variant="body2"
        sx={{ color: "rgba(255,255,255,0.6)", fontWeight: 500 }}
      >
        {props.title}
      </Typography>
    </Box>
    <Box
      component="pre"
      sx={{
        p: 2.5,
        m: 0,
        overflow: "auto",
        fontSize: { xs: "0.72rem", md: "0.8rem" },
        lineHeight: 1.7,
        fontFamily: "'Fira Code', 'Cascadia Code', 'JetBrains Mono', monospace",
        color: "rgba(255,255,255,0.85)",
        "&::-webkit-scrollbar": { height: 6 },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(255,255,255,0.15)",
          borderRadius: 3,
        },
      }}
    >
      <code>
        <HomeCodeHighlight>{props.code}</HomeCodeHighlight>
      </code>
    </Box>
  </Box>
);

const HomeCompilationMovie = () => (
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
          AOT Compilation Magic
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "1.05rem",
            maxWidth: 650,
            mx: "auto",
          }}
        >
          Write TypeScript types as you normally would. At compile time, typia
          analyzes the AST and generates dedicated, optimized validation code.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexDirection: { xs: "column", md: "row" },
          alignItems: "stretch",
        }}
      >
        <CodePanel
          title="Your TypeScript Code"
          label="Input"
          labelColor="rgba(0,150,255,0.7)"
          code={BEFORE_CODE}
        />
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            color: "rgba(255,255,255,0.3)",
            fontSize: "2rem",
            px: 1,
          }}
        >
          →
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "center",
            color: "rgba(255,255,255,0.3)",
            fontSize: "2rem",
          }}
        >
          ↓
        </Box>
        <CodePanel
          title="Compiled Output"
          label="Output"
          labelColor="rgba(80,200,0,0.7)"
          code={AFTER_CODE}
        />
      </Box>
    </Container>
  </Box>
);
export default HomeCompilationMovie;
