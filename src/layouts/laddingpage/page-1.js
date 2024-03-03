import React, { useRef } from "react";
import { Box, Typography, Button, Grid, Avatar, useMediaQuery } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleFilledWhite";

const Page1 = () => {
  const isMobile = useMediaQuery("(max-width:1240px)");
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };
  const subtitle = {
    fontSize: (isMobile && "16px") || "20px",
    letterSpacing: (isMobile && "1px") || "2px",
  };
  const subtitleBold = {
    fontSize: (isMobile && "16px") || "20px",
    fontWeight: "bold",
    margin: "0px 10px ",
    letterSpacing: (isMobile && "1px") || "2px",
  };
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        color: "white",
        Width: "100%",
      }}
    >
      <div style={{ display: "flex", position: "absolute", top: "-10px", left: "0" }}>
        <img
          style={{ width: (isMobile && "120px") || "200px" }}
          src="/assets/laddingpage/itemleft.png"
        />
      </div>
      <div
        style={{
          boxShadow: "none",
          border: "none",
          display: "flex",
          backgroundColor: "transparent",
          flexDirection: "column",
          alignItems: `${(isMobile && "center") || "flex-start"}`,
          justifyContent: "center",
        }}
      >
        <Box
          mb={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{ width: 215, height: 215 }}
            alt="Remy Sharp"
            src="/assets/laddingpage/logo.png"
          />
        </Box>
        <Typography
          sx={{
            letterSpacing: "4.5px",
            fontWeight: "300",
            fontSize: (isMobile && "14px") || "20px",
            marginBottom: "20px",
          }}
          gutterBottom
        >
          BAIXE NOSSO APP E SE SURPREENDA
        </Typography>
        <Typography variant={`${(isMobile && "h4") || "h2"}`}>A escolha inteligente</Typography>
        <Typography variant={`${(isMobile && "h4") || "h2"}`} sx={{ marginTop: "-7px" }}>
          para sua imobiliária.
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "15px",
          }}
        >
          <Typography sx={subtitle}>
            Locação <strong>sem fiador</strong> e com <strong>garantia</strong>
            <br /> é com a <strong>Onda Segura.</strong>
          </Typography>
        </div>

        <Box mt={4} sx={{ marginLeft: "10px" }} display="flex" flexDirection="column" gap={2}>
          <Button
            sx={{ width: "300px", backgroundColor: "#04213F", color: "white" }}
            variant="outlined"
            component="a"
            href="https://play.google.com/store/apps/details?id=com.frontendonda&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={
              <Avatar
                variant="square"
                sx={{ width: 50, height: 50 }}
                src="/assets/laddingpage/play.png"
              />
            }
            color="primary"
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <Typography variant="body1"> Baixe no</Typography>
              <Typography variant="h6"> Google Play</Typography>
            </div>
          </Button>
          <Button
            sx={{ width: "300px", backgroundColor: "#04213F", color: "white" }}
            component="a"
            href="https://apps.apple.com/br/app/onda-segura/id6449440563"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            color="primary"
            startIcon={
              <Avatar
                variant="square"
                sx={{ width: 50, height: 50 }}
                src="/assets/laddingpage/aple1.png"
              />
            }
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <Typography variant="body1">Baixe na </Typography>
              <Typography variant="h6">App Store</Typography>
            </div>
          </Button>
        </Box>
      </div>

      {/* Right Section */}
      <div
        xs={4.5}
        sm={6}
        md={4}
        bx={0}
        style={{
          boxShadow: "none",
          border: "none",
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "50px",
            marginBottom: "20px",
          }}
        >
          <Typography variant={(isMobile && "h5") || "h6"} gutterBottom>
            Apenas
            <strong style={{ color: "#ffcd02" }}> 7,5% </strong>
            de Taxa Social.
          </Typography>
          <Typography variant={(isMobile && "h6") || "h6"} gutterBottom>
            A <strong>menor taxa comprovada </strong>
            do mercado.
          </Typography>
        </div>

        <div class="plyr__video-embed" id="player">
          <iframe
            style={{
              width: (isMobile && "350px") || "550px",
              height: (isMobile && "200px") || "500px",
            }}
            src="https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
            allowfullscreen
            allowtransparency
            frameborder="0"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </Grid>
  );
};

export default Page1;
