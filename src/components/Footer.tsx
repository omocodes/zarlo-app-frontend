import { FaInstagram, FaYoutube, FaTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import iOSStore from "../assets/ios-store.svg";
import GooglePlay from "../assets/google-play.svg";

const Footer = () => {
  return (
    <div className="py-10" style={{ backgroundColor: '#d2a323' }}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
        
        {/* Quick Links */}
        <div className="flex flex-col">
          <h4 className="font-bold mb-4 text-black text-lg">Quick Links</h4>
          <a href="#how-it-works" className="text-sm hover:text-black mb-2">How It Works</a>
          <a href="#trust-safety" className="text-sm hover:text-black mb-2">Trust, Safety & Insurance</a>
          <a href="#privacy" className="text-sm hover:text-black mb-2">Privacy Policy</a>
          <a href="#about" className="text-sm hover:text-black mb-2">About Us</a>
        </div>

        {/* Register */}
        <div className="flex flex-col">
          <h4 className="font-bold mb-4 text-black text-lg">Register</h4>
          <a href="#register-user" className="text-sm hover:text-black mb-2">Register as a Customer</a>
          <a href="#register-service" className="text-sm hover:text-black mb-2">Register as a Beauty Professional</a>
        </div>

        {/* Help */}
        <div className="flex flex-col">
          <h4 className="font-bold mb-4 text-black text-lg">Support</h4>
          <a href="https://wa.me/27827952060" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-black mb-2">Help Center</a>
          <a href="#faq" className="text-sm hover:text-black mb-2">FAQ</a>
          <a href="mailto:info@zarloapp.com" className="text-sm hover:text-black mb-2">Contact Us</a>
          <p className="text-sm mb-2">+27 82 795 2060</p>
          <p className="text-sm mb-2">info@zarloapp.com</p>
          <p className="text-sm mb-2">19 Ameshoff St, Braamfontein, Johannesburg, South Africa, 2001</p>
        </div>
        
        {/* Be Social */}
        <div className="flex flex-col items-center">
          <h4 className="font-bold mb-4 text-black text-lg">Socials</h4>
          <div className="flex gap-4 mb-4">
            <a href="https://www.instagram.com/zarlo_sa" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-black transition-colors duration-300">
              <FaInstagram size={29} /> 
            </a>
            <a href="https://www.linkedin.com/company/zarlo-technologies" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-black transition-colors duration-300">
              <FaLinkedinIn size={29} /> 
            </a>
            <a href="https://x.com/zarlo_sa" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white hover:text-black transition-colors duration-300">
              <FaTwitter size={29} /> 
            </a>
            <a href="https://www.youtube.com/@zarlo_sa" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white hover:text-black transition-colors duration-300">
              <FaYoutube size={29} /> 
            </a>
            <a href="https://www.facebook.com/people/Zarlo/61564831103325/?mibextid=ZbWKwl" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-black transition-colors duration-300">
              <FaFacebookF size={29} /> 
            </a>
          </div>
          <div className="flex gap-4">
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
              <img src={iOSStore} alt="Download on the App Store" className="w-32 h-auto" />
            </a>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              <img src={GooglePlay} alt="Get it on Google Play" className="w-32 h-auto" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-white">
        <p>Copyright © 2024 ZARLO</p>
      </div>
    </div>
  );
};

export default Footer;
