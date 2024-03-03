import PropTypes from "prop-types";
import NextLink from "next/link";
import { Box, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import Imagem from "../../../public/assets/imagens/pets.jpg";
import Texto from "../../../public/assets/imagens/text-cna.png";
// TODO: Change subtitle text

export const Layout = (props) => {
  const { children } = props;
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flex: "1 1 auto",
      }}
    >
      <Grid item container sx={{ flex: "1 1 auto", display: "flex" }}>
        {/* <Grid
          xs={12}
          lg={6}
          sx={{
            backgroundColor: "background.paper",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        > */}
        {/* <Box
            component="header"
            sx={{
              left: 0,
              p: 3,
              position: "fixed",
              top: 0,
              width: "100%",
            }}
          >
            <Box
              component={NextLink}
              href="/"
              sx={{
                display: "inline-flex",
                height: 32,
                width: 32,
              }}
            >
              <Logo style={{ cursor: "pointer", height: 45, width: 65, m: 0, p: 0 }} />
            </Box>
          </Box> */}

        {/* </Grid> */}
        <Grid
          item
          xs={7}
          lg={7}
          sx={{
            display: "flex",
            justifyContent: "center",
            "& img": {
              maxWidth: "100%",
            },
          }}
        >
          <div
            style={{
              background: "red",
              backgroundImage: `url(${Imagem?.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          />
          <div
            style={{
              backdropFilter: "blur(0px)",
              backgroundImage: `url(${Texto?.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "fixed",
              top: -10,
              left: 0,
              width: "50%",
              height: "100%",
              zIndex: -1,
            }}
          />
        </Grid>
        <Grid
          item
          xs={5}
          lg={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            "& img": {
              maxWidth: "100%",
            },
            p: 1,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "rgba(200, 200, 200, 0.3)",
              borderRadius: 1,
              backdropFilter: "blur(6px)",
              //width: "50vh",
            }}
          >
            {children}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

Layout.prototypes = {
  children: PropTypes.node,
};
