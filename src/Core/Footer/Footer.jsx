import React, { useEffect } from "react";
import "./Footer.css";

export default function Footer() {
  useEffect(() => {
    const toTopButton = document.getElementById("toTop");

    const handleScroll = () => {
      if (window.scrollY > 100) {
        toTopButton.style.display = "block";
      } else {
        toTopButton.style.display = "none";
      }
    };

    const scrollToTop = (event) => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    window.addEventListener("scroll", handleScroll);
    toTopButton.addEventListener("click", scrollToTop);

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      toTopButton.removeEventListener("click", scrollToTop);
    };
  }, []);

  return (
    <section className="footer">
      <div className="footcontainer">
        <div className="footer-class">
          <p className="footer-grid">
            Copyrights © 2025, All Rights Reserved.
          </p>
          {/* <ul className="social-ic-icons">
            <li className="facebook">
              <a href="https://www.facebook.com/"><span></span></a>
            </li>
            <li className="twitter">
              <a href="https://x.com/"><span></span></a>
            </li>
            <li className="gmail">
              <a href="https://mail.google.com/"><span></span></a>
            </li>
            <li className="browser">
              <a href="#"><span></span></a>
            </li>
          </ul> */}
          <div className="clearfix"></div>
        </div>
      </div>
      <a href="#" id="toTop" style={{ display: "none" }}>
        <span id="toTopHover"></span>
      </a>
    </section>
  );
}
