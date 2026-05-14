import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

import { navLinks } from "../landing-content";
import { BrandMark } from "./brand-mark";

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		let lastScrolled = window.scrollY > 20;
		let ticking = false;
		setIsScrolled(lastScrolled);

		function updateScrollState() {
			const nextScrolled = window.scrollY > 20;
			ticking = false;

			if (nextScrolled === lastScrolled) {
				return;
			}

			lastScrolled = nextScrolled;
			setIsScrolled(nextScrolled);
		}

		function handleScroll() {
			if (ticking) {
				return;
			}

			ticking = true;
			window.requestAnimationFrame(updateScrollState);
		}

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
				isScrolled ? "border-b border-border bg-background/95 shadow-sm lg:backdrop-blur-md" : "bg-transparent"
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
						{isMobileMenuOpen ? "×" : "☰"}
					</button>
				</nav>
			</div>

			{isMobileMenuOpen && <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />}
		</header>
	);
}

function MobileMenu({ onClose }: { onClose: () => void }) {
	return (
		<div className="border-b border-border bg-background lg:hidden">
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
		</div>
	);
}
