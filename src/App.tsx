//componets
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Invest from "./components/Invest";
import Problem from "./components/Problem";
import Security from "./components/Security";
import HowItWork from "./components/HowItWork";

export default function App() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWork />
      <Security />
      <Invest />
      <Faq />
      <Footer />
    </>
  );
}
