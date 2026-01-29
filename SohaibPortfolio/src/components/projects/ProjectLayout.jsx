import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);
const ProjectLayout = ({ name, description, date, demoLink, imageUrl }) => {
  return (
    <ProjectLink
      variants={item}
      href={demoLink}
      target={"_blank"}
      className="text-sm md:text-base flex flex-col md:flex-row items-start md:items-center w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
    >
      {imageUrl && (
        <div className="w-full md:w-24 h-16 md:h-20 flex-shrink-0 mb-2 md:mb-0 md:mr-4 overflow-hidden rounded">
          <Image
            src={imageUrl}
            alt={`${name} preview`}
            width={250}
            height={250}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <h2 className="text-accent font-semibold truncate">{name}</h2>
        <p className="text-foreground text-sm mt-1 hidden sm:block">{description}</p>
        <p className="text-muted sm:text-foreground text-xs md:text-sm mt-1">
          {new Date(date).toDateString()}
        </p>
      </div>
    </ProjectLink>
  );
};

export default ProjectLayout;
