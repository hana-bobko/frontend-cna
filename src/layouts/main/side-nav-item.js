import NextLink from "next/link";
import PropTypes from "prop-types";
import { Box, Collapse, useMediaQuery, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { alpha, useTheme } from "@mui/system";
import { useState } from "react";
import { ChevronRight } from "@mui/icons-material";

export function SideNavItem({ active = false, icon, path, title }) {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
    const handleClick = () => {
        setOpen(!open);
    };
    const styledIcon = {
        color: theme.palette.success.main,
        "&:hover": {
            color: theme.palette.success.main,
        },
    };
    const linkProps = path
        ? {
              component: NextLink,
              href: path,
          }
        : {};

    return (
        <li>
            <ListItemButton
                sx={{
                    boxShadow: " 0 1px 4px rgba(100, 100, 100, 0.1)",
                    borderRadius: 0.5,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "&:hover": {
                        bgcolor: "success.light",
                        color: theme.palette.text.light,

                        borderColor: theme.palette.success.dark,
                        ...styledIcon,
                    },
                    ...(active && {
                        "&:hover": {
                            backgroundColor: alpha(theme.palette.success.main, 1),
                            color: theme.palette.text.light,
                            borderColor: theme.palette.success.dark,
                            ...styledIcon,
                        },
                        background: alpha(theme.palette.success.main, 1),
                        borderWidth: 1,
                        borderColor: theme.palette.success.dark,
                    }),
                }}
                {...linkProps}
                onClick={handleClick}
            >
                {icon && (
                    <ListItemIcon
                        sx={{
                            color: "success.main",
                            ...(active && {
                                color: "#fff",
                            }),
                            "&:hover": {
                                color: theme.palette.text.light,
                            },
                        }}
                    >
                        {icon}
                    </ListItemIcon>
                )}

                <ListItemText
                    primary={title}
                    primaryTypographyProps={{
                        color: "success.main",
                        pr: 2,
                        fontWeight: 600,
                        fontSize: 12,
                        justifyContent: "center",
                        fontFamily: (theme) => theme.typography.fontFamily,
                        ...(active && {
                            color: "success.dark",
                        }),
                        "&:hover": {
                            color: theme.palette.text.light,
                        },
                    }}
                />
            </ListItemButton>
        </li>
    );
}

SideNavItem.propTypes = {
    active: PropTypes.bool,
    external: PropTypes.bool,
    icon: PropTypes.node,
    path: PropTypes.string,
    title: PropTypes.string.isRequired,
};
