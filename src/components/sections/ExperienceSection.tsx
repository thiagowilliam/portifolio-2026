"use client";

import { Download, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const experienceTags = [
	["React", "TypeScript", "Context API", "React Query", "Vite", "Figma", "Ant Design UI", "RESTful APIs", "React Testing Library", "Git", "NestJS", "PostgreSQL", "Keycloak"],
	[ "Angular V13",  "TypeScript", "Figma", "RESTful APIs", "Jasmine", "Jest", "Storybook", "Git"],
	["React", "TypeScript", "Redux", "Figma", "Semantic UI", "RESTful APIs", "React Testing Library", "Git"],
];

function ExperienceSection() {
	const t = useTranslations("experience");
	const items = t.raw("items") as Array<{
		period: string;
		company: string;
		title: string;
		description: string;
	}>;

	return (
		<section id="experience" className="bg-surface px-30 py-20">
			<SectionHeader badge={t("badge")} title={t("title")} description={t("description")} />

			{/* Timeline */}
			<div className="relative mx-auto max-w-225">
				<div className="absolute bottom-3 left-43 top-3 w-px bg-border" />

				{items.map((exp, i) => (
					<div key={exp.company} className="flex gap-6 pb-12 last:pb-0">
						{/* Left: period + company */}
						<div className="w-40 shrink-0 pt-1 text-right">
							<p className="font-mono text-[11px] text-muted-foreground">{exp.period}</p>
							<p className="mt-1 font-mono text-[11px] font-bold text-primary">{exp.company}</p>
						</div>

						{/* Dot */}
						<div className="relative z-10 mt-1.25 shrink-0">
							<div className="size-3 rounded-full bg-primary ring-4 ring-surface" />
						</div>

						{/* Card */}
						<div className="flex-1 rounded-xl border border-border bg-card p-6">
							<h3 className="text-base font-semibold text-foreground">{exp.title}</h3>
							<p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
								{exp.description}
							</p>
							<div className="mt-4 flex flex-wrap gap-2">
								{experienceTags[i]?.map((tag) => (
									<Badge key={tag} variant="outline" className="text-[10px]">
										{tag}
									</Badge>
								))}
							</div>
						</div>
					</div>
				))}
			</div>

			{/* CTA buttons */}
			<div className="mx-auto mt-12 flex max-w-225 justify-end gap-3">
				<Button variant="outline" asChild>
					<a href="https://www.linkedin.com/in/thiago-william" target="_blank" rel="noopener noreferrer">
						<Linkedin />
						{t("linkedinButton")}
					</a>
				</Button>
				<Button asChild>
					<a href="/resume-thiago-william-fullstack.pdf" download>
						<Download />
						{t("downloadButton")}
					</a>
				</Button>
			</div>
		</section>
	);
}

export { ExperienceSection };
