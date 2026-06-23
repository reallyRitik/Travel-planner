"use client";

import SignupForm from "./SignupForm";

export default function SignupPage() {
  return (
    <section className="min-h-screen bg-[#0B0B0C]">
      <div className="grid lg:grid-cols-2 min-h-screen">

        {/* LEFT */}
        <div className="relative hidden lg:flex">

          <img
            src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1800&auto=format&fit=crop"
            className="absolute inset-0 h-full w-full object-cover"
            alt=""
          />

          <div className="absolute inset-0 bg-black/65" />

          <div className="relative z-10 flex flex-col justify-between p-16 text-white">

            <div>
              <h1 className="text-5xl font-bold text-white">
                RAJ GLOBAL
              </h1>

              <p className="mt-3 text-xs tracking-[6px] text-[#C8A46A] uppercase">
                Enterprise • Travel • Trade
              </p>
            </div>

            <div>
              <h2 className="text-6xl leading-tight font-serif">
                Begin Your
                <br />
                Global Journey
              </h2>

              <div className="w-16 h-[2px] bg-[#C8A46A] mt-8" />

              <p className="mt-8 text-lg text-white/80 leading-8 max-w-xl">
                Create your account and unlock premium travel,
                AI itinerary planning and exclusive experiences.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT */}

        <div className="flex items-center justify-center px-6 py-12 bg-[#0F1115]">

          <div
            className="
            w-full
            max-w-md
            rounded-[32px]
            bg-white/5
            border border-white/10
            backdrop-blur-xl
            p-10
            shadow-[0_20px_60px_rgba(0,0,0,.4)]
          "
          >
            <SignupForm />
          </div>

        </div>

      </div>
    </section>
  );
}