interface SearchFieldProps {
  label: string;
  value: string;
  subtitle?: string;
}

export default function SearchField({
  label,
  value,
  subtitle,
}: SearchFieldProps) {
  return (
    <div
      className="
      group
      relative
      flex-1

      px-5 py-5
      sm:px-6 sm:py-6
      lg:px-8 lg:py-7

      transition-all
      duration-300
      hover:bg-blue-50/40
      "
    >
      {/* Label */}
      <p
        className="
        text-[11px]
        sm:text-[12px]
        lg:text-[13px]
        uppercase
        tracking-[2px]
        text-slate-500
        font-semibold
        mb-3
        sm:mb-4
        "
      >
        {label}
      </p>

      {/* VALUE (FIXED 26PX) */}
      <h2
        className="
        text-[26px]
        font-extrabold
        text-slate-900
        leading-none
        tracking-tight
        "
      >
        {value}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className="
          mt-2
          sm:mt-3
          text-[13px]
          sm:text-[14px]
          lg:text-[15px]
          text-slate-500
          font-medium
          "
        >
          {subtitle}
        </p>
      )}

      {/* Bottom animation line */}
      <div
        className="
        absolute
        bottom-0
        left-0
        w-0
        h-[2px]
        bg-gradient-to-r
        from-sky-500
        to-blue-700
        group-hover:w-full
        transition-all
        duration-300
        "
      />
    </div>
  );
}