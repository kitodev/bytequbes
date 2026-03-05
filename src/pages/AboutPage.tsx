import { motion } from "framer-motion";
import { Users, Target, Award, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";
import aboutTeam from "@/assets/about-team.jpg";

const AboutPage = () => {
  const { t } = useTranslation();

  const stats = [
    { value: "50+", label: t("about.stats.projects") },
    { value: "30+", label: t("about.stats.clients") },
    { value: "5+", label: t("about.stats.experience") },
    { value: "99%", label: t("about.stats.satisfaction") },
  ];

  const values = [
    { icon: Target, title: t("about.values_list.mission.title"), description: t("about.values_list.mission.description") },
    { icon: Users, title: t("about.values_list.collaborative.title"), description: t("about.values_list.collaborative.description") },
    { icon: Award, title: t("about.values_list.quality.title"), description: t("about.values_list.quality.description") },
    { icon: TrendingUp, title: t("about.values_list.growth.title"), description: t("about.values_list.growth.description") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[320px] flex items-center justify-center overflow-hidden bg-hero">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-hero/40 to-hero/90" />
        <div className="relative z-10 text-center px-4 py-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold font-display text-hero-foreground mb-4"
          >
            {t("about.title")}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-sm text-hero-foreground/70"
          >
            <a href="/" className="hover:text-hero-foreground transition-colors">{t("nav.home")}</a>
            <span className="text-hero-foreground/40">›</span>
            <span className="text-hero-foreground/90 font-medium">{t("about.title")}</span>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-mono text-primary mb-2 uppercase tracking-widest">{t("about.subtitle")}</p>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6">
                {t("about.hero_title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("about.story_p1")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.story_p2")}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden glow-shadow"
            >
              <img src={aboutTeam} alt="ByteQubes team collaborating" className="w-full h-auto object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold font-display text-gradient mb-1">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-mono text-primary mb-2 uppercase tracking-widest">{t("about.values_title")}</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">{t("about.values_subtitle")}</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border text-center hover:glow-shadow transition-shadow duration-500"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-base font-bold font-display text-card-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
