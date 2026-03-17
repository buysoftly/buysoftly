import { Icon } from "@iconify/react";

//images
import HeroImage from "./assets/image/work-station.png";

//componets
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      {/* HEADER */}
      <Navbar />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 md:gap-12 items-center">
        <div>
          <h1 className="text-center md:text-start text-5xl md:text-6xl font-bold leading-tight">
            Upgrade Your Gear.
            <span className="text-3xl md:text-4xl mt-3 text-blue-600 block">
              Level Up Your Career.
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            The first workstation marketplace in Nigeria that lets you swap old
            devices for new ones and pay the balance in easy
            <span className="font-semibold"> "Small-Small"</span> installments.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
              Get a Swap Quote
            </button>

            <button className="border px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Browse Bundles
            </button>
          </div>
        </div>

        <div className="rounded-xl h-87.5 flex items-center justify-center">
          <img src={HeroImage} alt="hero-image" />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-blue-600/20 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold">
            Pro-Gear shouldn't cost a fortune.
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            You need the best tools to do your best work, but high prices and
            predatory interest rates are standing in your way. LapShift was
            built by creators, for creators, to make professional hardware
            accessible to everyone.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              How LapShift Works
            </h2>
            <p className="text-slate-400">
              Designed for the Nigerian tech professional.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-10">
            <div className="text-center">
              <Icon
                icon="mdi:laptop"
                width="40"
                className="mx-auto text-blue-600"
              />
              <h3 className="font-semibold mt-4">Pick Your Shift</h3>
              <p className="text-sm text-gray-600 mt-2">
                Choose a single device or a curated professional bundle.
              </p>
            </div>

            <div className="text-center">
              <Icon
                icon="mdi:swap-horizontal"
                width="40"
                className="mx-auto text-blue-600"
              />
              <h3 className="font-semibold mt-4">Instant Swap Value</h3>
              <p className="text-sm text-gray-600 mt-2">
                Tell us about your old laptop and get an immediate discount.
              </p>
            </div>

            <div className="text-center">
              <Icon
                icon="mdi:wallet-outline"
                width="40"
                className="mx-auto text-blue-600"
              />
              <h3 className="font-semibold mt-4">Save-Small-Small</h3>
              <p className="text-sm text-gray-600 mt-2">
                Pay the remaining balance at your own pace.
              </p>
            </div>

            <div className="text-center">
              <Icon
                icon="mdi:truck-delivery-outline"
                width="40"
                className="mx-auto text-blue-600"
              />
              <h3 className="font-semibold mt-4">80% Milestone</h3>
              <p className="text-sm text-gray-600 mt-2">
                Once you hit 80%, we deliver your gear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BUNDLES */}
      <section className="bg-blue-600/20 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Curated Professional Bundles
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="font-bold text-lg">Developer Bundle</h3>
              <p className="mt-3 text-gray-600 text-sm">
                MacBook Pro + 27” 4K Monitor + Mechanical Keyboard.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="font-bold text-lg">Creator Studio</h3>
              <p className="mt-3 text-gray-600 text-sm">
                MacBook Air + Ring Light + High-fidelity Microphone.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="font-bold text-lg">Student Essentials</h3>
              <p className="mt-3 text-gray-600 text-sm">
                Reliable ThinkPad + Wireless Mouse + Noise-cancelling
                Headphones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <Icon
              icon="mdi:percent-outline"
              width="40"
              className="mx-auto text-blue-600"
            />
            <h3 className="font-semibold mt-4">0% Interest</h3>
            <p className="text-gray-600 text-sm mt-2">
              We aren't a bank. You pay the price you see.
            </p>
          </div>

          <div>
            <Icon
              icon="mdi:shield-lock-outline"
              width="40"
              className="mx-auto text-blue-600"
            />
            <h3 className="font-semibold mt-4">Data Security</h3>
            <p className="text-gray-600 text-sm mt-2">
              Military-grade data wipe on all swapped devices.
            </p>
          </div>

          <div>
            <Icon
              icon="mdi:check-decagram-outline"
              width="40"
              className="mx-auto text-blue-600"
            />
            <h3 className="font-semibold mt-4">Authenticity</h3>
            <p className="text-gray-600 text-sm mt-2">
              100% genuine hardware with warranty coverage.
            </p>
          </div>
        </div>
      </section>

      {/* 4. TRUST & SECURITY */}
      <section id="security" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-black mb-8">
              We take your <br />
              <span className="text-blue-600">Security</span> seriously.
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "DoD Standard Data Wipe",
                  desc: "We securely erase your old laptop's data before resale.",
                },
                {
                  title: "Bank-Grade Payments",
                  desc: "Your savings are held securely via Paystack-licensed partners.",
                },
                {
                  title: "MDM Protection",
                  desc: "Every device is insured and secured via remote-lock tech.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <Icon
                    icon="lucide:check-circle-2"
                    className="text-(--color-primary) shrink-0"
                  />
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-linear-to-br from-blue-600/20 to-blue-600/20 aspect-square rounded-[3rem] border border-emerald-500/20 flex items-center justify-center">
            <Icon
              icon="lucide:shield-check"
              width={160}
              className="text-(--color-primary) animate-pulse"
            />
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold">Your investment is secure.</h2>

          <p className="mt-6 text-lg text-blue-100">
            We partner with licensed payment processors to ensure your
            "Small-Small" savings are safe. Our delivery-at-50% model lets you
            start working faster than traditional savings plans.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h4 className="font-semibold">What laptops can I swap?</h4>
              <p className="text-gray-600 text-sm mt-2">
                Almost any functional laptop from 2018 upwards.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Is my money safe?</h4>
              <p className="text-gray-600 text-sm mt-2">
                Yes. Funds are held in secure escrow until your milestone is
                met.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Can I pay faster?</h4>
              <p className="text-gray-600 text-sm mt-2">
                Yes. You can top up your balance anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features / How it works */}
      {/* <section className="mt-32">


      </section> */}

      {/* 5. FINAL CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Icon icon="lucide:cpu" width={200} />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 relative z-10">
            Ready to upgrade <br /> your workstation?
          </h2>
          <p className="text-white text-lg mb-12 max-w-xl mx-auto relative z-10">
            Join 500+ developers shifting to better gear today. Start your
            valuation and see how much your old device is worth.
          </p>
          <button className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform relative z-10 shadow-xl">
            Start My Swap Now
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
