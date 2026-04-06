"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
	base: [
		"inline-flex shrink-0 items-center justify-center gap-1.5",
		"rounded-md font-medium text-sm whitespace-nowrap select-none",
		"transition-all outline-none",
		"focus-visible:ring-3 focus-visible:ring-offset-1",
		"disabled:pointer-events-none disabled:opacity-50",
		"active:scale-[0.98]",
		"[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
	],
	variants: {
		variant: {
			// Design base do Pencil: fundo #34d399 (emerald-400), texto #0A0F1C
			default:
				"bg-emerald-400 text-[#0A0F1C] hover:bg-emerald-300 focus-visible:ring-emerald-400/50 dark:bg-emerald-400 dark:hover:bg-emerald-300",
			secondary:
				"bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:ring-secondary/50",
			outline:
				"border border-input bg-background text-foreground hover:bg-muted hover:text-foreground focus-visible:ring-ring/30 dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
			ghost:
				"bg-transparent text-foreground hover:bg-muted hover:text-foreground focus-visible:ring-ring/30 dark:hover:bg-muted/50",
			destructive:
				"bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:ring-destructive/30 dark:bg-destructive/20 dark:hover:bg-destructive/30",
			link: "text-emerald-500 underline-offset-4 hover:underline focus-visible:ring-emerald-400/50",
			"accent-outline":
				"border border-accent bg-background text-primary hover:bg-muted focus-visible:ring-accent/30",
		},
		size: {
			sm: "h-7 px-3 text-xs rounded-md",
			default: "h-9 px-4 py-2",
			lg: "h-11 px-6 text-base rounded-md",
			icon: "size-9",
			"icon-sm": "size-7 rounded-md",
			"icon-lg": "size-11 rounded-md",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});

type ButtonProps = Omit<ButtonPrimitive.Props, "className"> &
	VariantProps<typeof button> & { asChild?: boolean; className?: string };

function Button({ className, variant, size, asChild, children, ...props }: ButtonProps) {
	if (asChild && React.isValidElement(children)) {
		const child = children as React.ReactElement<{
			children?: React.ReactNode;
			[key: string]: unknown;
		}>;
		const { children: childChildren, ...childProps } = child.props;
		return (
			<ButtonPrimitive
				data-slot="button"
				className={button({ variant, size, className })}
				render={React.createElement(child.type as string, childProps)}
				{...props}
			>
				{childChildren}
			</ButtonPrimitive>
		);
	}

	return (
		<ButtonPrimitive
			data-slot="button"
			className={button({ variant, size, className })}
			{...props}
		>
			{children}
		</ButtonPrimitive>
	);
}

export { Button, button as buttonVariants };
