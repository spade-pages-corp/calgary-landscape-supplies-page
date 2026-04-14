import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import MaterialCalculatorDrawer from "@/components/MaterialCalculatorDrawer";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

import sodImg from "@/assets/materials/sod.webp";
import soilImg from "@/assets/materials/soil.webp";
import mix7030Img from "@/assets/materials/70_30-mix.webp";
import clayImg from "@/assets/materials/clay.webp";
import cedarMulchImg from "@/assets/materials/cedar-mulch.webp";
import blackMulchImg from "@/assets/materials/black-mulch.webp";
import barkMulchImg from "@/assets/materials/bark-mulch.webp";
import roadGravelImg from "@/assets/materials/20mm-road-gravel.webp";
import drainRockImg from "@/assets/materials/40mm-drain-rock.webp";
import randleRockImg from "@/assets/materials/10mm-randle-rock.webp";
import rundleRock25Img from "@/assets/materials/25mm-rundle-rock.webp";
import rundleRock40Img from "@/assets/materials/40mm-rundle-rock.webp";
import crystalWhiteImg from "@/assets/materials/crystal-white-rock.webp";
import peaGravelImg from "@/assets/materials/10mm-washed-rock-pea-gravel.webp";
import washedRock20Img from "@/assets/materials/20mm-washed-rock.webp";
import washedRock40Img from "@/assets/materials/40mm-washed-rock.jpg";
import rainbowRock20Img from "@/assets/materials/20mm-rainbow-rock.webp";
import rainbowRock40Img from "@/assets/materials/40mm-rainbow-rock.webp";
import riverRockImg from "@/assets/materials/4-8-inch-river-rock.webp";
import limestoneImg from "@/assets/materials/10mm-limestone.webp";
import limestone20Img from "@/assets/materials/20mm-limestone.webp";
import limestone40Img from "@/assets/materials/40mm-limestone.webp";
import sand3Img from "@/assets/materials/3mm-sand.webp";
import sand5Img from "@/assets/materials/5mm-sand.webp";
import recycledAsphaltImg from "@/assets/materials/recycled-asphalt.webp";
import recycledConcreteImg from "@/assets/materials/recycled-concrete.webp";

export interface Material {
  name: string;
  price: string;
  unit: string;
  description: string;
  image: string;
}

export const materials: Material[] = [
  // Sod & Soils
  { name: "Sod", price: "$0.55", unit: "per sq ft", description: "Fresh-cut Kentucky Bluegrass sod for instant, lush lawns.", image: sodImg },
  { name: "Soil", price: "$15", unit: "per yard", description: "High-quality screened topsoil for gardens, lawns, and raised beds.", image: soilImg },
  { name: "70/30 Mix", price: "$40", unit: "per yard", description: "Premium 70% topsoil / 30% compost blend — ideal for new lawns and garden beds.", image: mix7030Img },
  { name: "Clay", price: "$30", unit: "per yard", description: "Natural clay fill for grading, backfill, and base preparation.", image: clayImg },
  // Sand
  { name: "3mm Sand", price: "$65", unit: "per yard", description: "Fine sand for levelling, paving stone bedding, and sandbox fill.", image: sand3Img },
  { name: "5mm Sand", price: "$70", unit: "per yard", description: "Coarse utility sand for concrete mixing, backfill, and pipe bedding.", image: sand5Img },
  // Mulch
  { name: "Cedar Mulch", price: "$60", unit: "per yard", description: "Aromatic cedar mulch that naturally repels insects and retains moisture.", image: cedarMulchImg },
  { name: "Black Mulch", price: "$60", unit: "per yard", description: "Premium dyed black mulch for a clean, polished look in flower beds and borders.", image: blackMulchImg },
  { name: "Bark Mulch", price: "$60", unit: "per yard", description: "Natural bark mulch for garden beds. Retains moisture and suppresses weeds.", image: barkMulchImg },
  // Gravel & Drain Rock
  { name: "20mm Road Gravel", price: "$60", unit: "per yard", description: "Versatile crushed gravel for driveways, parking areas, and base layers.", image: roadGravelImg },
  { name: "40mm Drain Rock", price: "$65", unit: "per yard", description: "Smooth, rounded drain rock for drainage systems, dry wells, and French drains.", image: drainRockImg },
  // Limestone
  { name: "10mm Limestone", price: "$125", unit: "per yard", description: "Crushed limestone aggregate for base layers, pathways, and compacted surfaces.", image: limestoneImg },
  { name: "20mm Limestone", price: "$135", unit: "per yard", description: "Mid-size crushed limestone for drainage, driveways, and landscaping base.", image: limestone20Img },
  { name: "40mm Limestone", price: "$135", unit: "per yard", description: "Large crushed limestone for heavy-duty base layers and structural fill.", image: limestone40Img },
  // Rundle Rock
  { name: "10mm Rundle Rock", price: "$118", unit: "per yard", description: "Local Alberta limestone — a classic choice for rock gardens and retaining features.", image: randleRockImg },
  { name: "25mm Rundle Rock", price: "$190", unit: "per yard", description: "Mid-size Alberta Rundle stone for pathways, borders, and decorative ground cover.", image: rundleRock25Img },
  { name: "40mm Rundle Rock", price: "$225", unit: "per yard", description: "Large Rundle rock ideal for retaining walls, water features, and bold landscaping accents.", image: rundleRock40Img },
  // Washed Rock
  { name: "10mm Washed Rock (Pea Gravel)", price: "$100", unit: "per yard", description: "Smooth, rounded pea gravel for pathways, playgrounds, and drainage layers.", image: peaGravelImg },
  { name: "20mm Washed Rock", price: "$100", unit: "per yard", description: "Versatile washed rock for landscaping, drainage, and decorative ground cover.", image: washedRock20Img },
  { name: "40mm Washed Rock", price: "$100", unit: "per yard", description: "Large smooth river stone for dry creek beds, borders, and landscape features.", image: washedRock40Img },
  // Rainbow Rock
  { name: "20mm Rainbow Rock", price: "$275", unit: "per yard", description: "Colorful multi-toned river rock that adds natural beauty to any landscape.", image: rainbowRock20Img },
  { name: "40mm Rainbow Rock", price: "$235", unit: "per yard", description: "Large rainbow-hued stones perfect for garden beds, water features, and accents.", image: rainbowRock40Img },
  // Specialty Rock
  { name: "Crystal White Rock", price: "$450", unit: "per yard", description: "Brilliant white decorative stone for elegant gardens, planters, and accent areas.", image: crystalWhiteImg },
  { name: "4–8 Inch River Rock", price: "$200", unit: "per yard", description: "Large natural river rock for shorelines, retaining features, and bold landscape design.", image: riverRockImg },
  // Recycled
  { name: "Recycled Asphalt", price: "$60", unit: "per yard", description: "Eco-friendly recycled asphalt for driveways, paths, and temporary surfaces.", image: recycledAsphaltImg },
  { name: "Recycled Concrete", price: "$60", unit: "per yard", description: "Crushed recycled concrete for affordable base, fill, and drainage projects.", image: recycledConcreteImg },
];

