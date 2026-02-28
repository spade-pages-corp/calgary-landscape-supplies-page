import { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#gallery", label: "Our Work" },
  { href: "/#quote", label: "Get a Quote" },
  { href: "/bulk-materials", label: "Materials" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isBulkMaterials = location.pathname === "/bulk-materials";
  const phoneNumber = isBulkMaterials ? "5878971602" : "4038185857";
  const phoneDisplay = isBulkMaterials ? "(587) 897-1602" : "(403) 818-5857";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-sm">
      <div className="container relative flex items-center py-3">
        {/* Left: Hamburger (mobile/tablet) + Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-primary-foreground/80 hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <a href="/#" className="flex items-center gap-3">
            <img src={logo} alt="Calgary Landscape Supplies" className="h-14 w-auto" />
          </a>
        </div>

        {/* Center: Nav Links (desktop) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 font-display text-sm uppercase tracking-wider text-primary-foreground/80">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-accent transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Phone Button */}
        <div className="ml-auto">
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-md font-display text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">{phoneDisplay}</span>
          </a>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-primary-foreground/10 bg-foreground/95 backdrop-blur-sm">
          <div className="container flex flex-col gap-4 py-4 font-display text-sm uppercase tracking-wider text-primary-foreground/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="hover:text-accent transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
