import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-4 xl:px-8">

        <div className="h-[76px] flex items-center justify-between">

          <Logo />

          <DesktopNav />

          <MobileNav />

        </div>

      </div>
    </header>
  );
}