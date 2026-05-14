import { ArrowRight, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";

import { DataVisualization } from "./data-visualization";

export function Hero() {
	return (
		<section className="isolate relative flex min-h-[92vh] items-center overflow-hidden pt-20 lg:min-h-[86vh] lg:pt-0">
			<HeroBackground />

			<ScrollAffordance />

			<div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
				<div className="grid items-center gap-12 lg:grid-cols-[1.08fr_1fr] lg:gap-14 xl:gap-20">
					<div className="relative z-10 space-y-6 lg:space-y-7">
						<div
							className="fade-up inline-flex items-center gap-3 rounded-full border border-primary/15 bg-background/70 py-1.5 pl-2 pr-4 shadow-sm shadow-primary/5 backdrop-blur-sm"
							style={{ animationDelay: "60ms" }}
						>
							<span className="relative flex size-5 items-center justify-center rounded-full bg-accent/15">
								<span className="pulse-dot size-1.5 rounded-full bg-accent" />
							</span>
							<span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/80">
								Engineer-First MarTech
							</span>
						</div>

						<h1
							className="fade-up text-balance text-[2rem] font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[2.6rem] lg:text-[3.4rem] xl:text-[4rem]"
							style={{ animationDelay: "180ms" }}
						>
							Estratégia Preditiva e{" "}
							<span className="font-serif text-gradient-pallas text-[1.12em] font-normal italic leading-[1]">
								Engenharia de Dados
							</span>{" "}
							para Aquisição de Alta Performance.
						</h1>

						<p
							className="fade-up max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
							style={{ animationDelay: "300ms" }}
						>
							Da infraestrutura de dados à modelagem de incrementalidade. Transformamos o seu
							investimento em marketing em uma ciência exata e previsível.
						</p>

						<div
							className="fade-up flex flex-col gap-3 sm:flex-row"
							style={{ animationDelay: "420ms" }}
						>
							<Button
								asChild
								size="lg"
								className="group h-12 bg-primary px-6 text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
							>
								<a href="#diagnostico">
									Solicitar Diagnóstico de Dados
									<ArrowRight
										size={18}
										className="transition-transform duration-300 group-hover:translate-x-1"
									/>
								</a>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="h-12 border-border/80 bg-background/60 px-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-pallas-gray-light"
							>
								<a href="#metodologia">Conhecer metodologia</a>
							</Button>
						</div>

						<div
							className="fade-up relative flex items-center gap-3 border-t border-border/60 pt-6 text-sm text-muted-foreground"
							style={{ animationDelay: "540ms" }}
						>
							<span
								aria-hidden="true"
								className="absolute -top-px left-0 h-px w-16 bg-gradient-to-r from-accent/60 to-transparent"
							/>
							<span className="flex size-7 flex-none items-center justify-center rounded-md border border-accent/25 bg-accent/10 text-accent">
								<TrendingUp size={14} />
							</span>
							<span>
								Otimizando mais de <strong className="font-semibold text-foreground">R$ 50 milhões</strong>{" "}
								em investimento anual em mídia.
							</span>
						</div>
					</div>

					<div className="relative hidden lg:block">
						<CornerBrackets />
						<div className="fade-in" style={{ animationDelay: "380ms" }}>
							<DataVisualization />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function CornerBrackets() {
	const corner =
		"pointer-events-none absolute size-6 border-primary/30";

	return (
		<>
			<span aria-hidden className={`${corner} -left-2 -top-2 border-l border-t`} />
			<span aria-hidden className={`${corner} -right-2 -top-2 border-r border-t`} />
			<span aria-hidden className={`${corner} -bottom-2 -left-2 border-b border-l`} />
			<span aria-hidden className={`${corner} -bottom-2 -right-2 border-b border-r`} />
		</>
	);
}

function HeroBackground() {
	return (
		<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
			<div className="absolute inset-0 bg-[linear-gradient(135deg,oklch(0.99_0_0)_0%,oklch(0.98_0.01_260/0.95)_40%,oklch(0.96_0.04_280/0.85)_100%)]" />

			<div className="dot-grid absolute inset-0 hidden opacity-60 lg:block" />

			<div className="absolute -left-32 -top-24 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,oklch(0.55_0.25_290/0.14)_0%,transparent_60%)] blur-2xl" />
			<div className="absolute -bottom-24 right-0 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,oklch(0.25_0.1_250/0.16)_0%,transparent_60%)] blur-2xl" />

			<div className="absolute -right-24 top-20 hidden h-[34rem] w-[52rem] -rotate-12 rounded-[2rem] border border-primary/10 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent lg:block" />

			<div className="absolute inset-x-0 top-20 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
			<div className="absolute inset-x-0 bottom-20 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />

			<svg
				className="absolute right-0 top-12 hidden h-[46rem] w-[56rem] opacity-50 lg:block"
				viewBox="0 0 900 740"
				aria-hidden
			>
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
				<g fill="var(--background)" stroke="var(--pallas-purple)" strokeOpacity="0.35">
					<circle cx="380" cy="390" r="6" />
					<circle cx="620" cy="300" r="5" />
					<circle cx="735" cy="286" r="4" />
				</g>
				<defs>
					<linearGradient id="hero-line" x1="0" x2="900" y1="0" y2="740">
						<stop stopColor="var(--pallas-blue)" stopOpacity="0.2" />
						<stop offset="1" stopColor="var(--pallas-purple)" stopOpacity="0.55" />
					</linearGradient>
					<linearGradient id="hero-line-muted" x1="0" x2="900" y1="0" y2="740">
						<stop stopColor="var(--pallas-blue)" stopOpacity="0.14" />
						<stop offset="1" stopColor="var(--pallas-purple)" stopOpacity="0.28" />
					</linearGradient>
				</defs>
			</svg>

		</div>
	);
}

function ScrollAffordance() {
	return (
		<div
			aria-hidden
			className="fade-in pointer-events-none absolute inset-x-0 bottom-4 z-20 hidden flex-col items-center gap-2 lg:flex"
			style={{ animationDelay: "780ms" }}
		>
			<span className="relative block h-10 w-px overflow-hidden bg-border/80">
				<span className="scroll-cue absolute left-1/2 top-0 block h-3 w-px -translate-x-1/2 bg-accent" />
			</span>
		</div>
	);
}
