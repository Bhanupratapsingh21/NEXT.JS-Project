import HeroSection from "@/components/HeroSection";
import FuturedCourses from "@/components/FuturedCourses"
import WhyChooseus from "@/components/WhyChooseus";
import MusicschoolTestimonials from "@/components/Musicschooltestimonial";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import Instrector from "@/components/Instrectors";
import Fotter from "@/components/Fotter";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection/>
        <FuturedCourses/>
        <WhyChooseus/>
        <MusicschoolTestimonials/>
        <UpcomingWebinar/> 
        <Instrector/>
    </main>
  );
}
