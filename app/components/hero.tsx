"use client";

import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import { LanguageNames } from "../lib/locales";
import { motion } from "motion/react";
import Image from "next/image";
import { dictionaries } from "../lib/getDictionary";
type HeroProps = {
        dict: typeof dictionaries.en.hero;
    };
export default function Hero({ dict }: HeroProps) {
    const MotionImage = motion(Image);
    
    return (
        <section
            id="home"
            className="
                flex
                min-h-[90vh]
                items-center
                py-16
                lg:py-0
            "
        >

            <div className="
                    mx-auto
                    flex
                    w-full
                    max-w-7xl
                    flex-col-reverse
                    items-center
                    gap-12
                    px-6
                    text-center

                    lg:flex-row
                    lg:justify-between
                    lg:gap-20
                    lg:px-8
                    lg:text-left
                ">

                {/* ================= Left Side ================= */}

                <div className="max-w-2xl">

                    <motion.p
                        className="
                            text-sm
                            text-zinc-500
                            md:text-base
                            dark:text-zinc-400
                        "
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {dict.greeting}
                    </motion.p>

                    <motion.h1
                        className="
                            mt-3
                            whitespace-pre-line
                            text-5xl
                            font-extrabold
                            tracking-tight

                            md:text-6xl
                            lg:text-7xl
                        "
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        {dict.name}
                    </motion.h1>

                    <motion.h2
                        className="
                            mt-5
                            text-2xl
                            font-semibold
                            leading-tight

                            md:text-3xl
                            lg:text-4xl
                        "
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.30 }}
                    >
                        {dict.title}
                    </motion.h2>

                    <motion.p
                        className="                    text-zinc-500
                            transition-colors
                            duration-300

                            dark:text-zinc-400
                        "
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                    >
                        {dict.description}
                    </motion.p>

                </div>

                {/* ================= Right Side ================= */}

                <motion.div
                    className="
                    relative

                    h-[320px]
                    w-[260px]

                    overflow-hidden
                    rounded-3xl
                    shadow-2xl

                    sm:h-[380px]
                    sm:w-[300px]

                    lg:h-[520px]
                    lg:w-[400px]
                "
                    initial={{ opacity: 0, x: 60, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >

                    <MotionImage
                        src="/images/profile.jpg"
                        alt="Edbert"
                        fill
                        className="object-cover object-top"
                    />

                    {/* Swipe Reveal */}

                    <motion.div
                        className="absolute inset-0 bg-zinc-50 dark:bg-black"
                        initial={{ x: 0 }}
                        animate={{ x: "100%" }}
                        transition={{
                            duration: 1,
                            delay: 1,
                            ease: "easeInOut"
                        }}
                    />

                </motion.div>

            </div>

        </section>
    );
}