"use client";

interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  iconBgClass: string;
}

const services: ServiceItem[] = [
  {
    id: "restaurants",
    icon: "restaurant",
    title: "Restaurants",
    description: "Top local eateries and fine dining, straight to your table.",
    iconBgClass: "bg-primary-container text-primary",
  },
  {
    id: "groceries",
    icon: "local_grocery_store",
    title: "Groceries",
    description: "Fresh produce and daily essentials delivered in minutes.",
    iconBgClass: "bg-secondary-container text-secondary",
  },
  {
    id: "fast-delivery",
    icon: "bolt",
    title: "Fast Delivery",
    description: "When hunger strikes hard, get it fast. Priority routing.",
    iconBgClass: "bg-primary-container text-primary",
  },
  {
    id: "pickup",
    icon: "directions_walk",
    title: "Pickup",
    description: "Skip the line and fees. Order ahead and grab it on the go.",
    iconBgClass: "bg-secondary-container text-secondary",
  },
  {
    id: "medicine",
    icon: "medication",
    title: "Medicine Delivery",
    description: "Get your prescriptions and OTC medicines delivered to your doorstep quickly.",
    iconBgClass: "bg-tertiary-container text-tertiary",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-background-off-white relative" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-3">
            Everything You Crave
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-4">
            Delivering more than just meals. Get ready for a seamless experience across all your daily needs.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-surface-white rounded-xl p-card-padding ambient-shadow ambient-shadow-hover transition-all duration-300 relative border border-surface-variant/50 group"
            >
              <div className="absolute -top-3 -right-3 bg-tertiary-fixed-dim text-on-tertiary-fixed-variant text-xs font-bold px-3 py-1 rounded-full shadow-sm transform group-hover:scale-110 transition-transform">
                Coming Soon
              </div>
              <div
                className={`w-14 h-14 rounded-full ${service.iconBgClass} mb-6 flex items-center justify-center transform group-hover:-rotate-12 transition-transform`}
              >
                <span className="material-symbols-outlined text-[28px]">
                  {service.icon}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2 text-xl">
                {service.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
