"use client";

import { useState } from "react";

export default function ContactForm() {
    const [result, setResult] = useState("");

    const onSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        setResult("Sending...");

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
            setResult("✅ Message sent successfully!");
            form.reset();
        } else {
            setResult("❌ Something went wrong.");
        }
    };

    return (
        <section
            id="contact"
            className="mx-auto max-w-3xl px-6 py-24"
        >
            <div
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
                    Contact Me
                </h2>

                <p
                    className="
                        mt-3
                        text-zinc-600
                        dark:text-zinc-400
                    "
                >
                    Have a question, opportunity, or just want to say hello?
                    I'd love to hear from you.
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
                            Name
                        </label>

                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="Your name"
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
                            Email
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="your@email.com"
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
                            Subject
                        </label>

                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            required
                            placeholder="Subject"
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
                            Message
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            required
                            placeholder="Type your message..."
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
                            Send Message
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

            </div>
        </section>
    );
}