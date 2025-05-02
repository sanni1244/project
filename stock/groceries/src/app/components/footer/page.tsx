import Image from "next/image";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa6";
import './style.css'

const Footer = () => {
    return (
        <footer className="footer bg-gray-900 text-white px-6 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

                {/* Logo & Slogan */}
                <div>
                    <Image src={"/images/logo123.png"} alt="EcoGrocer Logo" width={140} height={100} className="mb-3" />
                    <p className="text-sm text-gray-400">Save Money. Shop Better. Live Smart....</p>
                    <p className="paragraph">EcoGrocer helps users shop smarter by offering eco-friendly products at affordable prices.
                        It enables better purchasing decisions while saving money and supporting sustainable living.</p>
                </div>

                {/* Contact Info */}
                <div className=" text-sm space-y-2">
                    <h3 className="font-semibold mb-4">Contact</h3>
                    <p className="text-sm"><a href="mailto:contact@ecogrocer.com">📧 contact@ecogrocer.com</a></p>
                    <p className="text-sm"><a href="mailto:support@ecogrocer.com">💼 support@ecogrocer.com</a></p>
                    <p className="text-sm">📞 +1 (555) 123-4567</p>
                    <p className="text-sm">🌐 www.ecogrocer.com</p>
                    <p>🔗 <a href="/about" className="text-gray-400 hover:text-white">About Us</a></p>
                    <p>🔗 <a href="/admin" className="text-gray-400 hover:text-white">Admin</a></p>
                    <p>🔗 <a href="/faq" className="text-gray-400 hover:text-white">FAQ</a></p>
                    <p>🔗 <a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a></p>
                </div>

                {/* Address & Social Links */}
                <div className=" text-sm space-y-2">
                    <h3 className="font-semibold mb-4">Address</h3>
                    <p className="text-sm">123 Innovation Way</p>
                    <p className="text-sm">San Francisco, CA 94107</p>

                    <div className="flex gap-6 mt-4 ">
                        <a href="#" className="text-gray-400 hover:text-white text-sm">
                            <i className="mr-2"><FaLinkedin /></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm">
                            <i className="mr-2"><FaTwitter /></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm">
                            <i className="mr-2"><FaInstagram /></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm">
                            <i className="mr-2"><FaGithub /></i>
                        </a>
                    </div>
                    <p>🚢 <a href="/shipping-return" className="text-gray-400 hover:text-white">Shipping and Return Info</a></p>
                    <p>🔏 <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Popcy</a></p>
                    <p>📜 <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a></p>
                    <p>📰 <a href="/newsletter" className="text-gray-400 hover:text-white">Newsletter</a></p>
                    <p>🫱🏽‍🫲🏽 <a href="/partners" className="text-gray-400 hover:text-white">Our Partners</a></p>
                </div>
            </div>

            <div className="mt-5 text-center text-xs text-gray-500">
                &copy; {new Date().getFullYear()} EcoGrocer Inc. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
