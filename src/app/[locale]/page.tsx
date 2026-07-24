import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import {
  aimlProjects,
  enterpriseProjects,
  clientProjects,
  scienceProjects,
  sciencePhotos,
  presentationLinks,
  sourceLink,
} from "@/data/portfolio";
import Header from "@/components/Header";
import SiteChips from "@/components/SiteChips";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import LinkListItem from "@/components/LinkListItem";
import Footer from "@/components/Footer";

interface Props {
  params: { locale: string };
}

export default async function Page({ params }: Props) {
  if (!isLocale(params.locale)) {
    notFound();
  }
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);

  return (
    <main className="mx-auto max-w-[780px] bg-white px-6 py-10 sm:px-[52px] sm:pb-14 sm:pt-12">
      <Header dict={dict} locale={locale} />

      <section className="mb-8">
        <SectionHeader label={dict.sections.portfolio} />
        <SiteChips />
      </section>

      <section className="mb-8">
        <SectionHeader label={dict.sections.aiml} />
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {aimlProjects.map((project) => (
            <ProjectCard key={project.id} project={project} dict={dict} />
          ))}
        </div>
      </section>

      <section className="mb-8">
        <SectionHeader label={dict.sections.enterprise} />
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {enterpriseProjects.map((project) => (
            <ProjectCard key={project.id} project={project} dict={dict} />
          ))}
        </div>
      </section>

      <section className="mb-8">
        <SectionHeader label={dict.sections.clients} />
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {clientProjects.map((project) => (
            <ProjectCard key={project.id} project={project} dict={dict} />
          ))}
        </div>
      </section>

      <section className="mb-8">
        <SectionHeader label={dict.sections.presentations} />
        <div className="flex flex-col gap-2">
          {presentationLinks.map((item) => (
            <LinkListItem
              key={item.id}
              label={dict.presentations[item.id]}
              href={item.href}
              display={item.display}
            />
          ))}
        </div>
      </section>

      <section className="mb-8">
        <SectionHeader label={dict.sections.science} />
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {scienceProjects.map((project) => (
            <ProjectCard key={project.id} project={project} dict={dict} />
          ))}
        </div>
        <div className="mt-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {sciencePhotos.map((project) => (
            <ProjectCard key={project.id} project={project} dict={dict} compact />
          ))}
        </div>
      </section>

      <section className="mb-8">
        <SectionHeader label={dict.sections.source} />
        <div className="flex flex-col gap-2">
          <LinkListItem
            label={dict.source[sourceLink.id]}
            href={sourceLink.href}
            display={sourceLink.display}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
