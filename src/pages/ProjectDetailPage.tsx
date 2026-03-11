import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  User,
  Tag,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projectsData } from "@/data/projectsData";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  const project = projectsData.find((p) => p.slug === id);

  // Redirect to /projects if slug not found
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const currentIndex = projectsData.indexOf(project);
  const prevProject = projectsData[currentIndex - 1] ?? null;
  const nextProject = projectsData[currentIndex + 1] ?? null;

  const title = t(project.titleKey);
  const description = t(project.descriptionKey);
  const challenge = t(project.challengeKey);
  const solution = t(project.solutionKey);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-hero">
        {/* Full-bleed project image */}
        <img
          src={project.image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-hero via-hero/70 to-hero/20" />

        <div className="relative z-10 container pb-16 pt-32">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-hero-foreground/50 mb-6"
          >
            <Link to="/" className="hover:text-hero-foreground transition-colors">
              {t("nav.home")}
            </Link>
            <ChevronRight size={14} />
            <Link to="/projects" className="hover:text-hero-foreground transition-colors">
              {t("nav.projects")}
            </Link>
            <ChevronRight size={14} />
            <span className="text-hero-foreground/90 font-medium">{title}</span>
          </motion.div>

          {/* Category + Featured badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-mono font-semibold uppercase tracking-wider">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-3 py-1 rounded-full bg-accent/80 backdrop-blur-sm text-accent-foreground text-xs font-mono font-semibold uppercase tracking-wider">
                {t("projects.featured")}
              </span>
            )}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl md:text-7xl font-bold font-display text-hero-foreground mb-4 leading-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-lg text-hero-foreground/70 max-w-2xl"
          >
            {description}
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <ExternalLink size={15} /> {t("projects.live_demo")}
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-hero-foreground/10 border border-hero-foreground/20 text-hero-foreground text-sm font-semibold hover:bg-hero-foreground/20 transition-colors backdrop-blur-sm"
              >
                <Github size={15} /> {t("projects.source")}
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── Meta bar ── */}
      <section className="bg-card border-b border-border py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: User, label: "Client", value: project.client },
              { icon: Calendar, label: "Year", value: project.year },
              { icon: Tag, label: "Category", value: project.category },
              { icon: Calendar, label: "Duration", value: project.duration },
            ].map((meta, i) => (
              <motion.div
                key={meta.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <meta.icon size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-0.5">
                    {meta.label}
                  </p>
                  <p className="text-sm font-semibold text-card-foreground">{meta.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech stack ── */}
      <section className="py-6 bg-muted border-b border-border">
        <div className="container flex flex-wrap items-center gap-3">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest mr-2">Tech Stack</span>
          {project.tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="px-4 py-1.5 rounded-full text-sm font-mono font-medium bg-card border border-border text-card-foreground"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Left — Challenge & Solution */}
            <div className="lg:col-span-2 space-y-16">
              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">
                  The Challenge
                </p>
                <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-5">
                  What problem did we solve?
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {challenge}
                </p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">
                  Our Solution
                </p>
                <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-5">
                  How we built it
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {solution}
                </p>
              </motion.div>

              {/* Project image (repeated, styled differently) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl overflow-hidden border border-border glow-shadow"
              >
                <img
                  src={project.image}
                  alt={`${title} screenshot`}
                  className="w-full object-cover"
                />
              </motion.div>
            </div>

            {/* Right — Highlights sidebar */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 rounded-2xl bg-card border border-border sticky top-24"
              >
                <p className="text-sm font-mono text-primary uppercase tracking-widest mb-4">
                  Highlights
                </p>
                <h3 className="text-lg font-bold font-display text-card-foreground mb-6">
                  Key Deliverables
                </h3>
                <ul className="space-y-4">
                  {project.highlights.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-card-foreground leading-snug">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Role */}
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">Our Role</p>
                  <p className="text-sm font-semibold text-card-foreground">{project.role}</p>
                </div>

                {/* CTA */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink size={14} /> {t("projects.live_demo")}
                  </a>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Prev / Next navigation ── */}
      <section className="py-12 bg-muted border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-stretch gap-4">
            {prevProject ? (
              <Link
                to={`/projects/${prevProject.slug}`}
                className="flex-1 group flex items-center gap-4 p-6 rounded-xl bg-card border border-border hover:glow-shadow hover:border-primary/30 transition-all duration-300"
              >
                <ArrowLeft size={20} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">Previous</p>
                  <p className="text-base font-bold font-display text-card-foreground group-hover:text-primary transition-colors">
                    {t(prevProject.titleKey)}
                  </p>
                </div>
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            <Link
              to="/projects"
              className="flex items-center justify-center px-8 py-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:glow-shadow transition-all duration-300 text-sm font-semibold text-muted-foreground hover:text-foreground whitespace-nowrap"
            >
              {t("nav.projects")}
            </Link>

            {nextProject ? (
              <Link
                to={`/projects/${nextProject.slug}`}
                className="flex-1 group flex items-center justify-end gap-4 p-6 rounded-xl bg-card border border-border hover:glow-shadow hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-right">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">Next</p>
                  <p className="text-base font-bold font-display text-card-foreground group-hover:text-primary transition-colors">
                    {t(nextProject.titleKey)}
                  </p>
                </div>
                <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
