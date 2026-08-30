"use client";

interface CoverageLocation {
  id: string;
  name: string;
  flag: string;
  region: string;
}

const locations: CoverageLocation[] = [
  { id: "saudi", name: "Saudi Arabia", flag: "🇸🇦", region: "Middle East" },
  { id: "pakistan", name: "Pakistan", flag: "🇵🇰", region: "South Asia" },
  { id: "kuwait", name: "Kuwait", flag: "🇰🇼", region: "Middle East" },
  { id: "qatar", name: "Qatar", flag: "🇶🇦", region: "Middle East" },
];

export default function CitiesSection() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-background-off-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-tertiary-fixed-dim/20 text-tertiary-container font-label-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-tertiary-fixed-dim/30">
            Global Expansion
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-3">
            Launching Soon In
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto">
            We&apos;re expanding rapidly across key markets. Be the first to experience Speedy Meals when we launch in your city.
          </p>
        </div>

        {/* Country Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="group relative bg-surface-white rounded-2xl p-6 border border-surface-variant/40 ambient-shadow ambient-shadow-hover transition-all duration-300 cursor-default"
            >
              {/* Coming Soon Badge */}
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1 bg-tertiary-fixed-dim/15 text-tertiary text-[11px] font-label-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
                  Soon
                </span>
              </div>

              {/* Flag */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                {loc.flag}
              </div>

              {/* Country Name */}
              <h3 className="font-headline-md text-headline-md text-on-surface mb-1">
                {loc.name}
              </h3>

              {/* Region Tag */}
              <span className="font-label-md text-label-md text-on-surface-variant">
                {loc.region}
              </span>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent group-hover:via-primary/40 transition-all duration-300 rounded-full" />
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-10">
          <p className="font-body-md text-on-surface-variant text-sm">
            More countries coming soon.{" "}
            <a href="#join-fleet" className="text-secondary font-semibold hover:underline transition-colors">
              Get notified when we launch →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
