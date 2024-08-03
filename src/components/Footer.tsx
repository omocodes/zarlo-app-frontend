import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="py-10" style={{ backgroundColor: '#d2a323' }}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex gap-4 mb-4 md:mb-0">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black">
            <FaInstagram size={24} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black">
            <FaFacebookF size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.linkedin.com/company/zarlo-technologies" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black">
            <FaLinkedinIn size={24} />
          </a>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <span className="text-white font-bold tracking-tight flex gap-4">
            <span className="hover:text-black cursor-pointer">Help center</span>
            <span className="hover:text-black cursor-pointer">About</span>
            <span className="hover:text-black cursor-pointer">FAQs</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
