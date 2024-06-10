import NextLink from "next/link";
import { usePathname } from "next/navigation";
import PropTypes from "prop-types";
import { Box, Drawer, Stack, useMediaQuery, IconButton, Typography, SvgIcon, Divider, Avatar } from "@mui/material";
import { alpha } from "@mui/system";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import { items } from "./config";
import { SideNavItem } from "./side-nav-item";
import { BugReport, Logout, Settings } from "@mui/icons-material";
export const SideNav = (props) => {
    const { open, onClose } = props;
    const pathname = usePathname();
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
    const content = (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                }}
            >
                <Box
                    sx={{
                        backgroundColor: lgUp ? "common.white" : "transparent",
                        justifyContent: "space-between",
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <Box
                        component={NextLink}
                        href="/"
                        sx={{
                            margin: "0px 15px 0px 15px",
                            display: "inline-flex",
                            height: lgUp ? 15 : 0,
                            width: 25,
                            mb: 1,
                        }}
                    />
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 45,
                        px: 1,
                    }}
                >
                    <Box
                        component={NextLink}
                        href="/"
                        onClick={onClose}
                        sx={{
                            color: lgUp ? "primary.main" : "#FFFCFF",
                            margin: "0px 15px 0px 15px",
                            display: "flex",
                            height: 25,
                            width: 25,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Avatar src="/assets/icons/love.png" sx={{ width: 45, height: 45, justifyContent: "center" }} />
                    </Box>
                    {/*                     <Box>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                fontSize: 10,
                                textDecoration: "none",
                                color: lgUp ? "neutral.500" : "#FFFCFF",
                            }}
                        >
                            Maria Silva
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: 10,
                                textDecoration: "none",
                                color: lgUp ? "neutral.500" : "#FFFCFF",
                            }}
                        >
                            maria.silva@cna.com.br
                        </Typography>
                    </Box>
 */}
                </Box>

                <Box
                    component="nav"
                    sx={{
                        px: 1,
                        py: 3,
                    }}
                >
                    <Stack
                        component="ul"
                        spacing={0.5}
                        sx={{
                            listStyle: "none",
                            p: 0,
                            m: 0,
                        }}
                    >
                        {items.map((item, index) => {
                            const active = item.path ? pathname === item.path : false;
                            return (
                                <>
                                    {item?.type != "sub" && (
                                        <SideNavItem id={item?.id} color={lgUp ? "#109ecd" : "#FFFCFF"} active={active} icon={item.icon} key={item.title} title={item.title} />
                                    )}
                                </>
                            );
                        })}
                    </Stack>
                    <Divider />
                </Box>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    position: "fixed",
                    bottom: 0,
                    justifyContent: "space-around",
                    width: 210,
                }}
            >
                {/*         <IconButton listStyle={NextLink} href="https://suporte.ondasegura.com.br/" target="_blank">
                    <BugReport />
                </IconButton>
                <IconButton>
                    <Settings />
                </IconButton>
                <IconButton LinkComponent={NextLink} href="/auth/login">
                    <Logout sx={{ color: "error.main" }} />
                </IconButton> */}
            </Box>
        </>
    );

    if (lgUp) {
        return (
            //COLORSIDENAV
            <Drawer
                anchor="left"
                open={open}
                onClose={onClose}
                PaperProps={{
                    sx: {
                        backgroundColor: "common.white",
                        color: "common.white",
                        boxShadow: 1,
                        width: 220,
                        overflow: "auto",
                        scrollbarWidth: "none",
                        border: "1px solid #ccc",
                    },
                }}
                variant="permanent"
            >
                {content}
            </Drawer>
        );
    } else {
        return (
            <Drawer
                anchor="left"
                open={open}
                onClose={onClose}
                PaperProps={{
                    sx: {
                        backgroundColor: (theme) => alpha(theme.palette.background.default, 0.4),
                        boxShadow: 8,
                        backdropFilter: "blur(4px)",
                        boxShadow: 1,
                        width: 250,
                        overflow: "auto",
                        scrollbarWidth: "none",
                    },
                }}
                variant="temporary"
            >
                <IconButton sx={{ justifyContent: "flex-end" }} onClick={onClose}>
                    <SvgIcon fontSize="large">
                        <KeyboardArrowLeftRoundedIcon sx={{ color: "neutral.500" }} />
                    </SvgIcon>
                </IconButton>
                {content}
            </Drawer>
        );
    }
};

SideNav.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool,
};
