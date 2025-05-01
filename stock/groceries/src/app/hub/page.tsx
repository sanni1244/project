// HeroSection.tsx
export default function HeroSection() {
    return (
      <div className="relative min-h-screen bg-gradient-to-r from-blue-500 to-teal-400 flex flex-col lg:flex-row justify-center items-center text-center lg:text-left text-white px-6 bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-your-background-image.jpg)' }}>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        
        {/* Left Content (Text & CTA) */}
        <div className="relative z-10 max-w-2xl mx-auto lg:mx-0 p-8">
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Unlock Your Full Potential
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Empower your workflow with the tools you need to succeed. Whether you're managing projects or collaborating with your team, we've got you covered.
          </p>
          <a
            href="#features"
            className="inline-block px-8 py-3 rounded-full bg-yellow-500 text-gray-800 text-lg font-semibold hover:bg-yellow-400 transition ease-in-out duration-300 mb-6"
          >
            Get Started
          </a>
  
          <p className="text-sm font-medium text-gray-300">
            Join thousands of professionals achieving more with our platform.
          </p>
        </div>
        
        {/* Right Image */}
        <div className="relative z-10 mt-8 lg:mt-0 lg:w-1/2">
          <img
            src="/path-to-your-image.jpg"
            alt="Product or Illustration"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
  
        {/* Bottom Link (Login) */}
        <div className="absolute bottom-10 text-center w-full z-10">
          <p className="text-sm text-gray-300">Already a member? <a href="#login" className="font-semibold text-yellow-500 hover:text-yellow-400">Log In</a></p>
        </div>
      </div>
    );
  }
  