import React, { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { styled } from "@mui/material/styles";
import { withAuthGuard } from "src/hooks/with-auth-guard";
import { SideNav } from "./side-nav";
import { TopNav } from "./top-nav";
import { useMediaQuery } from "@mui/material";
// components
const SIDE_NAV_WIDTH = 221; //openNav ? 210 : 0;

const LayoutContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  height: "100vh",
  padding: "80px 20px 20px 20px ",
  overflow: "hidden",
  backgroundColor: "#f3f3f3",
});

export const Layout = withAuthGuard((props) => {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const { children } = props;
  const pathname = usePathname();
  const [openNav, setOpenNav] = useState(false);
  const LayoutRoot = styled("div")(({ theme }) => ({
    flex: "1 1 auto",
    maxWidth: "100%",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: openNav && SIDE_NAV_WIDTH,
    },
  }));
  const handlePathnameChange = useCallback(() => {
    if (openNav) {
      setOpenNav(!openNav);
    }
  }, [openNav]);

  useEffect(() => {
    // handlePathnameChange();
    if (lgUp) {
      setOpenNav(true);
    }
  }, [pathname, openNav]);
  //   console.log(openNav);
  return (
    <>
      <TopNav onNavOpen={() => setOpenNav(true)} />
      <SideNav onClose={() => setOpenNav(false)} open={openNav} />
      <LayoutRoot>
        <LayoutContainer>{children}</LayoutContainer>
      </LayoutRoot>
    </>
  );
});
