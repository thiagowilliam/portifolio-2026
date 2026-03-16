import { tv, type VariantProps } from "tailwind-variants";

/**
 * Card — container com superfície escura (#1E293B) e borda sutil.
 * Usado em: project cards, experience cards, contact info cards.
 *
 * Sub-componentes: CardHeader, CardBody, CardTitle, CardDescription, CardFooter
 */
const card = tv({
	base: "flex flex-col rounded-xl bg-card text-card-foreground border border-border overflow-hidden",
	variants: {
		variant: {
			default: "",
			ghost: "bg-transparent border-transparent",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

type CardProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof card>;

function Card({ className, variant, ...props }: CardProps) {
	return <div className={card({ variant, className })} {...props} />;
}

function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return <div className={`p-6 pb-0 ${className ?? ""}`} {...props} />;
}

function CardBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return <div className={`flex flex-col gap-4 p-6 ${className ?? ""}`} {...props} />;
}

function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
	return <h3 className={`text-xl font-semibold text-foreground ${className ?? ""}`} {...props} />;
}

function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
	return (
		<p className={`text-sm leading-relaxed text-muted-foreground ${className ?? ""}`} {...props} />
	);
}

function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return <div className={`flex items-center gap-3 px-6 pb-6 ${className ?? ""}`} {...props} />;
}

export { Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle };
