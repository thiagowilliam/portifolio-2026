import { Globe } from "lucide-react";

const NAV_LINKS = [
	{ label: "Home", href: "#", active: true },
	{ label: "About", href: "#about", active: false },
	{ label: "Projects", href: "#projects", active: false },
	{ label: "Skills", href: "#skills", active: false },
	{ label: "Contact", href: "#contact", active: false },
];

function Navbar() {
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

				<div className="flex flex-row items-center gap-2 rounded-md bg-muted px-2.5 py-1.5">
					<Globe size={14} className="text-muted-foreground" />
					<span className="font-mono text-[10px] font-semibold tracking-[0.1em] text-primary">
						PT-BR
					</span>
					<span className="text-[#475569]">/</span>
					<span className="font-mono text-[10px] font-medium tracking-[0.1em] text-[#64748B]">
						EN
					</span>
				</div>
			</nav>
		</header>
	);
}

export { Navbar };
