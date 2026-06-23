// components/home/Testimonials/TestimonialsSection.tsx

"use client";

import TestimonialCard from "./TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Michael Tan",
      country: "Singapore",
      review:
        "Our Singapore trip was absolutely amazing. Every detail was perfectly planned and the experience exceeded all expectations. Highly recommended.",
    },
    {
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Sarah Johnson",
      country: "Australia",
      review:
        "Beautiful hotels, private tours and exceptional service. Raj Global made our Bali vacation unforgettable and stress free.",
    },
    {
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      name: "Rohit Kumar",
      country: "India",
      review:
        "Professional team with excellent support. The Europe tour package was perfectly organized from start to finish.",
    },
  ];

  return (
    <section className="bg-[#faf9f7] py-28 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-5">

        <div className="grid xl:grid-cols-[400px_1fr] gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <span className="uppercase tracking-[5px] text-[#B89050] text-xs font-medium">
              Trusted By Travelers ✦
            </span>

            <h2
              className="
              mt-5
              text-[42px]
              md:text-[56px]
              leading-[1.1]
              font-serif
              text-[#151515]
              "
            >
              What Our Clients
              <br />
              Say About Us
            </h2>

            <div className="mt-7 h-[2px] w-20 bg-[#c8a46a]" />

            <p className="mt-8 text-[#777] leading-8 text-lg">
              Real experiences from travelers who explored the world
              with Raj Global and created unforgettable memories.
            </p>

            {/* Navigation */}
            <div className="flex items-center gap-6 mt-14">

              <button
                className="
                h-14
                w-14
                rounded-full
                border
                border-[#d9c2a2]
                flex
                items-center
                justify-center
                text-[#b89050]
                transition
                hover:bg-[#b89050]
                hover:text-white
                "
              >
                <ChevronLeft size={22} />
              </button>

              <div className="flex gap-3">
                <div className="h-2 w-2 rounded-full bg-[#c8a46a]" />
                <div className="h-2 w-2 rounded-full bg-gray-300" />
                <div className="h-2 w-2 rounded-full bg-gray-300" />
              </div>

              <button
                className="
                h-14
                w-14
                rounded-full
                border
                border-[#d9c2a2]
                flex
                items-center
                justify-center
                text-[#b89050]
                transition
                hover:bg-[#b89050]
                hover:text-white
                "
              >
                <ChevronRight size={22} />
              </button>

            </div>

          </div>

          {/* RIGHT CARDS */}
          <div>

            <div
              className="
              grid
              md:grid-cols-2
              xl:grid-cols-3
              gap-8
              "
            >
              {testimonials.map((item, index) => (
                <TestimonialCard
                  key={index}
                  image={item.image}
                  name={item.name}
                  country={item.country}
                  review={item.review}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}