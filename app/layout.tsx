import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SK Auto & Tire Solution | Tire Shop in Staten Island, NY",
  description:
    "Professional tire shop in Staten Island specializing in wheel alignment, brake service, suspension repair, oil changes, balancing, vehicle inspections, and new & used tires.",
  keywords: [
    "Tire Shop Staten Island",
    "Wheel Alignment Staten Island",
    "Brake Service Staten Island",
    "Oil Change Staten Island",
    "Suspension Repair Staten Island",
    "Vehicle Inspection Staten Island",
    "New Tires Staten Island",
    "Used Tires Staten Island",
    "Auto Repair Staten Island",
    "SK Auto & Tire Solution",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="EqSBHJ6i8Ak6sUqtOuCEq21645z4ngeYYIvjzpNqk9w"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}