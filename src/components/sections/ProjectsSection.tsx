import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
	{
		title: "E-Commerce Dashboard",
		description:
			"A comprehensive analytics dashboard built with Next.js and TypeScript. Features data visualization, responsive design, and admin route management.",
		tags: ["Next.js", "TypeScript", "Tailwind"],
		gradient: "from-violet-900/60 via-slate-800 to-slate-900",
		href: "#",
		repo: "#",
	},
	{
		title: "Task Management App",
		description:
			"A collaborative task management platform built with React and Angular. Features drag-and-drop kanban boards, real-time updates, and team collaboration.",
		tags: ["React", "Angular", "TailwindCSS"],
		gradient: "from-cyan-900/60 via-slate-800 to-slate-900",
		href: "#",
		repo: "#",
	},
	{
		title: "Dev Blog Platform",
		description:
			"A developer blog platform with MDX support, built with Next.js. Features syntax highlighting, SEO optimization, and a custom CMS with Tailwind CSS styling.",
		tags: ["Next.js", "Tailwind", "MDX"],
		gradient: "from-emerald-900/60 via-slate-800 to-slate-900",
		href: "#",
		repo: "#",
	},
];

function ProjectsSection() {
	return (
		<section className="px-[120px] py-[80px]">
			{/* Header */}
			<div className="mb-16 flex flex-col items-center gap-3">
				<Badge variant="outline" className="bg-primary/[0.07]">
					Projects
				</Badge>
				<h2 className="text-[48px] font-bold leading-tight text-foreground">Featured Work</h2>
				<p className="text-base text-muted-foreground">
					A selection of projects that showcase my expertise in modern frontend development
				</p>
			</div>

			{/* Cards */}
			<div className="grid grid-cols-3 gap-6">
				{projects.map((project) => (
					<article
						key={project.title}
						className="flex flex-col overflow-hidden rounded-xl border border-border bg-card"
					>
						{/* Image placeholder */}
						<div
							className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
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
								{project.tags.map((tag) => (
									<Badge key={tag} variant="outline" className="text-[10px]">
										{tag}
									</Badge>
								))}
							</div>
							<div className="mt-6 flex gap-3">
								<Button size="sm" asChild>
									<a href={project.href} target="_blank" rel="noreferrer">
										<ExternalLink className="size-3.5" />
										View Project
									</a>
								</Button>
								<Button size="sm" variant="accent-outline" asChild>
									<a href={project.repo} target="_blank" rel="noreferrer">
										<Github className="size-3.5" />
										Source Code
									</a>
								</Button>
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}

export { ProjectsSection };
