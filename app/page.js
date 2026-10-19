import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Delices from "@/components/Delices";
import Groups from "@/components/Groups";
import Maison from "@/components/Maison";
import Visit from "@/components/Visit";
import Reserve from "@/components/Reserve";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <Services />
        <Delices />
        <Groups />
        <Maison />
        <Visit />
        <Reserve />
      </main>
      <Footer />
    </>
  );
}
