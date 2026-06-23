"use client";

import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <section className="min-h-screen bg-[#0B0B0C] overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-screen">

        {/* LEFT SIDE */}
        <div className="relative hidden lg:flex">

          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1800&auto=format&fit=crop"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-between p-16 text-white">

            <div>
              <h1 className="text-5xl font-bold tracking-wide">
                RAJ GLOBAL
              </h1>

              <p className="mt-3 tracking-[6px] text-[#C8A46A] uppercase text-xs">
                Enterprise • Travel • Trade
              </p>
            </div>

            <div>
              <h2 className="text-6xl leading-tight font-serif">
                Redefining
                <br />
                Global Journeys
              </h2>

              <div className="w-16 h-[2px] bg-[#C8A46A] mt-8"></div>

              <p className="mt-8 text-lg text-white/80 leading-8 max-w-xl">
                Discover extraordinary journeys, global opportunities and
                premium experiences crafted for modern travellers.
              </p>

              <div className="flex gap-16 mt-14">

                <div>
                  <h3 className="text-3xl font-bold">25K+</h3>
                  <p className="text-white/70 mt-2">
                    Travelers
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold">50+</h3>
                  <p className="text-white/70 mt-2">
                    Countries
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold">24/7</h3>
                  <p className="text-white/70 mt-2">
                    Support
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center px-6 py-12 bg-[#0F1115]">

          <div
            className="
            w-full
            max-w-md
            rounded-[32px]
            bg-white/5
            backdrop-blur-xl
            border border-white/10
            shadow-[0_20px_60px_rgba(0,0,0,.35)]
            p-10
            "
          >
            <LoginForm />
          </div>

        </div>

      </div>
    </section>
  );
}