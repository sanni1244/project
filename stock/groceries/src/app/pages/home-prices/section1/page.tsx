import './style.css'
import Image from "next/image";


export default function HeroSection() {
    return (
      <div className="nav-container relative h-130 flex flex-col lg:flex-row justify-center items-center text-center lg:text-left">
        
        {/* Dark Overlay */}
        <div className="hero-section"></div>
        
        {/* Left Content (Text & CTA) */}
        <div className="max-w-2xl mx-auto lg:mx-0 p-15 hero-left">
          <h1 className="">
          Built for shoppers who hate surprises at the market.
          </h1>
          
          <p className="">
            Empower your workflow with the tools you need to succeed. Whether you're managing projects or collaborating with your team, we've got you covered.
          </p>
          <a
            href="#features"
            className="inline-block px-8 py-3 rounded bg-green-600 text-white text-lg font-semibold hover:bg-green-400 transition ease-in-out duration-300 mb-6"
          >
            Get Started
          </a>
        </div>
         
        {/* Right Image */}
        <div className="flex justify-center items-center lg:mt-0 lg:w-1/2">
          <Image
          src={'/images/photo/hero.png'}
          alt={'Several groceries on a table'}
          width={500}
          height={400}
          className="object-cover object-center"
          priority={true}
          />
        </div>
      </div>
    );
  }
  