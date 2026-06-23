export default function Hero() {
  return (
    <section
      className="relative h-[320px] md:h-[366px] xl:h-[366px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero/hero-bg.png')"
      }}
    >
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-md">

          <h1 className="text-white font-serif text-5xl xl:text-6xl font-semibold leading-tight">
            Redefining
            <br />
            Journeys
          </h1>

          <div className="w-16 h-1 bg-[#D4AF37] mt-5 mb-5"></div>

          <p className="text-white/90 text-base leading-7">
            Your trusted travel partner for unforgettable
            experiences worldwide.
          </p>

        </div>
      </div>
    </section>
  );
}