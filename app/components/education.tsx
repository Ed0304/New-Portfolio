"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { dictionaries } from "../lib/getDictionary";

type EducationProps = {
    dict: typeof dictionaries.en.education;
};

export default function Education({ dict }: EducationProps) {
    const [expanded, setExpanded] = useState<string | null>(null);

    return (
        <section
            id="education"
            className="
                mx-auto
                max-w-6xl
                px-6
                py-24
            "
        >
            {/* Title */}

            <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut",
                }}
                className="
                    mb-12
                    text-4xl
                    font-bold
                    tracking-tight
                "
            >
                {dict.title}
            </motion.h2>

            {dict.education.map((education, index) => (
                <motion.div
                    key={education.id}
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
                        amount: 0.25,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 110,
                        damping: 18,
                        delay: index * 0.15,
                    }}
                    whileHover={{
                        y: -6,
                    }}
                    className="
                        mb-6
                        rounded-2xl
                        border
                        border-zinc-800
                        bg-zinc-900/40
                        p-8
                        transition-colors
                        duration-300
                        hover:border-zinc-700
                    "
                >
                    {/* Header */}

                    <div className="flex justify-between items-start">

                        {/* Left */}

                        <div>
                            <h3 className="text-2xl font-bold">
                                {education.name}
                            </h3>

                            <p className="text-sm text-zinc-400">
                                {education.location}
                            </p>
                        </div>

                        {/* Right */}

                        <div
                            className="
                                flex
                                flex-col
                                items-end
                                gap-4
                            "
                        >
                            <p className="text-sm text-zinc-400">
                                {education.period}
                            </p>

                            <motion.div
                                whileHover={{
                                    scale: 1.08,
                                    rotate: 2,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 250,
                                    damping: 15,
                                }}
                            >
                                <Image
                                    src={education.logo}
                                    alt={`${education.name} logo`}
                                    width={72}
                                    height={72}
                                    className="
                                        rounded-lg
                                        object-contain
                                    "
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Degree */}

                    <p
                        className="
                            mt-6
                            text-lg
                            font-medium
                            text-zinc-100
                        "
                    >
                        {education.degree}
                    </p>

                    {/* Expand Button */}

                    {(education.major || education.award) && (
                        <motion.button
                            whileTap={{
                                scale: 0.97,
                            }}
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
                                text-sky-500
                                transition-colors
                                hover:text-sky-300
                            "
                        >
                            {expanded === education.id
                                ? dict.hideDetails
                                : dict.viewDetails}

                            <motion.span
                                animate={{
                                    rotate:
                                        expanded === education.id
                                            ? 180
                                            : 0,
                                    scale:
                                        expanded === education.id
                                            ? 1.1
                                            : 1,
                                }}
                                transition={{
                                    duration: 0.25,
                                }}
                            >
                                ▼
                            </motion.span>
                        </motion.button>
                    )}

                    {/* Expand */}

                    <AnimatePresence initial={false}>
                        {expanded === education.id && (
                            <motion.div
                                initial={{
                                    height: 0,
                                    opacity: 0,
                                }}
                                animate={{
                                    height: "auto",
                                    opacity: 1,
                                }}
                                exit={{
                                    height: 0,
                                    opacity: 0,
                                }}
                                transition={{
                                    duration: 0.35,
                                }}
                                className="
                                    overflow-hidden
                                    mt-6
                                    border-t
                                    border-zinc-800
                                    pt-6
                                    space-y-6
                                "
                            >
                                {education.major && (
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            y: 12,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            delay: 0.05,
                                        }}
                                    >
                                        <p className="text-sm text-zinc-500">
                                            {dict.major}
                                        </p>

                                        <p className="mt-1">
                                            {education.major}
                                        </p>
                                    </motion.div>
                                )}

                                {education.award && (
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            y: 12,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            delay: 0.15,
                                        }}
                                    >
                                        <p className="text-sm text-zinc-500">
                                            {dict.award}
                                        </p>

                                        <p className="mt-1">
                                            🏅 {education.award}
                                        </p>
                                    </motion.div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </section>
    );
}