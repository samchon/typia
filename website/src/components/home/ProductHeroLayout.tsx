import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Theme, styled } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import React from "react";

const ProductHeroLayoutRoot = styled("section")(({ theme }) => ({
  color: theme.palette.common.white,
  position: "relative",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    height: "90vh",
    minHeight: 500,
    maxHeight: 1300,
  },
}));

const Background = styled("div")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  zIndex: -2,
});

interface ProductHeroLayoutProps {
  sxBackground: SxProps<Theme>;
}

const ProductHeroLayout = (
  props: React.HTMLAttributes<HTMLDivElement> & ProductHeroLayoutProps,
) => {
  const { sxBackground, children } = props;
  return (
    <ProductHeroLayoutRoot>
      <Container
        sx={{
          mt: 3,
          mb: 14,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "common.black",
            opacity: 0.85,
            zIndex: -1,
          }}
        />
        <Background sx={sxBackground} />
        <Box
          component="img"
          src="/images/home/productHeroArrowDown.png"
          height="16"
          width="12"
          alt="arrow down"
          sx={{ position: "absolute", bottom: 32 }}
        />
      </Container>
    </ProductHeroLayoutRoot>
  );
};
export default ProductHeroLayout;
