// components/layout/Footer.tsx

import {
  
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0C] text-white overflow-hidden">

      {/* Top */}
      <div className="max-w-[1600px] mx-auto px-5 lg:px-10 py-20">

        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">

          {/* About */}

          <div>

            <h2 className="text-4xl font-semibold tracking-wide">
              RAJ GLOBAL
            </h2>

            <p className="mt-2 text-[#C8A46A] tracking-[4px] uppercase text-xs">
              Enterprise • Travel • Trade
            </p>

            <p className="mt-8 text-[#9ca3af] leading-8 max-w-sm">
              Connecting journeys, trade and opportunities worldwide with trusted travel, logistics and business solutions.
            </p>

            {/* Social */}

            
          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="mt-8 space-y-4 text-[#9ca3af]">

              <li className="hover:text-[#C8A46A] cursor-pointer">
                Home
              </li>

              <li className="hover:text-[#C8A46A] cursor-pointer">
                About Us
              </li>

              <li className="hover:text-[#C8A46A] cursor-pointer">
                Blog
              </li>

              <li className="hover:text-[#C8A46A] cursor-pointer">
                Testimonials
              </li>

              <li className="hover:text-[#C8A46A] cursor-pointer">
                AI Planner
              </li>

            </ul>

          </div>

          {/* Travel Services */}

          <div>

            <h3 className="text-xl font-semibold">
              Travel Services
            </h3>

            <ul className="mt-8 space-y-4 text-[#9ca3af]">

              <li>Tour Packages</li>
              <li>Flights</li>
              <li>Visa Assistance</li>
              <li>Hotels</li>
              <li>Travel Insurance</li>

            </ul>

          </div>

          {/* Business */}

          <div>

            <h3 className="text-xl font-semibold">
              Business Divisions
            </h3>

            <ul className="mt-8 space-y-4 text-[#9ca3af]">

              <li>Commodity Exports</li>
              <li>Logistics Solutions</li>
              <li>Used Vehicle Trading</li>
              <li>Wellness Products</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold">
              Contact
            </h3>

            <div className="mt-8 space-y-6 text-[#9ca3af]">

              <div className="flex gap-4">
                <Phone size={18} />
                <span>+65 xxxx xxxx</span>
              </div>

              <div className="flex gap-4">
                <Mail size={18} />
                <span>info@rajglobal.sg</span>
              </div>

              <div className="flex gap-4">
                <MapPin size={18} />
                <span>Singapore</span>
              </div>

            </div>

            {/* Newsletter */}

            <div className="mt-10">

              <h4 className="font-medium mb-4">
                Newsletter
              </h4>

              <div className="relative">

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                  w-full
                  h-14
                  rounded-full
                  bg-[#171717]
                  border
                  border-[#262626]
                  px-6
                  outline-none
                  "
                />

                <button
                  className="
                  absolute
                  right-2
                  top-2
                  h-10
                  px-5
                  rounded-full
                  bg-[#C8A46A]
                  text-black
                  font-medium
                  "
                >
                  Subscribe
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-[#1f1f1f]">

        <div className="max-w-[1600px] mx-auto px-5 lg:px-10 py-7 flex flex-col md:flex-row gap-5 items-center justify-between">

          <p className="text-[#6b7280] text-sm">
            © 2026 Raj Global Enterprise. All Rights Reserved.
          </p>

          <div className="flex gap-8 text-sm text-[#6b7280]">

            <a href="#" className="hover:text-[#C8A46A]">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-[#C8A46A]">
              Terms & Conditions
            </a>

            <a href="#" className="hover:text-[#C8A46A]">
              Refund Policy
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}