import Link from "next/link";
import {
  Plane,
  CarFront,
  Package,
  ShoppingBag,
  Search,
  MessageCircle,
  ChevronDown,
} from "lucide-react";

export default function DesktopNav() {
  return (
    <div className="hidden xl:flex items-center gap-8">

      <nav className="flex items-center gap-8 text-[15px] font-medium text-black">

        <Link
          href="/travel"
          className="flex items-center gap-2 hover:text-[#7B0F33]"
        >
          <Plane size={16} />
          Travel
          <ChevronDown size={14} />
        </Link>

        <Link
          href="/vehicles"
          className="flex items-center gap-2 hover:text-[#7B0F33]"
        >
          <CarFront size={16} />
          Vehicles
          <ChevronDown size={14} />
        </Link>

        <Link
          href="/exports"
          className="flex items-center gap-2 hover:text-[#7B0F33]"
        >
          <Package size={16} />
          Exports
          <ChevronDown size={14} />
        </Link>

        <Link
          href="/lifestyles"
          className="flex items-center gap-2 hover:text-[#7B0F33]"
        >
          <ShoppingBag size={16} />
          Lifestyle
          <ChevronDown size={14} />
        </Link>

        <Link href="/blog">Blog</Link>

        <Link href="/about">About Us</Link>

        <Link href="/contact">Contact</Link>
      </nav>

      <button>
        <Search size={20} className="text-black" />
      </button>

      <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
        <MessageCircle size={20} className="text-green-600" />
      </button>

      <button className="bg-[#D4AF37] hover:bg-[#c79f22] text-white font-medium px-5 py-3 rounded-lg">
        Plan Your Journey →
      </button>

    </div>
  );
}