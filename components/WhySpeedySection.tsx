"use client";

interface ValueProp {
  id: string;
  icon: string;
  iconColorClass: string;
  hoverBorderClass: string;
  title: string;
  description: string;
}

const valueProps: ValueProp[] = [
  {
    id: "speedy-delivery",
    icon: "timer",
    iconColorClass: "text-primary",
    hoverBorderClass: "group-hover:border-primary-fixed",
    title: "Speedy Delivery",
    description:
      "Advanced routing algorithms ensuring your food arrives hot and fresh, in record time.",
  },
  {
    id: "safe-handling",
    icon: "verified_user",
    iconColorClass: "text-secondary",
    hoverBorderClass: "group-hover:border-secondary-fixed",
    title: "Safe & Secure Handling",
    description:
      "Tamper-evident packaging and highly vetted driver partners for your peace of mind.",
  },
  {
    id: "wide-choice",
    icon: "storefront",
    iconColorClass: "text-tertiary",
    hoverBorderClass: "group-hover:border-tertiary-fixed",
    title: "Wide Restaurant Choice",
    description:
      "Partnering with hundreds of local favorites and national chains to satisfy every craving.",
  },
];

export default function WhySpeedySection() {
  return (
    <section
      className="py-section-gap px-margin-mobile md:px-margin-desktop bg-background-off-white"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Our Promise to You
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            We are building a delivery experience that prioritizes your time and
            safety above all else.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-surface-variant z-0 border-t-2 border-dashed border-surface-dim" />

          {valueProps.map((prop) => (
            <div
              key={prop.id}
              className="flex flex-col items-center text-center relative z-10 group"
            >
              <div
                className={`w-24 h-24 rounded-full bg-surface-white ambient-shadow flex items-center justify-center mb-6 border-4 border-background-off-white ${prop.hoverBorderClass} transition-colors duration-300`}
              >
                <span
                  className={`material-symbols-outlined text-[40px] ${prop.iconColorClass}`}
                >
                  {prop.icon}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
                {prop.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
