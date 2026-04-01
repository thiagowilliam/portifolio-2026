"use client";

import { Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLocaleToggle } from "@/components/providers/LocaleProvider";

function Navbar() {
	const t = useTranslations("navbar");
	const { locale, toggleLocale } = useLocaleToggle();

	const NAV_LINKS = [
		{ label: t("home"), href: "#", active: true },
		{ label: t("about"), href: "#about", active: false },
		{ label: t("projects"), href: "#projects", active: false },
		{ label: t("skills"), href: "#skills", active: false },
		{ label: t("contact"), href: "#contact", active: false },
	];

	return (
		<header className="w-full border-b border-muted">
			<nav className="mx-auto flex max-w-7xl items-center justify-between px-12 py-4">
				<span className="font-mono text-[18px] font-bold text-primary">{"<dev.folio/>"}</span>

				<ul className="flex flex-row gap-8">
					{NAV_LINKS.map((link) => (
						<li key={link.href}>
							<a
								href={link.href}
								{...(link.active ? { "aria-current": "page" as const } : {})}
								className={
									link.active
										? "font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-primary"
										: "font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
								}
							>
								{link.label}
							</a>
						</li>
					))}
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
			</nav>
		</header>
	);
}

export { Navbar };
