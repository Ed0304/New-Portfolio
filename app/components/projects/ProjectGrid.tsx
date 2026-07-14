"use client";

import { dictionaries } from "@/app/lib/getDictionary";
import ProjectCard from "./projectcard";

type Project = typeof dictionaries.en.projects.list[number];

type ProjectGridProps = {
    projects: Project[];
    onProjectClick: (project: Project) => void;
};

export default function ProjectGrid({
    projects,
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
                    onClick={() => onProjectClick(project)}
                />
            ))}
        </div>
    );
}