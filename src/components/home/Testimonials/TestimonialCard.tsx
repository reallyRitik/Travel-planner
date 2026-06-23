// components/home/Testimonials/TestimonialCard.tsx

import { Quote } from "lucide-react";

interface Props {
  image: string;
  name: string;
  country: string;
  review: string;
}

export default function TestimonialCard({
  image,
  name,
  country,
  review,
}: Props) {
  return (
    <div
      className="
      relative
      bg-white
      rounded-[30px]
      p-8
      h-full
      border border-[#f3efe9]
      shadow-[0_15px_50px_rgba(0,0,0,.05)]
      transition-all
      duration-500
      hover:-translate-y-2
      hover:shadow-[0_25px_80px_rgba(0,0,0,.10)]
      "
    >
      {/* Quote */}
      <div className="absolute right-8 top-8">
        <Quote
          size={34}
          strokeWidth={1.5}
          className="text-[#dcc5a1]"
        />
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1 text-[#d4a85f]">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>

      {/* Review */}
      <p
        className="
        mt-8
        text-[17px]
        leading-8
        text-[#4b5563]
        min-h-[160px]
        "
      >
        {review}
      </p>

      {/* Bottom */}
      <div className="flex items-center gap-4 mt-10">

        {/* Avatar */}
        <div className="shrink-0">
          <img
            src={image}
            alt={name}
            className="
            h-[58px]
            w-[58px]
            rounded-full
            object-cover
            border-2
            border-[#f2e4cb]
            "
          />
        </div>

        {/* User */}
        <div>

          <h4
            className="
            text-[21px]
            font-semibold
            text-[#18181b]
            "
          >
            {name}
          </h4>

          <div className="flex items-center gap-2 mt-1">

            <span className="text-[#b89050] text-sm">
              📍
            </span>

            <p
              className="
              text-[15px]
              text-gray-500
              "
            >
              {country}
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}