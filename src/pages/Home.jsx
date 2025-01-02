import Card from "../components/Card";
import Client from "../components/Client";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HeroServices from "../components/HeroServices";

const Home = () => {
  return (
    <div className="section home h-screen bg-gray-950 text-white">
      <Hero />
      <HeroServices />
      <Card />
      <Client />
      <Footer />
    </div>
  );
};

export default Home;
