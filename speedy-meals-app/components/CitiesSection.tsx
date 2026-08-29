"use client";

interface CoverageLocation {
  id: string;
  name: string;
}

const locations: CoverageLocation[] = [
  { id: "saudi", name: "Saudi Arabia" },
  { id: "pakistan", name: "Pakistan" },
  { id: "kuwait", name: "Kuwait" },
  { id: "qatar", name: "Qatar" },
];

export default function CitiesSection() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-white border-y border-surface-variant/50 speed-line-bg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 bg-surface-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm">
        <h2 className="font-headline-md text-headline-md text-on-surface whitespace-nowrap">
          Launching soon in:
        </h2>
        <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="flex items-center gap-2 text-on-surface-variant font-label-bold text-lg group"
            >
              <span className="material-symbols-outlined text-primary group-hover:scale-125 transition-transform">
                location_city
              </span>{" "}
              {loc.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
