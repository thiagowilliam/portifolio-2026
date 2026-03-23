const navLinks = [
	{ label: "Home", href: "#" },
	{ label: "About", href: "#about" },
	{ label: "Projects", href: "#projects" },
	{ label: "Contact", href: "#contact" },
];

function Footer() {
	return (
		<footer className="border-t border-border px-[120px] py-8">
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
			<p className="mt-6 text-center font-mono text-xs text-muted-foreground">
				© 2025 devPortfolio. Built with Next.js & Tailwind CSS.
			</p>
		</footer>
	);
}

export { Footer };
