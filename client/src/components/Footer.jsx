import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        bgcolor: "primary.main",
        color: "white",
        py: 2,
        textAlign: "center",
        zIndex: 1300, // Make sure it's above content
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Haziq ToDo. All rights reserved.{" "}
        <Link
          href="https://mhaziqrk.uk"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          underline="always"
        >
          Haziq Rohaizan
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
