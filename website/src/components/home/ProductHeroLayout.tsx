import Container from "@mui/material/Container";
import { Theme, styled } from "@mui/material/styles";
import React from "react";

const ProductHeroLayoutRoot = styled("section")(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
  },
}));

const ProductHeroLayout = (
  props: React.HTMLAttributes<HTMLDivElement>,
) => {
  const { children } = props;
  return (
    <ProductHeroLayoutRoot>
      <Container
        sx={{
          mt: 3,
          mb: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </Container>
    </ProductHeroLayoutRoot>
  );
};
export default ProductHeroLayout;
