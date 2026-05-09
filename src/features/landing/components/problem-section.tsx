import { motion, useInView } from "framer-motion";
import { AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

import { Button } from "@/components/ui/button";

import { fadeUp, staggerDelay } from "../animation";
import { problems, warningSigns } from "../landing-content";
import { SectionHeading } from "./section-heading";

const chartBars = [25, 45, 30, 60, 20, 55, 35, 50, 40, 65, 28, 48];
const fragments = [
	{ x: 64, y: 55, width: 72, opacity: 0.24 },
	{ x: 190, y: 105, width: 44, opacity: 0.18 },
	{ x: 330, y: 70, width: 82, opacity: 0.22 },
	{ x: 505, y: 128, width: 58, opacity: 0.16 },
	{ x: 612, y: 90, width: 94, opacity: 0.2 },
	{ x: 90, y: 260, width: 62, opacity: 0.18 },
	{ x: 252, y: 318, width: 88, opacity: 0.24 },
	{ x: 450, y: 276, width: 54, opacity: 0.17 },
	{ x: 590, y: 350, width: 78, opacity: 0.21 },
	{ x: 705, y: 222, width: 50, opacity: 0.16 },
];

export function ProblemSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section id="problema" className="relative overflow-hidden bg-primary py-20 lg:py-32">
			<FragmentedDataBackground inView={isInView} />

			<div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<SectionHeading
					inView={isInView}
					inverse
					eyebrow={
						<span className="inline-flex items-center gap-2">
							<AlertTriangle size={20} />O Cenário Atual
						</span>
					}
					title="O problema não é falta de dados. É falta de confiança nos dados."
					description="Plataformas, CRM, analytics e vendas contam histórias diferentes. Quando a operação depende de last-click e dados nativos, o budget passa a ser alocado com viés — e a escala fica mais cara do que deveria."
				/>

				<div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
					{problems.map((problem, index) => {
						const Icon = problem.icon;

						return (
							<motion.div
								key={problem.title}
								variants={fadeUp}
								initial="hidden"
								animate={isInView ? "visible" : "hidden"}
								transition={{ duration: 0.5, delay: staggerDelay(index) }}
								className="group relative rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-5 backdrop-blur-sm transition-colors hover:bg-primary-foreground/10 lg:p-6"
							>
								<div className="flex flex-col gap-4">
									<div className="flex size-10 items-center justify-center rounded-lg bg-accent/20">
										<Icon size={20} className="text-accent" />
									</div>
									<div>
										<h3 className="mb-2 text-sm font-medium text-primary-foreground">
											{problem.title}
										</h3>
										<p className="text-sm leading-relaxed text-primary-foreground/60">
											{problem.description}
										</p>
									</div>
								</div>

								<div className="absolute right-0 top-0 size-8 overflow-hidden">
									<div className="absolute right-0 top-0 h-1 w-12 translate-x-3 -translate-y-1 rotate-45 bg-accent/30" />
								</div>
							</motion.div>
						);
					})}
				</div>

				<WarningSigns inView={isInView} />
				<BrokenChart inView={isInView} />
			</div>
		</section>
	);
}

function WarningSigns({ inView }: { inView: boolean }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={inView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.6, delay: 0.45 }}
			className="mx-auto mt-12 max-w-4xl rounded-2xl border border-primary-foreground/10 bg-primary-foreground/8 p-6 shadow-2xl shadow-accent/10 backdrop-blur lg:mt-16 lg:p-8"
		>
			<div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-center">
				<div>
					<p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-accent">
						Sinais de alerta
					</p>
					<h3 className="text-balance text-2xl font-semibold text-primary-foreground">
						Você provavelmente tem um problema de mensuração se:
					</h3>
				</div>

				<div className="space-y-4">
					<ul className="space-y-3">
						{warningSigns.map((sign) => (
							<li key={sign} className="flex gap-3 text-sm leading-relaxed text-primary-foreground/75">
								<CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
								<span>{sign}</span>
							</li>
						))}
					</ul>

					<Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
						<a href="#diagnostico">
							Diagnosticar minha operação
							<ArrowRight size={16} />
						</a>
					</Button>
				</div>
			</div>
		</motion.div>
	);
}

function FragmentedDataBackground({ inView }: { inView: boolean }) {
	return (
		<div className="absolute inset-0 opacity-10">
			<svg className="size-full" viewBox="0 0 800 600" fill="none" aria-hidden>
				{fragments.map((fragment, index) => (
					<motion.rect
						key={`${fragment.x}-${fragment.y}`}
						x={fragment.x}
						y={fragment.y}
						width={fragment.width}
						height={3}
						fill="white"
						initial={{ opacity: 0 }}
						animate={inView ? { opacity: fragment.opacity } : { opacity: 0 }}
						transition={{ delay: index * 0.05 }}
					/>
				))}
			</svg>
		</div>
	);
}

function BrokenChart({ inView }: { inView: boolean }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={inView ? { opacity: 1 } : {}}
			transition={{ delay: 0.6 }}
			className="mt-12 flex justify-center lg:mt-16"
		>
			<div className="w-full max-w-md">
				<div className="flex h-20 items-end justify-center gap-1">
					{chartBars.map((height, index) => (
						<motion.div
							key={`${height}-${index}`}
							initial={{ height: 0, opacity: 0 }}
							animate={inView ? { height: `${height}%`, opacity: index % 3 === 0 ? 0.3 : 0.6 } : {}}
							transition={{ delay: 0.8 + index * 0.03, duration: 0.4 }}
							className={`w-4 rounded-sm sm:w-6 ${
								index % 3 === 0
									? "border border-dashed border-primary-foreground/30 bg-primary-foreground/20"
									: "bg-accent/60"
							}`}
						/>
					))}
				</div>
				<p className="mt-4 text-center text-xs text-primary-foreground/40">
					Dados fragmentados {"->"} Sistema unificado
				</p>
			</div>
		</motion.div>
	);
}
