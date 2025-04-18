import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
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
          <IconButton
            color="inherit"
            onClick={() => navigate("/")}
            title="Home"
            sx={{
              transition: "transform 0.2s",
              "&:hover": { transform: "scale(1.2)" },
            }}
          >
            <HomeOutlinedIcon />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() => navigate("/products")}
            title="Products"
            sx={{
              transition: "transform 0.2s",
              "&:hover": { transform: "scale(1.2)" },
            }}
          >
            <StorefrontOutlinedIcon />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() => navigate("/search")}
            title="Search"
            sx={{
              transition: "transform 0.2s",
              "&:hover": { transform: "scale(1.2)" },
            }}
          >
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() => navigate("/theme")}
            title="Theme"
            sx={{
              transition: "transform 0.2s",
              "&:hover": { transform: "scale(1.2)" },
            }}
          >
            <Brightness4OutlinedIcon />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() => navigate("/cart")}
            title="Add to Cart"
            sx={{
              transition: "transform 0.2s",
              "&:hover": { transform: "scale(1.2)" },
            }}
          >
            <ShoppingCartOutlinedIcon />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() => navigate("/favorites")}
            title="Favorites"
            sx={{
              transition: "transform 0.2s",
              "&:hover": { transform: "scale(1.2)" },
            }}
          >
            <FavoriteBorderOutlinedIcon />
          </IconButton>
        </Box>
        <IconButton
          color="inherit"
          onClick={handleMenuOpen}
          title="Profile"
          sx={{
            transition: "transform 0.2s",
            "&:hover": { transform: "scale(1.2)" },
          }}
        >
          <PersonOutlineOutlinedIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {!isLoggedIn
            ? [
                <MenuItem key="login" onClick={() => navigate("/login")}>
                  Login
                </MenuItem>,
                <MenuItem key="signup" onClick={() => navigate("/signup")}>
                  Sign Up
                </MenuItem>,
              ]
            : [
                <MenuItem key="profile" onClick={() => navigate("/profile")}>
                  Your Profile
                </MenuItem>,
                <MenuItem key="logout" onClick={handleLogout}>
                  Log Out
                </MenuItem>,
              ]}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
