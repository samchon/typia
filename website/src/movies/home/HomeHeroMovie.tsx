import ComputerIcon from "@mui/icons-material/Computer";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Button, Grid, Typography } from "@mui/material";

import HomeCodeBlock from "../../components/home/HomeCodeBlock";
import ProductHeroLayout from "../../components/home/ProductHeroLayout";

const HomeHeroMovie = () => (
  <ProductHeroLayout
    sxBackground={{
      background: `url(/images/home/background.webp) no-repeat center top`,
      backgroundColor: "black",
      backgroundPosition: "center",
    }}
  >
    <Typography color="inherit" align="center" variant="h3">
      One Line Magic
    </Typography>
    <Typography
      color="inherit"
      align="center"
      variant="h6"
      sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
    >
      No extra schema required.
      <br />
      <br />
      Just fine with pure TypeScript type.
      <br />
      <br />
      <HomeCodeBlock method="assert" />
    </Typography>
    <br />
    <br />
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Button
          color="info"
          variant="contained"
          size="large"
          component="a"
          href="/docs"
          startIcon={<MenuBookIcon />}
          fullWidth
        >
          Guide Documents
        </Button>
      </Grid>
      <Grid item xs={12} md={4}>
        <Button
          color="warning"
          variant="contained"
          size="large"
          component="a"
          href="/playground"
          startIcon={<ComputerIcon />}
          fullWidth
        >
          Playground (Online IDE)
        </Button>
      </Grid>
      <Grid item xs={12} md={4}>
        <Button
          color="success"
          variant="contained"
          size="large"
          component="a"
          href="https://github.com/samchon/typia"
          startIcon={<GitHubIcon />}
          fullWidth
        >
          Github Repository
        </Button>
      </Grid>
    </Grid>
  </ProductHeroLayout>
);
export default HomeHeroMovie;
