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
    height: "calc(100vh - 50px)",
  },
}));

const Background = styled("div")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  zIndex: -2,
});

const ArrowBox = styled("div")(({ theme }) => ({
  position: "absolute",
  bottom: 32,
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

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
          mb: 3,
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
            opacity: 0.7,
            zIndex: -1,
          }}
        />
        <Background sx={sxBackground} />
        <ArrowBox>
          <img
            src="/images/home/productHeroArrowDown.png"
            height="32"
            width="24"
            alt="arrow down"
          />
        </ArrowBox>
      </Container>
    </ProductHeroLayoutRoot>
  );
};
export default ProductHeroLayout;
