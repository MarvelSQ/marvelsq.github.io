import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  Briefcase,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Moon,
  Sparkles,
  Sun,
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
import { content, uiText, type Locale } from "./data/profile";

function SectionTitle({
  title,
  icon,
  eyebrow,
}: {
  title: string;
  icon?: ReactNode;
  eyebrow: string;
}) {
  return (
    <div className="mb-6 flex items-center gap-3 text-foreground">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-primary">
        {icon ?? <Sparkles className="h-5 w-5" />}
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {eyebrow}
        </p>
        <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
      </div>
    </div>
  );
}

type ThemeMode = "system" | "light" | "dark";

function App() {
  const getInitialThemeMode = (): ThemeMode => {
    if (typeof window === "undefined") return "system";
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    return "system";
  };

  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const resolveLocale = (value: string | null): Locale => {
    if (value === "zh") return "zh";
    return "en";
  };

  const initialLocale = (): Locale => {
    const search = new URL(window.location.href).searchParams.get("lang");
    if (search) return resolveLocale(search);
    const sys = navigator.language?.toLowerCase() ?? "en";
    return sys.startsWith("zh") ? "zh" : "en";
  };

  const [lang, setLang] = useState<Locale>(initialLocale);
  const [themeMode, setThemeMode] = useState<ThemeMode>(getInitialThemeMode);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    return getSystemTheme();
  });

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url);
  }, [lang]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const syncSystemTheme = (event: MediaQueryListEvent | MediaQueryList) => {
      if (themeMode === "system") {
        setTheme(event.matches ? "dark" : "light");
      }
    };

    syncSystemTheme(media);
    media.addEventListener("change", syncSystemTheme);
    return () => media.removeEventListener("change", syncSystemTheme);
  }, [themeMode]);

  useEffect(() => {
    if (themeMode === "system") {
      localStorage.removeItem("theme");
      setTheme(getSystemTheme());
    } else {
      setTheme(themeMode);
      localStorage.setItem("theme", themeMode);
    }
  }, [themeMode]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const lightColor = "#f8fafc";
    const darkColor = "#0d1525";
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    const appleStatusMeta = document.querySelector(
      'meta[name="apple-mobile-web-app-status-bar-style"]'
    );

    themeMeta?.setAttribute(
      "content",
      theme === "dark" ? darkColor : lightColor
    );
    appleStatusMeta?.setAttribute(
      "content",
      theme === "dark" ? "black-translucent" : "default"
    );
  }, [theme]);

  const t = content[lang];
  const ui = uiText[lang];

  const {
    hero,
    highlights,
    skills,
    projects,
    experience,
    education,
    story,
    repos,
  } = t;

  const themeLabel =
    themeMode === "system"
      ? lang === "en"
        ? "System"
        : "跟随系统"
      : themeMode === "light"
      ? lang === "en"
        ? "Light"
        : "浅色"
      : lang === "en"
      ? "Dark"
      : "深色";

  return (
    <div className="relative min-h-screen bg-grid bg-[size:24px_24px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)_/_0.14),transparent_25%),radial-gradient(circle_at_75%_0%,hsl(var(--accent)_/_0.12),transparent_20%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 pb-16 pt-10 sm:gap-12 sm:px-6 md:px-8">
        <header className="sticky top-4 z-10">
          <div className="glass flex flex-wrap items-center justify-between gap-3 rounded-2xl px-5 py-3 md:flex-nowrap">
            <div className="flex min-w-[220px] flex-1 items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{hero.status}</p>
                <p className="text-lg font-semibold text-foreground">
                  {hero.name}
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-wrap items-center justify-end gap-2 md:flex-nowrap">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLang(lang === "en" ? "zh" : "en")}
              >
                {lang === "en" ? "中文" : "English"}
              </Button>
              <div className="relative">
                <Button variant="outline" size="sm" className="gap-2 pr-10">
                  {themeMode === "dark" ? (
                    <Moon className="h-4 w-4" />
                  ) : themeMode === "light" ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Sparkles className="h-4 w-4" />
                  )}
                  {themeLabel}
                  <span className="pointer-events-none absolute right-3 text-muted-foreground">
                    ⌄
                  </span>
                </Button>
                <select
                  aria-label={lang === "en" ? "Theme" : "主题"}
                  value={themeMode}
                  onChange={(event) =>
                    setThemeMode(event.target.value as ThemeMode)
                  }
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                >
                  <option value="system">
                    {lang === "en" ? "System" : "跟随系统"}
                  </option>
                  <option value="light">
                    {lang === "en" ? "Light" : "浅色"}
                  </option>
                  <option value="dark">
                    {lang === "en" ? "Dark" : "深色"}
                  </option>
                </select>
              </div>
              <Button asChild variant="outline" size="sm">
                <a
                  href="https://github.com/marvelsq"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" /> {ui.github}
                </a>
              </Button>
              <Button asChild size="sm">
                <a href={`mailto:${hero.email}`}>
                  <Mail className="mr-2 h-4 w-4" /> {ui.contact}
                </a>
              </Button>
            </div>
          </div>
        </header>

        <main className="flex flex-col gap-10 md:gap-12">
          <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-primary/8" />
              <CardHeader className="relative gap-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{hero.location}</span>
                </div>
                <CardTitle className="text-3xl text-foreground sm:text-4xl md:text-5xl">
                  {hero.role}
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  {hero.headline}
                </CardDescription>
                <div className="mt-3 flex flex-wrap gap-3 text-sm text-muted-foreground">
                  {highlights.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full bg-muted/60 px-4 py-2"
                    >
                      <Sparkles className="h-4 w-4 text-primary" />
                      {item}
                    </span>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="relative flex flex-wrap items-center gap-4 pt-0">
                <Button asChild size="lg">
                  <a href={`mailto:${hero.email}`}>
                    <Mail className="mr-2 h-5 w-5" /> {ui.emailMe}
                  </a>
                </Button>
                <Badge className="flex items-center gap-2 bg-primary/10 text-primary">
                  <Sparkles className="h-4 w-4 text-primary" />
                  {ui.openToWork}
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="gap-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <a
                    className="hover:text-foreground"
                    href={`mailto:${hero.email}`}
                  >
                    {hero.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
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
            <SectionTitle title={ui.skills} eyebrow={ui.sectionLabel} />
            <div className="hidden sm:block">
              <Tabs defaultValue={skills[0]?.title ?? ""} className="w-full">
                <TabsList className="w-full justify-start gap-1 overflow-x-auto -mx-2 px-2 scrollbar-none sm:mx-0 sm:px-0">
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
                          className="rounded-xl border border-border/70 bg-muted/70 px-4 py-3 text-sm text-muted-foreground"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>

            <div className="space-y-3 sm:hidden">
              {skills.map((skill) => (
                <Card
                  key={skill.title}
                  className="border-border/60 bg-card/80 backdrop-blur"
                >
                  <CardHeader className="flex-row items-center justify-between gap-3">
                    <CardTitle className="text-base">{skill.title}</CardTitle>
                    <Badge className="bg-muted text-xs text-muted-foreground">
                      {skill.items.length}
                    </Badge>
                  </CardHeader>
                  <CardContent className="grid gap-2 pt-0">
                    {skill.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-lg border border-border bg-muted/60 px-4 py-2 text-sm text-muted-foreground"
                      >
                        {item}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle
              title={ui.projects}
              eyebrow={ui.sectionLabel}
              icon={<Sparkles className="h-5 w-5" />}
            />
            <div className="section-grid">
              {projects.map((project) => (
                <Card key={project.name} className="flex flex-col">
                  <CardHeader className="gap-3">
                    <CardTitle className="flex items-center justify-between text-foreground">
                      {project.name}
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-normal text-primary hover:text-primary/80"
                        >
                          {ui.viewProject}
                          <ArrowUpRight className="ml-1 inline h-4 w-4" />
                        </a>
                      ) : null}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 text-muted-foreground">
                      <Badge variant="outline" className="text-xs">
                        {project.role}
                      </Badge>
                      <span>•</span>
                      <span>{project.period}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col gap-4 text-muted-foreground">
                    <p className="leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <Badge key={item} className="bg-muted text-foreground">
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
              title={ui.experience}
              eyebrow={ui.sectionLabel}
              icon={<Briefcase className="h-5 w-5" />}
            />
            <div className="flex flex-col gap-4">
              {experience.map((item) => (
                <Card key={item.company + item.period}>
                  <CardHeader className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-4">
                    <div className="space-y-1.5">
                      <CardTitle className="text-foreground">
                        {item.company}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {item.role}
                      </CardDescription>
                    </div>
                    <Badge className="bg-muted text-foreground">
                      {item.period}
                    </Badge>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {item.details.map((detail) => (
                        <li key={detail} className="flex gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
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
                title={ui.education}
                eyebrow={ui.sectionLabel}
                icon={<GraduationCap className="h-5 w-5" />}
              />
              <div className="flex flex-col gap-4">
                {education.map((edu) => (
                  <Card key={edu.school}>
                    <CardHeader>
                      <CardTitle className="text-foreground">
                        {edu.school}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {edu.focus}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <Badge className="bg-muted text-foreground">
                        {edu.degree}
                      </Badge>
                      <span>{edu.period}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-transparent to-primary/12" />
              <CardHeader className="relative">
                <SectionTitle title={ui.path} eyebrow={ui.sectionLabel} />
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {story}
                </CardDescription>
              </CardHeader>
            </Card>
          </section>
        </main>

        <footer className="pb-4 text-center text-sm text-muted-foreground">
          {ui.footer}
        </footer>
      </div>
    </div>
  );
}

export default App;
