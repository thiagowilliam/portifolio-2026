import { Button } from "@/components/ui/button";

function HeroSection() {
	return (
		<section className="flex flex-col items-center gap-8 px-[120px] pb-[120px] pt-[100px]">
			<p aria-hidden="true" className="font-mono text-sm font-medium text-[#64748B]">
				$ whoami
			</p>

			<h1 className="flex flex-col items-center gap-2 text-[56px] font-bold leading-tight">
				<span className="text-foreground">Hi, I&apos;m Alex Chen</span>
				<span className="text-primary">Frontend Developer</span>
			</h1>

			<p className="max-w-[700px] text-center text-lg leading-relaxed text-muted-foreground">
				I craft exceptional digital experiences with modern web technologies. Passionate about clean
				code, intuitive design, and building products that make a difference.
			</p>

			<div className="flex items-center gap-4">
				<Button
					variant="default"
					className="px-7 py-3 font-mono text-[13px] font-semibold tracking-[0.05em]"
				>
					View My Work
				</Button>
				<Button
					variant="accent-outline"
					className="px-7 py-3 font-mono text-[13px] font-semibold tracking-[0.05em]"
				>
					Get In Touch
				</Button>
			</div>
		</section>
	);
}

export { HeroSection };
