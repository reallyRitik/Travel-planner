// components/auth/Signup/SignupForm.tsx

"use client";

import Link from "next/link";
import { User, Mail, Phone, Lock, Eye } from "lucide-react";

export default function SignupForm() {
  return (
    <>
      {/* Header */}
      <div className="mb-10">

        <p className="uppercase tracking-[5px] text-[#C8A46A] text-xs">
          Create Account
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Join Raj Global
        </h2>

        <p className="mt-3 text-gray-400 leading-7">
          Create your account and unlock premium travel experiences.
        </p>

      </div>

      {/* Form */}

      <form className="space-y-5">

        {/* Name */}

        <div>

          <label className="text-sm text-gray-300">
            Full Name
          </label>

          <div className="mt-3 h-16 rounded-2xl border border-white/10 bg-white/5 px-5 flex items-center gap-4">

            <User size={18} className="text-[#C8A46A]" />

            <input
              type="text"
              placeholder="Enter your full name"
              className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-500"
            />

          </div>

        </div>

        {/* Email */}

        <div>

          <label className="text-sm text-gray-300">
            Email Address
          </label>

          <div className="mt-3 h-16 rounded-2xl border border-white/10 bg-white/5 px-5 flex items-center gap-4">

            <Mail size={18} className="text-[#C8A46A]" />

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-500"
            />

          </div>

        </div>

        {/* Phone */}

        <div>

          <label className="text-sm text-gray-300">
            Phone Number
          </label>

          <div className="mt-3 h-16 rounded-2xl border border-white/10 bg-white/5 px-5 flex items-center gap-4">

            <Phone size={18} className="text-[#C8A46A]" />

            <input
              type="tel"
              placeholder="Enter your phone number"
              className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-500"
            />

          </div>

        </div>

        {/* Password */}

        <div>

          <label className="text-sm text-gray-300">
            Password
          </label>

          <div className="mt-3 h-16 rounded-2xl border border-white/10 bg-white/5 px-5 flex items-center gap-4">

            <Lock size={18} className="text-[#C8A46A]" />

            <input
              type="password"
              placeholder="Enter password"
              className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-500"
            />

            <Eye size={18} className="text-gray-500 cursor-pointer" />

          </div>

        </div>

        {/* Confirm Password */}

        <div>

          <label className="text-sm text-gray-300">
            Confirm Password
          </label>

          <div className="mt-3 h-16 rounded-2xl border border-white/10 bg-white/5 px-5 flex items-center gap-4">

            <Lock size={18} className="text-[#C8A46A]" />

            <input
              type="password"
              placeholder="Confirm password"
              className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-500"
            />

          </div>

        </div>

        {/* Button */}

        <button
          className="
          w-full
          h-16
          rounded-2xl
          bg-gradient-to-r
          from-[#7B0F33]
          to-[#A11346]
          text-white
          font-semibold
          text-lg
          shadow-[0_20px_40px_rgba(123,15,51,.35)]
          hover:scale-[1.02]
          transition-all duration-300
          "
        >
          Create Account
        </button>

        {/* Divider */}

        <div className="flex items-center gap-4">

          <div className="flex-1 h-px bg-white/10"></div>

          <span className="text-sm text-gray-500">
            OR
          </span>

          <div className="flex-1 h-px bg-white/10"></div>

        </div>

        {/* Google */}

        <button
          type="button"
          className="
          h-16
          w-full
          rounded-2xl
          border
          border-white/10
          bg-white/5
          text-white
          hover:bg-white/10
          transition
          "
        >
          Continue with Google
        </button>

      </form>

      {/* Footer */}

      <div className="mt-10 text-center text-gray-400">

        Already have an account?

        <Link
          href="/login"
          className="ml-2 text-[#C8A46A]"
        >
          Sign In
        </Link>

      </div>

    </>
  );
}