import NextLink from "next/link";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import {
  Box,
  Collapse,
  useMediaQuery,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { alpha, useTheme } from "@mui/system";
import { useState } from "react";
import { ChevronRight } from "@mui/icons-material";
import { usePathname } from "next/navigation";

export function SideNavItem({
  active = false,
  disabled,
  external,
  icon,
  path,
  title,
  type,
  id,
  color,
  authorized,
  sub,
}) {
  const [open, setOpen] = useState(false);
  const [subHove, setSubHove] = useState(false);
  const theme = useTheme();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const pathname = usePathname();
  const handleClick = () => {
    setOpen(!open);
  };
  const styledIcon = {
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  };
  const linkProps = path
    ? external
      ? {
          component: "a",
          href: path,
          target: "_blank",
        }
      : {
          component: NextLink,
          href: path,
        }
    : {};
  const renderSubSection = (item, linkSubProps, subActive) => (
    <li key={item?.id}>
      <ListItemButton
        onMouseEnter={() => setSubHove(true)}
        onMouseLeave={() => setSubHove(false)}
        disabled={authorized ? false : true}
        key={item?.title}
        sx={{
          mt: 0.5,
          borderRadius: 0.5,
          justifyContent: "space-between",
          "&:hover": {
            background: subHove ? "rgba(0, 120, 244, 0.2)" : "#fff",
            color: subHove ? "#fff" : "#0078F4",
            borderColor: theme.palette.primary.dark,
            ...styledIcon,
          },
          ...(subActive && {
            background: alpha(theme.palette.primary.main, 1),
            color: "#fff",
            borderWidth: 1,
            borderColor: theme.palette.primary.dark,
            "&:hover": {
              background: alpha(theme.palette.primary.main, 1),
              color: "#0078F4",
              borderColor: theme.palette.primary.dark,
              ...styledIcon,
            },
          }),
        }}
        {...linkSubProps}
      >
        {item?.icon && (
          <ListItemIcon
            sx={{
              color: (lgUp && "rgba(0, 120, 244, 1)") || "common.white",
              ...(subActive && {
                color: "#fff",
              }),
              pl: 2,
            }}
          >
            {item?.icon}
          </ListItemIcon>
        )}
        <ListItemText
          primary={item?.title}
          primaryTypographyProps={{
            color: (lgUp && "rgba(0, 120, 244, 1)") || "common.white",
            pr: 4,
            fontWeight: 600,
            fontSize: 12,
            justifyContent: "center",
            fontFamily: (theme) => theme.typography.fontFamily,
            ...(subActive && {
              color: "#fff",
            }),
          }}
        />
      </ListItemButton>
    </li>
  );

  return (
    <li>
      <ListItemButton
        disabled={authorized ? false : true}
        sx={{
          boxShadow: open && type == "expand" ? " 0 3px 4px rgba(100, 100, 100, 0.2)" : undefined,
          borderRadius: 0.5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&:hover": {
            background: "rgba(0, 120, 244, 0.2)",
            color: theme.palette.text.light,
            borderColor: theme.palette.primary.dark,
            ...styledIcon,
          },
          ...(active && {
            "&:hover": {
              backgroundColor: alpha(theme.palette.primary.main, 1),
              color: theme.palette.text.light,
              borderColor: theme.palette.primary.dark,
              ...styledIcon,
            },
            background: alpha(theme.palette.primary.main, 1),
            borderWidth: 1,
            borderColor: theme.palette.primary.dark,
          }),
        }}
        {...linkProps}
        onClick={handleClick}
      >
        {icon && (
          <ListItemIcon
            sx={{
              color: (lgUp && "rgba(0, 120, 244, 1)") || "common.white",
              ...(active && {
                color: "#fff",
              }),
            }}
          >
            {icon}
          </ListItemIcon>
        )}

        <ListItemText
          primary={title}
          primaryTypographyProps={{
            color: (lgUp && "rgba(0, 120, 244, 1)") || "common.white",
            pr: 2,
            fontWeight: 600,
            fontSize: type == "link" ? 14 : 12,
            justifyContent: "center",
            fontFamily: (theme) => theme.typography.fontFamily,
            ...(active && {
              color: "#fff",
            }),
            ...(disabled && {
              color: "#b3d2ff",
            }),
          }}
        />
        {type == "expand" && (
          <ChevronRight
            sx={{
              color: (lgUp && "rgba(0, 120, 244, 1)") || "common.white",
              transform: open ? "rotate(90deg)" : "rotate(3deg)",
              transition: "0.2s",
            }}
          />
        )}
      </ListItemButton>
      {sub && sub.length > 0 && (
        <Collapse
          sx={{
            bgcolor: "rgba(0, 120, 244, 0.1)",
          }}
          in={open}
          timeout="auto"
          unmountOnExit
        >
          <List component="div" disablePadding>
            {sub.map((item, index) => {
              const linkSubProps =
                item?.path || path
                  ? external
                    ? {
                        component: "a",
                        href: item?.path || path,
                        target: "_blank",
                      }
                    : {
                        component: NextLink,
                        href: item?.path || path,
                      }
                  : {};
              const active = item?.path ? pathname === item?.path : false;
              return renderSubSection(item, linkSubProps, active);
            })}
          </List>
        </Collapse>
      )}
    </li>
  );
}

SideNavItem.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  external: PropTypes.bool,
  icon: PropTypes.node,
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
};
