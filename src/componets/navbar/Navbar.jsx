import { useEffect, useState } from "react";
import Logo from "../../assets/images/logo-web.png";
import { Avatar } from "@mui/material";
// import {
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
// } from "@chakra-ui/react";
import { scrollToTop } from "../../utils/scroll";
import { GiHamburgerMenu } from "react-icons/gi";
// import { useDisclosure } from "@chakra-ui/react";
import { LuMenu } from "react-icons/lu";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CustomDrawer from "./Drawer";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const user = true
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    setActiveLink(pathname);
  }, [location]);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
    <CustomDrawer open={drawerOpen} onClose={handleDrawerClose} />
      <div className="navbar-wrapper m-0 p-0">
        <div className="d-flex justify-content-center p-4 align-items-center position-sticky z-3 w-100  m-0 p-0">
          <div className="container row justify-content-center align-items-center d-flex m-0 p-0">
            <div className="col-xl-3 col-lg-3 col-md-2">
              <div className="d-flex justify-content-between">
                <NavLink to="/" onClick={scrollToTop}>
                 <h4 className="text-white ">EadgHome</h4>
                </NavLink>
                <div>
                  <LuMenu
                    size={30}
                    onClick={handleDrawerOpen}
                    className="hiddenNav"
                  />
                </div>
              </div>
            </div>

            <div className="row1 gap-4 col-xl-6 col-lg-7 col-md-7 hidden">
              <NavLink
                exact
                to="/"
                onClick={scrollToTop}
                className={activeLink === "/" ? "activeLink" : "link"}
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
                onClick={scrollToTop}
                className={activeLink === "/services" ? "activeLink" : "link"}
              >
                Service
              </NavLink>
              <NavLink
                to="/about"
                onClick={scrollToTop}
                className={activeLink === "/about" ? "activeLink" : "link"}
              >
                About Us
              </NavLink>
              <NavLink
                to="/pricing"
                onClick={scrollToTop}
                className={activeLink === "/pricing" ? "activeLink" : "link"}
              >
                Pricing
              </NavLink>
              <NavLink
                to="/contact"
                onClick={scrollToTop}
                className={activeLink === "/contact" ? "activeLink" : "link"}
              >
                Contact Us
              </NavLink>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3 hidden">
              {!user ? (
                <div className="d-flex gap-2">
                  <NavLink to={"/career"} onClick={scrollToTop}>
                    <button className="btn btn-light px-4">Login</button>
                  </NavLink>
                  <NavLink to={"/career"} onClick={scrollToTop}>
                    <button className="btn btn-light px-4">Register</button>
                  </NavLink>
                </div>
              ) : (
                <div className="d-flex gap-2">
                  <NavLink to={"/career"} onClick={scrollToTop}>
                    {/* <button className="btn btn-secondary px-4">Profile</button> */}
                    <Avatar />
                  </NavLink>
                  <NavLink to={"/career"} onClick={scrollToTop}>
                    <button className="btn btn-light px-4">Logout</button>
                  </NavLink>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

    </>
  );
};

export default Navbar;
