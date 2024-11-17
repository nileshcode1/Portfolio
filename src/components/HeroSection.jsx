// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Typography, Button, Box } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#f4f4f4",
        padding: "2rem",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Left Half: Text Section */}
      <motion.div
        initial={{ opacity: 1, width: "100%" }}
        animate={{ width: "50%" }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "2rem",
        }}
      >
        {/* Main Text Content */}
        <Typography
          variant="subtitle1"
          sx={{ color: "#9c27b0", marginBottom: "1rem" }}
        >
          NILESHPANDEY.CLOUD
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", marginBottom: "1rem" }}
        >
          Hi, I'm FullStack Developer
        </Typography>
        <Button variant="contained" color="primary">
          Explore All Our Properties
        </Button>
      </motion.div>

      {/* Right Half: Image Section in Card Format */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          flex: 1,
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          width: "45%",
          height: "90%",
          backgroundImage: `url("/mr_nilesh.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginLeft: "2rem",
          marginTop: "2rem",
        }}
      ></motion.div>

      {/* Top-Left Navigation Bar with Drop-Down Animation */}
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        style={{
          position: "fixed",
          top: "1rem",
          left: "40%",
          transform: "translateX(-50%)",
          width: "fit-content",
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          padding: "0.5rem 1rem",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          zIndex: 10,
        }}
      >
        <Typography
          variant="body1"
          sx={{ cursor: "pointer", color: "#1A1A1A" }}
          onClick={() =>
            document
              .getElementById("experience")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Experience
        </Typography>
        <Typography
          variant="body1"
          sx={{ cursor: "pointer", color: "#1A1A1A" }}
          onClick={() =>
            document
              .getElementById("project")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Projects
        </Typography>
        <Typography
          variant="body1"
          sx={{ cursor: "pointer", color: "#1A1A1A" }}
          onClick={() =>
            document
              .getElementById("contact-me")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Contact Me
        </Typography>
      </motion.div>
    </Box>
  );
};

export default HeroSection;
