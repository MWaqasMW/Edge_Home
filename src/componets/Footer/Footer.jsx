import React from "react";

// import Twitter from "react-icons/fa";
// import Instagram from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
// import linkdin from "react-icons/fa";
import "./Footer.css";
import { scrollToTop } from "../../utils/scroll";
import { Link as RouterLink } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="container border-top">
      <div className="row d-flex justify-content-center">
        <div className="mt-3">
          EdgeHome
        </div>
        <div className="row mt-4">
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <p
              className="head_Nav font_heading"
              style={{
                fontSize: 20,
                color: "#F35925",
              }}
            >
              About us
            </p>
            <p className="text mt-3" style={{ fontSize: "15px" }}>
              At 3Const, we are dedicated to charting the course for a
              technologically advanced future. Our commitment lies in pioneering
              innovations that transcend the present and pave the way for a
              dynamic tomorrow.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div
              className="head_Nav mb-3 font_heading"
              style={{
                fontSize: 20,
                color: "#F35925",
              }}
            >
              Pages
            </div>
            {/*headin5_amrc*/}
            <ul className="footer_ul_amrc me-4">
              <li>
                <RouterLink to="/" onClick={scrollToTop}>
                  Home
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/about" onClick={scrollToTop}>
                  About Us
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/services" onClick={scrollToTop}>
                  Services
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/pricing" onClick={scrollToTop}>
                  Pricing
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/career" onClick={scrollToTop}>
                  Career
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/contact" onClick={scrollToTop}>
                  Contact us
                </RouterLink>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6  col-12">
            <div
              className="head_Nav font_heading"
              style={{
                fontSize: 20,
                color: "#F35925",

              }}
            >
              Contact us
            </div>
            <ul className="footer_ul_amrc">
              <li
                className="d-flex align-items-center gap-1"
                style={{
                  fontSize: 13,
                }}
              >
                <FaPhoneVolume size={"18px"} />
                <span className="">+92 332 2287638</span>
              </li>

              <li
                className="d-flex align-items-center gap-1"
                style={{
                  fontSize: 13,
                }}
              >
                <a href="mailto:info@3const.com" className="d-flex gap-1">
                  <MdEmail size={"20px"} />
                  <span>info@3const.com</span>
                </a>
              </li>
              <li
                className="d-flex align-items-center gap-1"
                style={{
                  fontSize: 13,
                  width: "80%",
                }}
              >
                <a
                  href="https://www.google.com/maps/place/3Const+(Pvt)+Ltd./@24.9146989,67.1078245,17z/data=!4m14!1m7!3m6!1s0x3eb339d23c6f44ff:0xecbd043d8b12a079!2s3Const+(Pvt)+Ltd.!8m2!3d24.9146941!4d67.1103994!16s%2Fg%2F11qh7qy33c!3m5!1s0x3eb339d23c6f44ff:0xecbd043d8b12a079!8m2!3d24.9146941!4d67.1103994!16s%2Fg%2F11qh7qy33c?entry=ttu"
                  target="blank"
                  className="d-flex gap-1"
                >
                  <FaLocationDot size={"20px"} />
                  <span>3Const, Plot No# R-07 Block 10-A gulistan e johar</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12 col-12">
            <div
              className="head_Nav mb-3 font_heading"
              style={{
                fontSize: 20,
                color: "#F35925",

              }}
            >
              Follow us
            </div>
            <ul className="footer_ul2_amrc">
              <div className="d-flex gap-4 flex-column">
                <div className="d-flex gap-2 align-items-center">
                  <FaFacebookF size={25} />
                  <a className="link_footer m-0 p-0">www.facebook.com</a>
                </div>
                <div className="d-flex gap-2 align-items-center align-items-center">
                  <FaTwitter size={25}
                  />
                  <a className="link_footer m-0 p-0 ">www.twitter.com</a>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <FaInstagramSquare size={25}
                  />
                  <a className="link_footer m-0 p-0">www.instagram.com</a>
                </div>

              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-top">
        <div className="d-flex justify-content-between">
          <div>
            <p className="mt-4 d-flex align-items-center gap-1">
              <span>
                <FaRegCopyright size={12} />
              </span>{" "}
              Copyright by . EdgeHome All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
