"use client";

import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import { LanguageNames } from "../lib/locales";
import { motion } from "motion/react";
import Image from "next/image";
import { dictionaries } from "../lib/getDictionary";
import ProjectCard from "../components/projects/ProjectCard";

type ProjectProps ={
    dict: typeof dictionaries.en.projects;
};

export default function Projects({dict}:ProjectProps) {
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
                />
            ))}
        


    </section>
    )
        
    

};