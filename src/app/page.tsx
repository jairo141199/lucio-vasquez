import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatButton } from "@/components/WhatsAppFloatButton";
import { WelcomeModal } from "@/components/WelcomeModal";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0E0B12]">
      <WelcomeModal />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <About />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </div>
  );
}
