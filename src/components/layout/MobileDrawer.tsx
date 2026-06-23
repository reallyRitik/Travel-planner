"use client";

import Link from "next/link";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileDrawer({
  open,
  setOpen,
}: Props) {

  return (
    <>
      {/* Overlay */}
      <div
        className={`
        fixed inset-0 bg-black/40 z-50 duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}
      `}
      />

      {/* Drawer */}
      <div
        className={`
        fixed top-0 right-0
        w-[320px]
        h-screen
        bg-white
        z-50
        shadow-2xl
        duration-300
        ${open ? "translate-x-0" : "translate-x-full"}
      `}
      >
        {/* Header */}
        <div className="h-20 px-6 border-b flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold text-[#7B0F33]">
              RAJ GLOBAL
            </h2>

            <p className="text-xs tracking-[3px] text-slate-500">
              Enterprise • Travel • Trade
            </p>
          </div>

          <button onClick={() => setOpen(false)} style={{ color: "black" }}>
            <X size={28} />
          </button>

        </div>

        {/* Links */}
        <div className="flex flex-col p-6 gap-6 text-lg text-black font-medium">

          <Link href="">Travel</Link>

          <Link href="/vehicles">Vehicles</Link>

          <Link href="/exports">Exports</Link>

          <Link href="/lifestyles">Lifestyle</Link>

          <Link href="/blog">Blog</Link>

          <Link href="/about">About Us</Link>

          <Link href="/contact">Contact</Link>

        </div>

        {/* Button */}
        <div className="absolute bottom-10 left-6 right-6">

          <button
            className="
            w-full
            h-14
            rounded-xl
            bg-[#D4AF37]
            text-white
            font-semibold
          "
          >
            Plan Your Journey →
          </button>

        </div>

      </div>
    </>
  );
}