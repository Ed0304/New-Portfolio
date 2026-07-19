import enHeader from "../messages/en/header.json";
import jaHeader from "../messages/ja/header.json";
import idHeader from "../messages/id/header.json";
import zhHeader from "../messages/zh/header.json";

import enHero from "../messages/en/hero.json";
import jaHero from "../messages/ja/hero.json";
import idHero from "../messages/id/hero.json";
import zhHero from "../messages/zh/hero.json";

import enEducation from "../messages/en/education.json"
import jaEducation from "../messages/ja/education.json"
import idEducation from "../messages/id/education.json"
import zhEducation from "../messages/zh/education.json"

import enProject from "../messages/en/project.json";
import jaProject from "../messages/ja/project.json";
import idProject from "../messages/id/project.json";
import zhProject from "../messages/zh/project.json";

import enExperience from "../messages/en/experience.json";
import jaExperience from "../messages/ja/experience.json";
import idExperience from "../messages/id/experience.json";
import zhExperience from "../messages/zh/experience.json";

export const dictionaries = {
    en: {
        header: enHeader,
        hero: enHero,
        education: enEducation,
        projects: enProject,
        experience: enExperience
    },
    ja: {
        header: jaHeader,
        hero: jaHero,
        education: jaEducation,
        projects: jaProject,
        experience: jaExperience
    },
    id: {
        header: idHeader,
        hero: idHero,
        education: idEducation,
        projects: idProject,
        experience: idExperience
    },
    zh: {
        header: zhHeader,
        hero: zhHero,
        education: zhEducation,
        projects: zhProject,
        experience: zhExperience
    },
};

export function getDictionary(locale: keyof typeof dictionaries) {
    return dictionaries[locale] ?? dictionaries.en;
}