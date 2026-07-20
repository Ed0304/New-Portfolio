import Image from "next/image";
import Header from "../components/header";
import { redirect } from "next/navigation";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Education from "../components/education";
import Projects from "../components/project";
import Experience from "../components/experience";
import Contact from "../components/contact";
import { getDictionary,dictionaries } from "../lib/getDictionary";

export default async function Home({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const dict = getDictionary(locale as keyof typeof dictionaries)

  return (
        <div
            className="
                min-h-screen
                flex
                flex-col

                bg-zinc-50
                text-zinc-900

                transition-colors
                duration-300

                dark:bg-zinc-950
                dark:text-white
            "
        >
             <Header dict={dict.header} />

            <main className="flex-1">
                <Hero dict={dict.hero} />
                <Education dict={dict.education}/>
                <Projects dict={dict.projects}/>
                <Experience dict={dict.experience}/>
                <Contact dict= {dict.contact}/>
            </main>

            <Footer/>
        </div>
    );
}
