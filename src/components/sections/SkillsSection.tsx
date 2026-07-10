"use client";

import type { ComponentType, SVGProps } from "react";
import type { LucideIcon } from "lucide-react";
import {
	Atom,
	Code,
	Database,
	FileCode,
	GitBranch,
	Paintbrush,
} from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { FaAngular } from "react-icons/fa";
import { TbBrain, TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssFill, } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { IoLogoJavascript, IoIosCloudDone } from "react-icons/io";
import { SiDocker, SiFastify, SiNestjs, SiVitess } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { TbBrandSpeedtest } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";
import { SectionHeader } from "@/components/sections/SectionHeader";

type AnyIcon = LucideIcon | ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

const skills: { icon: AnyIcon; label: string }[] = [
	{ icon: Atom, label: "React" },
	{ icon: TbBrandNextjs, label: "Next.js" },
	{ icon: FaAngular, label: "Angular" },
	{ icon: FileCode, label: "TypeScript" },
	{ icon: RiTailwindCssFill, label: "Tailwind" },
	{ icon: FaNodeJs, label: "Node.js" },
	{ icon: SiNestjs, label: "NestJS" },
	{ icon: SiDocker, label: "Docker" },
	{ icon: SiFastify, label: "Fastify" },
	{ icon: Database, label: "PostgreSQL" },
	{ icon: Code, label: "HTML" },
	{ icon: Paintbrush, label: "CSS-in-JS" },
	{ icon: IoLogoJavascript, label: "JavaScript" },
	{ icon: GitBranch, label: "Git" },
	{ icon: IoSettingsSharp, label: "Rest API" },
	{ icon: GrGraphQl, label: "GraphQL" },
	{ icon: SiVitess, label: "Vite" },
	{ icon: TbBrandSpeedtest, label: "Testing" },
	{ icon: IoIosCloudDone, label: "AWS" },
	{ icon: TbBrain, label: "AI Tooling" },
];

function SkillsSection() {
	const t = useTranslations("skills");

	return (
		<section id="skills" className="px-30 py-20">
			<SectionHeader badge={t("badge")} title={t("title")} description={t("description")} />

			<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
				{skills.map(({ icon: Icon, label }, i) => (
					<SkillCard key={label} icon={Icon} label={label} index={i} />
				))}
			</div>
		</section>
	);
}

function SkillCard({ icon: Icon, label, index }: { icon: AnyIcon; label: string; index: number }) {
	return (
		<motion.div
			className="group relative flex h-30 flex-col items-center justify-center gap-4 rounded-xl border border-border bg-card p-6"
			initial={{ opacity: 0, x: -32 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.4, delay: index * 0.07, ease: "easeOut" }}
			viewport={{ once: true, margin: "-60px" }}
		>
			<div className="absolute inset-0 rounded-xl bg-linear-to-br from-emerald-900/60 via-slate-800 to-slate-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
			<Icon className="relative size-8 text-muted-foreground transition-colors duration-300 group-hover:text-primary" strokeWidth={1.5} />
			<span className="relative text-[13px] font-medium text-card-foreground">{label}</span>
		</motion.div>
	);
}

export { SkillsSection };
