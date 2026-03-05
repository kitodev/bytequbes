import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const ProjectsSection = () => {
  const { t } = useTranslation();

  const projects = [
    {
      image: project1,
      title: t("projects.items.shopflow.title"),
      tags: ["React", "Node.js", "PostgreSQL"],
      description: t("projects.items.shopflow.description"),
    },
    {
      image: project2,
      title: t("projects.items.estatehub.title"),
      tags: ["Next.js", "TypeScript", "Supabase"],
      description: t("projects.items.estatehub.description"),
    },
    {
      image: project3,
      title: t("projects.items.datapulse.title"),
      tags: ["React", "Python", "AWS"],
      description: t("projects.items.datapulse.description"),
    },
    {
      image: project4,
      title: t("projects.items.feastapp.title"),
      tags: ["React Native", "Firebase", "Stripe"],
      description: t("projects.items.feastapp.description"),
    },
    {
      image: project5,
      title: t("projects.items.fittrack.title"),
      tags: ["Vue.js", "Express", "MongoDB"],
      description: t("projects.items.fittrack.description"),
    },
    {
      image: project6,
      title: t("projects.items.newswire.title"),
      tags: ["Next.js", "GraphQL", "Redis"],
      description: t("projects.items.newswire.description"),
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
