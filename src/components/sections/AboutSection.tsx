"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Fragment } from "react";
import { Badge } from "@/components/ui/badge";

function AboutSection() {
	const t = useTranslations("about");

	const stats = [
		{ value: "50+", label: t("stats.projects") },
		{ value: "5+", label: t("stats.experience") },
		{ value: "20+", label: t("stats.clients") },
	];

	return (
		<section className="bg-surface px-30 py-20">
			{/* Header */}
			<div className="mb-16 flex flex-col items-center gap-4">
				<Badge variant="outline" className="bg-primary/[0.07]">
					{t("badge")}
				</Badge>
				<h2 className="text-[48px] font-bold leading-tight text-foreground">{t("title")}</h2>
			</div>

			{/* Content */}
			<div className="flex items-start gap-20">
				{/* Left: foto */}
				<div className="w-full">
					<div className="relative h-105 w-full overflow-hidden rounded-xl bg-card">
						{/* Substitua por sua foto em /public/about-photo.jpg */}
						<Image src="/about-photo.jpg" alt="Developer at work" fill className="object-cover" />
					</div>
				</div>

				{/* Right: bio + stats */}
				<div className="flex w-full flex-col gap-8">
					<p className="text-base leading-[1.7] text-muted-foreground">{t("bio1")}</p>
					<p className="text-base leading-[1.7] text-muted-foreground">{t("bio2")}</p>

					{/* Stats */}
					<div className="flex items-center gap-8">
						{stats.map((stat, i) => (
							<Fragment key={stat.label}>
								{i > 0 && <div className="h-12 w-px bg-white/10" />}
								<div className="flex flex-col gap-1.5">
									<span className="text-[36px] font-bold leading-none text-primary">
										{stat.value}
									</span>
									<span className="font-mono text-[11px] font-semibold text-muted-foreground">
										{stat.label}
									</span>
								</div>
							</Fragment>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export { AboutSection };
