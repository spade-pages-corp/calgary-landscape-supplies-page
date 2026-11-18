import { useState } from "react";
import { toast } from "sonner";
import { BotCheck, useJaamForm } from "@jaam-technology/forms/react";

interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  postal_code: string;
  service: string;
  message: string;
}

const emptyQuote: QuoteRequest = {
  name: "",
  email: "",
  phone: "",
  postal_code: "",
  service: "",
  message: "",
};

const serviceOptions = [
  "Landscaping",
  "Hardscape",
  "Excavation",
  "Snow Removal",
  "Spring cleanups",
  "Bulk landscape materials",
  "Other",
];

const QuoteForm = () => {
  const [form, setForm] = useState<QuoteRequest>(emptyQuote);
  const jaamForm = useJaamForm({
    formId: import.meta.env.VITE_JAAM_FORM_ID,
    siteKey: import.meta.env.VITE_JAAM_TURNSTILE_SITE_KEY,
  });

  const update = (field: keyof QuoteRequest, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await jaamForm.submit(form);
    if ("error" in result) {
      toast.error(result.error.message);
      return;
    }
    toast.success("Quote request sent! We'll be in touch shortly.");
    setForm(emptyQuote);
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
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className={inputClasses}
              />
              <input
                required
                type="email"
                placeholder="Email Address *"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className={inputClasses}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className={inputClasses}
              />
              <input
                type="text"
                placeholder="Postal / Zip Code"
                value={form.postal_code}
                onChange={(e) => update("postal_code", e.target.value)}
                className={inputClasses}
              />
            </div>
            <select
              required
              value={form.service}
              onChange={(e) => update("service", e.target.value)}
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
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className={inputClasses + " resize-none"}
            />
            <BotCheck form={jaamForm} />
            <button
              type="submit"
              disabled={jaamForm.isSubmitting}
              className="w-full bg-primary text-primary-foreground py-4 rounded-md font-display text-sm uppercase tracking-wider hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {jaamForm.isSubmitting ? "Sending..." : "Submit Quote Request"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
