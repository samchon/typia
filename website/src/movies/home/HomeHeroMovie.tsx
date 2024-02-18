import ComputerIcon from "@mui/icons-material/Computer";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Button, Grid, Typography } from "@mui/material";
import { ReactNode } from "react";

import HomeCodeBlock from "../../components/home/HomeCodeBlock";
import ProductHeroLayout from "../../components/home/ProductHeroLayout";

const QuickButton = (props: {
  title: string;
  href: string;
  icon: ReactNode;
  color: "info" | "warning" | "success";
}) => (
  <Grid item xs={12} md={4}>
    <Button
      color={props.color}
      variant="outlined"
      size="large"
      component="a"
      href={props.href}
      startIcon={props.icon}
      fullWidth
      style={{ fontFamily: "unset", fontWeight: "bold" }}
    >
      {props.title}
    </Button>
  </Grid>
);

const HomeHeroMovie = () => (
  <ProductHeroLayout
    sxBackground={{
      background: `url(/images/home/background.jpg) no-repeat center top`,
      backgroundColor: "black",
      backgroundPosition: "center",
    }}
  >
    <Typography
      color="inherit"
      align="center"
      variant="h2"
      fontFamily="fantasy"
    >
      Only one line
    </Typography>
    <Typography
      color="inherit"
      align="center"
      variant="h5"
      fontFamily="cursive"
      sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
    >
      No extra schema required
      <br />
      <br />
      Just fine with pure TypeScript type
    </Typography>
    <br />
    <br />
    <Typography
      align="center"
      variant="h5"
      fontFamily="monospace"
      sx={{ fontWeight: "bold" }}
    >
      <HomeCodeBlock method="assert" inputColor="#CFCFCF" />
    </Typography>
    <br />
    <br />
    <br />
    <br />
    <Grid container spacing={2}>
      <QuickButton
        title="Guide Documents"
        icon={<MenuBookIcon />}
        href="/docs"
        color="info"
      />
      <QuickButton
        title="Playground (Online IDE)"
        icon={<ComputerIcon />}
        href="/playground"
        color="warning"
      />
      <QuickButton
        title="Github Repository"
        icon={<GitHubIcon />}
        href="https://github.com/samchon/typia"
        color="success"
      />
    </Grid>
  </ProductHeroLayout>
);
export default HomeHeroMovie;
