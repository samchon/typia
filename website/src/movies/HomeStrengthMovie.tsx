"use client";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import HomeCodeBlock from "../components/home/HomeCodeBlock";

interface FeatureCardProps {
  icon: string;
  title: string;
  code: HomeCodeBlock.IProps;
  metric?: string;
  metricNote?: string;
  description: string;
  href: string;
}

const features: FeatureCardProps[] = [
  {
    icon: "/favicon/android-chrome-512x512.png",
    title: "Super-fast Validation",
    code: { method: "validate", argument: true },
    metric: "20,000x faster",
    metricNote: "than class-validator",
    description:
      "AOT-compiled runtime validators outperform class-validator by 20,000x. Supports complex union types, recursive structures, and the most detailed error reporting.",
    href: "/docs/validators/validate",
  },
  {
    icon: "/images/home/json.png",
    title: "JSON Serialization",
    code: { namespace: "json", method: "stringify", argument: true },
    metric: "200x faster",
    metricNote: "than class-transformer",
    description:
      "Type-safe JSON stringify 200x faster than class-transformer. JSON schema generation for OpenAPI is also supported.",
    href: "/docs/json/stringify",
  },
  {
    icon: "/images/home/openai.svg",
    title: "AI Function Calling Harness",
    code: {
      namespace: "llm",
      method: "application",
      template: "App",
      argument: false,
    },
    metric: "6.75% → 100%",
    metricNote: "in qwen3-coder-next",
    description:
      "The complete function calling harness: schema generation, lenient JSON parsing, type coercion, and validation feedback. One TypeScript type drives everything.",
    href: "/docs/llm/application",
  },
  {
    icon: "/images/home/protobuf.png",
    title: "Protocol Buffers",
    code: { namespace: "protobuf", method: "encode", argument: true },
    metric: "Full Spec",
    metricNote: "only one in TypeScript",
    description:
      "The only TypeScript library supporting the full Protocol Buffer spec. No .proto files needed — just use your TypeScript types.",
    href: "/docs/protobuf/encode",
  },
  {
    icon: "/images/home/random.png",
    title: "Random Generator",
    code: { method: "random", argument: false },
    metric: "Universal",
    metricNote: "with constraint tags",
    description:
      "Generate mock data that perfectly conforms to your TypeScript types. Respects constraints, formats, and custom tags.",
    href: "/docs/random",
  },
];

const FeatureCard = (props: FeatureCardProps) => (
  <Grid item xs={12} sm={6} md={4}>
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        backgroundColor: "rgba(255,255,255,0.02)",
        borderColor: "rgba(255,255,255,0.08)",
        transition: "all 0.2s ease",
        "&:hover": {
          borderColor: "rgba(0,150,255,0.4)",
          backgroundColor: "rgba(0,150,255,0.03)",
        },
      }}
    >
      <CardActionArea
        href={props.href}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          p: 0,
        }}
      >
        <CardContent sx={{ p: 3, width: "100%" }}>
          <Box
            component="img"
            src={props.icon}
            alt={props.title}
            sx={{ height: 72, width: 72, objectFit: "contain", mb: 2 }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontSize: "1.05rem",
              mb: 0.5,
              color: "rgba(255,255,255,0.95)",
            }}
          >
            {props.title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Fira Code', 'JetBrains Mono', monospace",
              fontSize: "0.82rem",
              mb: 1,
            }}
          >
            <HomeCodeBlock {...props.code} />
          </Typography>
          {props.metric && (
            <Typography
              sx={{
                fontSize: "0.85rem",
                mb: 1.5,
              }}
            >
              <span style={{ color: "rgb(0,180,255)", fontWeight: 600 }}>
                {props.metric}
              </span>
              {props.metricNote && (
                <span
                  style={{ color: "rgba(255,255,255,0.45)", fontWeight: 400 }}
                >
                  {" "}
                  ({props.metricNote})
                </span>
              )}
            </Typography>
          )}
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.65,
              fontSize: "0.88rem",
            }}
          >
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
);

const HomeStrengthMovie = () => (
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
          Key Features
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
          One library. Pure TypeScript types. Every runtime feature you need.
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </Grid>
    </Container>
  </Box>
);
export default HomeStrengthMovie;
