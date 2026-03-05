import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[420px] flex items-center justify-center overflow-hidden bg-hero">
      <img
        src={heroBg}
        alt="Abstract tech background"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-hero/40 to-hero/90" />
      <div className="relative z-10 text-center px-4 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold font-display text-hero-foreground mb-4"
        >
          {t("projects.title")}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-sm text-hero-foreground/70"
        >
          <a href="/" className="hover:text-hero-foreground transition-colors">{t("nav.home")}</a>
          <span className="text-hero-foreground/40">›</span>
          <span className="text-hero-foreground/90 font-medium">{t("nav.projects")}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
