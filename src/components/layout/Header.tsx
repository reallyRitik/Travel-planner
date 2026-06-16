import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="text-2xl font-bold text-blue-700">
          Raj Global
        </div>

        <nav className="flex gap-6 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/travel">Travel</Link>
          <Link href="/vehicles">Vehicles</Link>
          <Link href="/exports">Exports</Link>
          <Link href="/lifestyles">Lifestyle</Link>
          <Link href="/contact">Contact</Link>
        </nav>

      </div>
    </header>
  );
}