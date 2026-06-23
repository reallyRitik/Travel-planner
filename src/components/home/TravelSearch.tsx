import {
  MapPin,
  CalendarDays,
  Users,
} from "lucide-react";

export default function TravelSearch() {
  return (
    <div
      className="
      bg-white
      rounded-b-3xl
      rounded-r-3xl
      shadow-xl
      p-7
    "
    >
      <div
        className="
        grid
        gap-5
        xl:grid-cols-6
        lg:grid-cols-3
        md:grid-cols-2
      "
      >

        {/* From */}

        <div className="border rounded-2xl p-5">
          <p className="text-sm text-slate-500">
            From
          </p>

          <div className="flex justify-between mt-4">
            <span>Where from?</span>

            <MapPin size={18} />
          </div>
        </div>

        {/* To */}

        <div className="border rounded-2xl p-5">
          <p className="text-sm text-slate-500">
            To
          </p>

          <div className="flex justify-between mt-4">
            <span>Where to?</span>

            <MapPin size={18} />
          </div>
        </div>

        {/* Depart */}

        <div className="border rounded-2xl p-5">
          <p className="text-sm text-slate-500">
            Depart
          </p>

          <div className="flex justify-between mt-4">
            <span>Select Date</span>

            <CalendarDays size={18} />
          </div>
        </div>

        {/* Return */}

        <div className="border rounded-2xl p-5">
          <p className="text-sm text-slate-500">
            Return
          </p>

          <div className="flex justify-between mt-4">
            <span>Select Date</span>

            <CalendarDays size={18} />
          </div>
        </div>

        {/* Travellers */}

        <div className="border rounded-2xl p-5">
          <p className="text-sm text-slate-500">
            Travellers & Class
          </p>

          <div className="flex justify-between mt-4">
            <span>1 Traveller, Economy</span>

            <Users size={18} />
          </div>
        </div>

        {/* Button */}

        <button
          className="
          rounded-2xl
          bg-[#D4AF37]
          text-white
          font-semibold
          text-lg
        "
        >
          Explore Now →
        </button>

      </div>
    </div>
  );
}