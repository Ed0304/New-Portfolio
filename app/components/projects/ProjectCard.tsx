"use client";

import { dictionaries } from "@/app/lib/getDictionary";
import ProjectGrid from "./ProjectModal";
type ProjectProps = {
    project: typeof dictionaries.en.projects.list[number];
    onClick: () => void;
};



export default function ProjectCard({
    project,
    onClick,
}: ProjectProps) {
    return (
        <article
            className="
                h-full
                flex
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                dark:border-gray-700
                dark:bg-gray-900
            "
        >
            {/* Thumbnail Placeholder */}
            <div
                className="
                    h-52
                    w-full
                    bg-gray-300
                    dark:bg-gray-700
                "
            />

            {/* Content */}
            <div
                className="
                    flex
                    flex-1
                    flex-col
                    p-6
                "
            >
                {/* Project Name */}
                <h3
                    className="
                        text-xl
                        font-bold
                        text-gray-900
                        dark:text-white
                    "
                >
                    {project.name}
                </h3>

                {/* Description */}
                <p
                    className="
                        mt-3
                        text-sm
                        leading-6
                        text-gray-600
                        dark:text-gray-400
                    "
                >
                    {project.description}
                </p>

                {/* Technologies */}
                <div
                    className="
                        mt-5
                        flex
                        flex-wrap
                        gap-2
                    "
                >
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="
                                rounded-full
                                bg-gray-100
                                px-3
                                py-1
                                text-xs
                                font-medium
                                dark:bg-gray-800
                            "
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Button */}
                <div className="mt-auto pt-6">
                    <button
                        className="
                            w-full
                            cursor-pointer
                            rounded-lg
                            border
                            border-gray-300
                            px-4
                            py-2
                            text-sm
                            font-medium
                            transition-colors
                            hover:bg-gray-100
                            dark:border-gray-700
                            dark:hover:bg-gray-800
                        "
                        onClick={onClick}
                    >
                        View Details
                    </button>
                </div>
            </div>
        </article>
    );
}