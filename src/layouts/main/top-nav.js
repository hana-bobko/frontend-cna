import PropTypes from "prop-types";
import BellIcon from "@heroicons/react/24/outline/BellIcon";
import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";
import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import { OutlinedInput, Typography } from "@mui/material";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Stack,
  SvgIcon,
  Tooltip,
  useMediaQuery,
  TextField,
} from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "src/contexts/auth-context";
//HEADER
const SIDE_NAV_WIDTH = 0;
const TOP_NAV_HEIGHT = 50;

export const TopNav = (props) => {
  const { onNavOpen } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  return (
    <>
      <Box
        component="header"
        sx={{
          minWidth: "100%",
          backgroundColor: "common.white",
          border: "1px solid #ccc",
          boxShadow: 5,
          position: "fixed",
          left: {
            lg: `${SIDE_NAV_WIDTH}px`,
          },
          top: 0,
          width: {
            lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`,
          },

          zIndex: lgUp ? 999 : (theme) => theme.zIndex.appBar,
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 2,
          }}
        >
          <Stack alignItems="center" direction="row" spacing={2}>
            {!lgUp && (
              <IconButton onClick={onNavOpen}>
                <SvgIcon fontSize="small">
                  <Bars3Icon />
                </SvgIcon>
              </IconButton>
            )}
          </Stack>
          <Stack alignItems="center" direction="row" spacing={2}>
            <Tooltip title="Notificações">
              <IconButton>
                <Badge badgeContent={4} color="success" variant="dot">
                  <SvgIcon fontSize="small">
                    <BellIcon />
                  </SvgIcon>
                </Badge>
              </IconButton>
            </Tooltip>

            {/* <Typography variant="caption" sx={{ fontSize: 30, p: 0, fontWeight: 600 }}>
              WAVE
            </Typography> */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Avatar
                // onClick={accountPopover.handleOpen}
                // ref={accountPopover.anchorRef}
                sx={{
                  cursor: "pointer",
                  height: 60,
                  width: 60,
                  m: 0,
                  p: 0,
                  bgcolor: "transparent",
                }}
                src=""
              >
                {/*
               <Logo style={{ cursor: "pointer", height: 45, width: 65, m: 0, p: 0 }} />
               */}
              </Avatar>
            </Box>
          </Stack>
        </Stack>
      </Box>
      {/*
      <AccountPopover
        anchorEl={accountPopover.anchorRef.current}
        open={accountPopover.open}
        onClose={accountPopover.handleClose}
      />
      */}
    </>
  );
};

TopNav.propTypes = {
  onNavOpen: PropTypes.func,
};
