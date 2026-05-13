import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

import { navLinks } from "../landing-content";
import { BrandMark } from "./brand-mark";

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		function handleScroll() {
			setIsScrolled(window.scrollY > 20);
		}

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
				isScrolled
					? "border-b border-border bg-background/95 shadow-sm backdrop-blur-md"
					: "bg-transparent"
			}`}
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<nav className="flex h-16 items-center justify-between lg:h-20">
					<a href="#" aria-label="Pallas Agency">
						<BrandMark />
					</a>

					<div className="hidden items-center gap-8 lg:flex">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="text-sm text-muted-foreground transition-colors hover:text-foreground"
							>
								{link.label}
							</a>
						))}
					</div>

					<Button
						asChild
						className="hidden bg-primary text-primary-foreground hover:bg-primary/90 lg:inline-flex"
					>
						<a href="#diagnostico">Solicitar Diagnóstico</a>
					</Button>

					<button
						type="button"
						className="p-2 text-foreground lg:hidden"
						onClick={() => setIsMobileMenuOpen((value) => !value)}
						aria-label="Abrir menu"
					>
						{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</nav>
			</div>

			<AnimatePresence>
				{isMobileMenuOpen && <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />}
			</AnimatePresence>
		</header>
	);
}

function MobileMenu({ onClose }: { onClose: () => void }) {
	return (
		<motion.div
			initial={{ opacity: 0, height: 0 }}
			animate={{ opacity: 1, height: "auto" }}
			exit={{ opacity: 0, height: 0 }}
			transition={{ duration: 0.2 }}
			className="border-b border-border bg-background lg:hidden"
		>
			<div className="space-y-3 px-4 py-4">
				{navLinks.map((link) => (
					<a
						key={link.href}
						href={link.href}
						className="block py-2 text-muted-foreground transition-colors hover:text-foreground"
						onClick={onClose}
					>
						{link.label}
					</a>
				))}

				<Button asChild className="mt-4 w-full bg-primary hover:bg-primary/90">
					<a href="#diagnostico" onClick={onClose}>
						Solicitar Diagnóstico
					</a>
				</Button>
			</div>
		</motion.div>
	);
}
