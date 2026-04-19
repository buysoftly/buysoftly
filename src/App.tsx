import { Icon } from "@iconify/react";

//images
import herLaptop from "./assets/image/hero-laptop.svg";
// import HeroImage from "./assets/image/work-station.png";

//componets
import Footer from "./components/Footer";

export default function App() {
  const badges = [
    {
      icon: "mdi:star-four-points-outline",
      text: "Start From ₦31,000/Month",
      pos: "top-[6%] left-2 sm:left-6 md:top-[35%] md:-left-6 lg:-left-12",
    },
    {
      icon: "mdi:cog-outline",
      text: "Flexible Payments",
      pos: "top-[48%] right-2 sm:right-6 md:top-[56%] md:right-0 lg:-right-10",
    },
    {
      icon: "mdi:snowflake",
      text: "No Hidden Fees",
      pos: "bottom-[8%] left-2 sm:left-6 md:bottom-[14%] md:left-0 lg:-left-8",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="min-h-screen bg-[url('/img/hero-bg.svg')] bg-cover bg-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          {/* NAVBAR */}
          <nav className="bg-white/60 backdrop-blur-xl rounded-2xl md:rounded-full px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-bold text-sky-600 shrink-0">
              <span className="text-2xl">Buysoftly</span>
            </div>

            <ul className="hidden lg:flex gap-8 text-sm text-slate-700">
              <li className="text-sky-600 font-medium cursor-pointer">Home</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">How It Works</li>
              <li className="cursor-pointer">Plans</li>
              <li className="cursor-pointer">Contact Us</li>
            </ul>

            <a
              href="https://lapshift.up.railway.app/register"
              className="shrink-0"
            >
              <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm font-medium">
                Sign Up
              </button>
            </a>
          </nav>

          {/* HERO CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pt-5 md:pt-10">
            {/* LEFT */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-slate-950">
                Own Your Work <br />
                Setup Without Paying <br />
                <span className="text-blue-500">Everything Upfront</span>
              </h1>

              <p className="mt-5 text-slate-600 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg">
                Get laptops and accessories with flexible monthly payments.
                Start building your dream workstation today.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-3 rounded-xl font-medium">
                  <a className="block" href="https://lapshift.up.railway.app/">
                    Shop Now
                  </a>
                </button>

                <button className="border border-blue-500 text-blue-500 hover:bg-blue-50 transition px-6 py-3 rounded-xl font-medium">
                  <a className="block" href="/#how-it-works">
                    How it works
                  </a>
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative h-80 sm:h-90 md:h-100 lg:h-105">
              {/* LAPTOP IMAGE */}
              <img
                src={herLaptop}
                alt="Laptop"
                className="absolute inset-0 m-auto w-70 sm:w-95 md:w-125 lg:w-155 object-contain"
              />

              {/* BADGES */}
              {badges.map((item, i) => (
                <div
                  key={i}
                  className={`absolute ${item.pos} bg-white rounded-xl shadow-xl px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2`}
                >
                  <Icon
                    icon={item.icon}
                    width={18}
                    className="text-sky-500 shrink-0"
                  />

                  <span className="text-[11px] sm:text-xs font-medium text-slate-700 whitespace-nowrap">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
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

      {/* PROBLEM */}
      <section className="relative bg-[url('/img/pro-bg.svg')] bg-cover bg-center bg-no-repeat min-h-70 sm:min-h-95 md:min-h-125 lg:min-h-155 flex items-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-14 lg:px-20 py-8">
          <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl text-left">
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              Pro-Gear shouldn&apos;t cost a fortune.
            </h2>

            <p className="mt-3 sm:mt-5 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-white/90">
              You need the best tools to do your best work, but high prices and
              predatory interest rates are standing in your way. LapShift was
              built by creators, for creators, to make professional hardware
              accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* BUNDLES */}
      <section className="bg-(--accent) py-20">
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
              className="mx-auto text-(--primary-100)"
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
              className="mx-auto text-(--primary-100)"
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
              className="mx-auto text-(--primary-100)"
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
              <span className="text-(--primary-100)">Security</span> seriously.
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
                    className="text-(--primary-100) shrink-0"
                  />
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-linear-to-br from-(--primary-100)/20 to-(--primary-200)/20 aspect-square rounded-[3rem] border border-emerald-500/20 flex items-center justify-center">
            <Icon
              icon="lucide:shield-check"
              width={160}
              className="text-(--primary-100) animate-pulse"
            />
          </div>
        </div>
      </section>

      <section className="bg-(--primary-100) text-white py-20">
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
      <section className="py-15 md:py-32 px-2 md:px-6">
        <div className="max-w-5xl mx-auto bg-(--primary-100) rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
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
          <a
            href="https://lapshift.up.railway.app"
            className="bg-white text-(--primary-100) px-5 md:px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform relative z-10 shadow-xl"
          >
            Start My Swap Now
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
