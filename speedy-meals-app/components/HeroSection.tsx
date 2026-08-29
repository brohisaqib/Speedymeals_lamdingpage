"use client";

import Image from "next/image";

interface Avatar {
  id: string;
  src: string;
  alt: string;
}

const avatars: Avatar[] = [
  {
    id: "avatar-1",
    src: "/images/avatar1.jpg",
    alt: "Young professional looking at smartphone",
  },
  {
    id: "avatar-2",
    src: "/images/avatar2.jpg",
    alt: "Female chef smiling confidently",
  },
  {
    id: "avatar-3",
    src: "/images/avatar3.jpg",
    alt: "Young man on bicycle",
  },
];

interface FoodCard {
  id: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
  rating: string;
  time: string;
}

const mockupCards: FoodCard[] = [
  {
    id: "burger-card",
    name: "Burger Joint Express",
    imageSrc: "/images/burger.jpg",
    imageAlt: "Gourmet burger and fries",
    rating: "4.8",
    time: "15-20 min",
  },
  {
    id: "salad-card",
    name: "Healthy Greens Co.",
    imageSrc: "/images/salad.jpg",
    imageAlt: "Fresh salad bowl",
    rating: "4.9",
    time: "10-15 min",
  },
];

export default function HeroSection() {
  return (
    <section
      className="relative pt-8 sm:pt-12 md:pt-14 pb-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden bg-surface-white diagonal-clip-bottom"
      id="home"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-fixed-dim/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-secondary-fixed-dim/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-full h-32 speed-line-bg opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Hero Content */}
        <div className="flex flex-col gap-6 items-start animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-tertiary-fixed-dim/20 text-tertiary-container px-3 py-1 rounded-full font-label-bold text-label-md border border-tertiary-fixed-dim/30">
            <span className="material-symbols-outlined text-[16px]">
              schedule
            </span>
            <span className="tracking-wide uppercase">Launching Soon</span>
          </div>

          <h1 className="font-display-lg text-display-lg text-on-surface lg:pr-12">
            Fast, Safe Food Delivery &mdash;{" "}
            <span className="text-primary italic">Coming Soon</span>
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Your Cravings, Delivered Speedily. Soon. Fast &amp; Safe to You. We&apos;re
            building the most reliable network for your everyday meals &mdash;
            connecting you with the restaurants you love, the groceries you need, and
            delivery you can count on. From your neighborhood favorites to citywide
            cravings, Speedy Meals is getting ready to bring it all to your doorstep,
            quickly and safely, every single time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-bold text-label-md speed-button-hover ambient-shadow hover:shadow-lg transition-all duration-200 flex justify-center items-center gap-2 text-lg w-full sm:w-auto cursor-pointer">
              Coming Soon
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex -space-x-3">
              {avatars.map((avatar) => (
                <Image
                  key={avatar.id}
                  className="w-10 h-10 rounded-full border-2 border-surface-white object-cover"
                  src={avatar.src}
                  alt={avatar.alt}
                  width={40}
                  height={40}
                />
              ))}
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">
              Join{" "}
              <span className="font-bold text-on-surface">5,000+</span> hungry
              locals waiting.
            </p>
          </div>
        </div>

        {/* Hero Visual (Prominent Floating Phone Mockup) */}
        <div className="relative flex justify-center lg:justify-end items-center min-h-[580px] lg:min-h-[660px]">
          {/* Subtle Continuous Breathing Radial Glow */}
          <div className="absolute top-1/2 left-1/2 w-[340px] sm:w-[440px] h-[340px] sm:h-[440px] bg-gradient-to-tr from-primary/30 via-secondary/20 to-amber-300/30 rounded-full blur-3xl animate-glow-pulse pointer-events-none" />

          {/* Decorative speed lines behind phone */}
          <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none transform -skew-x-12">
            <div className="w-full h-1 bg-primary mb-8 ml-12" />
            <div className="w-full h-2 bg-secondary mt-16 mr-24" />
            <div className="w-2/3 h-1 bg-tertiary absolute top-1/4 right-0" />
          </div>

          {/* Floating Phone Frame */}
          <div className="animate-hero-float relative z-10 w-[310px] sm:w-[350px] lg:w-[370px] h-[610px] sm:h-[650px] lg:h-[670px] bg-surface-white rounded-[44px] border-[10px] border-surface-variant/90 overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.28)] flex flex-col transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
            {/* Phone Notch */}
            <div className="absolute top-0 inset-x-0 h-6 bg-surface-variant/90 rounded-b-xl w-32 mx-auto z-20" />

            {/* App Mockup Content */}
            <div className="flex-grow bg-surface flex flex-col p-4 pt-10">
              {/* Header */}
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">
                      location_on
                    </span>
                  </div>
                  <div>
                    <div className="text-[10px] text-on-surface-variant font-label-bold uppercase tracking-wider">
                      Delivering to
                    </div>
                    <div className="text-sm font-extrabold text-on-surface leading-tight">
                      Downtown Area
                    </div>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">
                    search
                  </span>
                </div>
              </div>

              {/* Categories */}
              <div className="flex gap-3 mb-5 overflow-hidden">
                <div className="bg-primary text-on-primary px-4 py-2 rounded-full text-xs font-label-bold flex items-center gap-1 shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[15px]">
                    restaurant
                  </span>{" "}
                  Meals
                </div>
                <div className="bg-surface-white text-on-surface px-4 py-2 rounded-full text-xs font-label-bold shadow-sm shrink-0 border border-surface-variant">
                  <span className="material-symbols-outlined text-[15px]">
                    local_grocery_store
                  </span>{" "}
                  Grocery
                </div>
              </div>

              {/* Featured Food Cards */}
              {mockupCards.map((card) => (
                <div
                  key={card.id}
                  className="bg-surface-white rounded-xl overflow-hidden shadow-sm border border-surface-variant mb-4 flex-grow relative"
                >
                  <div className="absolute top-2 right-2 bg-tertiary-fixed-dim text-on-tertiary-fixed-variant text-[10px] font-bold px-2 py-1 rounded-full z-10 shadow-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">
                      bolt
                    </span>{" "}
                    Soon
                  </div>
                  <div className="h-36 bg-surface-container-high relative">
                    <Image
                      className="w-full h-full object-cover"
                      src={card.imageSrc}
                      alt={card.imageAlt}
                      fill
                      sizes="370px"
                    />
                  </div>
                  <div className="p-3">
                    <div className="font-bold text-on-surface text-sm mb-1">
                      {card.name}
                    </div>
                    <div className="flex justify-between items-center text-xs text-on-surface-variant">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px] text-tertiary">
                          star
                        </span>{" "}
                        {card.rating}
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px]">
                          schedule
                        </span>{" "}
                        {card.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
