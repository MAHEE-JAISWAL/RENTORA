import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import Navbar from "../components/Navbar.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Main.css"; // Your custom styles

export default function Mainn() {
  const carouselSettings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    dots: false,
  };

  const cardSliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 960,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const additionalCards = [
    {
      id: 7,
      image: "/promo1.jpg",
      title: "Celebrate Earth Day",
      description: "Recycle your devices for free.",
    },
    {
      id: 8,
      image: "/promo2.jpg",
      title: "iPhone 16 Pro",
      description: "From $1199.00",
    },
    {
      id: 9,
      image: "/promo3.jpg",
      title: "Apple Watch Series 10",
      description: "From $469.00",
    },
    {
      id: 10,
      image: "/promo4.jpg",
      title: "iPad Air",
      description: "From $599.00",
    },
    {
      id: 11,
      image: "/promo5.jpg",
      title: "MacBook Pro",
      description: "From $1299.00",
    },
    {
      id: 12,
      image: "/promo6.jpg",
      title: "AirPods Pro",
      description: "From $249.00",
    },
  ];

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero Carousel */}
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <div className="zebra-border">
          <Slider {...carouselSettings}>
            {[
              "/furnitureee.jpg",
              "/photo2.webp",
              "/wed.webp",
              "/sport.jpg",
            ].map((src, index) => (
              <div key={index}>
                <img
                  src={src}
                  alt={`Slide ${index}`}
                  className="carousel-img"
                />
              </div>
            ))}
          </Slider>
        </div>
      </Box>

      {/* Product Cards Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 5,
          mt: 6,
          flexWrap: "wrap",
        }}
      >
        {additionalCards.map((card) => (
          <Box
            key={card.id}
            sx={{
              width: 350,
              height: 300,
              borderRadius: 4,
              overflow: "hidden",
              position: "relative",
              backgroundColor: "#fff",
              boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
              transition: "all 0.4s ease",
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0px 20px 40px rgba(0,0,0,0.3)",
              },
              "&:hover .details": {
                opacity: 1,
                transform: "translateY(0)",
              },
            }}
          >
            <Box
              component="img"
              src={card.image}
              alt={card.title}
              sx={{ width: "100%", height: "80%", objectFit: "cover" }}
            />
            <Box
              className="details"
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "30%",
                background: "rgba(0,0,0,0.6)",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                p: 2,
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.4s ease",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                {card.title}
              </Typography>
              <Typography variant="body2" mt={1}>
                {card.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Additional Product Carousel */}
      <Box sx={{ mt: 6, px: 3 }}>
        {/* Headline */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 4,
          }}
        >
          New Products
        </Typography>

        <Slider {...cardSliderSettings}>
          {additionalCards.map((card) => (
            <Card
              key={card.id}
              sx={{
                width: 280,
                height: 600,
                borderRadius: 4,
                boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
                overflow: "hidden",
                margin: "0 10px",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={card.image}
                alt={card.title}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {card.title}
                </Typography>
                <Typography variant="body2" mt={1} color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Slider>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          py: 6,
          mt: 6,
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          {/* Customer Service Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Customer Service
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              FAQ
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Returns & refunds
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Terms and conditions
            </Typography>
            <Typography variant="body2">Privacy Policy</Typography>
          </Grid>

          {/* Fabrikam Store Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Fabrikam Store
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Store locations
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Store hours
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Store events
            </Typography>
            <Typography variant="body2">Fabrikam store support</Typography>
          </Grid>

          {/* About Us Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Our story
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Careers with Fabrikam
            </Typography>
            <Typography variant="body2">News</Typography>
          </Grid>

          {/* Follow Us Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <img
                src="/facebook-icon.png"
                alt="Facebook"
                style={{ width: "24px", height: "24px" }}
              />
              <img
                src="/twitter-icon.png"
                alt="Twitter"
                style={{ width: "24px", height: "24px" }}
              />
              <img
                src="/instagram-icon.png"
                alt="Instagram"
                style={{ width: "24px", height: "24px" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
