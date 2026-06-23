import Hero from "../components/home/Hero";
import SearchSection from "../components/home/SearchSection";
import FeaturedDestinations from "../components/home/FeaturedDestinations";
import PopularPackages from "../components/home/PopularPackages";
import TestimonialsSection from "../components/home/Testimonials/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SearchSection />
      <FeaturedDestinations />
      <PopularPackages />
      <TestimonialsSection />

      
    </>
  );
}