"use client";

import { ExternalLink, Github } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projectData = [
	{
		tags: ["Next.js", "TypeScript", "Tailwind"],
		gradient: "from-violet-900/60 via-slate-800 to-slate-900",
		href: "#",
		repo: "#",
	},
	{
		tags: ["React", "Angular", "TailwindCSS"],
		gradient: "from-cyan-900/60 via-slate-800 to-slate-900",
		href: "#",
		repo: "#",
	},
	{
		tags: ["Next.js", "Tailwind", "MDX"],
		gradient: "from-emerald-900/60 via-slate-800 to-slate-900",
		href: "#",
		repo: "#",
	},
];

function ProjectsSection() {
	const t = useTranslations("projects");
	const items = t.raw("items") as Array<{ title: string; description: string }>;

	return (
		<section id="projects" className="px-30 py-20">
			<SectionHeader badge={t("badge")} title={t("title")} description={t("description")} />

			{/* Cards */}
			<div className="grid grid-cols-3 gap-6">
				{items.map((project, i) => {
					const data = projectData[i];
					return (
						<article
							key={project.title}
							className="flex flex-col overflow-hidden rounded-xl border border-border bg-card"
						>
							{/* Image placeholder */}
							<div
								className={`h-48 bg-linear-to-br ${data?.gradient} flex items-center justify-center`}
							>
								<div className="size-16 rounded-xl bg-white/5 backdrop-blur-sm" />
							</div>

							{/* Content */}
							<div className="flex flex-1 flex-col p-6">
								<h3 className="text-base font-semibold text-card-foreground">{project.title}</h3>
								<p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
									{project.description}
								</p>
								<div className="mt-4 flex flex-wrap gap-2">
									{data?.tags.map((tag) => (
										<Badge key={tag} variant="outline" className="text-[10px]">
											{tag}
										</Badge>
									))}
								</div>
								<div className="mt-6 flex gap-3">
									<Button size="sm" asChild>
										<a href={data?.href} target="_blank" rel="noreferrer">
											<ExternalLink className="size-3.5" />
											{t("view")}
										</a>
									</Button>
									<Button size="sm" variant="accent-outline" asChild>
										<a href={data?.repo} target="_blank" rel="noreferrer">
											<Github className="size-3.5" />
											{t("source")}
										</a>
									</Button>
								</div>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
}

export { ProjectsSection };
