import {
  Search,
  Heart,
  Plane,
  Users,
  Ship,
  Sparkles,
} from "lucide-react";

const tabs = [
  { title: "Search", icon: Search, active: true },
  { title: "Honeymoon", icon: Heart },
  { title: "Visa Free Packages", icon: Plane },
  { title: "Group Tour Packages", icon: Users },
  { title: "Disney Cruise", icon: Ship },
  { title: "Last Minute Deals", icon: Sparkles },
];

export default function SearchTabs() {
  return (
    <div
      className="
      flex
      items-stretch

      overflow-x-auto
      whitespace-nowrap
      scrollbar-hide

      border-b
      border-slate-200

      bg-gradient-to-r
      from-slate-50
      to-white
      "
    >
      {tabs.map((tab, index) => {
        const Icon = tab.icon;

        return (
          <button
            key={index}
            className={`
              relative
              flex
              items-center
              gap-2

              px-5 sm:px-6 lg:px-8
              py-4 sm:py-5 lg:py-6

              flex-shrink-0

              font-semibold
              text-sm sm:text-base

              transition-all duration-300

              ${
                tab.active
                  ? "text-blue-700 bg-white"
                  : "text-slate-600 hover:text-blue-700"
              }
            `}
          >
            <Icon size={18} />
            <span>{tab.title}</span>

            {tab.active && (
              <>
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-600" />
                <div className="absolute bottom-[-7px] left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white border-b border-r border-slate-200" />
              </>
            )}
          </button>
        );
      })}
    </div>
  );
}