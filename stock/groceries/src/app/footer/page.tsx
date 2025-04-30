import Image from "next/image";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        
        {/* Logo & Slogan */}
        <div>
          <Image src={"/images/logo123.png"} alt="EcoGrocer Logo" width={140} height={100} className="mb-3" />
          <p className="text-sm text-gray-400">Save Money. Shop Better. Live Smart....</p>
          <p className="paragraph">EcoGrocer helps users shop smarter by offering eco-friendly products at affordable prices. 
            It enables better purchasing decisions while saving money and supporting sustainable living.</p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-sm">📧 contact@ecogrocer.com</p>
          <p className="text-sm">📞 +1 (555) 123-4567</p>
          <p className="text-sm">💼 support@ecogrocer.com</p>
        </div>

        {/* Address & Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <p className="text-sm">123 Innovation Way</p>
          <p className="text-sm">San Francisco, CA 94107</p>

          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              <i className="mr-2"><FaLinkedin /></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              <i className="mr-2"><FaTwitter /></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              <i className="mr-2"><FaInstagram/></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              <i className="mr-2"><FaGithub /></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-5 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} EcoGrocer Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
