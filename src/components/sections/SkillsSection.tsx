"use client";

import type { LucideIcon } from "lucide-react";
import {
	Atom,
	Braces,
	Code,
	Database,
	FileCode,
	GitBranch,
	Globe,
	Paintbrush,
	Server,
	Wind,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";

const skills: { icon: LucideIcon; label: string }[] = [
	{ icon: Atom, label: "React" },
	{ icon: Globe, label: "Next.js" },
	{ icon: FileCode, label: "TypeScript" },
	{ icon: Wind, label: "Tailwind" },
	{ icon: Server, label: "Node.js" },
	{ icon: Code, label: "HTML" },
	{ icon: Paintbrush, label: "CSS" },
	{ icon: Braces, label: "JavaScript" },
	{ icon: GitBranch, label: "Git" },
	{ icon: Database, label: "PostgreSQL" },
];

function SkillsSection() {
	const t = useTranslations("skills");

	return (
		<section id="skills" className="px-30 py-20">
			{/* Header */}
			<div className="mb-16 flex flex-col items-center gap-3">
				<Badge variant="outline" className="bg-primary/[0.07]">
					{t("badge")}
				</Badge>
				<h2 className="text-[48px] font-bold leading-tight text-foreground">{t("title")}</h2>
				<p className="text-base text-muted-foreground">{t("description")}</p>
			</div>

			{/* Grid 5×2 */}
			<div className="flex flex-col gap-4">
				<div className="grid grid-cols-5 gap-4">
					{skills.slice(0, 5).map(({ icon: Icon, label }) => (
						<SkillCard key={label} icon={Icon} label={label} />
					))}
				</div>
				<div className="grid grid-cols-5 gap-4">
					{skills.slice(5).map(({ icon: Icon, label }) => (
						<SkillCard key={label} icon={Icon} label={label} />
					))}
				</div>
			</div>
		</section>
	);
}

function SkillCard({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
	return (
		<div className="flex h-30 flex-col items-center justify-center gap-4 rounded-xl border border-border bg-card p-6">
			<Icon className="size-8 text-primary" strokeWidth={1.5} />
			<span className="text-[13px] font-medium text-card-foreground">{label}</span>
		</div>
	);
}

export { SkillsSection };
