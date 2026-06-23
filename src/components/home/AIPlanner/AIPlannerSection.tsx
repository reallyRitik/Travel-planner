"use client";

import PlannerFeatures from "./PlannerFeatures";
import PhoneMockup from "./PhoneMockup";
import PlannerForm from "./PlannerForm";

export default function AIPlannerSection() {
  return (
    <section className="bg-[#faf8f4] py-20 overflow-hidden">

      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[1fr_0.9fr_1fr] gap-12 items-center">

          {/* Left */}
          <PlannerFeatures />

          {/* Center */}
          <PhoneMockup />

          {/* Right */}
          <PlannerForm />

        </div>

       

      </div>

    </section>
  );
}