import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="footer-wrapper mt-5">
      <div className="footer-overlay">
        <Container>
          <Row className="py-5 text-light">
            {/* Brand Section */}
            <Col md={4} className="mb-4">
              <h3 className="fw-bold text-info">RG Electronics</h3>
              <p className="footer-about">
                Discover the best in electronics, gadgets, and smart technology.
                Quality products with reliable service.
              </p>

              {/* Social Icons */}
              <div className="social-icons mt-3">
                {[
                  "bi-facebook",
                  "bi-instagram",
                  "bi-twitter",
                  "bi-youtube",
                  "bi-linkedin",
                ].map((icon, index) => (
                  <a key={index} href="#" className="social-item">
                    <i className={`bi ${icon}`}></i>
                  </a>
                ))}
              </div>
            </Col>

            {/* Quick Links */}
            <Col md={4} className="mb-4">
              <h4 className="fw-bold text-info">Quick Links</h4>
              <ul className="list-unstyled footer-links mt-3">
                {["Home", "Products", "Offers", "About Us", "Services", "Contact"].map(
                  (item, index) => (
                    <li key={index} className="my-2">
                      <a href="#" className="footer-link">
                        <i className="bi bi-chevron-right"></i> {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </Col>

            {/* Contact Info */}
            <Col md={4}>
              <h4 className="fw-bold text-info">Contact Us</h4>
              <p className="mt-3">
                <i className="bi bi-envelope-fill text-info"></i>{" "}
                rgelectronics@gmail.com
              </p>
              <p>
                <i className="bi bi-telephone-fill text-info"></i> +91 75107 18636
              </p>
              <p>
                <i className="bi bi-geo-alt-fill text-info"></i> Tech Park, Bengaluru
              </p>
            </Col>
          </Row>

          <hr className="border-light" />

          <p className="text-center text-light small py-2">
            © {new Date().getFullYear()}{" "}
            <span className="text-info fw-bold">RG Electronics</span> | All Rights
            Reserved
          </p>
        </Container>
      </div>

      {/* Custom CSS */}
      <style>{`
        .footer-wrapper {
          background: linear-gradient(145deg, #0a0a0a, #1a1a1a);
          position: relative;
          overflow: hidden;
        }

        .footer-overlay {
          backdrop-filter: blur(3px);
          background: rgba(255, 255, 255, 0.05);
        }

        .footer-about {
          font-size: 15px;
          opacity: 0.85;
        }

        /* Social Icons */
        .social-icons .social-item {
          color: #ffffffcc;
          font-size: 24px;
          margin-right: 14px;
          transition: 0.3s;
        }

        .social-item:hover {
          color: #0dcaf0;
          transform: scale(1.3);
        }

        /* Footer Links */
        .footer-link {
          color: #dcdcdc;
          text-decoration: none;
          transition: 0.3s;
        }

        .footer-link:hover {
          color: #0dcaf0;
          padding-left: 8px;
        }

        /* Glow Animation Background */
        .footer-wrapper::before {
          content: "";
          position: absolute;
          top: -150px;
          left: -150px;
          width: 300px;
          height: 300px;
          background: #0dcaf0;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.4;
          animation: glowMove 12s infinite linear;
        }

        @keyframes glowMove {
          0% { transform: translate(0,0); }
          50% { transform: translate(300px,150px); }
          100% { transform: translate(0,0); }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
