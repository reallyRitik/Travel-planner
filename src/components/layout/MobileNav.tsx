"use client";

import { Search, Menu } from "lucide-react";
import { useState } from "react";
import MobileDrawer from "./MobileDrawer";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex xl:hidden items-center gap-4">

        <button className="color-black dark:text-white">
          <Search size={22} stroke="black" />
        </button>

        <button style={{ color: "black" }}
          className=" dark:text-white"
          onClick={() => setOpen(true)}
        >
          <Menu size={28} />
        </button>

      </div>

      <MobileDrawer open={open} setOpen={setOpen} />
    </>
  );
}