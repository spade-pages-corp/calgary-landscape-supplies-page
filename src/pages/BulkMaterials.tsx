import Navbar from "@/components/Navbar";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const materials = [
  { name: "River Rock", size: '1"–3"', unit: "per yard", description: "Smooth, rounded stones ideal for dry creek beds, borders, and decorative ground cover." },
  { name: "Pea Gravel", size: '¼"–½"', unit: "per yard", description: "Small, smooth stones perfect for pathways, patios, and drainage solutions." },
  { name: "Crushed Granite", size: '¾" minus', unit: "per yard", description: "Angular stone that compacts well — great for driveways, paths, and base layers." },
  { name: "Decorative Bark Mulch", size: "Medium", unit: "per yard", description: "Natural bark mulch for garden beds. Retains moisture and suppresses weeds." },
  { name: "Black Diamond Mulch", size: "Fine–Medium", unit: "per yard", description: "Premium dyed black mulch for a clean, polished look in flower beds and borders." },
  { name: "Topsoil", size: "Screened", unit: "per yard", description: "High-quality screened topsoil for gardens, lawns, and raised beds." },
  { name: "Compost Mix", size: "Fine", unit: "per yard", description: "Nutrient-rich organic compost blend to enrich soil and promote healthy growth." },
  { name: "Rundle Rock", size: '2"–6"', unit: "per yard", description: "Local Alberta limestone — a classic choice for rock gardens and retaining features." },
  { name: "Rainbow Rock", size: '1"–4"', unit: "per yard", description: "Multi-coloured natural stone that adds visual interest to any landscape." },
  { name: "Limestone Screenings", size: '¼" minus', unit: "per yard", description: "Fine crushed limestone for levelling, paver base, and filling joints." },
  { name: "Sand (Concrete)", size: "Fine", unit: "per yard", description: "Washed concrete sand for mixing, levelling, and construction projects." },
  { name: "Road Crush", size: '¾" minus', unit: "per yard", description: "Recycled crushed aggregate — an economical option for driveways and parking areas." },
];

const BulkMaterials = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="pt-28 pb-16 bg-foreground hero-overlay">
          <div className="container">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors font-body text-sm mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <p className="font-display text-accent uppercase tracking-[0.3em] text-sm mb-3">
              Landscape Materials
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Bulk Materials
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl">
              Premium aggregates, soils, and mulches available by the yard. Delivery throughout Calgary, Okotoks &amp; the Foothills.
            </p>
          </div>
        </section>

        {/* Inventory Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {materials.map((m) => (
                <div
                  key={m.name}
                  className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Placeholder image area */}
                  <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-primary/40"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
                            />
                          </svg>
                        </div>
                        <span className="text-xs text-muted-foreground">Photo coming soon</span>
                      </div>
                    </div>
                    {/* Subtle gradient overlay at bottom */}
                    <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-card/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {m.name}
                      </h3>
                      <span className="shrink-0 text-xs font-display uppercase tracking-wider bg-secondary text-secondary-foreground px-2.5 py-1 rounded-md">
                        {m.size}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {m.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground font-display uppercase tracking-wider">
                        Sold {m.unit}
                      </span>
                      <a
                        href="#quote"
                        className="text-sm font-display uppercase tracking-wider text-accent hover:text-accent/80 transition-colors"
                      >
                        Get Quote →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
};

export default BulkMaterials;
