import enHeader from "../messages/en/header.json";
import jaHeader from "../messages/ja/header.json";
import idHeader from "../messages/id/header.json";
import zhHeader from "../messages/zh/header.json";

import enHero from "../messages/en/hero.json";
import jaHero from "../messages/ja/hero.json";
import idHero from "../messages/id/hero.json";
import zhHero from "../messages/zh/hero.json";

//import enFooter from "../messages/en/footer.json";
//import jaFooter from "../messages/ja/footer.json";
//import idFooter from "../messages/id/footer.json";
//import zhFooter from "../messages/zh/footer.json";

export const dictionaries = {
    en: {
        header: enHeader,
        hero: enHero,
        //footer: enFooter,
    },
    ja: {
        header: jaHeader,
        hero: jaHero,
        //footer: jaFooter,
    },
    id: {
        header: idHeader,
        hero: idHero,
        //footer: idFooter,
    },
    zh: {
        header: zhHeader,
        hero: zhHero,
        //footer: zhFooter,
    },
};

export function getDictionary(locale: keyof typeof dictionaries) {
    return dictionaries[locale] ?? dictionaries.en;
}