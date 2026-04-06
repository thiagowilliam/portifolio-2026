"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const TYPING_DELAY = 600;
const TYPING_SPEED = 80;
const DELETING_SPEED = 45;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 400;

function TypingName({ name }: { name: string }) {
	const [displayed, setDisplayed] = useState("");
	const [phase, setPhase] = useState<"idle" | "typing" | "paused" | "deleting">("idle");

	useEffect(() => {
		const delay = setTimeout(() => setPhase("typing"), TYPING_DELAY);
		return () => clearTimeout(delay);
	}, []);

	useEffect(() => {
		if (phase === "typing") {
			if (displayed.length < name.length) {
				const t = setTimeout(() => setDisplayed(name.slice(0, displayed.length + 1)), TYPING_SPEED);
				return () => clearTimeout(t);
			}
			const t = setTimeout(() => setPhase("paused"), PAUSE_AFTER_TYPE);
			return () => clearTimeout(t);
		}

		if (phase === "paused") {
			const t = setTimeout(() => setPhase("deleting"), 0);
			return () => clearTimeout(t);
		}

		if (phase === "deleting") {
			if (displayed.length > 0) {
				const t = setTimeout(() => setDisplayed((d) => d.slice(0, -1)), DELETING_SPEED);
				return () => clearTimeout(t);
			}
			const t = setTimeout(() => setPhase("typing"), PAUSE_AFTER_DELETE);
			return () => clearTimeout(t);
		}
	}, [phase, displayed, name]);

	return (
		<span className="relative inline-flex items-baseline">
			<span className="text-foreground">{displayed}</span>
			<motion.span
				aria-hidden="true"
				className="ml-0.5 inline-block h-[0.85em] w-0.75 translate-y-px rounded-sm bg-foreground"
				animate={{ opacity: [1, 0] }}
				transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "linear" }}
			/>
		</span>
	);
}

function HeroSection() {
	const t = useTranslations("hero");

	return (
		<section id="home" className="flex flex-col items-center gap-8 px-30 pb-30 pt-25">
			<p aria-hidden="true" className="font-mono text-sm font-medium text-[#64748B]">
				$ whoami
			</p>

			<h1 className="flex flex-col items-center gap-2 text-[56px] font-bold leading-tight">
				<span className="text-foreground">
					{t("greeting_prefix")}
					<TypingName name={t("greeting_name")} />
				</span>
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
