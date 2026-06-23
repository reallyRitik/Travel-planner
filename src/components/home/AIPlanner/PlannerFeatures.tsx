// src/components/home/AIPlanner/PlannerFeatures.tsx

"use client";

import {
  Sparkles,
  Map,
  Ticket,
  Shield,
  Headphones,
  ArrowRight,
} from "lucide-react";

export default function PlannerFeatures() {
  return (
    <div className="max-w-[520px]">

      {/* Top Label */}
      <div className="flex items-center gap-2 mb-6">
        <span className="uppercase tracking-[5px] text-[#BE8B43] text-sm font-medium">
          AI Travel Planner
        </span>

        <Sparkles
          size={15}
          className="text-[#BE8B43]"
        />
      </div>

      {/* Heading */}
      <h2
        className="
        text-[54px]
         xl:text-[62px]
        leading-[1.08]
        font-serif
        text-[#111]
      "
      >
        Plan Your Perfect
        <br />
        Journey with{" "}
        <span className="text-[#BE8B43]">
          AI
        </span>
      </h2>

      {/* Description */}
      <p
        className="
        mt-8
        text-[16px]
        leading-8
        max-w-[420px]
        text-[#6d6d6d]
      "
      >
        Tell us your preferences and let our AI craft a personalized
        itinerary just for you.
      </p>

      {/* Features */}

      <div className="mt-14 space-y-7">

        {/* Feature */}
        <div className="flex gap-6">

          <div
            className="
            h-16
            w-16
            rounded-full
            bg-white
            shadow-sm
            border border-[#f0e8da]
            flex items-center justify-center
          "
          >
            <Sparkles
              size={24}
              className="text-[#BE8B43]"
            />
          </div>

          <div>
            <h4 className="font-serif text-[20px] font-medium text-[#111]">
              Smart & Personalized
            </h4>

            <p className="mt-2 text-[#777] text-[14px] leading-7 max-w-[320px]">
              AI analyzes your interests and preferences to create
              the perfect itinerary.
            </p>
          </div>

        </div>

        {/* Feature */}

        <div className="flex gap-6">

          <div className="h-16 w-16 rounded-full bg-white shadow-sm border border-[#f0e8da] flex items-center justify-center">
            <Map size={24} className="text-[#BE8B43]" />
          </div>

          <div>

            <h4 className="font-serif text-[20px] font-medium text-[#111]">
              Save Time & Effort
            </h4>

            <p className="mt-2 text-[#777] text-[14px] leading-7 max-w-[320px]">
              No more endless searching. Get a complete travel plan
              in seconds.
            </p>

          </div>

        </div>

        {/* Feature */}

        <div className="flex gap-6">

          <div className="h-16 w-16 rounded-full bg-white shadow-sm border border-[#f0e8da] flex items-center justify-center">
            <Ticket size={24} className="text-[#BE8B43]" />
          </div>

          <div>

            <h4 className="font-serif text-[20px] font-medium text-[#111]">
              Best Experiences
            </h4>

            <p className="mt-2 text-[#777] text-[14px] leading-7 max-w-[320px]">
              Handpicked stays, activities and local experiences
              tailored for you.
            </p>

          </div>

        </div>

        {/* Feature */}

        <div className="flex gap-6">

          <div className="h-16 w-16 rounded-full bg-white shadow-sm border border-[#f0e8da] flex items-center justify-center">
            <Shield size={24} className="text-[#BE8B43]" />
          </div>

          <div>

            <h4 className="font-serif text-[20px] font-medium text-[#111]">
              Trusted & Secure
            </h4>

            <p className="mt-2 text-[#777] text-[14px] leading-7 max-w-[320px]">
              Your data is safe with us. We prioritize your privacy
              and security.
            </p>

          </div>

        </div>

      </div>

      {/* WhatsApp Box */}

      <div
        className="
        mt-14
        bg-[#171717]
        rounded-[28px]
        px-5
        py-5
        flex
        items-center
        justify-between
        shadow-xl
      "
      >

        <div className="flex gap-5">

          <div
            className="
            h-14
            w-16
            rounded-full
            bg-[#232323]
            flex
            items-center
            justify-center
          "
          >
            <Headphones
              className="text-[#BE8B43]"
            />
          </div>

          <div>

            <h4 className="text-white text-xl font-medium">
              Need Help Planning?
            </h4>

            <p className="text-gray-400 mt-2 text-lg">
              Chat with our travel experts on WhatsApp
            </p>

          </div>

        </div>

        <button
          className="
          h-16
          w-16
          rounded-full
          bg-[#BE8B43]
          flex
          items-center
          justify-center
        "
        >
          <ArrowRight className="text-white" />
        </button>

      </div>

    </div>
  );
}