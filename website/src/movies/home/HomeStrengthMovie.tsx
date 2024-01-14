import { Box, Container, Grid } from "@mui/material";
import React from "react";

import HomeCodeBlock from "../../components/home/HomeCodeBlock";
import HomeStrengthSectionMovie from "./HomeStrengthSectionMovie";

const sections: HomeStrengthSectionMovie.Props[] = [
  {
    title: "Super-fast Runtime Validtor",
    subTitle: <HomeCodeBlock method="assert" color="purple" />,
    description: (
      <React.Fragment>
        <p>
          <b>20,000x faster</b> than <i>class-validator</i>.
        </p>
        <br />
        <p>
          Furthermore, its validation is exact and <b>stable than any others</b>
          . Only <i>typia</i> can validate complicate union types.
        </p>
        <br />
        <p>
          In the backend server side, it boosts up the server performance about{" "}
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
      <HomeCodeBlock namespace="json" method="stringify" color="purple" />
    ),
    description: (
      <React.Fragment>
        <p>
          <b>200x faster</b> than <i>class-transformer</i>.
        </p>
        <br />
        <p>
          Also supports type safe JSON parser, and super-easy Swagger/JSON
          schema generator, with pure TypeScript type.
        </p>
        <br />
        <p>
          In the backend server side, it boosts up the performance about{" "}
          <b>10x up</b>.
        </p>
      </React.Fragment>
    ),
    image: "/images/home/json.png",
    href: "/docs/json/stringify",
  },
  {
    title: "Easy Protocol Buffer",
    subTitle: (
      <HomeCodeBlock namespace="protobuf" method="encode" color="purple" />
    ),
    description: (
      <React.Fragment>
        <p>
          <b>Full spec</b> of protobuf.
        </p>
        <br />
        <p>
          Only one supporting full spec of <i>protobuf</i> in the{" "}
          <i>TypeScript</i> ecosystem. Therefore, stable compatible with every
          other platforms.
        </p>
        <br />
        <p>
          No need extra <i>*.proto</i> schema file. Just fine with pure
          TypeScript type.
        </p>
      </React.Fragment>
    ),
    image: "/images/home/protobuf.png",
    href: "/docs/protobuf/encode",
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
