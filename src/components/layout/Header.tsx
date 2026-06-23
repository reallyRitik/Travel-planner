import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";


export default function Header() {
  return (
    <header
      className="
      sticky
      top-0
      z-50
      bg-white
      border-b
      border-slate-100
    "
    >
      <div
        className="
        max-w-[1500px]
        mx-auto
        px-8
        h-[110px]
        flex
        items-center
        justify-between
      "
      >
        <Logo />

        <DesktopNav />

        <MobileNav />
      </div>
    </header>
  );
}