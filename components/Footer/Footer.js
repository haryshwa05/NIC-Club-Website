import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container poppins-regular">
          <div className="footer-content flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-16">
            {/* Google Maps Section */}
            <div className="footer-section footer-map lg:pl-20">
              <iframe
                className="w-full h-32 md:h-32"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4079.983059147238!2d80.20785439565071!3d13.051764926514947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266ea218fc7e3%3A0x70bbbca6edfc9243!2sSRM%20University%20Vadapalani%20City%20Campus!5e0!3m2!1sen!2sin!4v1723792520484!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>

            <div className="footer-section stay-connected text-center lg:flex lg:flex-col lg:pl-12">
              <h1 className="text-md text-center akira-expanded text-nowrap">Stay Connected</h1>
              <div className="contact-info">
                <span className="block">
                  <span className="label">Phone:</span>
                  <span className="value">
                    <a href="tel:044 4396 9966">044 4396 9966</a>
                  </span>
                </span>
                <span className="block">
                  <span className="label">Email:</span>
                  <span className="value">
                    <a href="mailto:nicsrmvdp@gmail.com">nicsrmvdp@gmail.com</a>
                  </span>
                </span>
                <div className="social-media-icons flex justify-center mt-4 space-x-4">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    <FaFacebook size={30} />
                  </a>
                  <a
                    href="https://www.instagram.com/nic_srm_vdp/?locale=hi_IN&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-600"
                  >
                    <FaInstagram size={30} />
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-800"
                  >
                    <FaLinkedin size={30} />
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-section footer-address lg:pr-12">
              <h2 className="akira-expanded">Reach Us</h2>
              <p>
                C block No.1, Jawaharlal <br />
                Nehru Rd, Vadapalani Chennai,<br />
                Tamil Nadu 600026
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-separator"></div> {/* Add a separator div */}
      <div className="footer-bottom">
        <p>© 2024 NextGen Intelligence Club. All rights reserved.</p>
      </div>
    </>
  );
}
