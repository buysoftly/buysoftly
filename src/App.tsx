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
import HowItWork from "./components/HowItWork";

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
              <li className="text-sky-600 font-medium cursor-pointer">
                <a href="/">Home</a>
              </li>
              <li className="cursor-pointer">
                <a href="/#about">About</a>
              </li>
              <li className="cursor-pointer">
                <a href="/#how-it-works">How It Works</a>
              </li>
              <li className="cursor-pointer">
                <a href="/#plans">Plans</a>
              </li>
              <li className="cursor-pointer">
                <a href="/#contact">Contact Us</a>
              </li>
            </ul>

            <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm font-medium">
              <a href="https://lapshift.up.railway.app/register">Sign Up</a>
            </button>
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

      {/* PROBLEM */}
      <section className="relative bg-[url('/img/pro-bg.svg')] bg-cover bg-center bg-no-repeat mx-auto mt-10 md:mt-20 min-h-70 sm:min-h-95 md:min-h-125 lg:min-h-155 flex items-center">
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

      {/* HOW IT WORKS */}
      <HowItWork />

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
