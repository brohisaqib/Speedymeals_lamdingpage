"use client";

import Image from "next/image";

interface FooterLink {
  label: string;
  href: string;
}

const footerLinks: FooterLink[] = [
  { label: "About", href: "#about" },
  { label: "Join Fleet", href: "#join-fleet" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest dark:bg-on-surface w-full pt-section-gap pb-8 border-t border-surface-variant dark:border-outline-variant flat no shadows flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop gap-base">
      {/* Brand Logo */}
      <div className="flex items-center gap-2 mb-4 md:mb-0 group">
        <Image
          alt="Speedy Meals Logo"
          className="h-8 w-auto grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
          src="/images/logo-transparent.png"
          width={120}
          height={32}
        />
        <span className="text-headline-sm font-headline-sm text-primary italic opacity-90">
          Speedy Meals
        </span>
      </div>

      {/* Links */}
      <nav aria-label="Footer Navigation" className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            className="text-on-surface-variant dark:text-surface-variant hover:text-secondary hover:text-primary transition-all duration-200 font-label-md text-label-md"
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Copyright */}
      <p className="text-secondary dark:text-secondary-fixed font-body-md text-body-md text-sm">
        © 2024 Speedy Meals. Fast &amp; Safe To You.
      </p>
    </footer>
  );
}
