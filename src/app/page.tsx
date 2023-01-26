import Banner from "@/components/Banner";
import Explore from "@/components/Explore";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Explore />
        <Banner />
      </main>
    </>
  );
}
