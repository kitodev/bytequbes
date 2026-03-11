import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";
import { projectsData, type Category } from "@/data/projectsData";

const ProjectsPage = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const categories: Category[] = ["All", "E-commerce", "SaaS", "Mobile", "Platform"];

  const filtered =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  const stats = [
    { value: "50+", label: t("about.stats.projects") },
    { value: "30+", label: t("about.stats.clients") },
    { value: "5+", label: t("about.stats.experience") },
    { value: "98%", label: t("about.stats.satisfaction") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-hero">
        <img
          src={heroBg}
          alt="Abstract tech background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-hero/50 via-hero/75 to-hero/95" />

        {/* Floating grid lines */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 text-center px-4 py-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-mono text-primary uppercase tracking-widest mb-4"
          >
            {t("nav.projects")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-display text-hero-foreground mb-6 leading-tight"
          >
            {t("projects.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg text-hero-foreground/70 max-w-xl mx-auto mb-8"
          >
            {t("projects.hero_subtitle")}
          </motion.p>

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-2 text-sm text-hero-foreground/50"
          >
            <Link to="/" className="hover:text-hero-foreground transition-colors">
              {t("nav.home")}
            </Link>
            <span className="text-hero-foreground/30">›</span>
            <span className="text-hero-foreground/90 font-medium">{t("nav.projects")}</span>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ── Stats Bar ── */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold font-display text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-mono">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-sm font-mono text-primary mb-2 uppercase tracking-widest">
              {t("nav.projects")}
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground max-w-sm">
                {t("projects.grid_title")}
              </h2>

              {/* Filter pills */}
              <div className="flex items-center gap-1 flex-wrap">
                <Filter size={14} className="text-muted-foreground mr-1 shrink-0" />
                {categories.map((cat) => (
                  <button
                    key={cat}
                    id={`filter-${cat.toLowerCase()}`}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 border ${
                      activeFilter === cat
                        ? "bg-primary text-primary-foreground border-primary shadow-sm"
                        : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Cards */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:glow-shadow transition-shadow duration-500 flex flex-col"
                >
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-[10px] font-mono font-semibold uppercase tracking-wider">
                      {t("projects.featured")}
                    </div>
                  )}

                  {/* Category badge */}
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-hero/80 backdrop-blur-sm text-hero-foreground/80 text-[10px] font-mono uppercase tracking-wider">
                    {project.category}
                  </div>

                  {/* Image with overlay */}
                  <Link to={`/projects/${project.slug}`} className="block overflow-hidden aspect-[16/9] relative">
                    <img
                      src={project.image}
                      alt={t(project.titleKey)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    {/* Hover overlay buttons */}
                    <div className="absolute inset-0 bg-hero/0 group-hover:bg-hero/55 transition-all duration-500 flex items-center justify-center gap-3">
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold">
                        <ArrowRight size={14} /> {t("projects.view_details")}
                      </span>
                      {project.liveUrl && (
                        <span
                          onClick={(e) => { e.preventDefault(); window.open(project.liveUrl, "_blank"); }}
                          className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 delay-75 flex items-center gap-2 px-4 py-2 rounded-lg bg-card/90 text-foreground text-sm font-semibold border border-border cursor-pointer"
                        >
                          <ExternalLink size={14} /> {t("projects.live_demo")}
                        </span>
                      )}
                      {project.githubUrl && !project.liveUrl && (
                        <span
                          onClick={(e) => { e.preventDefault(); window.open(project.githubUrl, "_blank"); }}
                          className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 delay-75 flex items-center gap-2 px-4 py-2 rounded-lg bg-card/90 text-foreground text-sm font-semibold border border-border cursor-pointer"
                        >
                          <Github size={14} /> {t("projects.source")}
                        </span>
                      )}
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-[10px] font-mono font-medium bg-tag text-tag-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title + year */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Link to={`/projects/${project.slug}`}>
                        <h3 className="text-lg font-bold font-display text-card-foreground group-hover:text-primary transition-colors leading-snug">
                          {t(project.titleKey)}
                        </h3>
                      </Link>
                      <span className="text-xs font-mono text-muted-foreground shrink-0 mt-1">
                        {project.year}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                      {t(project.descriptionKey)}
                    </p>

                    {/* CTA */}
                    <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                      <span className="text-xs font-mono text-muted-foreground">
                        {project.category}
                      </span>
                      <Link
                        to={`/projects/${project.slug}`}
                        className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:gap-2.5 transition-all duration-200"
                        aria-label={`${t("projects.view_details")} ${t(project.titleKey)}`}
                      >
                        {t("projects.view_details")} <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24 text-muted-foreground"
            >
              <p className="text-4xl mb-4">🔍</p>
              <p className="text-lg font-display">{t("projects.empty")}</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── Technologies we use ── */}
      <section className="py-16 bg-muted border-y border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p className="text-sm font-mono text-primary uppercase tracking-widest mb-2">
              {t("projects.stack_label")}
            </p>
            <h2 className="text-2xl font-bold font-display text-foreground">
              {t("projects.stack_title")}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL",
              "Supabase", "AWS", "Python", "GraphQL", "Redis",
              "React Native", "Firebase", "Docker", "Tailwind CSS", "Prisma",
            ].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="px-4 py-2 rounded-full text-sm font-mono font-medium bg-card border border-border text-card-foreground hover:border-primary/60 hover:text-primary transition-colors duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-[600px] h-[300px] rounded-full blur-[120px] opacity-10"
            style={{ background: "hsl(var(--primary))" }}
          />
        </div>

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-mono text-primary uppercase tracking-widest mb-4">
              {t("projects.collaborate")}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6 leading-tight">
              {t("home.cta.title")}
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md mx-auto text-lg">
              {t("home.cta.description")}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                id="cta-contact-link"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm"
              >
                {t("home.cta.button")} <ArrowRight size={16} />
              </Link>
              <Link
                to="/about"
                id="cta-about-link"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border text-foreground font-semibold hover:bg-muted transition-colors text-sm"
              >
                {t("projects.about_us")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
