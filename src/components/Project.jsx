// src/components/MyExperience.jsx
import React from "react";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";

const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem",
        height: "100vh",
        backgroundColor: "#c0c0c0",
        borderRadius: "20px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: "2rem" }}>
        My Project
      </Typography>
      <Typography
        variant="body1"
        sx={{ maxWidth: "600px", textAlign: "center" }}
      >
        I have experience in web development, focusing on creating intuitive
        user interfaces and interactive web applications using modern
        technologies like React, Framer Motion, and Material-UI.
      </Typography>
    </motion.div>
  );
};

export default Project;
