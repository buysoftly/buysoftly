import { Link } from "react-router-dom";

//data
import { badges } from "../data";

//components
import { Icon } from "@iconify/react";

//images
import herLaptop from "../assets/image/hero-laptop.svg";
// import HeroImage from "../assets/image/work-station.png";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[url('/img/hero-bg.svg')] bg-cover bg-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        {/* NAVBAR */}
        <nav className="bg-white/70 backdrop-blur-xl rounded-2xl md:rounded-full px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-bold text-(--primary-100) shrink-0">
            <Link to="/">
              <span className="text-2xl">Buysoftly</span>
            </Link>
          </div>

          <ul className="hidden lg:flex gap-8 text-xs text-slate-700">
            <li className="text-(--primary-100) font-medium cursor-pointer">
              <Link to="/">Home</Link>
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

          <Link to="https://lapshift.up.railway.app/register">
            <button className="bg-(--primary-100) hover:bg-blue-600 transition text-white px-4 sm:px-6 py-3 sm:py-3 rounded-xl text-xs font-medium">
              Sign Up
            </button>
          </Link>
        </nav>

        {/* HERO CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pt-5 md:pt-10">
          {/* LEFT */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-slate-950">
              Own Your Work <br />
              Setup Without Paying <br />
              <span className="text-(--primary-100)">Everything Upfront</span>
            </h1>

            <p className="mt-5 text-slate-600 max-w-xl mx-auto lg:mx-0 text-sm sm:text-md">
              Get laptops and accessories with flexible monthly payments. Start
              building your dream workstation today.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-(--primary-100) hover:bg-blue-600 transition text-white px-6 py-3 rounded-xl font-medium">
                <Link className="block" to="https://lapshift.up.railway.app/">
                  Shop Now
                </Link>
              </button>

              <button className="border border-(--primary-100) text-(--primary-100) hover:bg-blue-50 transition px-6 py-3 rounded-xl font-medium">
                <Link className="block" to="/#how-it-works">
                  How it works
                </Link>
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative h-60 sm:h-70 md:h-80 lg:h-90">
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
  );
}
