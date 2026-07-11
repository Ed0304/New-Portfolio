"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { LanguageNames } from "../lib/locales";
import { dictionaries } from "../lib/getDictionary";

type HeaderProps = {
    dict: typeof dictionaries.en.header;
};

export default function Header({ dict }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    const params = useParams();
    const locale = params.locale as keyof typeof LanguageNames;
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <header
            className="
                sticky
                top-0
                z-50
                border-b
                border-zinc-200
                bg-white/80
                backdrop-blur-md
                dark:border-zinc-800
                dark:bg-zinc-900/80
            "
        >
            <div
                className="
                    mx-auto
                    flex
                    h-20
                    max-w-7xl
                    items-center
                    justify-between
                    px-8
                "
            >
                {/* Logo */}

                <Link
                    href={`/${locale}`}
                    className="
                        text-2xl
                        font-bold
                        tracking-tight
                    "
                >
                    ◈ ET
                </Link>

                {/* Navigation */}

                <nav
                    className="
                        flex
                        items-center
                        gap-8
                        text-sm
                        font-medium
                    "
                >
                    <a href="#home" className="transition hover:text-blue-600">
                        {dict.home}
                    </a>

                    <a href="#education" className="transition hover:text-blue-600">
                       {dict.education}
                    </a>

                    <a href="#projects" className="transition hover:text-blue-600">
                        {dict.projects}
                    </a>

                    <a href="#experience" className="transition hover:text-blue-600">
                        {dict.experience}
                    </a>

                    <a href="#contact" className="transition hover:text-blue-600">
                        {dict.contact}
                    </a>
                </nav>

                {/* Right Side */}

                <div className="flex items-center gap-4">

                    {/* Download CV */}

                    <button
                        className="
                            rounded-full
                            border
                            border-zinc-300
                            px-5
                            py-2
                            text-sm
                            font-medium
                            transition
                            hover:bg-zinc-100
                            dark:border-zinc-700
                            dark:hover:bg-zinc-800
                        "
                    >
                        {dict.download}
                    </button>

                    {/* Settings */}

                    <div
                        className="
                            relative
                            flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-zinc-300
                            bg-white
                            px-2
                            py-1
                            shadow-sm
                            dark:border-zinc-700
                            dark:bg-zinc-900
                        "
                    >
                        {/* Language */}

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="
                                rounded-full
                                px-3
                                py-2
                                text-sm
                                transition
                                hover:bg-zinc-100
                                dark:hover:bg-zinc-800
                            "
                        >
                            🌐 {LanguageNames[locale]}
                        </button>

                        {isOpen && (
                            <div
                                className="
                                    absolute
                                    right-0
                                    top-full
                                    mt-3
                                    flex
                                    w-52
                                    flex-col
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    border-zinc-200
                                    bg-white
                                    shadow-xl
                                    dark:border-zinc-700
                                    dark:bg-zinc-900
                                "
                            >
                                <Link
                                    href="/en"
                                    className="px-5 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                                >
                                    English
                                </Link>

                                <Link
                                    href="/ja"
                                    className="px-5 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                                >
                                    日本語
                                </Link>

                                <Link
                                    href="/id"
                                    className="px-5 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                                >
                                    Bahasa Indonesia
                                </Link>

                                <Link
                                    href="/zh"
                                    className="px-5 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                                >
                                    简体中文
                                </Link>
                            </div>
                        )}

                        {/* Divider */}

                        <div className="h-6 w-px bg-zinc-300 dark:bg-zinc-700" />

                        {/* Theme */}

                        <button
                            onClick={() =>
                                setTheme(resolvedTheme === "dark" ? "light" : "dark")
                            }
                            className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-full
                                transition
                                hover:bg-zinc-100
                                dark:hover:bg-zinc-800
                            "
                        >
                            <motion.div
                                animate={{
                                    rotate: resolvedTheme === "dark" ? 0 : 180,
                                    scale: resolvedTheme === "dark" ? 1 : 1.1,
                                }}
                                transition={{
                                    duration: 0.35,
                                }}
                            >
                                {resolvedTheme === "dark" ? (
                                    <Moon size={18} />
                                ) : (
                                    <Sun size={18} />
                                )}
                            </motion.div>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}