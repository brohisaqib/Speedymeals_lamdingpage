import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Speedy Meals - Fast & Safe Food Delivery Coming Soon",
  description:
    "Your Cravings, Delivered Speedily. Soon. Fast & Safe to You. We're building the most reliable network for your everyday meals.",
  openGraph: {
    title: "Speedy Meals - Fast & Safe Food Delivery Coming Soon",
    description:
      "Your Cravings, Delivered Speedily. Soon. Fast & Safe to You. We're building the most reliable network for your everyday meals.",
    images: [{ url: "/images/logo.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto.variable} scroll-smooth h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-background-off-white text-on-surface font-body-md antialiased flex flex-col min-h-screen selection:bg-primary-container selection:text-on-primary-container">
        {children}
      </body>
    </html>
  );
}
