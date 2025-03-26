import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export default function Main() {
  return (
    <>
      {/* Navigation Bar */}
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            Rentora
          </Typography>
          <Box>
            <Button color="inherit" sx={{ textTransform: "none" }}>
              Home
            </Button>
            <Button color="inherit" sx={{ textTransform: "none" }}>
              About
            </Button>
            <Button color="inherit" sx={{ textTransform: "none" }}>
              Furnitures
            </Button>
            <Button color="inherit" sx={{ textTransform: "none" }}>
              Services
            </Button>
            <Button color="inherit" sx={{ textTransform: "none" }}>
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Welcome to Rentora
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, color: "gray" }}>
          Explore our services and find the best furniture rentals for your
          needs.
        </Typography>
      </Box>
    </>
  );
}
