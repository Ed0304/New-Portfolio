"use client";

import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import { LanguageNames } from "../lib/locales";
import { motion } from "motion/react";
import Image from "next/image";
import { dictionaries } from "../lib/getDictionary";
import ProjectCard from "./projects/projectcard";
import ProjectModal from "./projects/ProjectModal";

type ProjectProps ={
    dict: typeof dictionaries.en.projects;
};


export default function Projects({dict}:ProjectProps) {
    const [selectedProject, setSelectedProject] = useState<
        typeof dict.list[number] | null
    >(null);
    return (
        <section
    id="projects"
    className="
        mx-auto
        max-w-6xl
        px-6
        py-24
    "
>
    <h2
        className="
            mb-12
            text-4xl
            font-bold
            tracking-tight
        "
    >
        {dict.title}
    </h2>

            {dict.list.map((project) => (
            <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
            />
        ))}

        <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
        />


    </section>
    )
        
    

};