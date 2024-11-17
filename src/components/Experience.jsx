// src/components/MyExperience.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MyExperience = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [isCardStyle, setIsCardStyle] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  // Update card style based on scroll state
  React.useEffect(() => {
    if (!inView) {
      setIsCardStyle(true);
    } else {
      setIsCardStyle(false);
    }
  }, [inView]);

  // Experience data
  const experiences = [
    {
      company: "Google",
      logo: "/google_logo.png",
      description: "Worked on enhancing search algorithms and user experience.",
      details: [
        "Developed advanced algorithms for search optimization.",
        "Collaborated with UI/UX teams to enhance user experience.",
        "Led a team to implement new indexing technology.",
      ],
    },
    {
      company: "Meta",
      logo: "/meta_logo.png",
      description: "Developed tools for social media analytics and engagement.",
      details: [
        "Created tools for data analytics and tracking social trends.",
        "Worked on backend optimizations for performance improvements.",
        "Conducted A/B testing to refine user engagement strategies.",
      ],
    },
    {
      company: "Facebook",
      logo: "/facebook_logo.png",
      description:
        "Improved ad targeting algorithms and data privacy features.",
      details: [
        "Enhanced ad-targeting algorithms to improve relevancy.",
        "Implemented privacy features to comply with data regulations.",
        "Designed scalable solutions for ad data processing.",
      ],
    },
  ];

  // Function to handle expand/collapse
  const handleExpandClick = (index) => {
    setExpandedCard((prev) => (prev === index ? null : index));
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: 1,
        y: isCardStyle ? -60 : 0,
        borderRadius: isCardStyle ? "20px" : "0px",
        scale: isCardStyle ? 0.9 : 1,
        margin: isCardStyle ? "2rem" : "0",
        boxShadow: isCardStyle ? "0 8px 16px rgba(0, 0, 0, 0.2)" : "none",
      }}
      transition={{ duration: 0.8 }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem",
        backgroundColor: "#e0e0e0",
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: "2rem" }}>
        My Experience
      </Typography>

      {/* Experience Cards in Column Format */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            style={{ width: "100%" }}
            whileHover={{ scale: 1.02 }}
          >
            <Card
              sx={{
                borderRadius: "15px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                overflow: "hidden",
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="h5" sx={{ flexGrow: 1 }}>
                    {exp.company}
                  </Typography>
                  <IconButton
                    onClick={() => handleExpandClick(index)}
                    sx={{
                      transform:
                        expandedCard === index
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </Box>
                <Typography variant="body2" sx={{ marginTop: "0.5rem" }}>
                  {exp.description}
                </Typography>
              </CardContent>

              {/* Animated Expanded Details Section */}
              <AnimatePresence>
                {expandedCard === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ overflow: "hidden" }}
                  >
                    <CardContent>
                      {exp.details.map((detail, i) => (
                        <Typography
                          key={i}
                          variant="body2"
                          sx={{ marginBottom: "0.5rem" }}
                        >
                          - {detail}
                        </Typography>
                      ))}
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        ))}
      </Box>
    </motion.div>
  );
};

export default MyExperience;
