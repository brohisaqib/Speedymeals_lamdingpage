"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const navRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const navContainerRef = useRef<HTMLDivElement | null>(null);

  // Measure position of active link for underline transition
  const updateUnderline = useCallback(() => {
    const activeEl = navRefs.current[activeId];
    const containerEl = navContainerRef.current;
    if (activeEl && containerEl) {
      const activeRect = activeEl.getBoundingClientRect();
      const containerRect = containerEl.getBoundingClientRect();
      setUnderlineStyle({
        left: activeRect.left - containerRect.left,
        width: activeRect.width,
      });
    }
  }, [activeId]);

  // Handle Window Scroll (Header Background Separation & IntersectionObserver)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update underline on window resize or activeId change
  useEffect(() => {
    updateUnderline();
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [updateUnderline]);

  // IntersectionObserver for scroll position section detection
  useEffect(() => {
    const sectionIds = ["home", "services", "about"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries.reduce((prev, current) =>
            current.intersectionRatio > prev.intersectionRatio ? current : prev
          );
          setActiveId(mostVisible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -40% 0px",
        threshold: [0.1, 0.3, 0.5, 0.8],
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const targetId = href.replace("#", "");
    setActiveId(targetId);
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`docked full-width top-0 sticky z-50 transition-all duration-300 bg-[#FAFAFA] ${
        isScrolled
          ? "shadow-md border-b border-surface-variant/40"
          : "border-b border-surface-variant/20 shadow-sm"
      }`}
      id="top-nav"
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 w-full max-w-7xl mx-auto">
        {/* Brand Logo - Transparent Version */}
        <a
          className="flex items-center gap-2.5 group cursor-pointer"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#home");
          }}
        >
          <Image
            alt="Speedy Meals Logo"
            className="h-12 md:h-14 w-auto group-hover:scale-105 transition-transform duration-200"
            src="/images/logo-transparent.png"
            width={200}
            height={56}
            priority
          />
          <span className="text-2xl md:text-3xl font-headline-md font-black text-primary italic tracking-tight">
            Speedy Meals
          </span>
        </a>

        {/* Desktop Navigation with Animated Underline */}
        <nav
          aria-label="Main Navigation"
          ref={navContainerRef}
          className="hidden md:flex gap-8 items-center relative py-1"
        >
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <a
                key={link.label}
                href={link.href}
                ref={(el) => {
                  navRefs.current[id] = el;
                }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`font-label-bold text-label-md transition-colors py-1 hover:text-primary ${
                  isActive
                    ? "text-primary dark:text-primary font-bold"
                    : "text-on-surface-variant hover:opacity-80"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          {/* Animated Sliding Red Underline */}
          <span
            className="absolute bottom-0 h-[2.5px] bg-primary rounded-full transition-all duration-200 ease-out pointer-events-none"
            style={{
              left: `${underlineStyle.left}px`,
              width: `${underlineStyle.width}px`,
              opacity: underlineStyle.width > 0 ? 1 : 0,
            }}
          />
        </nav>

        {/* Trailing Actions (Registration & Coming Soon Buttons) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Registration Button with soft continuous pulse/glow animation */}
          <button
            onClick={() => scrollToSection("#join-fleet")}
            className="bg-secondary text-on-secondary hover:bg-secondary/90 border border-secondary px-5 py-2 rounded-full font-label-bold text-label-md speed-button-hover shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2 cursor-pointer registration-pulse-glow"
          >
            <span className="material-symbols-outlined text-[18px]">
              how_to_reg
            </span>
            Registration
          </button>

          {/* Coming Soon Button */}
          <button
            onClick={() => scrollToSection("#join-fleet")}
            className="bg-primary text-on-primary px-5 py-2 rounded-full font-label-bold text-label-md speed-button-hover shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">bolt</span>
            Coming Soon
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden text-on-surface p-2 hover:bg-surface-variant rounded-full transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAFAFA] border-b border-surface-variant px-margin-mobile py-4 flex flex-col gap-4 animate-fade-in-up">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`font-label-bold text-label-md py-1 ${
                  isActive
                    ? "text-primary font-bold border-l-4 border-primary pl-2"
                    : "text-on-surface-variant hover:text-primary pl-2"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="flex flex-col gap-2 mt-2">
            <button
              onClick={() => scrollToSection("#join-fleet")}
              className="bg-secondary text-on-secondary px-5 py-2 rounded-full font-label-bold text-label-md speed-button-hover shadow-sm flex items-center justify-center gap-2 w-full cursor-pointer registration-pulse-glow"
            >
              <span className="material-symbols-outlined text-[18px]">
                how_to_reg
              </span>
              Registration
            </button>
            <button
              onClick={() => scrollToSection("#join-fleet")}
              className="bg-primary text-on-primary px-5 py-2 rounded-full font-label-bold text-label-md speed-button-hover shadow-sm flex items-center justify-center gap-2 w-full cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">bolt</span>
              Coming Soon
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
