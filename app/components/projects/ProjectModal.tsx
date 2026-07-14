"use client";

import { dictionaries } from "@/app/lib/getDictionary";
import ScreenshotCarousel from "./ScreenshotCarousel";

import { X, Download, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type ProjectModalProps = {
    project: typeof dictionaries.en.projects.list[number] | null;
    onClose: () => void;
};

export default function ProjectModal({
    project,
    onClose,
}: ProjectModalProps) {
    if (!project) return null;

    return (
        <div
            className="
                fixed
                inset-0
                z-50
                flex
                items-center
                justify-center
                bg-black/60
                p-6
            "
        >
            {/* Modal */}
            <div
                className="
                    w-full
                    max-w-5xl
                    max-h-[90vh]
                    overflow-y-auto
                    rounded-2xl
                    bg-white
                    p-8
                    shadow-2xl
                    dark:bg-gray-900
                "
            >
                {/* Header */}
                <div className="flex items-start justify-between">
                    <div>
                        <h2 className="text-3xl font-bold">
                            {project.name}
                        </h2>

                        <p className="mt-2 text-gray-500 dark:text-gray-400">
                            {project.category} • {project.year} • {project.role}
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        aria-label="Close project details"
                        className="
                            cursor-pointer
                            rounded-full
                            p-2
                            transition-all
                            duration-200
                            hover:scale-110
                            hover:bg-gray-200
                            active:scale-95
                            dark:hover:bg-gray-700
                        "
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Screenshot Carousel */}
                <div className="mt-8">
                    <ScreenshotCarousel
                        screenshots={project.screenshots}
                    />
                </div>

                {/* Description */}
                <section className="mt-8">
                    <h3 className="mb-3 text-xl font-semibold">
                        Overview
                    </h3>

                    <p className="leading-7 text-gray-600 dark:text-gray-300">
                        {project.description}
                    </p>
                </section>

                {/* Technologies */}
                <section className="mt-8">
                    <h3 className="mb-3 text-xl font-semibold">
                        Technologies
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="
                                    rounded-full
                                    bg-gray-100
                                    px-3
                                    py-1
                                    text-sm
                                    font-medium
                                    dark:bg-gray-800
                                "
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Services */}
                {project.services.length > 0 && (
                    <section className="mt-8">
                        <h3 className="mb-3 text-xl font-semibold">
                            Services
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {project.services.map((service) => (
                                <span
                                    key={service}
                                    className="
                                        rounded-full
                                        bg-blue-100
                                        px-3
                                        py-1
                                        text-sm
                                        font-medium
                                        dark:bg-blue-900/40
                                    "
                                >
                                    {service}
                                </span>
                            ))}
                        </div>
                    </section>
                )}

                {/* Links */}
                <section className="mt-10 flex flex-wrap gap-4">

                    {project.links.github && (
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-lg
                                border
                                px-4
                                py-2
                                transition-colors
                                hover:bg-gray-100
                                dark:hover:bg-gray-800
                            "
                        >
                            <FaGithub size={18} />
                            <span>GitHub</span>
                        </a>
                    )}

                    {project.links.demo && (
                        <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-lg
                                border
                                px-4
                                py-2
                                transition-colors
                                hover:bg-gray-100
                                dark:hover:bg-gray-800
                            "
                        >
                            <ExternalLink size={18} />
                            <span>Live Demo</span>
                        </a>
                    )}

                    {project.links.download && (
                        <a
                            href={project.links.download}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-lg
                                border
                                px-4
                                py-2
                                transition-colors
                                hover:bg-gray-100
                                dark:hover:bg-gray-800
                            "
                        >
                            <Download size={18} />
                            <span>Download</span>
                        </a>
                    )}
                </section>
            </div>
        </div>
    );
}