"use client";

import { dictionaries } from "@/app/lib/getDictionary";

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
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-4xl rounded-2xl bg-white p-8 shadow-xl">
                <button onClick={onClose}>
                    ✕
                </button>

                <h2>{project.name}</h2>

                <p>{project.description}</p>
            </div>
        </div>
    );
}