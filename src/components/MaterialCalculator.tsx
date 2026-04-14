import { useState } from "react";
import { Calculator } from "lucide-react";

type Unit = "feet" | "meters";

interface MaterialCalculatorProps {
  inline?: boolean;
}

const MaterialCalculator = ({ inline = false }: MaterialCalculatorProps) => {
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

  const content = (
    <>
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
            className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
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
            className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
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
            className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
          />
        </div>
      </div>

      {/* Results */}
      {hasResult && (
        <div className="border-t border-border pt-6 grid sm:grid-cols-2 gap-4">
          <div className="bg-secondary/50 rounded-lg p-4 text-center">
            <p className="text-xs font-display uppercase tracking-wider text-muted-foreground mb-1">Area</p>
            <p className="text-2xl font-bold text-foreground">
              {area.toFixed(1)} <span className="text-sm font-normal text-muted-foreground">{areaLabel}</span>
            </p>
          </div>
          <div className="bg-accent/10 rounded-lg p-4 text-center">
            <p className="text-xs font-display uppercase tracking-wider text-muted-foreground mb-1">Volume Needed</p>
            {unit === "feet" ? (
              <p className="text-2xl font-bold text-foreground">
                {volumeYards!.toFixed(2)} <span className="text-sm font-normal text-muted-foreground">cubic yards</span>
              </p>
            ) : (
              <p className="text-2xl font-bold text-foreground">
                {volumeRaw.toFixed(2)} <span className="text-sm font-normal text-muted-foreground">m³</span>
              </p>
            )}
          </div>
        </div>
      )}

      {!hasResult && (
        <div className="border-t border-border pt-6 flex items-center justify-center gap-2 text-muted-foreground/50">
          <Calculator className="h-5 w-5" />
          <span className="text-sm">Enter dimensions above to see results</span>
        </div>
      )}
    </>
  );

  if (inline) return <div>{content}</div>;

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container max-w-2xl">
        <div className="text-center mb-10">
          <p className="font-display text-accent uppercase tracking-[0.3em] text-sm mb-3">Planning Tool</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">How Much Do You Need?</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Enter your project dimensions to estimate the area and volume of material required.
          </p>
        </div>
        <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">{content}</div>
      </div>
    </section>
  );
};

export default MaterialCalculator;
