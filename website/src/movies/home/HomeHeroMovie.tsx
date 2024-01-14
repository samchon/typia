import GitHubIcon from "@mui/icons-material/GitHub";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Button, Grid, Typography } from "@mui/material";

import HomeCodeBlock from "../../components/home/HomeCodeBlock";
import ProductHeroLayout from "../../components/home/ProductHeroLayout";

const HomeHeroMovie = () => (
  <ProductHeroLayout
    sxBackground={{
      backgroundImage: `url(/images/home/assert.svg)`,
      backgroundColor: "#CCCCCC",
      backgroundPosition: "center",
    }}
  >
    <Typography color="inherit" align="center" variant="h2">
      One line magic
    </Typography>
    <Typography
      color="inherit"
      align="center"
      variant="h5"
      sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
    >
      Don't need extra schema defintion.
      <br />
      <br />
      Just fine with pure TypeScript type.
      <br />
      <br />
      <HomeCodeBlock method="assert" />
    </Typography>
    <br />
    <br />
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <Button
          variant="contained"
          size="large"
          component="a"
          href="/docs"
          startIcon={<MenuBookIcon />}
          fullWidth
        >
          Documents
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          color="success"
          variant="contained"
          size="large"
          component="a"
          href="https://github.com/samchon/typia"
          startIcon={<GitHubIcon />}
          fullWidth
        >
          Github
        </Button>
      </Grid>
    </Grid>
  </ProductHeroLayout>
);
export default HomeHeroMovie;
