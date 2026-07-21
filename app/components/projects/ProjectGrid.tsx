"use client";

import { dictionaries } from "@/app/lib/getDictionary";
import ProjectCard from "./ProjectCard";

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
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    dict={dict}
                    onClick={() => onProjectClick(project)}
                />
            ))}
        </div>
    );
}