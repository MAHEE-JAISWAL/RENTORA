import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

export function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Form Submitted", form);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "97.8vh",
        backgroundColor: "#f7f7f7",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card
          sx={{
            maxWidth: 400,
            p: 4,
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: "white",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Login to your Account
            </Typography>
            <form onSubmit={handleSubmit} className="space-y-4">
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                variant="outlined"
                margin="dense"
                InputLabelProps={{
                  style: { color: "black" }, // Label color
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "black", // Default border color
                    },
                    "&:hover fieldset": {
                      borderColor: "black", // Hover border color
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "black", // Focused border color
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                variant="outlined"
                margin="dense"
                InputLabelProps={{
                  style: { color: "black" }, // Label color
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "black", // Default border color
                    },
                    "&:hover fieldset": {
                      borderColor: "black", // Hover border color
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "black", // Focused border color
                    },
                  },
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: "black",
                  color: "white",
                  "&:hover": { backgroundColor: "#333" },
                }}
              >
                Login
              </Button>
            </form>
            <Typography
              variant="body2"
              align="center"
              sx={{ mt: 2, color: "black" }}
            >
              Or
            </Typography>
            <Button
              fullWidth
              variant="outlined"
              startIcon={
                <img
                  src="/Google-icon.png"
                  alt="Google Icon"
                  style={{ width: "20px", height: "20px" }}
                />
              }
              sx={{
                mt: 1,
                color: "black",
                borderColor: "black",
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                  borderColor: "black",
                },
              }}
              onClick={() => {
                console.log("Sign in with Google clicked");
              }}
            >
              Sign in with Google
            </Button>
            <Typography
              variant="body2"
              align="center"
              sx={{ mt: 2, color: "black" }}
            >
              <a
                href="/forgot-password"
                className="text-blue-500 hover:underline"
                style={{ textDecoration: "none" }}
              >
                Forgot Password?
              </a>
            </Typography>
            <Typography
              variant="body2"
              align="center"
              sx={{ mt: 1, color: "black" }}
            >
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-blue-500 hover:underline"
                style={{ textDecoration: "none" }}
              >
                Create one
              </a>
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default Login;
