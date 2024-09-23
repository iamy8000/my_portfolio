'use client';

import { useCallback } from 'react';

export const Header = ({id}:{id:string}) => {
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div id={id} className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          onClick={() => scrollToSection("hero")}
          className="nav-item cursor-pointer"
        >
          Home
        </a>
        <a
          onClick={() => scrollToSection("projects")}
          className="nav-item cursor-pointer"
        >
          Projects
        </a>
        <a
          onClick={() => scrollToSection("about")}
          className="nav-item cursor-pointer"
        >
          About
        </a>
        <a
          onClick={() => scrollToSection("contact")}
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900 cursor-pointer"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};