import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="font-display text-accent uppercase tracking-[0.3em] text-sm mb-3">
              Our Story
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-10">
              About Calgary Landscape Supplies
            </h1>

            <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
              <p>
                Calgary Landscape Supplies is a proudly family-owned and operated landscaping
                company and materials supplier serving Calgary and surrounding communities. Built
                on hard work, local knowledge, and honest service, our company was founded to make
                landscaping projects easier, more affordable, and more reliable for both homeowners
                and professionals.
              </p>

              <p>
                At the heart of the business is Rick Uchacz, whose hands-on experience and deep
                understanding of both landscaping and materials guide everything we do. Rick knows
                Calgary's soil conditions, climate challenges, and seasonal demands firsthand. That
                local expertise allows us to not only recommend the right products, but also deliver
                professional results — whether you're refreshing your garden beds, installing new
                sod, building a patio base, or completing a full yard transformation.
              </p>

              <p>
                Beyond materials, we offer a full range of landscaping and property maintenance
                services. From grading and excavation to hardscaping, sod installation, spring
                cleanups, and snow removal, our crew handles projects of all sizes with the same
                care and attention to detail. We're just as comfortable delivering a load of
                decorative rock as we are transforming an entire yard from scratch.
              </p>

              <p>
                We supply high-quality soils, mulch, decorative rock, gravel, and other essential
                landscape materials at competitive prices, with convenient ordering and dependable
                delivery. If you don't see what you need, just ask — we'll do our best to source it
                for you.
              </p>

              <p>
                Being family-owned means we care about our reputation in the community. We value
                straightforward communication, fair pricing, and building long-term relationships
                with our customers. When you work with Calgary Landscape Supplies, you're not
                dealing with a large corporation — you're working directly with a local team that
                stands behind every load we deliver and every project we complete.
              </p>

              <p className="font-semibold text-foreground italic">
                Great landscapes start with the right foundation. We're here to help you build it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
