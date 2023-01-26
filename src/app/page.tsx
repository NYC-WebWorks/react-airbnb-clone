import Banner from "@/components/Banner";
import Explore from "@/components/Explore";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MediumCards from "@/components/MediumCards";
import { live } from "@/constants/data";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Explore />
        <Banner />
        <MediumCards {...live} />
      </main>
    </>
  );
}
