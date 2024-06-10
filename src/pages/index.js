import { Box, Button, Grid, Stack, Typography, Drawer, useMediaQuery, IconButton } from "@mui/material";
import { Layout as MainLayout } from "src/layouts/main/layout";
import { Layout as AuthLayout } from "src/layouts/auth/layout";
import NextLink from "next/link";
import React, { useState } from "react";
import Head from "next/head";
import styles from "./layout.module.css";
import cao from "../../public/assets/imagens/cao.png";
import pet1 from "../../public/assets/imagens/pet-1.jpg";
import logo from "../../public/assets/icons/favicon.png";
import bg from "../../public/assets/imagens/background-dark.jpg";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { styled } from "@mui/material/styles";
import { TypographyAlign, width } from "@mui/system";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

function Page() {
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
    const [open, setOpen] = useState(false);

    async function onClose() {
        setOpen(false);
    }
    const content = (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: lgUp ? "space-between" : "center",
                    alignItems: "center",
                    flexDirection: lgUp ? "row" : "column",
                    alignItems: "center",
                    width: lgUp ? "400px" : "200px",
                    py: 2,
                }}
            >
                <img
                    style={{
                        width: 60,
                        height: 60,
                        backgroundColor: "white",
                        borderRadius: 50,
                        marginLeft: 10,
                        marginTop: 10,
                    }}
                    src={logo.src}
                />
                <Typography
                    variant={lgUp ? "subtitle2" : "subtitle2"}
                    sx={{
                        width: lgUp ? "400px" : "200px",
                        TypographyAlign: "center",
                        ml: 3,
                        "&:hover": {
                            color: lgUp ? "#336600" : "success.light",
                            bgcolor: "transparent",
                        },
                        color: lgUp ? "#336600" : "success.light",
                        bgcolor: "transparent",
                    }}
                >
                    CNA - Por um futuro onde todos os animais são amados e protegidos.
                </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: lgUp ? "row" : "column" }}>
                <Button
                    LinkComponent={NextLink}
                    href="https://shre.ink/8eCx"
                    variant="Typography"
                    sx={{
                        "&:hover": {
                            color: lgUp ? "#336600" : "success.light",
                            bgcolor: "transparent",
                        },
                        color: lgUp ? "#336600" : "success.light",
                        bgcolor: "transparent",
                    }}
                >
                    ONGs
                </Button>
                <Button
                    LinkComponent={NextLink}
                    href="https://shre.ink/8eCx"
                    variant="Typography"
                    sx={{
                        "&:hover": {
                            color: lgUp ? "#336600" : "success.light",
                            bgcolor: "transparent",
                        },
                        color: lgUp ? "#336600" : "success.light",
                        bgcolor: "transparent",
                    }}
                >
                    Junte-se a nós
                </Button>
                <Button
                    LinkComponent={NextLink}
                    href="https://shre.ink/8eCx"
                    variant="Typography"
                    sx={{
                        "&:hover": {
                            color: lgUp ? "#336600" : "success.light",
                            bgcolor: "transparent",
                        },
                        color: lgUp ? "#336600" : "success.light",
                        bgcolor: "transparent",
                    }}
                >
                    Quem somos
                </Button>
                <Button
                    LinkComponent={NextLink}
                    href="https://shre.ink/8eCx"
                    variant="Typography"
                    sx={{
                        "&:hover": {
                            color: lgUp ? "#336600" : "success.light",
                            bgcolor: "transparent",
                        },
                        color: lgUp ? "#336600" : "success.light",
                        bgcolor: "transparent",
                    }}
                >
                    Contato
                </Button>
                <Button
                    LinkComponent={NextLink}
                    href="https://shre.ink/8eCs"
                    size="small"
                    variant="contained"
                    sx={{
                        //border: "2px solid #fff",
                        boxShadow: 8,
                        bgcolor: lgUp ? "#336600" : "success.light",
                        color: lgUp ? "#fff" : "#336600",
                        borderRadius: 1,
                        "&:hover": {
                            // border: "2px solid #336600",
                            bgcolor: lgUp ? "#336600" : "success.light",
                            color: lgUp ? "#fff" : "#336600",
                        },
                    }}
                >
                    Buy me a whiskas
                </Button>
                <Button
                    LinkComponent={NextLink}
                    href="/auth/login"
                    size="small"
                    variant="text"
                    sx={{
                        //border: "2px solid #fff",
                        //boxShadow: 8,
                        //bgcolor: lgUp ? "#336600" : "success.light",
                        ml: 1,
                        color: "#336600",
                        borderRadius: 1,
                        "&:hover": {
                            // border: "2px solid #336600",
                            bgcolor: lgUp ? "#33660025" : "success.light",
                            color: "#336600",
                        },
                    }}
                >
                    Entrar
                </Button>
            </Box>
        </>
    );

    return (
        <>
            <Head>
                <title>CNA</title>
            </Head>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8,
                    zIndex: 10,
                }}
            >
                <Box
                    sx={{
                        backgroundPosition: "center",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        px: lgUp ? 0 : 10,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "#ffffff",
                        //backgroundColor: "#C5F299",
                        //alignItems: "center",
                        overflowY: "scroll",
                        scrollbarWidth: "none",
                    }}
                >
                    {(lgUp && (
                        <Box
                            component="header"
                            sx={{
                                position: "sticky",
                                top: 0,
                                width: "100%",
                                backgroundColor: "rgba(250, 250, 250, 0)",
                                backdropFilter: "blur(2px)",
                            }}
                        >
                            <Stack
                                direction={"row"}
                                alignItems={"center"}
                                justifyContent={"space-between"}
                                spacing={2}
                                sx={{
                                    minHeight: 60,
                                    px: 2,
                                }}
                            >
                                {content}
                            </Stack>
                        </Box>
                    )) || (
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Box />
                            <IconButton
                                sx={{
                                    right: 0,
                                    position: "fixed",
                                }}
                                onClick={() => setOpen(true)}
                            >
                                <MenuOutlinedIcon />
                            </IconButton>
                            <Drawer
                                anchor="right"
                                open={open}
                                onClose={onClose}
                                PaperProps={{
                                    sx: {
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        backdropFilter: "blur(6px)",
                                        backgroundColor: "rgba(100, 100, 100, 0.3)",
                                        color: "common.white",
                                        boxShadow: 1,
                                        width: 220,
                                        overflow: "auto",
                                        scrollbarWidth: "none",
                                        // border: "1px solid #ccc",
                                    },
                                }}
                                variant="temporary"
                            >
                                {content}
                            </Drawer>
                        </Box>
                    )}

                    <Box
                        className={styles.slide}
                        sx={{
                            display: "flex",
                            flexDirection: lgUp ? "row" : "column-reverse",
                            justifyContent: lgUp ? "space-around" : "center",
                            alignItems: lgUp ? "space-around" : "center",
                            mt: 20,
                            width: "100%",
                        }}
                    >
                        <Box sx={{ maxWidth: 600, p: 2 }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    "&:hover": {
                                        color: lgUp ? "#336600" : "success.light",
                                        bgcolor: "transparent",
                                    },
                                    color: lgUp ? "#336600" : "success.light",
                                    bgcolor: "transparent",
                                }}
                            >
                                Bem vindo(a) ao projeto CNA - Cadastro Nacional de Adotantes
                            </Typography>
                            <Box sx={{ height: 4, width: 300, bgcolor: "#336600", my: 2 }}></Box>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    mb: 2,
                                    "&:hover": {
                                        color: lgUp ? "#336600" : "success.light",
                                        bgcolor: "transparent",
                                    },
                                    color: lgUp ? "#336600" : "success.light",
                                    bgcolor: "transparent",
                                }}
                            >
                                Somos um projeto sem fins lucrativos que tem como objetivo final diminuir os números de abandonos, maus tratos e crueldades com os nossos amigos de
                                4 patas.
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    mb: 2,
                                    "&:hover": {
                                        color: lgUp ? "#336600" : "success.light",
                                        bgcolor: "transparent",
                                    },
                                    color: lgUp ? "#336600" : "success.light",
                                    bgcolor: "transparent",
                                }}
                            >
                                O intuito é implementar um sistema de análise de adotante nas ONGs e lares de adoção, onde analisarão o perfil do adontante, garantindo que o animal
                                será entregue à um lar cheio de amor.
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    "&:hover": {
                                        color: lgUp ? "#336600" : "success.light",
                                        bgcolor: "transparent",
                                    },
                                    color: lgUp ? "#336600" : "success.light",
                                    bgcolor: "transparent",
                                }}
                            >
                                Nós do projeto CNA acreditamos que os animais vieram a este mundo com uma missão de nos ensinar o verdadeiro amor: incondicional, puro e altruista.
                                E o mínimo que podemos fazer para retirbuir esse amor é protegendo-os como podemos.
                            </Typography>
                        </Box>
                        <img
                            style={{
                                width: 400,
                                height: 400,
                                borderRadius: 800,
                                border: "4px solid #fff",
                            }}
                            src={pet1.src}
                        />
                    </Box>

                    <Typography
                        className={styles.slide}
                        sx={{
                            mt: 10,
                            "&:hover": {
                                color: lgUp ? "#336600" : "success.light",
                                bgcolor: "transparent",
                            },
                            color: lgUp ? "#336600" : "success.light",
                            bgcolor: "transparent",
                            mx: 6,
                        }}
                        variant="h3"
                    >
                        Em breve um app que mudará o futuro dos nossos amiguinhos!
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

Page.getLayout = (page) => <>{page}</>;

export default Page;
