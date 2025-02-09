import React from "react";
import { Typography, Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const carouselImages = [
  "https://morweb.org/files/_cache/ffc00308b862ac23da8d45ac540642ad.jpeg",
  "https://muffingroup.com/blog/wp-content/uploads/2021/08/beuni.jpg",
  "https://morweb.org/files/_cache/ffc00308b862ac23da8d45ac540642ad.jpeg",
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // 3 seconds interval
    responsive: [
      {
        breakpoint: 768, // For mobile screens
        settings: {
          slidesToShow: 1,
          arrows: false, // Hide arrows on mobile
        },
      },
    ],
  };

  return (
    <Box>
      {/* Carousel Section */}
      <Box>
        <Slider {...settings}>
          {carouselImages.map((image, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                overflow: "hidden",
                height: { xs: "50vh", sm: "70vh" }, // Adjust height for mobile and web
              }}
            >
              <img
                src={image}
                alt={`Carousel ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // Ensure full coverage of the container
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>

      <Box
      sx={{
        mt: { xs: 3, sm: 4 },
        px: { xs: 2, sm: 4 },
        textAlign: "center",
        py: 8,
        // background: "linear-gradient(to right, #4e54c8, #8f94fb)",
        color: "linear-gradient(to right, #4e54c8, #8f94fb)",
        borderRadius: 4,
        boxShadow: 3,
      
      }}
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        gutterBottom
        sx={{ fontSize: { xs: "2rem", sm: "3rem" }, fontWeight: "bold", marginRight: 'auto' }}
        component={motion.div}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Welcome to Our School
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{ fontSize: { xs: "1rem", sm: "1.2rem" }, maxWidth: "800px", margin: "auto", lineHeight: 1.6 }}
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Our school is dedicated to providing a holistic learning experience that nurtures creativity, curiosity, and critical thinking.  
        With a strong focus on academic excellence and personal growth, we prepare students for a successful future.
      </Typography>

      <Typography
        variant="body1"
        sx={{ fontSize: { xs: "1rem", sm: "1.2rem" }, maxWidth: "800px", margin: "auto", mt: 2, lineHeight: 1.6 }}
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        Our classrooms are designed to encourage collaboration and innovation, ensuring that every student gets the attention and resources they need to thrive.
      </Typography>

      {/* Our Mission Section */}
      <Box sx={{ mt: { xs: 3, sm: 5 } }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontSize: { xs: "1.5rem", sm: "2rem" }, fontWeight: "bold" }}
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          Our Mission
        </Typography>

        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem" }, lineHeight: 1.6, maxWidth: "800px", margin: "auto" }}
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
        >
          To empower students with the knowledge, confidence, and skills needed to excel in an ever-changing world.  
          We focus on academic excellence, moral values, and emotional intelligence to create well-rounded individuals.
        </Typography>
      </Box>

      {/* Our Core Values */}
     
    </Box>

    </Box>
  );
};

export default Home;
