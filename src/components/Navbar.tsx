import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.projects"), href: "/projects" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "hu" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[hsl(var(--nav-bg))] border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold font-display tracking-tight text-foreground">
          byte<span className="text-gradient">qubes</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors ${location.pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {item.label}
            </Link>
          ))}

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            title={i18n.language === "en" ? "Magyar" : "English"}
          >
            <Globe size={18} />
            <span className="uppercase">{i18n.language}</span>
          </button>

          <Link
            to="/contact"
            className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            {t("nav.get_in_touch")}
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleLanguage}
            className="text-foreground p-2"
          >
            <Globe size={20} />
          </button>
          <button onClick={() => setOpen(!open)} className="text-foreground p-2">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-b border-border px-6 pb-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className={`block text-sm font-medium ${location.pathname === item.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold text-center"
          >
            {t("nav.get_in_touch")}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
