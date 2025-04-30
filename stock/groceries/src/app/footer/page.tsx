export default function Footer () {
  return (
    <footer className="bg-gray-900 text-white px-6 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Logo and Slogan */}
        <div className="flex flex-col items-start">
          <img src="/logo.png" alt="Company Logo" className="h-12 mb-2" />
          <h2 className="text-xl font-bold">TechNova Inc.</h2>
          <p className="text-sm text-gray-400">"Innovating the Future"</p>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">Email: contact@technova.com</p>
          <p className="text-sm">Phone: +1 (555) 123-4567</p>
          <p className="text-sm">Support: support@technova.com</p>
        </div>

        {/* Address & Socials */}
        <div>
          <h3 className="font-semibold mb-2">Headquarters</h3>
          <p className="text-sm">123 Innovation Way</p>
          <p className="text-sm">San Francisco, CA 94107</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} TechNova Inc. All rights reserved.
      </div>
    </footer>
  );
};
