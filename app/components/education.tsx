"use client";

import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import { LanguageNames } from "../lib/locales";
import { motion } from "motion/react";
import Image from "next/image";
import { dictionaries } from "../lib/getDictionary";

type EducationProps = {
    dict: typeof dictionaries.en.education;
};


export default function Education({ dict }: EducationProps) {
    const [expanded, setExpanded] = useState<string | null>(null);

    return (
        <>
        <section
    id="education"
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
        Education
    </h2>
            {dict.education.map((education) => (
        <div
    key={education.id}
    className="
        mb-6
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900/40
        p-8
        transition-all
        duration-300
        hover:border-zinc-700
        hover:-translate-y-1
    "
>
    {/* Header */}
    <div className="flex justify-between items-start">

        {/* Left */}
        <div>
            <h3 className="text-2xl font-bold">
                {education.name}
            </h3>

            <p className="mt-1 text-zinc-400">
                {education.location}
            </p>
        </div>

        {/* Right */}
        <p className="text-sm text-zinc-500">
            {education.period}
        </p>

    </div>

    {/* Degree */}
    <p
        className="
            mt-6
            text-lg
            font-medium
            text-zinc-200
        "
    >
        {education.degree}
    </p>

    {/* Button */}
    <button
        onClick={() =>
            setExpanded(
                expanded === education.id
                    ? null
                    : education.id
            )
        }
        className="
            mt-6

            flex
            items-center
            gap-2

            text-sky-400

            transition-colors

            hover:text-sky-300
        "
    >
        {expanded === education.id
            ? "▲ Hide Details"
            : "▼ View Details"}
    </button>

    {/* Expanded Content */}
    {expanded === education.id && (

        <div
            className="
                mt-6
                border-t
                border-zinc-800
                pt-6
                space-y-6
            "
        >

            {education.major && (
                <div>

                    <p className="text-sm text-zinc-500">
                        Major
                    </p>

                    <p className="mt-1">
                        {education.major}
                    </p>

                </div>
            )}

            {education.award && (
                <div>

                    <p className="text-sm text-zinc-500">
                        Award
                    </p>

                    <p className="mt-1">
                        🏅 {education.award}
                    </p>

                </div>
            )}

        </div>

    )}

</div>
                

            ))}
            </section>
        </>
    );
}