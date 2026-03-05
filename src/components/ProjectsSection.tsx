import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/projects";

const ProjectsSection = () => {
  const { t } = useTranslation();

  const projects = projectsData.map((project) => ({
    ...project,
    title: t(project.titleKey),
    description: t(project.descriptionKey),
  }));

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
