import snowRemoval from "@/assets/gallery/snow-removal.webp";
import pondLandscape from "@/assets/gallery/pond-landscape.webp";
import sodInstall from "@/assets/gallery/sod-install.webp";
import gravelPath from "@/assets/gallery/gravel-path.webp";
import frontYard from "@/assets/gallery/front-yard.webp";
import sideYard from "@/assets/gallery/side-yard.webp";
import walkway from "@/assets/gallery/walkway.webp";
import rockDetail from "@/assets/gallery/rock-detail.webp";
import backYard from "@/assets/gallery/backyard-lawn.webp";

const images = [
  { src: pondLandscape, alt: "Backyard pond and landscaping", label: "Backyard Landscaping" },
  { src: rockDetail, alt: "Rock bed detail", label: "Rock Features" },
  { src: sodInstall, alt: "Sod installation", label: "Sod Installation" },
  { src: snowRemoval, alt: "Snow removal service", label: "Snow Removal" },
  { src: gravelPath, alt: "Gravel pathway", label: "Gravel Pathways" },
  { src: frontYard, alt: "Front yard landscaping", label: "Landscaping" },
  { src: walkway, alt: "Walkway installation", label: "Walkways" },
  { src: sideYard, alt: "Side yard work", label: "Side Yards" },
  { src: backYard, alt: "Back yard landscaping", label: "Sod Installation" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <p className="font-display text-accent uppercase tracking-[0.3em] text-sm mb-3">Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Our Work</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-lg ${i === 0 ? "col-span-2 row-span-2" : ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
                <span className="font-display text-sm uppercase tracking-wider text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
