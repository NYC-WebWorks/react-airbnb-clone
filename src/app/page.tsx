import Banner from "@/components/Banner";
import Explore from "@/components/Explore";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LargeCards from "@/components/LargeCards";
import MediumCards from "@/components/MediumCards";
import { discover, live } from "@/constants/data";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Explore />
        <Banner />
        <MediumCards {...live} />
        <LargeCards {...discover} />
      </main>
    </>
  );
}
