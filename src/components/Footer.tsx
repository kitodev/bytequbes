import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-footer text-footer-foreground py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link to="/" className="text-xl font-bold font-display text-hero-foreground mb-4 inline-block">
              byte<span className="text-gradient">qubes</span>
            </Link>
            <p className="text-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-hero-foreground mb-4 uppercase tracking-wider">{t("footer.links")}</h4>
            <div className="space-y-2">
              {[
                { label: t("nav.home"), to: "/" },
                { label: t("nav.projects"), to: "/projects" },
                { label: t("nav.about"), to: "/about" },
                { label: t("nav.contact"), to: "/contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm hover:text-hero-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-hero-foreground mb-4 uppercase tracking-wider">{t("nav.contact")}</h4>
            <div className="space-y-3">
              <a href="mailto:info@bytequbes.com" className="flex items-center gap-2 text-sm hover:text-hero-foreground transition-colors">
                <Mail size={16} />
                info@bytequbes.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-sm hover:text-hero-foreground transition-colors">
                <Phone size={16} />
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-hero-foreground/10 text-center text-xs text-footer-foreground/50">
          © {new Date().getFullYear()} ByteQubes. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
