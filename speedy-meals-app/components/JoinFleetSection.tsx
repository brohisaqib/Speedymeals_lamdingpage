"use client";

import { useState, FormEvent } from "react";

interface RoleCard {
  id: "rider" | "courier" | "restaurant" | "technician";
  title: string;
  subtitle: string;
  imageUrl: string;
  icon: string;
  badgeBg: string;
  roleDetailLabel: string;
  roleDetailOptions: string[];
}

const roles: RoleCard[] = [
  {
    id: "rider",
    title: "Rider",
    subtitle: "Deliver on two wheels",
    imageUrl: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=600&q=80",
    icon: "two_wheeler",
    badgeBg: "bg-red-100 text-red-600",
    roleDetailLabel: "Vehicle Type",
    roleDetailOptions: ["Scooter / Motorcycle", "Bicycle", "E-Bike", "Electric Scooter"],
  },
  {
    id: "courier",
    title: "Courier",
    subtitle: "Drive & deliver larger orders",
    imageUrl: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&w=600&q=80",
    icon: "local_shipping",
    badgeBg: "bg-blue-100 text-blue-600",
    roleDetailLabel: "Delivery Vehicle",
    roleDetailOptions: ["Car / Sedan", "Delivery Van", "Cargo Bike", "Motorcycle"],
  },
  {
    id: "restaurant",
    title: "Restaurant",
    subtitle: "Grow your business",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    icon: "storefront",
    badgeBg: "bg-amber-100 text-amber-700",
    roleDetailLabel: "Cuisine Type",
    roleDetailOptions: ["Italian", "Fast Food", "Middle Eastern", "Asian", "Bakery & Desserts", "Other"],
  },
  {
    id: "technician",
    title: "Technician",
    subtitle: "Support the fleet",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    icon: "build",
    badgeBg: "bg-slate-100 text-slate-700",
    roleDetailLabel: "Specialization",
    roleDetailOptions: ["EV Scooter Maintenance", "Engine & Mechanical Repairs", "Fleet Management", "General Diagnostics"],
  },
];

export default function JoinFleetSection() {
  const [selectedRoleId, setSelectedRoleId] = useState<"rider" | "courier" | "restaurant" | "technician">("restaurant");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [roleDetail, setRoleDetail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const activeRole = roles.find((r) => r.id === selectedRoleId) || roles[2];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) {
      setErrorMsg("Please fill in your full name and email address.");
      return;
    }
    setErrorMsg("");
    setIsSubmitted(true);
  };

  return (
    <section
      id="join-fleet"
      className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop bg-gradient-to-br from-[#E51937] via-[#D1152E] to-[#6A1B51] text-white relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display-lg text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Join the Fleet Before We Launch
          </h2>
          <p className="font-body-lg text-white/90 text-base md:text-lg max-w-2xl mx-auto font-medium">
            Be part of the next big thing in food delivery. Register your interest today and secure early benefits.
          </p>
        </div>

        {/* 4 Role Selection Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {roles.map((role) => {
            const isSelected = selectedRoleId === role.id;
            return (
              <div
                key={role.id}
                onClick={() => {
                  setSelectedRoleId(role.id);
                  setRoleDetail("");
                }}
                className={`cursor-pointer rounded-2xl overflow-hidden bg-white/95 text-on-surface shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative border-2 ${
                  isSelected
                    ? "border-white ring-4 ring-white/40 scale-[1.02]"
                    : "border-transparent opacity-90 hover:opacity-100"
                }`}
              >
                {/* Image Container with Badge */}
                <div className="relative h-44 w-full overflow-hidden bg-surface-variant">
                  <img
                    src={role.imageUrl}
                    alt={role.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {/* Top-Right Badge Icon */}
                  <div
                    className={`absolute top-3 right-3 w-9 h-9 rounded-full ${role.badgeBg} shadow-md flex items-center justify-center`}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {role.icon}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <h3 className="font-headline-md text-xl font-bold text-on-surface mb-1">
                    {role.title}
                  </h3>
                  <p className="font-body-md text-sm text-on-surface-variant">
                    {role.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Registration Form Card */}
        <div className="max-w-4xl mx-auto bg-surface-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl border border-white/20 text-on-surface">
          {isSubmitted ? (
            <div className="text-center py-10 flex flex-col items-center animate-fade-in-up">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[40px]">check_circle</span>
              </div>
              <h3 className="font-headline-lg text-2xl md:text-3xl text-on-surface font-bold mb-2">
                Registration Submitted!
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-6">
                Thank you for registering as a <strong className="text-primary">{activeRole.title}</strong>! Our onboarding team will contact you shortly before launch.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFullName("");
                  setEmail("");
                  setPhone("");
                  setCity("");
                  setRoleDetail("");
                }}
                className="bg-primary text-white font-label-bold px-8 py-3 rounded-full hover:bg-primary-container transition-all shadow"
              >
                Register Another Interest
              </button>
            </div>
          ) : (
            <>
              <div className="text-left md:text-center mb-8">
                <h3 className="font-headline-lg text-2xl md:text-3xl font-extrabold text-on-surface mb-2">
                  Register as a {activeRole.title}
                </h3>
                <p className="font-body-md text-on-surface-variant text-sm md:text-base">
                  Fill out the form below to get early access and partner benefits.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {errorMsg && (
                  <div className="bg-red-50 text-red-600 text-sm font-semibold p-3 rounded-xl border border-red-200">
                    {errorMsg}
                  </div>
                )}

                {/* 2-Column Inputs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-bold text-sm font-semibold text-on-surface">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-surface-variant/80 bg-background-off-white text-on-surface focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-bold text-sm font-semibold text-on-surface">
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-surface-variant/80 bg-background-off-white text-on-surface focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-bold text-sm font-semibold text-on-surface">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-surface-variant/80 bg-background-off-white text-on-surface focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>

                  {/* City */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-bold text-sm font-semibold text-on-surface">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-surface-variant/80 bg-background-off-white text-on-surface focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Role Specific Dropdown */}
                <div className="flex flex-col gap-2">
                  <label className="font-label-bold text-sm font-semibold text-on-surface">
                    {activeRole.roleDetailLabel}
                  </label>
                  <div className="relative">
                    <select
                      value={roleDetail}
                      onChange={(e) => setRoleDetail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-surface-variant/80 bg-background-off-white text-on-surface focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select {activeRole.roleDetailLabel}</option>
                      {activeRole.roleDetailOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-4 flex justify-center">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#E51937] hover:bg-[#c4132c] text-white font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Submit Registration
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
