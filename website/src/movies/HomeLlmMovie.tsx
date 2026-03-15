"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import HomeCodeHighlight from "../components/home/HomeCodeHighlight";

const LLM_CODE = `import { LlmJson } from "@typia/utils";
import typia, { tags } from "typia";

class ShoppingOrderController {
  /** some description comment for AI */
  create(input: IShoppingOrderCreate): void;
}

// Generate application
const app = typia.llm.application<ShoppingOrderController>();
const func = app.functions[0];

// Lenient parse + validation feedback
const data = func.parse(llmOutput);
const result = func.validate(data);
if (result.success === false)
  const feedback = LlmJson.stringify(result);`;

const callouts = [
  {
    icon: "✅",
    title: "Validation Feedback",
    desc: "Validate LLM output with typia.validate, then feed IValidation.IFailure back to the LLM for self-correction",
  },
  {
    icon: "🔧",
    title: "Lenient JSON Parsing",
    desc: "Recover from malformed JSON that LLMs frequently produce — broken quotes, trailing commas, missing brackets",
  },
  {
    icon: "🔄",
    title: "Type Coercion",
    desc: 'Automatically cast LLM string responses to proper TypeScript types — "1" becomes number 1',
  },
  {
    icon: "📐",
    title: "Schema Generation",
    desc: "Generate function calling schemas directly from pure TypeScript types. No manual schema writing needed",
  },
];

const HomeLlmMovie = () => (
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
          LLM Function Calling
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
          Generate function calling schemas directly from TypeScript types.
          <br />
          Validation feedback boosts up LLM function calling success rates.
        </Typography>
      </Box>
      <Grid container spacing={4} alignItems="stretch">
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              height: "100%",
              borderRadius: 2,
              border: "1px solid rgba(255,255,255,0.1)",
              backgroundColor: "rgba(0,0,0,0.3)",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                px: 2.5,
                py: 1.5,
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                backgroundColor: "rgba(255,255,255,0.03)",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
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
                  backgroundColor: "rgba(180,0,255,0.6)",
                  color: "#fff",
                }}
              >
                AI
              </Box>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255,255,255,0.6)", fontWeight: 500 }}
              >
                LLM Integration
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
                fontFamily:
                  "'Fira Code', 'Cascadia Code', 'JetBrains Mono', monospace",
                color: "rgba(255,255,255,0.85)",
                "&::-webkit-scrollbar": { height: 6 },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "rgba(255,255,255,0.15)",
                  borderRadius: 3,
                },
              }}
            >
              <code>
                <HomeCodeHighlight>{LLM_CODE}</HomeCodeHighlight>
              </code>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2.5,
              height: "100%",
              justifyContent: "center",
            }}
          >
            {callouts.map((c) => (
              <Box
                key={c.title}
                sx={{
                  display: "flex",
                  gap: 2,
                  p: 2,
                  borderRadius: 2,
                  border: "1px solid rgba(255,255,255,0.08)",
                  backgroundColor: "rgba(255,255,255,0.02)",
                }}
              >
                <Typography sx={{ fontSize: "1.4rem" }}>{c.icon}</Typography>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      mb: 0.3,
                      color: "rgba(255,255,255,0.95)",
                    }}
                  >
                    {c.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "0.82rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {c.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);
export default HomeLlmMovie;
