"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Sparkles,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const categories = [
  "All",
  "Asia",
  "Europe",
  "Middle East",
  "Luxury Escapes",
];

const tours = [
  {
    category: "Asia",
    badge: "Bestseller",
    location: "Singapore",
    title: "Singapore Escape",
    duration: "5 Days / 4 Nights",
    price: "999",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2000&q=100",
    },
  {
    category: "Asia",
    badge: "Popular",
    location: "Indonesia",
    title: "Bali Retreat",
    duration: "6 Days / 5 Nights",
    price: "1,199",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=2000&q=100",
     },
  {
    category: "Europe",
    badge: "Luxury",
    location: "Switzerland",
    title: "Swiss Experience",
    duration: "7 Days / 6 Nights",
    price: "1,699",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=100",
     },
  {
    category: "Europe",
    badge: "Trending",
    location: "Europe",
    title: "Europe Highlights",
    duration: "6 Days / 5 Nights",
    price: "1,499",
    image:
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=2000&q=100",
    },
  {
    category: "Middle East",
    badge: "Popular",
    location: "Dubai",
    title: "Dubai Luxury",
    duration: "4 Days / 3 Nights",
    price: "1,099",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2000&q=100",
     },
];

export default function PopularTourPackages() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? tours
      : tours.filter((tour) => tour.category === active);

  return (
    <section className="bg-[#fbf9f7] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        {/* HEADER */}

        <div className="text-center">
          <p className="uppercase tracking-[6px] text-[#B99050] text-xs md:text-sm font-medium">
            Journeys Handpicked For You
          </p>

          <div className="flex justify-center items-center gap-4 my-5">
            <div className="h-[1px] w-16 bg-[#d9c4a0]" />
            <span className="text-[#B99050] text-lg">✦</span>
            <div className="h-[1px] w-16 bg-[#d9c4a0]" />
          </div>

          <h2
            className="text-[#111]"
            style={{
              fontSize: "clamp(3rem,7vw,5rem)",
              lineHeight: ".95",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              fontFamily: "var(--font-cormorant)",
            }}
          >
            Popular Tour Packages
          </h2>

          <p className="max-w-xl mx-auto mt-6 text-gray-500 text-base md:text-lg">
            Curated luxury experiences across the world, crafted for
            unforgettable memories.
          </p>
        </div>

        {/* FILTERS */}

        <div className="mt-12 flex justify-start lg:justify-center gap-4 overflow-x-auto pb-3">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`shrink-0 rounded-full px-7 py-3 border transition-all duration-300 flex items-center gap-2
              ${
                active === item
                  ? "bg-[#C39553] border-[#C39553] text-white"
                  : "bg-white border-[#E7DED3] text-[#555]"
              }`}
            >
              <Sparkles size={15} />
              {item}
            </button>
          ))}
        </div>

        {/* NAVIGATION */}

        <div className="tour-prev absolute left-4 lg:left-8 mt-[260px] z-20 hidden lg:flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] cursor-pointer">
          <ChevronLeft />
        </div>

        <div className="tour-next absolute right-4 lg:right-8 mt-[260px] z-20 hidden lg:flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] cursor-pointer">
          <ChevronRight />
        </div>

        {/* SLIDER */}

        <div className="mt-14">
          <Swiper
            modules={[Navigation]}
            slidesPerView={"auto"}
            spaceBetween={22}
            speed={900}
            grabCursor
            navigation={{
              prevEl: ".tour-prev",
              nextEl: ".tour-next",
            }}
          >
            {filtered.map((tour, index) => (
              <SwiperSlide
                key={index}
                style={{
                  width: "290px",
                }}
              >
                <div className="group h-full overflow-hidden rounded-[26px] border border-[#ECE5DA] bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]">
                  {/* IMAGE */}

                  <div className="relative h-[330px] overflow-hidden">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      quality={100}
                      className="object-cover transition-transform duration-[7000ms] ease-out group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute top-4 left-4 rounded-full bg-[#C39553] text-white text-xs px-3 py-2 font-medium">
                      {tour.badge}
                    </div>

                    <div className="absolute bottom-4 left-4 rounded-full bg-black/55 text-white text-sm px-4 py-2 backdrop-blur-md">
                      {tour.duration}
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="p-5 flex flex-col min-h-[270px]">
                    <div className="flex items-center gap-2 text-[#8f8f8f] text-sm">
                      <MapPin size={14} />
                      {tour.location}
                    </div>

                    <h3
                      className="mt-3 text-[#111]"
                      style={{
                        fontSize: "2rem",
                        lineHeight: "1",
                        fontWeight: 500,
                        fontFamily: "var(--font-cormorant)",
                      }}
                    >
                      {tour.title}
                    </h3>

                    

                    <div className="mt-5 h-[2px] w-10 bg-[#C39553]" />

                    <div className="mt-auto pt-6 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-[#777]">From</p>

                        <h4 className="text-[34px] font-semibold text-[#C39553]">
                          SGD {tour.price}
                        </h4>
                      </div>

                      <button className="h-14 w-14 rounded-full bg-[#C39553] text-white flex items-center justify-center transition-all duration-300 hover:translate-x-1">
                        <ArrowRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}