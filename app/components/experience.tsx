"use client";

import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import { LanguageNames } from "../lib/locales";
import { motion } from "motion/react";
import Image from "next/image";
import { dictionaries } from "../lib/getDictionary";
import ExperienceCard from "./experiences/experiencecard";

type ExperienceProps = {
    dict : typeof dictionaries.en.experience;
}

export default function Experience({dict}:ExperienceProps){

    return(
        <section
         id="experience"
            className="
                mx-auto
                max-w-7xl
                px-6
                py-24
            ">
            <h2
                className="
                    mb-12
                    text-4xl
                    font-bold
                    tracking-tight
                "
            >
                {dict.title}
            </h2>
           
            <div className="space-y-8">
            {dict.list.map((experience, index) => (
                <motion.div
                    key={experience.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.4,
                        delay: index * 0.1,
                    }}
                >
                    <ExperienceCard
                        dict={dict}
                        experience={experience}
                    />
                </motion.div>
            ))}
        </div>
        
            

        </section>
    )
    
}