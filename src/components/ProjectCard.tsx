import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  tags: string[];
  index: number;
}

const ProjectCard = ({ id, image, title, description, tags, index }: ProjectCardProps) => {
  return (
    <Link to={`/project/${id}`} className="block h-full cursor-pointer">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group rounded-xl overflow-hidden bg-card border border-border hover:glow-shadow transition-shadow duration-500 h-full flex flex-col"
      >
        <div className="overflow-hidden aspect-[4/3] shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-tag text-tag-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-lg font-bold font-display text-card-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
