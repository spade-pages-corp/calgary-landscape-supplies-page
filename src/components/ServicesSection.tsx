import { Shovel, Snowflake, TreePine, Hammer, Truck, Sparkles } from "lucide-react";

const services = [
  {
    icon: TreePine,
    title: "Landscaping",
    description: "Complete landscape design, installation, and property grading for residential and commercial properties.",
  },
  {
    icon: Hammer,
    title: "Hardscaping",
    description: "Walkways, retaining walls, driveways, patios, and decorative stone features built to last.",
  },
  {
    icon: Snowflake,
    title: "Snow Removal",
    description: "Reliable commercial and residential snow clearing services throughout the winter season.",
  },
  {
    icon: Shovel,
    title: "Excavation",
    description: "Professional excavation and grading services for any size project.",
  },
  {
    icon: Sparkles,
    title: "Spring Cleanups",
    description: "Get your property looking fresh after winter with our thorough spring cleanup services.",
  },
  {
    icon: Truck,
    title: "Bulk Materials",
    description: "Quality bulk landscape materials including soil, gravel, mulch, and decorative rock.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 section-alt">
      <div className="container">
        <div className="text-center mb-16">
          <p className="font-display text-accent uppercase tracking-[0.3em] text-sm mb-3">What We Do</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Our Services</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card p-8 rounded-lg border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-14 w-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
