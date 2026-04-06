"use client";

import { Globe } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useLocaleToggle } from "@/components/providers/LocaleProvider";

const SECTION_IDS = ["home", "about", "skills", "experience", "projects", "contact"];

function useActiveSection() {
	const [activeSection, setActiveSection] = useState("home");

	useEffect(() => {
		const observers: IntersectionObserver[] = [];

		for (const id of SECTION_IDS) {
			const el = document.getElementById(id);
			if (!el) continue;

			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) setActiveSection(id);
				},
				{ rootMargin: "-40% 0px -55% 0px", threshold: 0 },
			);

			observer.observe(el);
			observers.push(observer);
		}

		return () => { for (const o of observers) o.disconnect(); };
	}, []);

	return { activeSection, setActiveSection };
}

function Navbar() {
	const t = useTranslations("navbar");
	const { locale, toggleLocale } = useLocaleToggle();
	const { scrollY } = useScroll();
	const { activeSection, setActiveSection } = useActiveSection();

	function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string, sectionId: string) {
		e.preventDefault();
		setActiveSection(sectionId);
		if (href === "#") {
			window.scrollTo({ top: 0, behavior: "smooth" });
			return;
		}
		document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
	}

	const backgroundColor = useTransform(
		scrollY,
		[0, 80],
		["rgba(10,15,28,0)", "rgba(10,15,28,0.85)"],
	);
	const backdropBlur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(16px)"]);
	const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);
	const paddingY = useTransform(scrollY, [0, 80], [16, 10]);

	const NAV_LINKS = [
		{ label: t("home"), href: "#", sectionId: "home" },
		{ label: t("about"), href: "#about", sectionId: "about" },
		{ label: t("skills"), href: "#skills", sectionId: "skills" },
		{ label: t("projects"), href: "#projects", sectionId: "projects" },
		{ label: t("contact"), href: "#contact", sectionId: "contact" },
	];

	return (
		<motion.header
			className="fixed top-0 right-0 left-0 z-50 w-full"
			style={{
				backgroundColor,
				backdropFilter: backdropBlur,
				WebkitBackdropFilter: backdropBlur,
			}}
		>
			<motion.div
				className="absolute inset-x-0 bottom-0 h-px bg-white/10"
				style={{ opacity: borderOpacity }}
			/>
			<motion.nav
				className="mx-auto flex max-w-7xl items-center justify-between px-12"
				style={{ paddingTop: paddingY, paddingBottom: paddingY }}
			>
				<span className="font-mono text-[18px] font-bold text-primary">{"<dev.folio/>"}</span>

				<ul className="flex flex-row gap-8">
					{NAV_LINKS.map((link) => {
						const isActive = activeSection === link.sectionId;
						return (
							<li key={link.href}>
								<a
									href={link.href}
									onClick={(e) => handleNavClick(e, link.href, link.sectionId)}
									{...(isActive ? { "aria-current": "page" as const } : {})}
									className={
										isActive
											? "font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-primary transition-colors"
											: "font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
									}
								>
									{link.label}
								</a>
							</li>
						);
					})}
				</ul>

				<button
					type="button"
					onClick={toggleLocale}
					className="flex cursor-pointer flex-row items-center gap-2 rounded-md bg-muted px-2.5 py-1.5 transition-opacity hover:opacity-80"
					aria-label="Toggle language"
				>
					<Globe size={14} className="text-muted-foreground" />
					<span
						className={`font-mono text-[10px] font-semibold tracking-widest transition-colors ${
							locale === "pt-BR" ? "text-primary" : "text-muted-foreground"
						}`}
					>
						PT-BR
					</span>
					<span className="text-[#475569]">/</span>
					<span
						className={`font-mono text-[10px] font-medium tracking-widest transition-colors ${
							locale === "en" ? "text-primary" : "text-muted-foreground"
						}`}
					>
						EN
					</span>
				</button>
			</motion.nav>
		</motion.header>
	);
}

export { Navbar };
