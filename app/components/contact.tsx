"use client";

import { useState } from "react";
import { dictionaries } from "../lib/getDictionary";
import { motion, AnimatePresence } from "motion/react";
type ContactProps ={
    dict: typeof dictionaries.en.contact;
}

export default function ContactForm({dict}:ContactProps) {
    const [result, setResult] = useState("");

    const onSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        setResult(dict.sending);

        const form = event.currentTarget;
        const formData = new FormData(form);

        formData.append(
            "access_key",
            process.env.NEXT_PUBLIC_WEB3FORMS_KEY!
        );

        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",
                body: formData,
            }
        );

        const data = await response.json();

        if (data.success) {
            setResult(dict.success);
            form.reset();
        } else {
            setResult(dict.error);
        }
    };

    return (
        <section
            id="contact"
            className="mx-auto max-w-3xl px-6 py-24"
        >
           <motion.div
            initial={{
                opacity: 0,
                y: 30,
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
            }}
            className="
                rounded-3xl
                border
                border-zinc-200
                dark:border-zinc-800
                bg-white
                dark:bg-zinc-900
                shadow-sm
                p-8
            "
            >
                <h2 className="text-4xl font-bold">
                    {dict.title}
                </h2>

                <p
                    className="
                        mt-3
                        text-zinc-600
                        dark:text-zinc-400
                    "
                >
                    {dict.greeting}
                </p>

                <form
                    onSubmit={onSubmit}
                    className="mt-8 space-y-6"
                >
                    {/* Name */}

                    <div>
                        <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-medium"
                        >
                            {dict.name}
                        </label>

                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder={dict.nameplaceholder}
                            className="
                                w-full
                                rounded-xl
                                border
                                border-zinc-300
                                dark:border-zinc-700
                                bg-white
                                dark:bg-zinc-800
                                px-4
                                py-3
                                outline-none
                                transition
                                focus:border-blue-500
                                focus:ring-2
                                focus:ring-blue-500/20
                            "
                        />
                    </div>

                    {/* Email */}

                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium"
                        >
                            {dict.email}
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder={dict.emailplaceholder}
                            className="
                                w-full
                                rounded-xl
                                border
                                border-zinc-300
                                dark:border-zinc-700
                                bg-white
                                dark:bg-zinc-800
                                px-4
                                py-3
                                outline-none
                                transition
                                focus:border-blue-500
                                focus:ring-2
                                focus:ring-blue-500/20
                            "
                        />
                    </div>

                    {/* Subject */}

                    <div>
                        <label
                            htmlFor="subject"
                            className="mb-2 block text-sm font-medium"
                        >
                            {dict.subject}
                        </label>

                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            required
                            placeholder={dict.subjectplaceholder}
                            className="
                                w-full
                                rounded-xl
                                border
                                border-zinc-300
                                dark:border-zinc-700
                                bg-white
                                dark:bg-zinc-800
                                px-4
                                py-3
                                outline-none
                                transition
                                focus:border-blue-500
                                focus:ring-2
                                focus:ring-blue-500/20
                            "
                        />
                    </div>

                    {/* Message */}

                    <div>
                        <label
                            htmlFor="message"
                            className="mb-2 block text-sm font-medium"
                        >
                            {dict.message}
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            required
                            placeholder={dict.messageplaceholder}
                            className="
                                w-full
                                rounded-xl
                                border
                                border-zinc-300
                                dark:border-zinc-700
                                bg-white
                                dark:bg-zinc-800
                                px-4
                                py-3
                                outline-none
                                transition
                                resize-none
                                focus:border-blue-500
                                focus:ring-2
                                focus:ring-blue-500/20
                            "
                        />
                    </div>

                    {/* Submit */}

                    <div className="flex items-center justify-between gap-4">

                        <button
                            type="submit"
                            className="
                                rounded-xl
                                bg-blue-600
                                px-6
                                py-3
                                font-medium
                                text-white
                                transition
                                hover:bg-blue-700
                            "
                        >
                            {dict.send}
                        </button>

                        <span
                            className="
                                text-sm
                                text-zinc-500
                                dark:text-zinc-400
                            "
                        >
                            {result}
                        </span>

                    </div>

                </form>

            </motion.div>
        </section>
    );
}