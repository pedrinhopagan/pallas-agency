import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";

import { DataVisualization } from "./data-visualization";

export function Hero() {
	return (
		<section className="isolate relative flex min-h-screen items-center overflow-hidden pt-20 lg:pt-0">
			<HeroBackground />

			<div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
				<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-12 xl:gap-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="relative z-10 space-y-6 lg:space-y-8"
					>
						<div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5">
							<span className="size-1.5 animate-pulse rounded-full bg-accent" />
							<span className="text-xs font-medium text-accent">Engineer-First MarTech</span>
						</div>

						<h1 className="text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
							Estratégia Preditiva e{" "}
							<span className="text-gradient-pallas">Engenharia de Dados</span> para Aquisição de
							Alta Performance.
						</h1>

						<p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
							Da infraestrutura de dados à modelagem de incrementalidade. Transformamos o seu
							investimento em marketing em uma ciência exata e previsível.
						</p>

						<div className="flex flex-col gap-4 sm:flex-row">
							<Button
								asChild
								size="lg"
								className="h-12 bg-primary px-6 text-primary-foreground hover:bg-primary/90"
							>
								<a href="#diagnostico">
									Solicitar Diagnóstico de Dados
									<ArrowRight size={18} />
								</a>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="h-12 border-border px-6 hover:bg-pallas-gray-light"
							>
								<a href="#metodologia">Conhecer metodologia</a>
							</Button>
						</div>

						<div className="flex items-center gap-2 pt-4 text-sm text-muted-foreground">
							<TrendingUp size={16} className="text-accent" />
							<span>
								Otimizando mais de <strong className="text-foreground">R$ 50 milhões</strong> em
								investimento anual em mídia.
							</span>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="relative hidden lg:block"
					>
						<DataVisualization />
					</motion.div>
				</div>
			</div>
		</section>
	);
}

function HeroBackground() {
	return (
		<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
			<div className="grid-pattern absolute inset-0 opacity-45" />
			<div className="absolute inset-0 bg-[linear-gradient(120deg,var(--background)_0%,oklch(0.99_0.01_250/0.92)_42%,oklch(0.96_0.03_280/0.72)_100%)]" />
			<div className="absolute -right-24 top-20 h-[34rem] w-[52rem] -rotate-12 rounded-[2rem] border border-primary/10 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent" />
			<div className="absolute right-0 top-0 h-full w-1/2 bg-[linear-gradient(90deg,transparent,oklch(0.92_0.04_280/0.34))]" />
			<svg className="absolute right-0 top-12 h-[46rem] w-[56rem] opacity-45" viewBox="0 0 900 740">
				<path
					d="M40 580 C180 470 250 520 380 390 S620 220 850 290"
					fill="none"
					stroke="url(#hero-line)"
					strokeDasharray="6 14"
					strokeWidth="2"
				/>
				<path
					d="M120 210 C260 290 340 130 470 210 S650 410 820 300"
					fill="none"
					stroke="url(#hero-line-muted)"
					strokeDasharray="2 18"
					strokeWidth="2"
				/>
				<g fill="var(--background)" stroke="var(--pallas-purple)" strokeOpacity="0.28">
					<circle cx="380" cy="390" r="6" />
					<circle cx="620" cy="300" r="5" />
					<circle cx="735" cy="286" r="4" />
				</g>
				<defs>
					<linearGradient id="hero-line" x1="0" x2="900" y1="0" y2="740">
						<stop stopColor="var(--pallas-blue)" stopOpacity="0.18" />
						<stop offset="1" stopColor="var(--pallas-purple)" stopOpacity="0.5" />
					</linearGradient>
					<linearGradient id="hero-line-muted" x1="0" x2="900" y1="0" y2="740">
						<stop stopColor="var(--pallas-blue)" stopOpacity="0.12" />
						<stop offset="1" stopColor="var(--pallas-purple)" stopOpacity="0.24" />
					</linearGradient>
				</defs>
			</svg>
			<div className="absolute bottom-24 right-24 grid grid-cols-3 gap-3 opacity-30">
				{[0.35, 0.65, 0.5, 0.8, 0.42, 0.9, 0.55, 0.75, 0.48].map((opacity, index) => (
					<span
						key={index}
						className="size-2 rounded-sm bg-primary"
						style={{ opacity }}
					/>
				))}
			</div>
		</div>
	);
}
