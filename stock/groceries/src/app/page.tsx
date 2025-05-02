import Image from "next/image";
import HubPage from "./pages/home-prices/landingpage/page";
import Infosection from "./pages/home-prices/info/page";


export default function Home() {
  return (
    <div>
      <HubPage/>
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
