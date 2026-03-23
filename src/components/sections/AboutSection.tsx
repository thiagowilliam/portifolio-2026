import Image from "next/image";
import { Fragment } from "react";
import { Badge } from "@/components/ui/badge";

const stats = [
	{ value: "50+", label: "PROJETOS" },
	{ value: "5+", label: "ANOS EXP." },
	{ value: "20+", label: "CLIENTES" },
];

function AboutSection() {
	return (
		<section className="bg-surface px-[120px] py-[80px]">
			{/* Header */}
			<div className="mb-16 flex flex-col items-center gap-4">
				<Badge variant="outline" className="bg-primary/[0.07]">
					Sobre
				</Badge>
				<h2 className="text-[48px] font-bold leading-tight text-foreground">About Me</h2>
			</div>

			{/* Content */}
			<div className="flex items-start gap-20">
				{/* Left: foto */}
				<div className="w-full">
					<div className="relative h-[420px] w-full overflow-hidden rounded-xl bg-card">
						{/* Substitua por sua foto em /public/about-photo.jpg */}
						<Image src="/about-photo.jpg" alt="Developer at work" fill className="object-cover" />
					</div>
				</div>

				{/* Right: bio + stats */}
				<div className="flex w-full flex-col gap-8">
					<p className="text-base leading-[1.7] text-muted-foreground">
						Sou um Desenvolvedor Frontend com mais de 5 anos de experiência construindo aplicações
						web modernas e responsivas. Especializo-me no ecossistema React e tenho uma profunda
						paixão por criar interfaces intuitivas que performam de forma impecável.
					</p>
					<p className="text-base leading-[1.7] text-muted-foreground">
						Minha abordagem combina arquitetura limpa com implementação pixel-perfect. Acredito que
						um grande software é construído na interseção entre excelência técnica e experiência de
						usuário bem pensada.
					</p>

					{/* Stats */}
					<div className="flex items-center gap-8">
						{stats.map((stat, i) => (
							<Fragment key={stat.label}>
								{i > 0 && <div className="h-12 w-px bg-white/10" />}
								<div className="flex flex-col gap-1.5">
									<span className="text-[36px] font-bold leading-none text-primary">
										{stat.value}
									</span>
									<span className="font-mono text-[11px] font-semibold text-muted-foreground">
										{stat.label}
									</span>
								</div>
							</Fragment>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export { AboutSection };
