import Image from "next/image";
import Navbar from "./componants/Navbar";
import Hero from "./componants/Hero";
import Services from "./componants/Services";
import Journey from "./componants/Journey";
import AdvancedTreatments from "@/app/componants/AdvancedTreatments"
import TreatmentResults from "./componants/TreatmentResults";
import FAQ from "./componants/FAQ";
import ShortVideos from "./componants/ShortVideos";
import Reviews from "./componants/Reviews";
import AppointmentTemp from "./componants/AppointmentTemp";
import AskDoctor from "./componants/AskDoctor";

export default function Home() {
  return (
     <main>

      <section className="relative min-h-screen">
        <Hero/>
        <AskDoctor/>
        <Services/>
        <Journey/>
        {/* <AdvancedTreatments/> */}
        {/* <TreatmentResults/> */}
        <FAQ/>
        <ShortVideos/>
        <Reviews/>
        {/* <AppointmentTemp/> */}
      </section>
    </main>
  );
}
