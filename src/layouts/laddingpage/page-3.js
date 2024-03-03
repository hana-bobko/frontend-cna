import React from "react";
import { Grid, Typography, Stack, useMediaQuery } from "@mui/material";
import styled from "styled-components";

//Form

const Inclined = styled.div`
  margin-top: -40px;
  height: 80px;
  background-color: white;
  -moz-transform: skew(0deg, -18deg);
  -webkit-transform: skew(0deg, -18deg);
  -o-transform: skew(0deg, -18deg);
  -ms-transform: skew(0deg, -18deg);
  transform: skew(0deg, -6deg);
`;

function Page3() {
  const isMobile = useMediaQuery("(max-width:1240px)");
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: (isMobile && "center") || "space-around",
        width: "100%",
      }}
    >
      <div
        style={{
          color: "white",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "50px 0px 0px 0px",
        }}
      >
        <Typography
          sx={{
            letterSpacing: "3px",
            fontWeight: "300",
            fontSize: "14px",
          }}
          gutterBottom
        >
          BAIXE NOSSO APP E SE SURPREENDA
        </Typography>
        <Typography
          sx={{ textAlign: (isMobile && "center") || "" }}
          variant={(isMobile && "h4") || "h2"}
        >
          Pronto para prosperar <br /> no mercado imobiliário <br /> com as
          vantagens da <br />
          Onda Segura?
        </Typography>
      </div>
      <div
        style={{
          alignItems: "center",
          marginTop: "40px",
          backgroundColor: "white",
        }}
      ></div>
      <Inclined />
    </Grid>
  );
}

export default Page3;
