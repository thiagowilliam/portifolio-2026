"use client";

import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";

const experienceTags = [
	["Next.js", "TypeScript", "TailwindCSS", "Micro-frontends"],
	["React", "Angular", "TailwindCSS"],
	["React", "JavaScript", "CSS"],
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
		<section className="bg-surface px-30 py-20">
			{/* Header */}
			<div className="mb-16 flex flex-col items-center gap-3">
				<Badge variant="outline" className="bg-primary/[0.07]">
					{t("badge")}
				</Badge>
				<h2 className="text-[48px] font-bold leading-tight text-foreground">{t("title")}</h2>
				<p className="max-w-xl text-center text-base text-muted-foreground">{t("description")}</p>
			</div>

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
							<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
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
		</section>
	);
}

export { ExperienceSection };
