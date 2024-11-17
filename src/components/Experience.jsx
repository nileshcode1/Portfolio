// // src/components/AboutUs.jsx
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";

// const MyExperience = () => {
//   const { ref, inView } = useInView({ threshold: 0.5 });
//   const [isCardStyle, setIsCardStyle] = useState(false);

//   // Update card style based on scroll state
//   React.useEffect(() => {
//     if (!inView) {
//       setIsCardStyle(true);
//     } else {
//       setIsCardStyle(false);
//     }
//   }, [inView]);

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 100 }}
//       animate={{
//         opacity: 1,
//         y: isCardStyle ? -60 : 0,
//         borderRadius: isCardStyle ? "20px" : "0px",
//         scale: isCardStyle ? 0.9 : 1,
//         margin: isCardStyle ? "2rem" : "0",
//         boxShadow: isCardStyle ? "0 8px 16px rgba(0, 0, 0, 0.2)" : "none",
//       }}
//       transition={{ duration: 0.8 }}
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "4rem",
//         height: "100vh",
//         backgroundColor: "#e0e0e0",
//       }}
//     >
//       <Typography variant="h3" sx={{ marginBottom: "2rem" }}>
//         Experience
//       </Typography>
//       <Typography
//         variant="body1"
//         sx={{ maxWidth: "600px", textAlign: "center" }}
//       >
//         We are a team of passionate developers creating amazing experiences with
//         modern web technologies. Our focus is on delivering high-quality
//         products and solutions tailored to meet client needs.
//       </Typography>
//     </motion.div>
//   );
// };

// export default MyExperience;


// src/components/MyExperience.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const MyExperience = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [isCardStyle, setIsCardStyle] = useState(false);

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
    },
    {
      company: "Meta",
      logo: "/meta_logo.png",
      description: "Developed tools for social media analytics and user engagement.",
    },
    {
      company: "Facebook",
      logo: "/facebook_logo.png",
      description: "Improved ad targeting algorithms and data privacy features.",
    },
  ];

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
        height: "100vh",
        backgroundColor: "#e0e0e0",
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: "2rem" }}>
        My Experience
      </Typography>

      {/* Experience Cards */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            style={{ width: "300px" }}
          >
            <Card
              sx={{
                borderRadius: "15px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                overflow: "hidden",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={exp.logo}
                alt={`${exp.company} logo`}
              />
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {exp.company}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: "1rem" }}>
                  {exp.description}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </motion.div>
  );
};

export default MyExperience;
