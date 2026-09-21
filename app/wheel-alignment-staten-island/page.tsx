import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wheel Alignment Staten Island NY | SK Auto & Tire Solution",
  description:
    "Need wheel alignment in Staten Island, NY? Visit SK Auto & Tire Solution at 1074 Bay St for professional wheel alignment service. Call (347) 656-1771.",
};

export default function WheelAlignmentPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <a href="/" className="text-red-500 font-bold">
          ← SK AUTO & TIRE SOLUTION
        </a>

        <h1 className="text-4xl md:text-6xl font-bold mt-8 mb-6">
          Wheel Alignment in Staten Island, NY
        </h1>

        <p className="text-xl text-zinc-300 mb-8">
          Looking for professional wheel alignment near you in Staten Island?
          SK Auto & Tire Solution provides wheel alignment service to help
          improve tire wear, steering and vehicle handling.
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Professional Wheel Alignment Service
        </h2>

        <p className="text-zinc-300 mb-8">
          If your vehicle pulls to one side, your steering wheel is off-center,
          or your tires are wearing unevenly, your vehicle may need an
          alignment. Visit our tire shop in Staten Island for professional
          wheel alignment service.
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            SK Auto & Tire Solution
          </h2>

          <p>1074 Bay St, Staten Island, NY 10305</p>
          <p className="mt-2">Phone: (347) 656-1771</p>

          <a
            href="tel:+13476561771"
            className="inline-block mt-6 bg-red-600 px-6 py-3 rounded-lg font-bold"
          >
            CALL FOR WHEEL ALIGNMENT
          </a>
        </div>
      </section>
    </main>
  );
}