const ITEMS_PER_PAGE = 9;

const BulkMaterials = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(materials.length / ITEMS_PER_PAGE);
  const paged = materials.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Bulk Landscape Materials | Soil, Mulch, Rock & Gravel Delivery Calgary</title>
        <meta name="description" content="Order bulk landscape materials for delivery in Calgary, Okotoks & the Foothills. Soil, mulch, gravel, rundle rock, limestone, sand & more. Prices from $0.55/sqft. Call for delivery quote." />
        <link rel="canonical" href="https://calgarylandscapesupplies.ca/bulk-materials" />
        <meta property="og:title" content="Bulk Landscape Materials | Calgary Landscape Supplies" />
        <meta property="og:description" content="Premium aggregates, soils, mulches & rock delivered throughout Calgary, Okotoks & the Foothills. 26+ products available by the yard." />
        <meta property="og:url" content="https://calgarylandscapesupplies.ca/bulk-materials" />
        <meta property="og:type" content="website" />
      </Helmet>
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
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg px-4 py-2.5">
                <span className="text-accent font-display text-sm uppercase tracking-wider">Delivery Only</span>
                <span className="text-primary-foreground/60 text-sm">— No pickups available</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg px-4 py-2.5">
                <span className="text-accent font-display text-sm uppercase tracking-wider">Delivery Fee</span>
                <span className="text-primary-foreground/60 text-sm">— Quoted upon contact</span>
              </div>
            </div>
          </div>
        </section>

        {/* Inventory Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paged.map((m) => (
                <div
                  key={m.name}
                  className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-card/80 to-transparent" />
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {m.name}
                      </h3>
                      <span className="shrink-0 text-sm font-display font-bold text-accent">
                        {m.price}
                        <span className="text-xs font-normal text-muted-foreground ml-1">{m.unit}</span>
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {m.description}
                    </p>
                    <a
                      href="#quote"
                      className="text-sm font-display uppercase tracking-wider text-accent hover:text-accent/80 transition-colors"
                    >
                      Get Quote →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-md font-display text-sm uppercase tracking-wider transition-colors disabled:opacity-30 disabled:cursor-not-allowed bg-muted text-muted-foreground hover:text-foreground"
                >
                  <ChevronLeft className="h-4 w-4" /> Prev
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`w-10 h-10 rounded-md font-display text-sm transition-colors ${
                      p === page
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {p}
                  </button>
                ))}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-md font-display text-sm uppercase tracking-wider transition-colors disabled:opacity-30 disabled:cursor-not-allowed bg-muted text-muted-foreground hover:text-foreground"
                >
                  Next <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </section>

        <QuoteForm />
        <MaterialCalculatorDrawer />
      </main>
      <Footer />
    </div>
  );
};

export default BulkMaterials;
