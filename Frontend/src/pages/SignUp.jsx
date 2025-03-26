import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

export function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(form.email))
      newErrors.email = "Invalid email address";
    if (!form.password) newErrors.password = "Password is required";
    else if (!passwordRegex.test(form.password))
      newErrors.password =
        "Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Signup Form Submitted", form);
    }
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
              Create an Account
            </Typography>
            <form onSubmit={handleSubmit} className="space-y-4">
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                variant="outlined"
                margin="dense"
                error={!!errors.name}
                helperText={errors.name}
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
                label="Email Address"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                variant="outlined"
                margin="dense"
                error={!!errors.email}
                helperText={errors.email}
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
                error={!!errors.password}
                helperText={errors.password}
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
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={handleChange}
                variant="outlined"
                margin="dense"
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
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
                Sign Up
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
                fontWeight: "530",
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
              sx={{ mt: 2, color: "black",fontWeight:"light" }}
            >
              Already have an account?{" "}
              <a
                href="/login"
                className="text-blue-500 hover:underline"
                style={{ textDecoration: "none" }}
              >
                Go to Login
              </a>
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default SignUp;
