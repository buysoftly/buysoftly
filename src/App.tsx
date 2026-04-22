//images
import investSecure from "./assets/image/invest-secure.svg";
// import HeroImage from "./assets/image/work-station.png";

//componets
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Security from "./components/Security";
import HowItWork from "./components/HowItWork";

export default function App() {
  return (
    <>
      {/* HERO */}
      <Hero />

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
      <section className="w-full mt-10 md:mt-20">
        <img src={investSecure} alt="Invest Secure" />
      </section>
      {/* FAQ */}
      <Faq />
      {/* FOOTER */}
      <Footer />
    </>
  );
}
