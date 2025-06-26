"use client";

import { styled } from "@mui/material/styles";

const HomeLayout = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    marginLeft: "-15rem",
    marginRight: "-15rem",
  },
}));
export default HomeLayout;
