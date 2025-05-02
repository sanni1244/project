import Image from "next/image";
import './style.css'

const Footer = () => {
    return (
        <header className="nav-container">
            <div className="grid grid-cols-10 gap-10 items-center">
                {/* Logo - 1/7 */}
                <div className="col-span-2">
                    <Image src={"/images/logo123.png"} alt="EcoGrocer Logo" width={140} height={100} className="mb-3" />
                </div>

                {/* Search bar - 4/7 */}
                <div className="col-span-5 flex items-center h-10 bg-white border border-gray-200 rounded-full shadow-sm px-2 py-1 focus-within:ring-2 focus-within:ring-red-100">
                    <svg
                        className="ml-3 w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.75 3.75a7.5 7.5 0 0012.9 12.9z" />
                    </svg>
                    <input
                        type="search"
                        placeholder="Search for products here..."
                        className="ml-3 w-full bg-transparent focus:outline-none text-sm text-gray-700 placeholder:text-gray-400"
                    />
                </div>

                {/* Login info - 2/7 */}
                <div className="col-span-3">
                    <div className="flex gap-4 justify-center">
                        <button className="px-6 py-2 rounded-full bg-gray-100 text-gray-800 font-medium hover:bg-yellow-200 transition">
                            Login
                        </button>
                        <button className="px-6 py-2 rounded-full bg-green-600 text-white font-medium hover:bg-gray-700 transition">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Footer;
