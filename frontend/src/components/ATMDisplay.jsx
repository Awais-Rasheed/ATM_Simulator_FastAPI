import React from "react";
import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const ATMDisplay = ({ title, children }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        background: "linear-gradient(145deg, #f5f5f5, #ffffff)",
        border: "3px solid #000000",
        borderRadius: "20px",
        width: 550,
        height: 600,
        margin: "50px auto",
        padding: "20px",
        color: "#000000",
        boxShadow: "0 0 25px rgba(0, 0, 0, 0.3)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* ATM Header */}
      <Typography
        variant="h5"
        sx={{
          color: "#000000",
          fontWeight: "bold",
          letterSpacing: "1px",
          mb: 2,
        }}
      >
        💳 {title}
      </Typography>

       <Button variant="contained" onClick={() => navigate("/")}>
          Home
        </Button>

      {/* ATM Screen Area */}
      <Box
        sx={{
          background: "radial-gradient(circle at top, #ffffff, #e0e0e0 80%)",
          width: "90%",
          flexGrow: 1,
          borderRadius: "12px",
          border: "1px solid #000000",
          boxShadow: "inset 0 0 25px rgba(0, 0, 0, 0.2)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
          mb: 3,
          p: 3,
          textAlign: "center",
          color: "#000000",
          overflowY: "auto",
        }}
      >
        {children}
      </Box>

      {/* ATM Footer */}
      <Typography
        variant="caption"
        sx={{ color: "#333333", fontStyle: "italic" }}
      >
        🏦 ATM Simulator — Powered by FastAPI + React
      </Typography>
    </Box>
  );
};

export default ATMDisplay;
