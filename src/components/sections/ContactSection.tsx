"use client";

import { Github, Linkedin, Mail, MapPin, MessageCircle, Twitter } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Button } from "@/components/ui/button";

function ContactSection() {
	const t = useTranslations("contact");

	const infoCards = [
		{
			icon: Mail,
			label: t("email_label"),
			value: "hello@devportfolio.com",
			href: "mailto:hello@devportfolio.com",
			socials: null,
		},
		{
			icon: MapPin,
			label: t("location_label"),
			value: t("location_value"),
			href: null,
			socials: null,
		},
		{
			icon: Github,
			label: t("social_label"),
			value: null,
			href: null,
			socials: [
				{ icon: Github, href: "https://github.com", label: "GitHub" },
				{ icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
				{ icon: Twitter, href: "https://twitter.com", label: "Twitter" },
			],
		},
	];

	return (
		<section id="contact" className="bg-surface px-30 py-20">
			<SectionHeader badge={t("badge")} title={t("title")} description={t("description")} />

			{/* Info cards */}
			<div className="grid grid-cols-3 gap-4">
				{infoCards.map((card) => (
					<div
						key={card.label}
						className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6"
					>
						<div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
							<card.icon className="size-5 text-primary" strokeWidth={1.5} />
						</div>
						<div>
							<p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
								{card.label}
							</p>
							{card.socials ? (
								<div className="mt-2 flex gap-3">
									{card.socials.map((s) => (
										<a
											key={s.label}
											href={s.href}
											target="_blank"
											rel="noreferrer"
											aria-label={s.label}
											className="text-muted-foreground transition-colors hover:text-primary"
										>
											<s.icon className="size-5" strokeWidth={1.5} />
										</a>
									))}
								</div>
							) : card.href ? (
								<a
									href={card.href}
									className="mt-1 block text-sm text-foreground transition-colors hover:text-primary"
								>
									{card.value}
								</a>
							) : (
								<p className="mt-1 text-sm text-foreground">{card.value}</p>
							)}
						</div>
					</div>
				))}
			</div>

			{/* WhatsApp CTA */}
			<div className="mt-4 flex items-center justify-between rounded-xl bg-primary p-6">
				<div className="flex items-center gap-4">
					<div className="flex size-12 items-center justify-center rounded-xl bg-white/20">
						<MessageCircle className="size-6 text-white" strokeWidth={1.5} />
					</div>
					<div>
						<p className="font-semibold text-[#0A0F1C]">{t("whatsapp_title")}</p>
						<p className="text-sm text-[#0A0F1C]/70">{t("whatsapp_description")}</p>
					</div>
				</div>
				<Button className="shrink-0 bg-white/20 text-[#0A0F1C] hover:bg-white/30" asChild>
					<a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">
						{t("whatsapp_cta")}
					</a>
				</Button>
			</div>
		</section>
	);
}

export { ContactSection };
