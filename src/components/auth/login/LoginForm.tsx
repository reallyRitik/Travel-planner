// components/auth/Login/LoginForm.tsx

"use client";

import Link from "next/link";
import { Mail, Lock, Eye } from "lucide-react";

export default function LoginForm() {
  return (
    <>
      {/* Header */}

      <div className="mb-10">

        <p className="uppercase tracking-[5px] text-[#C8A46A] text-xs">
          Welcome Back
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Sign In
        </h2>

        <p className="mt-3 text-gray-400 leading-7">
          Sign in to access your journeys, bookings and AI travel planner.
        </p>

      </div>

      {/* Form */}

      <form className="space-y-6">

        {/* Email */}

        <div>

          <label className="text-sm text-gray-300">
            Email Address
          </label>

          <div
            className="
            mt-3
            flex
            items-center
            gap-4
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-5
            h-16
            "
          >
            <Mail
              size={18}
              className="text-[#C8A46A]"
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="
              flex-1
              bg-transparent
              outline-none
              text-white
              placeholder:text-gray-500
              "
            />
          </div>

        </div>

        {/* Password */}

        <div>

          <label className="text-sm text-gray-300">
            Password
          </label>

          <div
            className="
            mt-3
            flex
            items-center
            gap-4
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-5
            h-16
            "
          >
            <Lock
              size={18}
              className="text-[#C8A46A]"
            />

            <input
              type="password"
              placeholder="Enter your password"
              className="
              flex-1
              bg-transparent
              outline-none
              text-white
              placeholder:text-gray-500
              "
            />

            <Eye
              size={18}
              className="text-gray-400 cursor-pointer"
            />

          </div>

        </div>

        {/* Remember */}

        <div className="flex items-center justify-between">

          <label className="flex items-center gap-3 text-sm text-gray-400">

            <input
              type="checkbox"
              className="accent-[#7B0F33]"
            />

            Remember me

          </label>

          <button
            type="button"
            className="text-sm text-[#C8A46A]"
          >
            Forgot Password?
          </button>

        </div>

        {/* Button */}

        <button
          className="
          w-full
          h-16
          rounded-2xl
          bg-gradient-to-r
          from-[#7B0F33]
          to-[#9E1144]
          text-white
          text-lg
          font-semibold
          shadow-[0_20px_40px_rgba(123,15,51,.35)]
          transition-all
          duration-300
          hover:scale-[1.02]
          "
        >
          Sign In
        </button>

        {/* Divider */}

        <div className="flex items-center gap-4">

          <div className="h-px flex-1 bg-white/10" />

          <span className="text-gray-500 text-sm">
            OR
          </span>

          <div className="h-px flex-1 bg-white/10" />

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

        Don't have an account?

        <Link
          href="/signup"
          className="ml-2 text-[#C8A46A]"
        >
          Create Account
        </Link>

      </div>
    </>
  );
}