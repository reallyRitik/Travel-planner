// src/components/home/AIPlanner/PhoneMockup.tsx

"use client";

import Image from "next/image";
import {
  Sparkles,
  ChevronDown,
  CalendarDays,
  MapPin,
} from "lucide-react";

export default function PhoneMockup() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Background Circle */}
      <div className="absolute h-[680px] w-[680px] rounded-full bg-[#f1ece4]" />

      {/* PHONE */}
      <div className="relative z-20">

        <div
          className="
          relative
          h-[560px]
          w-[275px]
          rounded-[60px]
          border-[10px]
          border-black
          overflow-hidden
          shadow-[0_40px_80px_rgba(0,0,0,.18)]
          bg-black
        "
        >
          {/* Dynamic Island */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 w-[120px] h-[32px] bg-black rounded-full" />

          {/* Image */}
          <Image
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400"
            alt=""
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        </div>

      </div>

      {/* ITINERARY CARD */}
      <div
        className="
        absolute
        bottom-[120px]
        left-1/2
        -translate-x-1/2
        z-30
        w-[360px]
        rounded-[36px]
        bg-white
        shadow-[0_30px_60px_rgba(0,0,0,.15)]
        p-7
      "
      >
        {/* Top */}

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="h-14 w-14 rounded-full bg-black flex items-center justify-center">
              <Sparkles className="text-[#C18B43]" />
            </div>

            <div>

              <h3 className="font-serif text-[30px] text-[#111]">
                Your AI Itinerary
              </h3>

              <p className="text-[#555] mt-1">
                7 Days in Switzerland
              </p>

              <p className="text-sm text-[#888]">
                Zurich • Interlaken • Lucerne
              </p>

            </div>

          </div>

          <div className="bg-[#edf7e7] text-[#6eaa53] px-4 py-2 rounded-full text-sm font-medium">
            Generated
          </div>

        </div>

        {/* Images */}

        <div className="mt-6 flex gap-3">

          {[
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
            "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=800",
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800",
          ].map((img, index) => (
            <div
              key={index}
              className="relative h-[75px] w-[75px] overflow-hidden rounded-2xl"
            >
              <Image
                src={img}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          ))}

        </div>

      </div>

      {/* DAY CARD */}

      <div
        className="
        absolute
        bottom-[-30px]
        left-1/2
        -translate-x-1/2
        z-10
        w-[300px]
        rounded-[30px]
        bg-white
        shadow-[0_30px_60px_rgba(0,0,0,.08)]
        p-6
      "
      >

        {/* Day 1 */}

        <div className="flex items-start justify-between py-4 border-b border-[#f1f1f1]">

          <div className="flex gap-4">

            <div className="h-10 w-10 rounded-full bg-[#faf5ec] flex items-center justify-center">
              <CalendarDays size={18} className="text-[#C18B43]" />
            </div>

            <div>

              <h4 className="font-medium text-[#111]">
                Day 1
              </h4>

              <p className="text-[#777] text-sm mt-1">
                Arrival in Zurich
              </p>

            </div>

          </div>

          <ChevronDown className="text-[#999]" />

        </div>

        {/* Day 2 */}

        <div className="flex items-start justify-between py-4 border-b border-[#f1f1f1]">

          <div className="flex gap-4">

            <div className="h-10 w-10 rounded-full bg-[#faf5ec] flex items-center justify-center">
              <MapPin size={18} className="text-[#C18B43]" />
            </div>

            <div>

              <h4 className="font-medium text-[#111]">
                Day 2
              </h4>

              <p className="text-[#777] text-sm mt-1">
                Mount Titlis Excursion
              </p>

            </div>

          </div>

          <ChevronDown className="text-[#999]" />

        </div>

        {/* Day 3 */}

        <div className="flex items-start justify-between pt-4">

          <div className="flex gap-4">

            <div className="h-10 w-10 rounded-full bg-[#faf5ec] flex items-center justify-center">
              <MapPin size={18} className="text-[#C18B43]" />
            </div>

            <div>

              <h4 className="font-medium text-[#111]">
                Day 3
              </h4>

              <p className="text-[#777] text-sm mt-1">
                Interlaken Adventure
              </p>

            </div>

          </div>

          <ChevronDown className="text-[#999]" />

        </div>

      </div>

    </div>
  );
}