import heroImg from "@/assets/gallery/hero-deere.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <img src={heroImg} alt="Beautiful landscaped backyard" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 hero-overlay" />
      <div className="container relative z-10 py-32 pt-40">
        <div className="max-w-2xl animate-fade-up">
          <p className="font-display text-accent uppercase tracking-[0.3em] text-sm mb-4">Professional Landscaping</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6">
            Transform Your
            <br />
            Outdoor Space
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-light">
            Family owned for over 15 years, bringing quality work to every project — from grading to finished landscapes
            of any kind. Serving Calgary, Okotoks & the Foothills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#quote"
              className="inline-flex items-center justify-center bg-accent text-accent-foreground px-8 py-4 rounded-md font-display text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Get a Free Quote
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-md font-display text-sm uppercase tracking-wider hover:bg-primary-foreground/10 transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
