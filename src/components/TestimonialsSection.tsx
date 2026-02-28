import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "I called for rock this morning. Load was delivered by 10. His advice was excellent. Would recommend. Seems like a great guy.",
    name: "L. Jones",
    location: "Calgary, AB",
  },
  {
    quote:
      "On behalf of Grow Calgary, we thank you for your donation of loam soil. Your donation will contribute greatly to helping Grow Calgary meet its goal of growing fresh, local produce. The harvested produce will be distributed as a donation to our partner food access agencies that feed those in need, including The Leftovers Foundation, Inn From the Cold, and the Calgary Women's Emergency Shelter.",
    name: "Grow Calgary",
    location: "Community Partner",
  },
  {
    quote:
      "Had them do our entire front yard — grading, sod, and a new gravel walkway. The crew showed up on time every day and left the site spotless. Neighbours have been asking who did the work. Couldn't be happier.",
    name: "R. McFarland",
    location: "Okotoks, AB",
  },
  {
    quote:
      "We've used them for snow removal two winters in a row. Reliable, always out early before the roads get bad. They also did a retaining wall for us last summer that still looks perfect.",
    name: "R. Basset",
    location: "Calgary, AB",
  },
  {
    quote:
      "Hired them to fix a drainage issue in our backyard that two other companies couldn't solve. They re-graded the whole area, added rock beds, and it's been dry ever since. Fair price for the amount of work involved.",
    name: "D. Fehr",
    location: "Foothills, AB",
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [cardMinHeight, setCardMinHeight] = useState<number | null>(null);
  const measureRefs = useRef<Array<HTMLDivElement | null>>([]);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - (touchStartY.current ?? 0);
    touchStartX.current = null;
    touchStartY.current = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next();
      else prev();
    }
  }, [next, prev]);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [isPaused, next]);

  const recomputeMinHeight = useCallback(() => {
    // measure tallest slide content
    const heights = measureRefs.current.map((el) => el?.getBoundingClientRect().height ?? 0).filter(Boolean);

    const max = Math.max(0, ...heights);

    // Add a tiny buffer to avoid sub-pixel jitter
    setCardMinHeight(max ? Math.ceil(max) : null);
  }, []);

  useLayoutEffect(() => {
    recomputeMinHeight();

    // Recompute on resize (mobile/desktop changes, font loading, etc.)
    const onResize = () => recomputeMinHeight();
    window.addEventListener("resize", onResize);

    // Optional: more robust if fonts/images affect layout
    const ro = new ResizeObserver(() => recomputeMinHeight());
    measureRefs.current.forEach((el) => el && ro.observe(el));

    return () => {
      window.removeEventListener("resize", onResize);
      ro.disconnect();
    };
  }, [recomputeMinHeight]);

  return (
    <section className="py-24 section-alt">
      <div className="container">
        <div className="text-center mb-16">
          <p className="font-display text-accent uppercase tracking-[0.3em] text-sm mb-3">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">What People Say</h2>
        </div>

        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Card */}
          <div
            className="bg-card rounded-lg p-8 md:p-12 shadow-sm flex flex-col justify-center touch-pan-y"
            style={cardMinHeight ? { minHeight: `${cardMinHeight}px` } : undefined}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Quote className="w-10 h-10 text-accent/30 mb-6 shrink-0 relative z-10" />

            <div className="relative">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`transition-all duration-700 ease-in-out ${
                    i === active
                      ? "opacity-100 translate-y-0 relative"
                      : "opacity-0 translate-y-2 absolute inset-0 pointer-events-none"
                  }`}
                >
                  <blockquote className="text-foreground/80 text-lg md:text-xl leading-relaxed mb-8 font-light italic">
                    "{t.quote}"
                  </blockquote>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-[2px] bg-accent" />
                    <div>
                      <p className="font-display text-sm uppercase tracking-wider font-semibold">{t.name}</p>
                      <p className="text-muted-foreground text-sm">{t.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hidden measuring DOM (doesn't affect layout) */}
          <div className="absolute -left-[9999px] top-0 w-full opacity-0 pointer-events-none">
            <div className="bg-card rounded-lg p-8 md:p-12 shadow-sm">
              <Quote className="w-10 h-10 mb-6" />
              {testimonials.map((t, i) => (
                <div
                  key={`measure-${i}`}
                  ref={(el) => {
                    measureRefs.current[i] = el;
                  }}
                >
                  <blockquote className="text-lg md:text-xl leading-relaxed mb-8 font-light italic">
                    "{t.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-[2px]" />
                    <div>
                      <p className="text-sm uppercase tracking-wider font-semibold">{t.name}</p>
                      <p className="text-sm">{t.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === active ? "bg-accent w-8" : "bg-border hover:bg-muted-foreground/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
