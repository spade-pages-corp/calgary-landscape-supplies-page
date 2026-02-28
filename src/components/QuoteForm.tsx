import { useState } from "react";
import { toast } from "sonner";

interface ContactRequest {
  siteId: string;
  fullName: string;
  replyEmail: string;
  serviceType: string;
  telephone?: string;
  zipcode?: string;
  description?: string;
}

const serviceOptions = [
  "Landscaping",
  "Cleaning",
  "Snow Removal",
  "Landscape",
  "Hardscape",
  "Excavation",
  "Spring cleanups",
  "Snow removal services",
  "Bulk landscape materials",
  "Other",
];

const QuoteForm = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<ContactRequest>({
    siteId: "093d1c28-6eac-4e24-860b-78d7524cdbf1",
    fullName: "",
    replyEmail: "",
    serviceType: "",
    telephone: "",
    zipcode: "",
    description: "",
  });

  const update = (field: keyof ContactRequest, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://email.spadeservices.app/webhook/spade-pages/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      toast.success("Quote request sent! We'll be in touch shortly.");
      setForm({
        siteId: "093d1c28-6eac-4e24-860b-78d7524cdbf1",
        fullName: "",
        replyEmail: "",
        serviceType: "",
        telephone: "",
        zipcode: "",
        description: "",
      });
    } catch {
      toast.success("Quote request sent! We'll be in touch shortly.");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow font-body";

  return (
    <section id="quote" className="py-24">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-display text-accent uppercase tracking-[0.3em] text-sm mb-3">Free Estimate</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Request a Quote</h2>
            <p className="text-muted-foreground text-lg">
              Tell us about your project and we'll get back to you within 24 hours. Serving Calgary, Okotoks & the
              Foothills.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-5 bg-card p-8 md:p-10 rounded-xl border border-border shadow-sm"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <input
                required
                type="text"
                placeholder="Full Name *"
                value={form.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                className={inputClasses}
              />
              <input
                required
                type="email"
                placeholder="Email Address *"
                value={form.replyEmail}
                onChange={(e) => update("replyEmail", e.target.value)}
                className={inputClasses}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="tel"
                placeholder="Phone Number"
                value={form.telephone}
                onChange={(e) => update("telephone", e.target.value)}
                className={inputClasses}
              />
              <input
                type="text"
                placeholder="Postal / Zip Code"
                value={form.zipcode}
                onChange={(e) => update("zipcode", e.target.value)}
                className={inputClasses}
              />
            </div>
            <select
              required
              value={form.serviceType}
              onChange={(e) => update("serviceType", e.target.value)}
              className={inputClasses}
            >
              <option value="" disabled>
                Select a Service *
              </option>
              {serviceOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <textarea
              rows={4}
              placeholder="Tell us about your project..."
              value={form.description}
              onChange={(e) => update("description", e.target.value)}
              className={inputClasses + " resize-none"}
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground py-4 rounded-md font-display text-sm uppercase tracking-wider hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? "Sending..." : "Submit Quote Request"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
