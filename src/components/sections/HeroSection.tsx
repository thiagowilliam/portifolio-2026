"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

function HeroSection() {
	const t = useTranslations("hero");

	return (
		<section id="home" className="flex flex-col items-center gap-8 px-30 pb-30 pt-25">
			<p aria-hidden="true" className="font-mono text-sm font-medium text-[#64748B]">
				$ whoami
			</p>

			<h1 className="flex flex-col items-center gap-2 text-[56px] font-bold leading-tight">
				<span className="text-foreground">{t("greeting")}</span>
				<span className="text-primary">{t("role")}</span>
			</h1>

			<p className="max-w-175 text-center text-lg leading-relaxed text-muted-foreground">
				{t("description")}
			</p>

			<div className="flex items-center gap-4">
				<Button
					variant="default"
					className="px-7 py-3 font-mono text-[13px] font-semibold tracking-[0.05em]"
				>
					{t("cta_work")}
				</Button>
				<Button
					variant="accent-outline"
					className="px-7 py-3 font-mono text-[13px] font-semibold tracking-[0.05em]"
				>
					{t("cta_contact")}
				</Button>
			</div>
		</section>
	);
}

export { HeroSection };
