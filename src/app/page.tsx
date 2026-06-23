import Hero from "../components/home/Hero";
import SearchSection from "../components/home/SearchSection";
import FeaturedDestinations from "../components/home/FeaturedDestinations";
import PopularPackages from "../components/home/PopularPackages";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SearchSection />
      <FeaturedDestinations />
      <PopularPackages />

      
    </>
  );
}