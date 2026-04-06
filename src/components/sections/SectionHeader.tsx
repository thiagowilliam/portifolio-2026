"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

type SectionHeaderProps = {
	badge: string;
	title: string;
	description?: string;
};

function SectionHeader({ badge, title, description }: SectionHeaderProps) {
	return (
		<motion.div
			className="mb-16 flex flex-col items-center gap-3"
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.5 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
		>
			<Badge variant="outline" className="bg-primary/[0.07]">
				{badge}
			</Badge>
			<h2 className="text-[48px] font-bold leading-tight text-foreground">{title}</h2>
			{description && (
				<p className="max-w-xl text-center text-base text-muted-foreground">{description}</p>
			)}
		</motion.div>
	);
}

export { SectionHeader };
