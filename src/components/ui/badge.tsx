import { tv, type VariantProps } from "tailwind-variants";

/**
 * Badge — pill/label usado em duas situações:
 *  - `filled`  → label de seção (ex: "ABOUT", "SKILLS") — fundo verde
 *  - `outline` → tech tag dentro de cards (ex: "React", "TypeScript") — borda verde
 */
const badge = tv({
	base: "inline-flex items-center justify-center rounded-full font-mono font-bold uppercase tracking-[0.2em] leading-none whitespace-nowrap",
	variants: {
		variant: {
			filled: "bg-primary text-primary-foreground px-2.5 py-1 text-[11px]",
			outline: "border border-primary text-primary bg-transparent px-2 py-0.5 text-[10px]",
		},
	},
	defaultVariants: {
		variant: "filled",
	},
});

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badge>;

function Badge({ className, variant, ...props }: BadgeProps) {
	return <span className={badge({ variant, className })} {...props} />;
}

export { Badge, badge as badgeVariants };
