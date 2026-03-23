import { Github, Linkedin, Mail, MapPin, MessageCircle, Twitter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const infoCards = [
	{
		icon: Mail,
		label: "Email",
		value: "hello@devportfolio.com",
		href: "mailto:hello@devportfolio.com",
	},
	{
		icon: MapPin,
		label: "Location",
		value: "São Paulo, Brazil",
		href: null,
	},
	{
		icon: Github,
		label: "Social",
		value: "GitHub · LinkedIn · Twitter",
		href: null,
		socials: [
			{ icon: Github, href: "https://github.com", label: "GitHub" },
			{ icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
			{ icon: Twitter, href: "https://twitter.com", label: "Twitter" },
		],
	},
];

function ContactSection() {
	return (
		<section id="contact" className="bg-surface px-[120px] py-[80px]">
			{/* Header */}
			<div className="mb-16 flex flex-col items-center gap-3">
				<Badge variant="outline" className="bg-primary/[0.07]">
					Contact
				</Badge>
				<h2 className="text-[48px] font-bold leading-tight text-foreground">
					Let&apos;s Work Together
				</h2>
				<p className="max-w-lg text-center text-base text-muted-foreground">
					Have a project in mind? Let&apos;s work together to build something amazing.
				</p>
			</div>

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
						<p className="font-semibold text-[#0A0F1C]">WhatsApp</p>
						<p className="text-sm text-[#0A0F1C]/70">
							Prefere conversar pelo WhatsApp? Me chame para uma resposta mais rápida!
						</p>
					</div>
				</div>
				<Button className="shrink-0 bg-white/20 text-[#0A0F1C] hover:bg-white/30" asChild>
					<a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">
						Iniciar conversa
					</a>
				</Button>
			</div>
		</section>
	);
}

export { ContactSection };
