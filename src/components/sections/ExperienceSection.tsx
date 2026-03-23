import { Badge } from "@/components/ui/badge";

const experiences = [
	{
		period: "2022 – Present",
		company: "TeakData Solutions",
		title: "Senior Frontend Developer",
		description:
			"Led frontend architecture migration from Angular to React, improving performance by 40%. Built reusable component libraries with TypeScript and Tailwind CSS. Mentored junior developers and established code standards and best practices.",
		tags: ["Next.js", "TypeScript", "TailwindCSS", "Micro-frontends"],
	},
	{
		period: "2021 – 2022",
		company: "Digital Agency Plus",
		title: "Frontend Developer",
		description:
			"Developed responsive web applications using React and Angular for clients in fintech and e-commerce. Implemented design systems with Tailwind CSS, reducing development time by 30%. Collaborated with UX designers to deliver pixel-perfect interfaces.",
		tags: ["React", "Angular", "TailwindCSS"],
	},
	{
		period: "2019 – 2021",
		company: "Startups Brazil",
		title: "Junior Frontend Developer",
		description:
			"Built interactive user interfaces with React and JavaScript for early-stage startups. Integrated REST APIs, implemented responsive layouts, and contributed to improving web accessibility standards across multiple products.",
		tags: ["React", "JavaScript", "CSS"],
	},
];

function ExperienceSection() {
	return (
		<section className="bg-surface px-[120px] py-[80px]">
			{/* Header */}
			<div className="mb-16 flex flex-col items-center gap-3">
				<Badge variant="outline" className="bg-primary/[0.07]">
					Experience
				</Badge>
				<h2 className="text-[48px] font-bold leading-tight text-foreground">
					Professional Experience
				</h2>
				<p className="max-w-xl text-center text-base text-muted-foreground">
					My journey building modern web applications across different companies and industries
				</p>
			</div>

			{/* Timeline */}
			<div className="relative mx-auto max-w-[900px]">
				<div className="absolute bottom-3 left-[172px] top-3 w-px bg-border" />

				{experiences.map((exp) => (
					<div key={exp.company} className="flex gap-6 pb-12 last:pb-0">
						{/* Left: period + company */}
						<div className="w-40 shrink-0 pt-1 text-right">
							<p className="font-mono text-[11px] text-muted-foreground">{exp.period}</p>
							<p className="mt-1 font-mono text-[11px] font-bold text-primary">{exp.company}</p>
						</div>

						{/* Dot */}
						<div className="relative z-10 mt-[5px] shrink-0">
							<div className="size-3 rounded-full bg-primary ring-4 ring-surface" />
						</div>

						{/* Card */}
						<div className="flex-1 rounded-xl border border-border bg-card p-6">
							<h3 className="text-base font-semibold text-foreground">{exp.title}</h3>
							<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
								{exp.description}
							</p>
							<div className="mt-4 flex flex-wrap gap-2">
								{exp.tags.map((tag) => (
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
