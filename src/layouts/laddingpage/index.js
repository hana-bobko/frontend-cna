import React from "react";
import { useMediaQuery } from "@mui/material";
//pages

export default function LandingPage() {
  const isMobile = useMediaQuery("(max-width:1000px)");
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(135deg, #107ece 0%, #107ece 29%, #00B0D2 50%, #0083B0 100%)",
          minWidth: "100%",
          minHeight: "650px",
        }}
      >
        <div
          style={{
            padding: (isMobile && "20px") || "80px",
            marginBottom: (isMobile && "30px") || "none",
          }}
        ></div>
      </div>
      <div
        style={{
          background: "white",
          minWidth: "100%",
          minHeight: "650px",
        }}
      >
        <div
          style={{
            padding:
              (isMobile && "45px 30px 20px 30px") || "80px 80px 0px 80px",
          }}
        ></div>
      </div>
      <div
        style={{
          background:
            "linear-gradient(135deg, #107ece 0%, #107ece 29%, #00b0d2 50%, #0083b0 100%)",
          minWidth: "100%",
          minHeight: "1250px",
          marginTop: "-40px",
          padding: (isMobile && "0px 0px 90px 0px") || "0px 30px 90px 30px",
        }}
      ></div>
    </>
  );
}
