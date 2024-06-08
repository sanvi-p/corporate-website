
'use client'
import React, { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import Logoone from "./Logo";
import Nav from "./Nav"; // Import Nav component
import MobileNavigation from "./MobileNavigation";
import { usePathname } from "next/navigation";



const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${
      header ? 'py-4 bg-tertiary shadow-lg dark:bg-accent' : 'py-6 dark:bg-transparent'
    } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fff]'}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo section */}
          <Logoone />
          <div className="flex items-center gap-x-6">
            {/* Nav Section (Desktop View) */}
            <div className="hidden xl:flex gap-x-8 items-center">
              <Nav
                containerStyles="hidden xl:flex gap-x-8 items-center"
                linkStyles="relative hover:text-primary transition-all"
                underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
              />
            </div>
            {/* Theme Toggle */}
            <ThemeToggler />
            {/* Mobile navigation */}
            <div className="xl:hidden">
              <MobileNavigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
