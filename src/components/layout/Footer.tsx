"use client";

import { useTranslations } from "next-intl";

function Footer() {
	const t = useTranslations("footer");

	const navLinks = [
		{ label: t("home"), href: "#" },
		{ label: t("about"), href: "#about" },
		{ label: t("projects"), href: "#projects" },
		{ label: t("contact"), href: "#contact" },
	];

	return (
		<footer className="border-t border-border px-30 py-8">
			<div className="flex items-center justify-between">
				{/* Logo */}
				<a href="/" className="flex items-center gap-2">
					<span className="font-mono text-sm font-bold text-primary">{"</>"}</span>
					<span className="font-mono text-sm font-semibold text-foreground">dev.portfolio</span>
				</a>

				{/* Nav */}
				<nav className="flex items-center gap-8">
					{navLinks.map((link) => (
						<a
							key={link.label}
							href={link.href}
							className="text-sm text-muted-foreground transition-colors hover:text-foreground"
						>
							{link.label}
						</a>
					))}
				</nav>
			</div>

			{/* Copyright */}
			<p className="mt-6 text-center font-mono text-xs text-muted-foreground">{t("copyright")}</p>
		</footer>
	);
}

export { Footer };
