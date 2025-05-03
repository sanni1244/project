import Image from "next/image";
import HubPage from "./pages/home-prices/section1/page";
import Infosection from "./pages/home-prices/info/page";
import Stats from "./pages/home-prices/section2/page";
import Stats3 from "./pages/home-prices/section3/page";




export default function Home() {
  return (
    <div>
      <HubPage/>
      <Stats/>  
      <Stats3/>  
      <Infosection/>   

      {/* <p className="text-sm">🕒 Mon-Fri: 9 AM - 5 PM</p>
      <p className="text-sm">📦 Free Shipping on orders over $50</p>
      <p className="text-sm">💳 Secure Payment Options</p>

      <p className="text-sm">🔒
        Your privacy is our priority. We use secure encryption to protect your data.
      </p>
      <p className="text-sm">🔄 Easy Returns within 30 days of purchase.</p> */}
    </div>
  );
}
