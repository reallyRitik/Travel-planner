// src/components/home/AIPlanner/PlannerSteps.tsx

"use client";

import {
  Map,
  Sparkles,
  Pencil,
  Plane,
} from "lucide-react";

const steps = [
  {
    icon: Map,
    title: "Tell Us Your Dream",
    desc: "Share your destination, budget and preferences.",
  },
  {
    icon: Sparkles,
    title: "AI Creates Plan",
    desc: "Our AI generates a personalized itinerary instantly.",
  },
  {
    icon: Pencil,
    title: "Review & Customize",
    desc: "Modify and refine your trip according to your needs.",
  },
  {
    icon: Plane,
    title: "Book & Enjoy",
    desc: "Relax and start your unforgettable journey.",
  },
];

export default function PlannerSteps() {
  return (
    <section className="py-28 overflow-hidden">

      {/* Header */}

      <div className="text-center max-w-3xl mx-auto">

        <span className="uppercase tracking-[5px] text-[#BE8B43] text-sm font-medium">
          How It Works
        </span>

        <h2
          className="
          mt-5
          font-serif
          text-[42px]
          lg:text-[60px]
          leading-tight
          text-[#111]
        "
        >
          Create Your Perfect Journey
          <br />
          In Four Easy Steps
        </h2>

        <p className="mt-6 text-[#777] leading-8 text-lg">
          Our intelligent travel planner makes trip planning effortless,
          personalized and enjoyable.
        </p>

      </div>

      {/* Steps */}

      <div className="max-w-[1600px] mx-auto mt-20 px-5">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 relative">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="
                relative
                group
                bg-white
                rounded-[36px]
                p-10
                border border-[#eee7dc]
                shadow-[0_15px_50px_rgba(0,0,0,.05)]
                hover:-translate-y-2
                duration-500
                "
              >
                {/* Number */}

                <div
                  className="
                  absolute
                  top-7
                  right-7
                  text-[70px]
                  font-bold
                  text-[#f6f1e9]
                  "
                >
                  0{index + 1}
                </div>

                {/* Icon */}

                <div
                  className="
                  h-20
                  w-20
                  rounded-full
                  bg-[#faf5ec]
                  flex
                  items-center
                  justify-center
                  "
                >
                  <Icon
                    size={34}
                    className="
                    text-[#BE8B43]
                    group-hover:scale-110
                    transition
                    "
                  />
                </div>

                {/* Content */}

                <h3
                  className="
                  mt-10
                  font-serif
                  text-[30px]
                  leading-tight
                  text-[#111]
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                  mt-5
                  text-[#777]
                  leading-8
                  text-lg
                  "
                >
                  {step.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}