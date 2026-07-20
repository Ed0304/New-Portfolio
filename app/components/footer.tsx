import Link from "next/link";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
} from "react-icons/fa6";

export default function Footer() {
    return (
        <footer
            className="
                mt-20
                border-t
                border-zinc-200
                dark:border-zinc-800
            "
        >
            <div
                className="
                    mx-auto
                    flex
                    max-w-7xl
                    flex-col
                    items-center
                    gap-6
                    px-6
                    py-10
                "
            >
                {/* Name */}

                <div className="text-center">
                    <h3 className="text-xl font-semibold">
                        Let's build things together
                    </h3>

                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                        
                    </p>
                </div>

                {/* Socials */}

                <div className="flex items-center gap-8 text-3xl">

                    <Link
                        href="https://github.com/Ed0304"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                        className="
                            transition-all
                            duration-200
                            hover:-translate-y-1
                            hover:text-zinc-500
                        "
                    >
                        <FaGithub />
                    </Link>

                    <Link
                        href="https://www.linkedin.com/in/edtaidy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                        className="
                            transition-all
                            duration-200
                            hover:-translate-y-1
                            hover:text-blue-600
                        "
                    >
                        <FaLinkedin />
                    </Link>

                    <Link
                        href="mailto:edtaidy@gmail.com"
                        title="Email"
                        className="
                            transition-all
                            duration-200
                            hover:-translate-y-1
                            hover:text-red-500
                        "
                    >
                        <FaEnvelope />
                    </Link>

                </div>

                {/* Copyright */}

                <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
                    © 2026 Edbert Taidy. All rights reserved.
                </p>

            </div>
        </footer>
    );
}