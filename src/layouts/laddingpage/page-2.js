import React from "react";
import { Grid, Typography, Container, Box, useMediaQuery } from "@mui/material";

function Page2() {
  const isMobile = useMediaQuery("(max-width:1240px)");
  return (
    <Grid container sx={{ alignItems: "center" }}>
      {/* Coluna de Texto */}
      <Box sx={{ textAlign: "center", width: "100%", marginBottom: "20px" }}>
        <Typography
          sx={{ color: "#107ece", margin: "10px 0px 10px 0px" }}
          variant={(isMobile && "h5") || "h4"}
        >
          A MAIOR COBERTURA DE <br />
          GARANTIA LOCATÍCIA DO BRASIL.
        </Typography>
        <Typography variant={(isMobile && "h7") || "subtitle1"}>
          "Imagine uma parceria que permite que sua equipe se concentre na receita, <br /> enquanto
          nós lidamos com os aluguéis."
        </Typography>
      </Box>
      <Grid item xs={12} md={6}>
        <Typography sx={{ textAlign: "justify" }} paragraph>
          Com a mais ampla cobertura de garantia locatícia do país, você terá a tranquilidade de
          saber que os pagamentos estão garantidos e as cobranças estão sob controle.
          <br />
          <p />
          Nossa experiência em reduzir custos para imobiliárias significa que você pode direcionar
          seus recursos para onde realmente importa - expandindo seus negócios.
          <br />
          <p />
          Junte-se a nós na Onda Segura e libere todo o potencial da sua imobiliária. Estamos aqui
          para tornar a gestão de aluguéis mais eficiente, permitindo que você alcance novos níveis
          de sucesso enquanto aproveita uma parceria que entende suas necessidades.
          <br />
          <p />
          Navegue Rumo à Eficiência com a Onda Segura!
        </Typography>
      </Grid>
      {/* Coluna de Imagem */}
      <Grid item xs={12} md={6}>
        <img
          src="/assets/laddingpage/agatha.png"
          alt="Mulher segurando celular"
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
    </Grid>
  );
}

export default Page2;
