"use client";

import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Fragment } from "react";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Button } from "@/components/ui/button";

function AboutSection() {
	const t = useTranslations("about");

	const stats = [{ value: "9+", label: t("stats.experience") }];

	return (
		<section id="about" className="bg-surface px-30 py-20">
			<SectionHeader badge={t("badge")} title={t("title")} />

			{/* Content */}
			<div className="flex items-start gap-20">
				{/* Left: foto */}
				<div className="w-full">
					<div className="relative h-105 w-full overflow-hidden rounded-xl bg-card">
						<Image src="/about-photo.jpeg" alt="Developer at work" fill className="object-cover" />
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

					{/* CTA + Social */}
					<div className="flex items-center gap-3">
						<Button asChild>
							<a href="#contact">{t("contactButton")}</a>
						</Button>
						<Button variant="outline" size="icon" asChild>
							<a href="https://github.com/thiagowilliam" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
								<Github />
							</a>
						</Button>
						<Button variant="outline" size="icon" asChild>
							<a href="https://www.linkedin.com/in/thiago-william/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
								<Linkedin />
							</a>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}

export { AboutSection };
