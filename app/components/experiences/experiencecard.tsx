"use client";

import { dictionaries } from "@/app/lib/getDictionary";
import ScreenshotCarousel from "./ScreenshotCarousel";
import Image from "next/image";

import {
    Award,
    Trophy,
    Calendar,
    MapPin,
    ExternalLink,
} from "lucide-react";

type ExperienceProps = {
    dict: typeof dictionaries.en.experience;
    experience: typeof dictionaries.en.experience.list[number];
};

export default function ExperienceCard({
    dict,
    experience,
}: ExperienceProps) {

    const isCertification = ["Certification","Sertifikasi","資格","证书"] //en,id,ja,zh
        

    return (

        <div
            className="
                overflow-hidden
                rounded-3xl
                border
                border-zinc-200
                dark:border-zinc-800
                bg-white
                dark:bg-zinc-900
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
            "
        >

            {/* ========================= */}
            {/* PROJECT / HACKATHON */}
            {/* ========================= */}

            {!isCertification.includes(experience.type) && (

                <>

                    <ScreenshotCarousel
                        screenshots={experience.gallery!}
                    />

                    <div className="p-8">

                        <h3 className="text-2xl font-bold">
                            {experience.name}
                        </h3>

                        <div className="mt-4 flex flex-wrap gap-2">

                            <span className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                bg-blue-100
                                px-3
                                py-1
                                text-sm
                                font-medium
                                text-blue-700
                                dark:bg-blue-900/40
                                dark:text-blue-300
                            ">
                                <Trophy size={15}/>
                                {experience.type}
                            </span>

                            <span className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                bg-zinc-100
                                dark:bg-zinc-800
                                px-3
                                py-1
                                text-sm
                            ">
                                <Calendar size={15}/>
                                {experience.period}
                            </span>

                            <span className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                bg-zinc-100
                                dark:bg-zinc-800
                                px-3
                                py-1
                                text-sm
                            ">
                                <MapPin size={15}/>
                                {experience.location}
                            </span>

                        </div>

                        <p
                            className="
                                mt-6
                                leading-7
                                text-zinc-600
                                dark:text-zinc-300
                            "
                        >
                            {experience.shortDescription}
                        </p>

                        <div className="mt-8">

                            <h4 className="mb-4 font-semibold text-lg">
                                Highlights
                            </h4>

                            <ul className="space-y-3">

                                {experience.highlights?.map(item => (

                                    <li
                                        key={item}
                                        className="flex gap-3"
                                    >

                                        <span className="text-green-500 mt-1">
                                            ✓
                                        </span>

                                        <span className="leading-6">
                                            {item}
                                        </span>

                                    </li>

                                ))}

                            </ul>

                        </div>

                    </div>

                </>

            )}

            {/* ========================= */}
            {/* CERTIFICATION */}
            {/* ========================= */}

            {isCertification.includes(experience.type) && (

                <div className="p-8">

                    <div className="flex flex-col sm:flex-row gap-6">

                        {/* Badge */}

                        <div
                            className="
                                shrink-0
                                flex
                                items-start
                                justify-center
                            "
                        >

                            {experience.image && (

                                <Image
                                    src={experience.image}
                                    alt={experience.name}
                                    width={120}
                                    height={120}
                                    className="object-contain"
                                />

                            )}

                        </div>

                        {/* Content */}

                        <div className="flex-1">

                            <h3
                                className="
                                    text-2xl
                                    font-bold
                                "
                            >
                                {experience.name}
                            </h3>

                            <div
                                className="
                                    mt-3
                                    flex
                                    flex-wrap
                                    gap-2
                                "
                            >

                                <span
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        bg-blue-100
                                        px-3
                                        py-1
                                        text-sm
                                        font-medium
                                        text-blue-700
                                        dark:bg-blue-900/40
                                        dark:text-blue-300
                                    "
                                >

                                    <Award size={15}/>

                                    {experience.type}

                                </span>

                                <span
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        bg-zinc-100
                                        dark:bg-zinc-800
                                        px-3
                                        py-1
                                        text-sm
                                        whitespace-nowrap
                                    "
                                >

                                    <Calendar size={15}/>

                                    {experience.dateEarned}
                                    {" – "}
                                    {experience.validUntil ?? dict.present}

                                </span>

                            </div>

                            <p
                                className="
                                    mt-6
                                    leading-7
                                    text-zinc-600
                                    dark:text-zinc-300
                                "
                            >
                                {experience.description}
                            </p>

                            <a
                                href={experience.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    mt-6
                                    inline-flex
                                    items-center
                                    gap-2
                                    font-medium
                                    text-blue-600
                                    hover:text-blue-500
                                    transition-colors
                                "
                            >

                                Verify Credential

                                <ExternalLink size={17}/>

                            </a>

                        </div>

                    </div>

                </div>

            )}

        </div>

    );

}