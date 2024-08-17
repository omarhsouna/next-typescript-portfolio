"use client"
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import Drawer from "./Drawer";

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setHasScrolled(window.scrollY > 200);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".section");

    const handleScroll = () => {
      let currentSection: string = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 50) {
          currentSection = section.getAttribute("id") || "";
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const getStyleActiveLink = (currentSection: string) => {
    return clsx("max-w-fit transition duration-300 ease-linear delay-0", activeSection === currentSection ? "shadow-active-link text-black" : 'hover:shadow-active-link hover:text-black')
  }
  return (
    <header className={
      clsx('w-full fixed top-0 left-0 py-7 px-9  transition duration-300 ease-linear delay-0 ', hasScrolled ? "bg-white shadow-header" : "bg-header-gradient")
    }>
      <div className="mx-auto max-w-full lg:max-w-screen-xl flex items-center justify-between">

        <p className={clsx("text-3xl leading-10 font-semibold ", hasScrolled ? 'text-black' : 'text-white')}>
          Omar Hsouna
        </p>
        <div className={clsx("hidden lg:flex", hasScrolled ? "items-center gap-10 text-xs tracking-widest font-medium leading-3 text-gris-link" : "lg:hidden")}>
          <a href="#about" className={getStyleActiveLink("about")}>ABOUT</a>
          <a href="#services" className={getStyleActiveLink("services")}>WHAT I DO</a>
          <a href="#portfolio" className={getStyleActiveLink("portfolio")}>WORKS</a>
          <a href="#blog" className={getStyleActiveLink("blog")}>BLOG</a>
          <a href="#contacts" className={getStyleActiveLink("contacts")}>CONTACT</a>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="flex lg:hidden flex-col items-center justify-center w-8 h-8 space-y-1 focus:outline-none">
          <span className={clsx("block w-6 h-0.5 ", hasScrolled ? "bg-black" : "bg-white")}></span>
          <span className={clsx("block w-6 h-0.5 ", hasScrolled ? "bg-black" : "bg-white")}></span>
          <span className={clsx("block w-6 h-0.5 ", hasScrolled ? "bg-black" : "bg-white")}></span>
        </button>

      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="flex flex-col gap-7">
        <a href="#about" className={getStyleActiveLink("about")}>ABOUT</a>
        <a href="#services" className={getStyleActiveLink("services")}>WHAT I DO</a>
        <a href="#portfolio" className={getStyleActiveLink("portfolio")}>WORKS</a>
        <a href="#blog" className={getStyleActiveLink("blog")}>BLOG</a>
        <a href="#contacts" className={getStyleActiveLink("contacts")}>CONTACT</a>
      </div>
      </Drawer>
    </header>
  );
}