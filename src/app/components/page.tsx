import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardBody,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<section className="flex flex-col gap-6">
			<h2 className="border-b border-border pb-3 text-lg font-semibold">{title}</h2>
			{children}
		</section>
	);
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
	return (
		<div className="flex flex-col gap-2">
			<span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
				{label}
			</span>
			<div className="flex flex-wrap items-center gap-3">{children}</div>
		</div>
	);
}

export default function ComponentsPage() {
	return (
		<main className="min-h-screen bg-background px-8 py-12">
			<div className="mx-auto flex max-w-4xl flex-col gap-16">
				<div className="flex flex-col gap-1">
					<h1 className="text-3xl font-bold">UI Components</h1>
					<p className="text-sm text-muted-foreground">
						Showcase de todos os componentes e suas variantes.
					</p>
				</div>

				{/* ── Button ─────────────────────────────────────────── */}
				<Section title="Button">
					<Row label="Variantes">
						<Button variant="default">Default</Button>
						<Button variant="secondary">Secondary</Button>
						<Button variant="outline">Outline</Button>
						<Button variant="ghost">Ghost</Button>
						<Button variant="destructive">Destructive</Button>
						<Button variant="link">Link</Button>
					</Row>

					<Row label="Tamanhos">
						<Button size="sm">Small</Button>
						<Button size="default">Default</Button>
						<Button size="lg">Large</Button>
					</Row>

					<Row label="Ícones">
						<Button size="icon-sm" aria-label="Ícone pequeno">
							<ArrowIcon />
						</Button>
						<Button size="icon" aria-label="Ícone médio">
							<ArrowIcon />
						</Button>
						<Button size="icon-lg" aria-label="Ícone grande">
							<ArrowIcon />
						</Button>
					</Row>

					<Row label="Estados">
						<Button disabled>Disabled</Button>
						<Button variant="outline" disabled>
							Disabled Outline
						</Button>
					</Row>
				</Section>

				{/* ── Badge ─────────────────────────────────────────── */}
				<Section title="Badge">
					<Row label="Filled — labels de seção">
						<Badge>About</Badge>
						<Badge>Skills</Badge>
						<Badge>Experience</Badge>
						<Badge>Projects</Badge>
						<Badge>Contact</Badge>
					</Row>

					<Row label="Outline — tech tags">
						<Badge variant="outline">React</Badge>
						<Badge variant="outline">Next.js</Badge>
						<Badge variant="outline">TypeScript</Badge>
						<Badge variant="outline">Tailwind CSS</Badge>
						<Badge variant="outline">Node.js</Badge>
					</Row>
				</Section>

				{/* ── Card ──────────────────────────────────────────── */}
				<Section title="Card">
					<Row label="Default">
						<div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
							<Card>
								<CardHeader>
									<Badge className="w-fit">Projects</Badge>
								</CardHeader>
								<CardBody>
									<CardTitle>E-Commerce Dashboard</CardTitle>
									<CardDescription>
										A comprehensive analytics dashboard built with Next.js and TypeScript. Features
										real-time data visualization and dark mode support.
									</CardDescription>
									<div className="flex flex-wrap gap-2">
										<Badge variant="outline">Next.js</Badge>
										<Badge variant="outline">TypeScript</Badge>
										<Badge variant="outline">Tailwind</Badge>
									</div>
								</CardBody>
								<CardFooter>
									<Button size="sm">View Project</Button>
									<Button size="sm" variant="outline">
										Source Code
									</Button>
								</CardFooter>
							</Card>

							<Card>
								<CardBody>
									<CardTitle>Card simples</CardTitle>
									<CardDescription>
										Exemplo de card sem header e sem footer, apenas com body e conteúdo básico.
									</CardDescription>
								</CardBody>
							</Card>
						</div>
					</Row>

					<Row label="Ghost">
						<Card variant="ghost" className="w-full max-w-sm">
							<CardBody>
								<CardTitle>Card Ghost</CardTitle>
								<CardDescription>
									Sem fundo e sem borda — útil como wrapper semântico.
								</CardDescription>
							</CardBody>
						</Card>
					</Row>
				</Section>
			</div>
		</main>
	);
}

function ArrowIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
		>
			<path d="M5 12h14M12 5l7 7-7 7" />
		</svg>
	);
}
