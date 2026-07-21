"use client";

import { motion } from "motion/react";
import { dictionaries } from "@/app/lib/getDictionary";
import ProjectCard from "./projectcard";

type Project = typeof dictionaries.en.projects.list[number];

type ProjectGridProps = {
    projects: Project[];
    dict: typeof dictionaries.en.projects;
    onProjectClick: (project: Project) => void;
};

export default function ProjectGrid({
    projects,
    dict,
    onProjectClick,
}: ProjectGridProps) {
    return (
        <div
            className="
                grid
                grid-cols-1
                gap-8
                md:grid-cols-2
                lg:grid-cols-3
            "
        >
            {projects.map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 110,
                        damping: 18,
                        delay: index * 0.1,
                    }}
                    whileHover={{
                        y: -6,
                    }}
                >
                    <ProjectCard
                        project={project}
                        dict={dict}
                        onClick={() => onProjectClick(project)}
                    />
                </motion.div>
            ))}
        </div>
    );
}