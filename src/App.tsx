import { Icon } from "@iconify/react";

//data
import { badges } from "./data";

//images
import herLaptop from "./assets/image/hero-laptop.svg";
import investSecure from "./assets/image/invest-secure.svg";
// import HeroImage from "./assets/image/work-station.png";

//componets
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Security from "./components/Security";

export default function App() {
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

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-8">
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
      <Security />

      {/* investment */}
      <section className="w-full">
        <img src={investSecure} alt="Invest Secure" />
      </section>

      {/* FAQ */}
      <Faq />

      {/* FOOTER */}
      <Footer />
    </>
  );
}
