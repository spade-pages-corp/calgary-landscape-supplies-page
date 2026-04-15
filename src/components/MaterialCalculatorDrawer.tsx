import { useState } from "react";
import { Calculator, X } from "lucide-react";

type Unit = "feet" | "meters";

const MaterialCalculatorDrawer = () => {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [depth, setDepth] = useState("");
  const [unit, setUnit] = useState<Unit>("feet");

  const w = parseFloat(width) || 0;
  const l = parseFloat(length) || 0;
  const d = parseFloat(depth) || 0;

  const area = w * l;
  const depthInUnit = unit === "feet" ? d / 12 : d / 100;
  const volumeRaw = w * l * depthInUnit;
  const volumeYards = unit === "feet" ? volumeRaw / 27 : null;

  const hasResult = w > 0 && l > 0 && d > 0;
  const depthLabel = unit === "feet" ? "Depth (inches)" : "Depth (cm)";
  const areaLabel = unit === "feet" ? "sq ft" : "m²";

  const inputClasses =
    "w-full rounded-md border border-border bg-background px-3 py-2.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50";

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-accent text-accent-foreground pl-5 pr-6 py-3.5 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all font-display text-sm uppercase tracking-wider sm:animate-pulse hover:animate-none ring-2 ring-accent/30 ring-offset-2 ring-offset-background"
      >
        <Calculator className="h-5 w-5" />
        <span>Calculator</span>
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide-up drawer */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-300 ease-out ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="bg-card border-t border-border rounded-t-2xl shadow-2xl max-h-[85vh] overflow-y-auto">
          {/* Handle + close */}
          <div className="sticky top-0 bg-card rounded-t-2xl pt-3 pb-2 px-6 flex items-center justify-between border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-1 rounded-full bg-muted-foreground/30 mx-auto" />
            </div>
            <h3 className="font-display text-sm uppercase tracking-wider text-foreground">Material Calculator</h3>
            <button
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-6 md:p-8 max-w-2xl mx-auto">
            <p className="text-muted-foreground text-sm mb-6 text-center">
              Enter your project dimensions to estimate the area and volume of material needed.
            </p>

            {/* Unit toggle */}
            <div className="flex justify-center gap-2 mb-6">
              <button
                onClick={() => setUnit("feet")}
                className={`px-4 py-2 rounded-md font-display text-sm uppercase tracking-wider transition-colors ${
                  unit === "feet"
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                Feet / Inches
              </button>
              <button
                onClick={() => setUnit("meters")}
                className={`px-4 py-2 rounded-md font-display text-sm uppercase tracking-wider transition-colors ${
                  unit === "meters"
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                Meters / CM
              </button>
            </div>

            {/* Inputs */}
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-display uppercase tracking-wider text-muted-foreground mb-1.5">
                  Width ({unit})
                </label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  placeholder="0"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="block text-sm font-display uppercase tracking-wider text-muted-foreground mb-1.5">
                  Length ({unit})
                </label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  placeholder="0"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="block text-sm font-display uppercase tracking-wider text-muted-foreground mb-1.5">
                  {depthLabel}
                </label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={depth}
                  onChange={(e) => setDepth(e.target.value)}
                  placeholder="0"
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Results */}
            {hasResult ? (
              <div className="border-t border-border pt-6 grid sm:grid-cols-2 gap-4">
                <div className="bg-secondary/50 rounded-lg p-4 text-center">
                  <p className="text-xs font-display uppercase tracking-wider text-muted-foreground mb-1">Area</p>
                  <p className="text-2xl font-bold text-foreground">
                    {area.toFixed(1)}{" "}
                    <span className="text-sm font-normal text-muted-foreground">{areaLabel}</span>
                  </p>
                </div>
                <div className="bg-accent/10 rounded-lg p-4 text-center">
                  <p className="text-xs font-display uppercase tracking-wider text-muted-foreground mb-1">
                    Volume Needed
                  </p>
                  {unit === "feet" ? (
                    <p className="text-2xl font-bold text-foreground">
                      {volumeYards!.toFixed(2)}{" "}
                      <span className="text-sm font-normal text-muted-foreground">cubic yards</span>
                    </p>
                  ) : (
                    <p className="text-2xl font-bold text-foreground">
                      {volumeRaw.toFixed(2)}{" "}
                      <span className="text-sm font-normal text-muted-foreground">m³</span>
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div className="border-t border-border pt-6 flex items-center justify-center gap-2 text-muted-foreground/50">
                <Calculator className="h-5 w-5" />
                <span className="text-sm">Enter dimensions above to see results</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MaterialCalculatorDrawer;
