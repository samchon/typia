import { Box, Container, Grid } from "@mui/material";
import React from "react";

import HomeCodeBlock from "../../components/home/HomeCodeBlock";
import HomeStrengthSectionMovie from "./HomeStrengthSectionMovie";

const sections: HomeStrengthSectionMovie.Props[] = [
  {
    title: "Super-fast Runtime Validator",
    subTitle: <HomeCodeBlock method="assert" color="rgb(191, 64, 191)" />,
    description: (
      <React.Fragment>
        <p>
          <b>20,000x faster</b> than <i>class-validator</i>.
        </p>
        <br />
        <p>
          Stable than any others, and only one supporting complicate union type.
        </p>
        <br />
        <p>
          In the backend server side, it boosts up performance about{" "}
          <b>10x up</b>.
        </p>
      </React.Fragment>
    ),
    image: "/favicon/android-chrome-512x512.png",
    href: "/docs/validators/assert",
    width: 125,
  },
  {
    title: "Fast JSON Serialization",
    subTitle: (
      <HomeCodeBlock
        namespace="json"
        method="stringify"
        color="rgb(191, 64, 191)"
      />
    ),
    description: (
      <React.Fragment>
        <p>
          <b>200x faster</b> than <i>class-transformer</i>.
        </p>
        <br />
        <p>Also supports type safe JSON parser, and JSON schema generator.</p>
        <br />
        <p>
          In the backend server side, it boosts up performance about{" "}
          <b>10x up</b>.
        </p>
      </React.Fragment>
    ),
    image: "/images/home/json.png",
    href: "/docs/json/stringify",
  },
  {
    title: "LLM Function Calling App",
    subTitle: (
      <HomeCodeBlock
        namespace="llm"
        method="application"
        template="App"
        color="rgb(191, 64, 191)"
      />
    ),
    description: (
      <React.Fragment>
        <p>LLM Function Calling Application Composer</p>
        <br />
        <p>
          Creates LLM function call schemas from a native TypeScript class or
          interface type.
        </p>
        <br />
        <p>
          LLM will select proper function to call and fill arguments in the
          conversations with human.
        </p>
      </React.Fragment>
    ),
    image: "/images/home/openai.svg",
    href: "/docs/llm/application",
  },
  {
    title: "Easy Protocol Buffer",
    subTitle: (
      <HomeCodeBlock
        namespace="protobuf"
        method="encode"
        color="rgb(191, 64, 191)"
      />
    ),
    description: (
      <React.Fragment>
        <p>
          <b>Full spec</b> of protobuf.
        </p>
        <br />
        <p>
          Only one supporting full spec of <i>protobuf</i> in the{" "}
          <i>TypeScript</i> ecosystem.
        </p>
        <br />
        <p>
          No need extra <i>*.proto</i> schema file. Just fine with native
          TypeScript type.
        </p>
      </React.Fragment>
    ),
    image: "/images/home/protobuf.png",
    href: "/docs/protobuf/encode",
  },
  {
    title: "Random Data Generator",
    subTitle: <HomeCodeBlock method="random" color="rgb(191, 64, 191)" />,
    description: (
      <React.Fragment>
        <p>Universal random generator.</p>
        <br />
        <p>The best mock-up data generator with native TypeScript type.</p>
        <br />
        <p>In the backend side, it boosts up productivity dramatically.</p>
      </React.Fragment>
    ),
    image: "/images/home/random.png",
    href: "/docs/random",
  },
];

const HomeStrengthMovie = () => (
  <Box sx={{ display: "flex" }}>
    <Container
      sx={{
        mt: 3,
        display: "flex",
        position: "relative",
      }}
    >
      <Grid container spacing={3}>
        {sections.map(HomeStrengthSectionMovie)}
      </Grid>
    </Container>
  </Box>
);
export default HomeStrengthMovie;
