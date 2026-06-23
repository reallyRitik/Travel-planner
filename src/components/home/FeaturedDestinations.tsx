"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const destinations = [
  {
    country: "Indonesia",
    title: "Bali Escape",
    price: "$999",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1400&auto=format&fit=crop",
    description:
      "Tropical paradise with serene beaches and lush landscapes.",
  },
  {
    country: "Switzerland",
    title: "Swiss Alps",
    price: "$1499",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop",
    description:
      "Majestic mountains, charming villages and unforgettable views.",
  },
  {
    country: "France",
    title: "Paris Luxury",
    price: "$1299",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1400&auto=format&fit=crop",
    description:
      "Timeless elegance, iconic landmarks and world-class experiences.",
  },
  {
    country: "UAE",
    title: "Dubai Skyline",
    price: "$1099",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1400&auto=format&fit=crop",
    description:
      "Futuristic cityscape, luxury shopping and endless adventures.",
  },
];
export default function DestinationSlider() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f7]  ">
      <div className="container mx-auto px-4">
        {/* Header */}

        <div className="mb-14 text-center">
          <span className="tracking-[6px] uppercase text-[#b89050] text-xs md:text-sm font-medium">
            Explore The World
          </span>

          <h2 className="mt-4 font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-[#111]">
            Featured Destinations
          </h2>

          <div className="flex justify-center items-center gap-4 my-5">
            <div className="h-px w-16 bg-[#d8c2a0]" />
            <div className="text-[#b89050] text-xl">✦</div>
            <div className="h-px w-16 bg-[#d8c2a0]" />
          </div>

          <p className="max-w-xl mx-auto text-gray-500 text-base md:text-lg">
            Curated luxury experiences in the worlds most breathtaking places.
          </p>
        </div>

        {/* Navigation */}

        <div className="destination-prev absolute left-3 top-1/2 z-30 hidden lg:flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl cursor-pointer">
          <ChevronLeft size={24} />
        </div>

        <div className="destination-next absolute right-3 top-1/2 z-30 hidden lg:flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl cursor-pointer">
          <ChevronRight size={24} />
        </div>

        {/* Slider */}

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop
          speed={1200}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".destination-prev",
            nextEl: ".destination-next",
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 18,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 22,
            },
          }}
          className="!pb-14"
        >
          {destinations.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group relative h-[580px]  text-white overflow-hidden rounded-[30px] shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                {/* Image */}


<Image
  src={item.image}
  alt={item.title}
  fill
  className="
    object-cover
    transition-all
    duration-[1500ms]
    group-hover:scale-110
  "
/>

                {/* Luxury Overlay */}

                <div
                  className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/30
                  to-transparent
                "
                />

                {/* Price */}

                <div className="absolute right-5 top-5">
                  <div
                    className="
                    rounded-full
                    bg-black/90
                    backdrop-blur-xl
                    px-5 py-2
                    text-lg
                    font-semibold
                    shadow-xl
                  "
                  >
                    {item.price}
                  </div>
                </div>

                {/* Content */}

                <div className="absolute bottom-0 left-0 w-full p-7 text-white">
                  <div className="flex items-center gap-2 text-sm text-white/90">
                    <MapPin size={15} />
                    {item.country}
                  </div>

                  <h3 className="mt-3 font-serif text-4xl font-medium">
                    {item.title}
                  </h3>

                  <div className="mt-4 h-[2px] w-12 bg-[#c8a46a]" />

                  <p className="mt-5 text-white/85 leading-relaxed">
                    {item.description}
                  </p>

                  <button
                    className="
                    mt-8
                    flex
                    items-center
                    gap-2
                    text-lg
                    text-[#e7c48b]
                    transition-all
                    duration-300
                    hover:gap-4
                  "
                  >
                    Explore Now →
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

       
      </div>
    </section>
  );
}