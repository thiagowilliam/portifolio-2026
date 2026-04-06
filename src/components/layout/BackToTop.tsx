"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

function BackToTop() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const about = document.getElementById("about");
		if (!about) return;

		const observer = new IntersectionObserver(
			([entry]) => setVisible(!entry.isIntersecting),
			{ rootMargin: "0px 0px 0px 0px", threshold: 0 },
		);

		observer.observe(about);
		return () => observer.disconnect();
	}, []);

	function handleClick() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	return (
		<AnimatePresence>
			{visible && (
				<motion.button
					key="back-to-top"
					type="button"
					aria-label="Voltar ao topo"
					onClick={handleClick}
					initial={{ opacity: 0, scale: 0.8, y: 16 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.8, y: 16 }}
					transition={{ duration: 0.2, ease: "easeOut" }}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
					className="fixed right-8 bottom-8 z-50 flex size-11 cursor-pointer items-center justify-center rounded-full border border-primary/30 bg-card text-primary shadow-lg shadow-primary/10 transition-colors hover:bg-primary hover:text-[#0A0F1C]"
				>
					<ArrowUp size={18} />
				</motion.button>
			)}
		</AnimatePresence>
	);
}

export { BackToTop };
