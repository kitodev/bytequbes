import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { projectsData } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import NotFound from "./NotFound";

const ProjectDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();

    const projectConfig = projectsData.find((p) => p.id === id);

    if (!projectConfig) {
        return <NotFound />;
    }

    const project = {
        ...projectConfig,
        title: t(projectConfig.titleKey),
        description: t(projectConfig.descriptionKey),
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="py-20 md:py-28 container">
                <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-primary transition-colors"
                >
                    <ArrowLeft size={20} />
                    {t("navbar.projects") || "Back"}
                </Link>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[300px] md:h-[600px] object-cover rounded-xl mb-12 shadow-lg"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
                        {project.title}
                    </h1>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-4 py-2 rounded-full text-sm font-mono font-medium bg-primary/10 text-primary"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                        <p className="text-xl">
                            {project.description}
                        </p>
                        {/* Add more placeholder content to make the page look full */}
                        <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Project Overview</h2>
                        <p>
                            This is a demonstration project detail page. The project "{project.title}" features modern web architecture and utilizes {project.tags.join(", ")} to ensure scalable, maintainable, and highly performant applications.
                        </p>
                        <p>
                            By focusing on user-centered design, robust backend systems, and smooth UI interactions, this application represents the next generation of solutions for our clients.
                        </p>
                    </div>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
};

export default ProjectDetailsPage;
