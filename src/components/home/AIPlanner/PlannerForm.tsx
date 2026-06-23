// src/components/home/AIPlanner/PlannerForm.tsx

"use client";

import {
  MapPinned,
  Wallet,
  Users,
  CalendarDays,
  Sparkles,
  Heart,
  Wand2,
} from "lucide-react";

export default function PlannerForm() {
  return (
    <div className="relative">

      {/* Main Card */}
      <div
        className="
        bg-white
        rounded-[30px]
        p-7
        shadow-[0_30px_80px_rgba(0,0,0,.08)]
        border border-[#efe9df]
      "
      >
        {/* Top */}
        <div className="flex items-center gap-4">

          <div className="h-16 w-16 rounded-full bg-[#f8f4ed] flex items-center justify-center">
            <Wand2
              size={28}
              className="text-[#C3934D]"
            />
          </div>

          <div>

            <p className="uppercase tracking-[4px] text-[#C3934D] text-xs">
              Dream Trip
            </p>

            <h3 className="font-serif text-[24px] leading-tight text-[#111] mt-1">
              Tell Us About
              <br />
              Your Dream Trip
            </h3>

          </div>

        </div>

        {/* Form */}
        <div className="mt-10 space-y-5">

          {/* Destination */}
          <div className="rounded-3xl border border-[#ece7df] px-6 py-3">

            <div className="flex items-center gap-3 text-[#999] text-sm">
              <MapPinned size={18} />
              Destination
            </div>

            <input
              type="text"
              placeholder="Where would you like to go?"
              className="
              w-full
              mt-3
              bg-transparent
              outline-none
              text-[#111]
              text-lg
            "
            />

          </div>

          {/* Budget */}
          <div className="rounded-3xl border border-[#ece7df] px-6 py-3">

            <div className="flex items-center gap-3 text-[#999] text-sm">
              <Wallet size={18} />
              Budget
            </div>

            <select
              className="
              w-full
              mt-3
              bg-transparent
              outline-none
              text-lg
              text-[#111]
            "
            >
              <option>$500 - $1000</option>
              <option>$1000 - $3000</option>
              <option>$3000 - $5000</option>
              <option>Luxury Unlimited</option>
            </select>

          </div>

          {/* Travelers */}

          <div className="rounded-3xl border border-[#ece7df] px-6 py-3">

            <div className="flex items-center gap-3 text-[#999] text-sm">
              <Users size={18} />
              Travelers
            </div>

            <input
              type="text"
              placeholder="2 Adults"
              className="
              w-full
              mt-3
              bg-transparent
              outline-none
              text-lg
              text-[#111]
            "
            />

          </div>

          {/* Duration */}

          <div className="rounded-3xl border border-[#ece7df] px-6 py-3">

            <div className="flex items-center gap-3 text-[#999] text-sm">
              <CalendarDays size={18} />
              Duration
            </div>

            <input
              type="text"
              placeholder="7 Days"
              className="
              w-full
              mt-3
              bg-transparent
              outline-none
              text-lg
              text-[#111]
            "
            />

          </div>

          {/* Travel Style */}

          <div>

            <p className="text-[#777] mb-4">
              Travel Style
            </p>

            <div className="flex flex-wrap gap-3">

              <button className="px-5 py-3 rounded-full bg-[#111] text-white">
                Luxury
              </button>

              <button className="px-5 py-3 rounded-full border border-[#ddd]">
                Adventure
              </button>

              <button className="px-5 py-3 rounded-full border border-[#ddd]">
                Family
              </button>

              <button className="px-5 py-3 rounded-full border border-[#ddd]">
                Romantic
              </button>

            </div>

          </div>

          {/* Interests */}

          <div className="pt-2">

            <div className="flex items-center gap-2 mb-4">
              <Heart
                size={18}
                className="text-[#C3934D]"
              />

              <p className="text-[#777]">
                Interests
              </p>
            </div>

            <div className="flex flex-wrap gap-3">

              <button className="px-5 py-3 rounded-full border border-[#ddd]">
                Beaches
              </button>

              <button className="px-5 py-3 rounded-full border border-[#ddd]">
                Food
              </button>

              <button className="px-5 py-3 rounded-full border border-[#ddd]">
                Mountains
              </button>

              <button className="px-5 py-3 rounded-full border border-[#ddd]">
                Culture
              </button>

            </div>

          </div>

        </div>

        {/* Generate Button */}

        <button
          className="
          mt-10
          w-full
          h-[60px]
          rounded-full
          bg-[#111]
          text-white
          text-lg
          font-medium
          flex
          items-center
          justify-center
          gap-3
          hover:bg-[#000]
          transition
        "
        >
          <Sparkles size={20} />
          Generate My Itinerary
        </button>

      </div>

    </div>
  );
}