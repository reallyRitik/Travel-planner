import SearchTabs from "./SearchTabs";
import SearchField from "./SearchField";
import {
  CalendarDays,
  Users,
  SlidersHorizontal,
} from "lucide-react";

export default function SearchSection() {
  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-slate-50">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">

        <div
          className="
          rounded-[24px] sm:rounded-[28px] lg:rounded-[32px]

          overflow-hidden
          bg-white/90
          backdrop-blur-xl

          border border-white

          shadow-[0_25px_80px_rgba(15,23,42,0.12)]
          hover:shadow-[0_30px_90px_rgba(15,23,42,0.16)]

          transition-all duration-500
          "
        >
          <SearchTabs />

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5">

            <SearchField
              label="From City"
              value="New Delhi"
              subtitle="India"
            />

            <SearchField
              label="Destination"
              value="Tirupati"
              subtitle="Temple & Spiritual Tour"
            />

            {/* Date */}
            <div className="px-5 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7 border-t xl:border-t-0 xl:border-l border-slate-100">
              <div className="flex items-center gap-2 mb-4 text-slate-500">
                <CalendarDays size={18} />
                <span>Departure Date</span>
              </div>

              <h2 className="text-[28px] sm:text-[34px] lg:text-[26px] font-extrabold">
                21 Jun
              </h2>

              <p className="text-slate-500">
                Sunday, 2026
              </p>
            </div>

            {/* Guests */}
            <div className="px-5 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7 border-t xl:border-t-0 xl:border-l border-slate-100">
              <div className="flex items-center gap-2 mb-4 text-slate-500">
                <Users size={18} />
                <span>Guests</span>
              </div>

              <h2 className="text-[28px] sm:text-[34px] lg:text-[26px] font-extrabold">
                2 Adults
              </h2>

              <p className="text-slate-500">
                Deluxe Room
              </p>
            </div>

            {/* Filters */}
            <div className="px-5 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7 border-t xl:border-t-0 xl:border-l border-slate-100">
              <div className="flex items-center gap-2 mb-4 text-slate-500">
                <SlidersHorizontal size={18} />
                <span>Filters</span>
              </div>

              <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold">
                Customize
              </h2>

              <p className="text-slate-500">
                Hotels, Flights & More
              </p>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="px-5 sm:px-8 py-6 border-t border-slate-100 flex flex-col lg:flex-row gap-5 lg:justify-between lg:items-center">

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="font-semibold text-slate-700">
                Recent Search
              </span>

              <div className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 w-fit">
                New Delhi → Tirupati
              </div>
            </div>

            <button className="w-full sm:w-auto px-8 sm:px-14 py-4 rounded-full text-white font-bold bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700 shadow-[0_20px_40px_rgba(37,99,235,.35)] hover:scale-[1.03] transition-all duration-300">
              SEARCH HOLIDAYS
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}