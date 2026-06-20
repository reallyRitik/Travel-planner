import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="shrink-0">
      <div className="flex flex-col">
        <h1 className="text-[22px] font-bold tracking-wide text-[#7B0F33]">
          RAJ GLOBAL
        </h1>

        <span className="text-[10px] uppercase tracking-[4px] text-slate-500 mt-1">
          Enterprise • Travel • Trade
        </span>
      </div>
    </Link>
  );
}