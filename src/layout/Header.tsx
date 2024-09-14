import { cn } from "@/lib/utils";
import { CiGrid41 } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { IoIosSunny } from "react-icons/io";
import {
  IoLocationOutline,
  IoMoonOutline,
  IoSearchOutline,
} from "react-icons/io5";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function Header() {
  const { theme, changeTheme } = useTheme();

  return (
    <header className="py-6">
      <div className="container">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center gap-3.5">
            <button className="inline-flex items-center justify-center border rounded-full bg-gray-alpha-100 size-12 hover:bg-gray-alpha-200">
              <CiGrid41 className="size-5" />
            </button>
            <button className="inline-flex items-center justify-center border rounded-full bg-gray-alpha-100 size-12 hover:bg-gray-alpha-200">
              <GoBell className="size-5" />
            </button>
            <button className="flex items-center gap-2.5 text-gray-900 hover:text-foreground">
              <IoLocationOutline className="size-6" />
              <span>Dhaka,Bangladesh</span>
            </button>
          </div>
          <div className="flex text-gray-500 group items-center px-[30px] gap-2.5 rounded-lg border bg-gray-alpha-100 h-full focus-within:border-gray-alpha-500">
            <IoSearchOutline className="transition size-6 group-focus-within:text-foreground" />
            <input
              type="search"
              className="size-full text-foreground placeholder:text-gray-500"
              placeholder="Search city..."
            />
          </div>
          <button
            className="relative flex items-center h-full px-1 border rounded-full w-28"
            onClick={() => changeTheme(theme === "dark" ? "light" : "dark")}
          >
            <motion.span
              className={cn(
                "absolute inline-flex items-center justify-center rounded-full size-10 transition-all duration-300"
              )}
              animate={
                theme === "dark"
                  ? {
                      right: "4px",
                      background: "var(--ds-blue-400)",
                    }
                  : {
                      right: "calc(100% - 44px)",
                      background: "var(--ds-amber-600)",
                    }
              }
            >
              {theme === "dark" ? (
                <IoMoonOutline className="size-6" />
              ) : (
                <IoIosSunny className="size-6" />
              )}
            </motion.span>
          </button>
        </div>
      </div>
    </header>
  );
}
