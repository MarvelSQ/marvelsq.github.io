import type { ReactNode } from "react";
import {
  ArrowUpRight,
  Briefcase,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import {
  education,
  experience,
  hero,
  highlights,
  projects,
  repos,
  skills,
  story,
} from "./data/profile";

function SectionTitle({ title, icon }: { title: string; icon?: ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3 text-white">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-brand-200">
        {icon ?? <Sparkles className="h-5 w-5" />}
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          Section
        </p>
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="relative min-h-screen bg-grid bg-[size:24px_24px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(79,92,245,0.16),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(37,221,186,0.2),transparent_20%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-16 pt-10 md:px-8">
        <header className="sticky top-4 z-10">
          <div className="glass flex items-center justify-between rounded-2xl px-5 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-white shadow-lg shadow-brand-500/40">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-white/60">{hero.status}</p>
                <p className="text-lg font-semibold">{hero.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button asChild variant="outline" size="sm">
                <a
                  href="https://github.com/marvelsq"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" /> Github
                </a>
              </Button>
              <Button asChild size="sm">
                <a href={`mailto:${hero.email}`}>
                  <Mail className="mr-2 h-4 w-4" /> Contact
                </a>
              </Button>
            </div>
          </div>
        </header>

        <main className="flex flex-col gap-12">
          <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 via-transparent to-emerald-400/10" />
              <CardHeader className="relative gap-3">
                <div className="flex items-center gap-3 text-white/70">
                  <MapPin className="h-4 w-4" />
                  <span>{hero.location}</span>
                </div>
                <CardTitle className="text-4xl text-white md:text-5xl">
                  {hero.role}
                </CardTitle>
                <CardDescription className="text-lg text-white/80">
                  {hero.headline}
                </CardDescription>
                <div className="mt-3 flex flex-wrap gap-3 text-sm text-white/70">
                  {highlights.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2"
                    >
                      <Sparkles className="h-4 w-4 text-brand-200" />
                      {item}
                    </span>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="relative flex flex-wrap items-center gap-4 pt-0">
                <Button asChild size="lg">
                  <a href={`mailto:${hero.email}`}>
                    <Mail className="mr-2 h-5 w-5" /> Email me
                  </a>
                </Button>
                <Badge className="flex items-center gap-2 bg-emerald-400/15 text-emerald-100">
                  <Sparkles className="h-4 w-4 text-emerald-200" /> Open to work
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="gap-4">
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <Mail className="h-4 w-4 text-brand-200" />
                  <a className="hover:text-white" href={`mailto:${hero.email}`}>
                    {hero.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <MapPin className="h-4 w-4 text-brand-200" />
                  <span>{hero.location}</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {repos.map((repo) => (
                    <Button key={repo.name} asChild variant="outline" size="sm">
                      <a href={repo.url} target="_blank" rel="noreferrer">
                        {repo.name}{" "}
                        <ArrowUpRight className="ml-2 h-3.5 w-3.5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <SectionTitle title="Skills" />
            <Tabs defaultValue={skills[0].title} className="w-full">
              <TabsList>
                {skills.map((skill) => (
                  <TabsTrigger key={skill.title} value={skill.title}>
                    {skill.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {skills.map((skill) => (
                <TabsContent key={skill.title} value={skill.title}>
                  <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                    {skill.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </section>

          <section>
            <SectionTitle
              title="Projects"
              icon={<Sparkles className="h-5 w-5" />}
            />
            <div className="section-grid">
              {projects.map((project) => (
                <Card key={project.name} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-white">
                      {project.name}
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-normal text-brand-200 hover:text-brand-100"
                        >
                          View <ArrowUpRight className="ml-1 inline h-4 w-4" />
                        </a>
                      ) : null}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 text-white/70">
                      <Badge variant="outline" className="text-xs">
                        {project.role}
                      </Badge>
                      <span>•</span>
                      <span>{project.period}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col gap-4 text-white/80">
                    <p className="leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <Badge key={item} className="bg-white/10 text-white">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle
              title="Experience"
              icon={<Briefcase className="h-5 w-5" />}
            />
            <div className="flex flex-col gap-4">
              {experience.map((item) => (
                <Card key={item.company + item.period}>
                  <CardHeader className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <CardTitle className="text-white">
                        {item.company}
                      </CardTitle>
                      <CardDescription className="text-white/70">
                        {item.role}
                      </CardDescription>
                    </div>
                    <Badge className="bg-white/10 text-white">
                      {item.period}
                    </Badge>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2 text-sm text-white/80">
                      {item.details.map((detail) => (
                        <li key={detail} className="flex gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionTitle
                title="Education"
                icon={<GraduationCap className="h-5 w-5" />}
              />
              <div className="flex flex-col gap-4">
                {education.map((edu) => (
                  <Card key={edu.school}>
                    <CardHeader>
                      <CardTitle className="text-white">{edu.school}</CardTitle>
                      <CardDescription className="text-white/70">
                        {edu.focus}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap items-center gap-3 text-sm text-white/70">
                      <Badge className="bg-white/10 text-white">
                        {edu.degree}
                      </Badge>
                      <span>{edu.period}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-brand-500/10" />
              <CardHeader className="relative">
                <SectionTitle title="Front-end Path" />
                <CardDescription className="text-base leading-relaxed text-white/80">
                  {story}
                </CardDescription>
              </CardHeader>
            </Card>
          </section>
        </main>

        <footer className="pb-4 text-center text-sm text-white/60">
          Crafted with React, Tailwind CSS, and shadcn/ui. Build outputs to the
          dist directory via `npm run build`.
        </footer>
      </div>
    </div>
  );
}

export default App;
