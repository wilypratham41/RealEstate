// import React from 'react'
// import "./GetStarted.css"

// function GetStarted() {
//   return (
//   <section className='g-wrapper'>
//     <div className='paddings innerWidth g-container'>
//         <div className='flexColCenter inner-container'>
//             <span className='primaryText'>Get Started with Homyz</span>
//             <span className='secondaryText'>Subscribe and find super attractive price quotes for<br></br>Find your residence soon</span>
//            <button className='button'>
//             <a href='mailto:ashwinipatole18@gmail.com'>Get Started</a>
//            </button>

//         </div>
//     </div>
//   </section>
//   )
// }

// export default GetStarted
import React, { useState } from "react";
import "./GetStarted.css";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import { Close, Person, Email, Phone, AttachMoney, Home } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function GetStarted() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    squareFootage: "",
  });

  // Open Modal
  const handleOpenModal = () => setIsModalOpen(true);

  // Close Modal
  const handleCloseModal = () => setIsModalOpen(false);

  // Handle Input Change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Information submitted successfully!");
    setIsModalOpen(false);
  };

  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes for <br />
            Find your residence soon
          </span>
          <button className="button" onClick={handleOpenModal}>
            Get Started
          </button>
        </div>
      </div>

      {/* Enquiry Form Modal */}
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Card sx={{ maxWidth: 500, p: 2, borderRadius: 3 }}>
            <CardContent>
              {/* Modal Header */}
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Enquiry Form
                </Typography>
                <IconButton onClick={handleCloseModal}>
                  <Close />
                </IconButton>
              </Box>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      InputProps={{
                        startAdornment: <Person sx={{ mr: 1 }} />,
                      }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email ID"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      InputProps={{
                        startAdornment: <Email sx={{ mr: 1 }} />,
                      }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      InputProps={{
                        startAdornment: <Phone sx={{ mr: 1 }} />,
                      }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Home Budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      InputProps={{
                        startAdornment: <AttachMoney sx={{ mr: 1 }} />,
                      }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Square Footage"
                      name="squareFootage"
                      value={formData.squareFootage}
                      onChange={handleInputChange}
                      InputProps={{
                        startAdornment: <Home sx={{ mr: 1 }} />,
                      }}
                      required
                    />
                  </Grid>
                </Grid>

                {/* Buttons */}
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                  <Button variant="contained" color="primary" type="submit">
                    Submit
                  </Button>
                  <Button variant="outlined" color="secondary" onClick={handleCloseModal}>
                    Cancel
                  </Button>
                </Box>
              </form>
            </CardContent>
          </Card>
        </Box>
      </Modal>

      {/* Toast Notifications */}
      <ToastContainer position="top-center" autoClose={3000} />
    </section>
  );
}

export default GetStarted;
