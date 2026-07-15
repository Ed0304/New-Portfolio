"use client";

import { dictionaries } from "@/app/lib/getDictionary";
import ScreenshotCarousel from "./ScreenshotCarousel";
import { useEffect } from "react";
import {
    X,
    Download,
    ExternalLink,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

type ProjectModalProps = {
    project: typeof dictionaries.en.projects.list[number] | null;
    dict: typeof dictionaries.en.projects;
    onClose: () => void;
};

export default function ProjectModal({
    project,
    dict,
    onClose,
}: ProjectModalProps) {

    if (!project) return null;

    useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            onClose();
        }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
        window.removeEventListener("keydown", handleEscape);
    };
    }, [onClose]);

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

                {/* ================= Header ================= */}

                <div className="flex items-start justify-between">

                    <div>

                        <h2 className="text-3xl font-bold">
                            {project.name}
                        </h2>

                        <p className="mt-2 text-gray-500 dark:text-gray-400">
                            {project.category} • {project.year} • {project.role}
                        </p>

                        {"event" in project && project.event && (
                            <div
                                className="
                                    mt-4
                                    inline-flex
                                    rounded-full
                                    bg-purple-100
                                    px-4
                                    py-2
                                    text-sm
                                    font-medium
                                    text-purple-700
                                    dark:bg-purple-900/30
                                    dark:text-purple-300
                                "
                            >
                                🏆 {project.event.name} • {project.event.track}
                            </div>
                        )}

                    </div>

                    <button
                        onClick={onClose}
                        aria-label="Close project"
                        className="
                            cursor-pointer
                            rounded-full
                            p-2
                            transition-all
                            duration-200
                            hover:bg-gray-200
                            hover:scale-110
                            active:scale-95
                            dark:hover:bg-gray-700
                        "
                    >
                        <X size={24}/>
                    </button>

                </div>

                {/* ================= Carousel ================= */}

                <div className="mt-8">
                    <ScreenshotCarousel
                        screenshots={project.screenshots}
                    />
                </div>

                <hr className="my-8 border-gray-200 dark:border-gray-700"/>

                {/* ================= Overview ================= */}

                {project.details.overview && (

                    <section>

                        <h3 className="mb-3 text-xl font-semibold">
                            {dict.labels.overview}
                        </h3>

                        <p className="leading-7 text-gray-600 dark:text-gray-300">
                            {project.details.overview}
                        </p>

                    </section>

                )}

                {/* ================= Problem ================= */}

                {project.details.problem && (

                    <section className="mt-8">

                        <h3 className="mb-3 text-xl font-semibold">
                            {dict.labels.problem}
                        </h3>

                        <p className="leading-7 text-gray-600 dark:text-gray-300">
                            {project.details.problem}
                        </p>

                    </section>

                )}

                {/* ================= Solution ================= */}

                {project.details.solution && (

                    <section className="mt-8">

                        <h3 className="mb-3 text-xl font-semibold">
                            {dict.labels.solution}
                        </h3>

                        <p className="leading-7 text-gray-600 dark:text-gray-300">
                            {project.details.solution}
                        </p>

                    </section>

                )}

                <hr className="my-8 border-gray-200 dark:border-gray-700"/>

                {/* ================= Technologies ================= */}

                <section>

                    <h3 className="mb-3 text-xl font-semibold">
                        {dict.labels.technologies}
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

                {/* ================= Services ================= */}

                {project.services.length > 0 && (

                    <section className="mt-8">

                        <h3 className="mb-3 text-xl font-semibold">
                            {dict.labels.services}
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
                                        text-blue-700
                                        dark:bg-blue-900/30
                                        dark:text-blue-300
                                    "
                                >
                                    {service}
                                </span>

                            ))}

                        </div>

                    </section>

                )}

                {/* ================= Features ================= */}

                {project.details.features.length > 0 && (

                    <section className="mt-8">

                        <h3 className="mb-3 text-xl font-semibold">
                            {dict.labels.features}
                        </h3>

                        <ul className="space-y-3">

                            {project.details.features.map((feature) => (

                                <li
                                    key={feature}
                                    className="leading-7 text-gray-600 dark:text-gray-300"
                                >
                                    {feature}
                                </li>

                            ))}

                        </ul>

                    </section>

                )}

                {/* ================= Challenges ================= */}

                {project.details.challenges.length > 0 && (

                    <section className="mt-8">

                        <h3 className="mb-3 text-xl font-semibold">
                            {dict.labels.challenges}
                        </h3>

                        <ul className="list-disc space-y-2 pl-6">

                            {project.details.challenges.map((challenge) => (

                                <li
                                    key={challenge}
                                    className="text-gray-600 dark:text-gray-300"
                                >
                                    {challenge}
                                </li>

                            ))}

                        </ul>

                    </section>

                )}

                {/* ================= Lessons ================= */}

                {project.details.lessons.length > 0 && (

                    <section className="mt-8">

                        <h3 className="mb-3 text-xl font-semibold">
                            {dict.labels.lessons}
                        </h3>

                        <ul className="list-disc space-y-2 pl-6">

                            {project.details.lessons.map((lesson) => (

                                <li
                                    key={lesson}
                                    className="text-gray-600 dark:text-gray-300"
                                >
                                    {lesson}
                                </li>

                            ))}

                        </ul>

                    </section>

                )}

                {/* ================= Responsibilities ================= */}

                <hr className="my-8 border-gray-200 dark:border-gray-700"/>

                {/* ================= Links ================= */}

                <section className="flex flex-wrap gap-4">

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
                            <FaGithub size={18}/>
                            <span>{dict.labels.github}</span>
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
                            <ExternalLink size={18}/>
                            <span>{dict.labels.demo}</span>
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
                            <Download size={18}/>
                            <span>{dict.labels.download}</span>
                        </a>

                    )}

                </section>

            </div>
        </div>
    );
}