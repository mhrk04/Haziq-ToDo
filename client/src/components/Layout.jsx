import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <div style={{ flex: 1, padding: "16px" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
