import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Layout as MainLayout } from "src/layouts/main/layout";
import { Layout as AuthLayout } from "src/layouts/auth/layout";
import NextLink from "next/link";
import Head from "next/head";
import styles from "./layout.module.css";
import cao from "../../public/assets/imagens/cao.png";
import pet1 from "../../public/assets/imagens/pet-1.jpg";
import logo from "../../public/assets/icons/favicon.png";
import bg from "../../public/assets/imagens/background-dark.jpg";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { styled } from "@mui/material/styles";
import { width } from "@mui/system";
function Page() {
  const Text = styled((props) => <Typography disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: "none",
      minWidth: 0,
      [theme.breakpoints.up("sm")]: {
        minWidth: 0,
      },
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(1),
      color: "rgba(0, 0, 0, 0.85)",
      fontFamily: ["Candara"].join(","),
      //fontFamily: ["Courier"].join(","), LETRA DE CÓDIGO

      "&.Mui-selected": {
        color: "#1890ff",
        fontWeight: theme.typography.fontWeightMedium,
      },
      "&.Mui-focusVisible": {
        backgroundColor: "#d1eaff",
      },
    })
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
            //backgroundImage: `url(${bg?.src})`,
            //backgroundSize: "cover",
            backgroundPosition: "center",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#C5F299",
            alignItems: "center",
          }}
        >
          <Box
            component="header"
            sx={{
              //bgcolor: "red",
              //boxShadow: 8,
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "400px",
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
                  }}
                  src={logo.src}
                />
                <Text variant="h6" sx={{ width: "300px" }}>
                  CNA - Por um futuro onde todos os animais são amados e
                  protegidos.
                </Text>
              </Box>
              <Box>
                <Button
                  LinkComponent={NextLink}
                  href="https://shre.ink/8eCx"
                  variant="text"
                  sx={{
                    "&:hover": { color: "#336600", bgcolor: "transparent" },
                    color: "#336600",
                    bgcolor: "transparent",
                  }}
                >
                  ONGs
                </Button>
                <Button
                  LinkComponent={NextLink}
                  href="https://shre.ink/8eCx"
                  variant="text"
                  sx={{
                    "&:hover": { color: "#336600", bgcolor: "transparent" },
                    color: "#336600",
                    bgcolor: "transparent",
                  }}
                >
                  Junte-se a nós
                </Button>
                <Button
                  LinkComponent={NextLink}
                  href="https://shre.ink/8eCx"
                  variant="text"
                  sx={{
                    "&:hover": { color: "#336600", bgcolor: "transparent" },
                    color: "#336600",
                    bgcolor: "transparent",
                  }}
                >
                  Quem somos
                </Button>
                <Button
                  LinkComponent={NextLink}
                  href="https://shre.ink/8eCx"
                  variant="text"
                  sx={{
                    "&:hover": { color: "#336600", bgcolor: "transparent" },
                    color: "#336600",
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
                    bgcolor: "#336600",
                    color: "#fff",
                    borderRadius: 1,
                    "&:hover": {
                      // border: "2px solid #fff",
                      bgcolor: "#336600",
                      color: "#fff",
                    },
                  }}
                >
                  Buy me a whiskas
                </Button>
              </Box>
            </Stack>
          </Box>

          <Box
            className={styles.slide}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              mt: 20,
              width: "100%",
            }}
          >
            <Box sx={{ maxWidth: 600, p: 2 }}>
              <Text variant="h3" sx={{ color: "success.darkest" }}>
                Bem vindo(a) ao projeto CNA - Cadastro Nacional de Adotantes
              </Text>
              <Box sx={{ height: 4, width: 300, bgcolor: "#fff", my: 2 }}></Box>
              <Text variant="h6" sx={{ mb: 2, color: "success.darkest" }}>
                Somos um projeto sem fins lucrativos que tem como objetivo final
                diminuir os números de abandonos, maus tratos e crueldades com
                os nossos amigos de 4 patas.
              </Text>
              <Text variant="h6" sx={{ mb: 2, color: "success.darkest" }}>
                O intuito é implementar um sistema de análise de adotante nas
                ONGs e lares de adoção, onde analisarão o perfil do adontante,
                garantindo que o animal será entregue à um lar cheio de amor.
              </Text>
              <Text variant="h6" sx={{ color: "success.darkest" }}>
                Nós do projeto CNA acreditamos que os animais vieram a este
                mundo com uma missão de nos ensinar o verdadeiro amor:
                incondicional, puro e altruista. E o mínimo que podemos fazer
                para retirbuir esse amor é protegendo-os como podemos.
              </Text>
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
          <Text className={styles.slide} sx={{ mt: 10 }} variant="h3">
            Em breve um app que mudará o futuro dos nossos amiguinhos!
          </Text>
        </Box>
      </Box>
    </>
  );
}

Page.getLayout = (page) => <>{page}</>;

export default Page;
