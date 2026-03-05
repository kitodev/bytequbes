import { motion } from "framer-motion";
import { ArrowRight, Code2, Layers, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import heroBg from "@/assets/hero-bg.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HomePage = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Code2,
      title: t("home.features.clean_code.title"),
      description: t("home.features.clean_code.description"),
    },
    {
      icon: Layers,
      title: t("home.features.scalable_architecture.title"),
      description: t("home.features.scalable_architecture.description"),
    },
    {
      icon: Zap,
      title: t("home.features.fast_delivery.title"),
      description: t("home.features.fast_delivery.description"),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-hero">
        <img
          src={heroBg}
          alt="Abstract tech background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-hero/70 via-hero/80 to-hero/95" />
        <div className="relative z-10 container py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-sm font-mono text-primary mb-4 tracking-widest uppercase">
              {t("home.studio")}
            </p>
            <h1 className="text-5xl md:text-7xl font-bold font-display text-hero-foreground mb-6 leading-tight">
              {t("home.build")}
              <br />
              <span className="text-gradient">{t("home.digital_products")}</span>
            </h1>
            <p className="text-lg text-hero-foreground/70 mb-8 max-w-lg leading-relaxed">
              {t("home.description")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                {t("home.view_projects")} <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-hero-foreground/20 text-hero-foreground font-semibold hover:bg-hero-foreground/10 transition-colors"
              >
                {t("home.get_in_touch")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-mono text-primary mb-2 uppercase tracking-widest">{t("home.why_bytequbes")}</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              {t("home.what_sets_us_apart")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="p-8 rounded-xl bg-card border border-border hover:glow-shadow transition-shadow duration-500 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <f.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold font-display text-card-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
              {t("home.cta.title")}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              {t("home.cta.description")}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              {t("home.cta.button")} <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
