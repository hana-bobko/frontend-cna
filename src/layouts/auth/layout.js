import PropTypes from "prop-types";
import NextLink from "next/link";
import { Box, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import Imagem from "../../../public/assets/imagens/pets.jpg";
import Texto from "../../../public/assets/imagens/text-cna.png";
import style from "./layout.module.css";
// TODO: Change subtitle text

export const Layout = (props) => {
    const { children } = props;
    return (
        <Box className={style.body} sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", flex: "1 1 auto" }}>
            {children}
        </Box>
    );
};

Layout.prototypes = {
    children: PropTypes.node,
};
