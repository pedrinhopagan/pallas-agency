import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

import { fadeUp, staggerDelay } from "../animation";
import { methodologySteps } from "../landing-content";
import { SectionHeading } from "./section-heading";

export function MethodologySection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section id="metodologia" className="relative overflow-hidden bg-background py-20 lg:py-32">
			<MethodologyBackground />

			<div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<SectionHeading
					align="center"
					inView={isInView}
					eyebrow="Metodologia Pallas"
					title="Closed-Loop Growth: um sistema para medir, decidir e escalar."
					description="Unimos engenharia de dados, modelos de mensuração e execução de aquisição em um ciclo contínuo. Cada experimento melhora a base de decisão. Cada decisão melhora a eficiência do próximo investimento."
				/>

				<DesktopSteps inView={isInView} />
				<MobileSteps inView={isInView} />
				<ClosedLoop inView={isInView} />
			</div>
		</section>
	);
}

function DesktopSteps({ inView }: { inView: boolean }) {
	return (
		<div className="relative mt-12 hidden lg:mt-20 lg:block">
			<DesktopConnector inView={inView} />

			<div className="relative grid grid-cols-4 gap-6">
				{methodologySteps.map((step, index) => {
					const Icon = step.icon;

					return (
						<motion.div
							key={step.title}
							variants={fadeUp}
							initial="hidden"
							animate={inView ? "visible" : "hidden"}
							transition={{ duration: 0.5, delay: staggerDelay(index, 0.2) }}
							className="relative"
						>
							<div className="group relative h-full overflow-hidden rounded-xl border border-border/80 bg-card/90 p-6 shadow-xl shadow-primary/5 backdrop-blur transition-colors hover:border-accent/30">
								<div
									className={`absolute inset-x-6 top-0 h-px bg-gradient-to-r ${step.color} opacity-50`}
								/>
								<div className="absolute -right-16 -top-16 size-36 rounded-full bg-accent/5 blur-3xl transition-opacity group-hover:opacity-80" />
								<div
									className={`mb-4 flex size-12 items-center justify-center rounded-lg bg-gradient-to-br ${step.color} shadow-lg`}
								>
									<Icon size={22} className="text-primary-foreground" />
								</div>
								<span className="mb-2 block font-mono text-xs text-muted-foreground">
									{step.number}
								</span>
								<h3 className="mb-4 text-lg font-semibold text-foreground">{step.title}</h3>
								<StepItems items={step.items} />
							</div>

							{index < methodologySteps.length - 1 && (
								<div className="absolute -right-4 top-1/2 z-20 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border border-accent/20 bg-background text-accent shadow-lg shadow-accent/10">
									<ArrowRight size={16} />
								</div>
							)}
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}

function MethodologyBackground() {
	return (
		<div className="pointer-events-none absolute inset-0 overflow-hidden">
			<div className="grid-pattern absolute inset-0 opacity-25" />
			<div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-secondary/50 to-transparent" />
			<div className="absolute -left-32 top-28 size-96 rounded-full bg-primary/5 blur-3xl" />
			<div className="absolute right-0 top-1/3 h-72 w-[40rem] -rotate-12 rounded-[2rem] border border-accent/10 bg-accent/5" />
		</div>
	);
}

function DesktopConnector({ inView }: { inView: boolean }) {
	return (
		<svg
			className="pointer-events-none absolute inset-x-0 top-1/2 z-0 h-32 -translate-y-1/2"
			viewBox="0 0 1200 128"
			fill="none"
			aria-hidden="true"
		>
			<motion.path
				d="M150 64 C250 24 350 24 450 64 S650 104 750 64 S950 24 1050 64"
				stroke="url(#methodology-connector)"
				strokeWidth="2"
				strokeDasharray="8 12"
				initial={{ pathLength: 0, opacity: 0 }}
				animate={inView ? { pathLength: 1, opacity: 0.5 } : {}}
				transition={{ duration: 1.1, delay: 0.35 }}
			/>
			{[150, 450, 750, 1050].map((cx, index) => (
				<motion.circle
					key={cx}
					cx={cx}
					cy="64"
					r="5"
					fill="var(--background)"
					stroke="var(--pallas-purple)"
					strokeWidth="1.5"
					initial={{ scale: 0, opacity: 0 }}
					animate={inView ? { scale: 1, opacity: 0.8 } : {}}
					transition={{ duration: 0.35, delay: 0.55 + index * 0.12 }}
				/>
			))}
			<defs>
				<linearGradient id="methodology-connector" x1="120" x2="1080" y1="0" y2="128">
					<stop stopColor="var(--pallas-blue)" stopOpacity="0.25" />
					<stop offset="0.5" stopColor="var(--pallas-purple)" stopOpacity="0.75" />
					<stop offset="1" stopColor="var(--pallas-blue)" stopOpacity="0.25" />
				</linearGradient>
			</defs>
		</svg>
	);
}

function MobileSteps({ inView }: { inView: boolean }) {
	return (
		<div className="mt-12 space-y-4 lg:hidden">
			{methodologySteps.map((step, index) => {
				const Icon = step.icon;

				return (
					<motion.div
						key={step.title}
						initial={{ opacity: 0, x: -20 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.5, delay: staggerDelay(index) }}
					>
						<div className="flex gap-4">
							<div className="flex flex-col items-center">
								<div
									className={`flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${step.color}`}
								>
									<Icon size={18} className="text-primary-foreground" />
								</div>
								{index < methodologySteps.length - 1 && (
									<div className="mt-2 w-0.5 flex-1 bg-gradient-to-b from-accent/50 to-transparent" />
								)}
							</div>

							<div className="flex-1 pb-6">
								<span className="mb-1 block font-mono text-xs text-muted-foreground">
									{step.number}
								</span>
								<h3 className="mb-3 text-base font-semibold text-foreground">{step.title}</h3>
								<StepItems items={step.items} />
							</div>
						</div>
					</motion.div>
				);
			})}
		</div>
	);
}

function StepItems({ items }: { items: string[] }) {
	return (
		<ul className="space-y-2">
			{items.map((item) => (
				<li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
					<span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
					{item}
				</li>
			))}
		</ul>
	);
}

function ClosedLoop({ inView }: { inView: boolean }) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			animate={inView ? { opacity: 1, scale: 1 } : {}}
			transition={{ delay: 0.8 }}
			className="mt-12 text-center lg:mt-16"
		>
			<div className="inline-flex items-center gap-3 rounded-full border border-border bg-secondary px-5 py-2.5">
				<div className="size-2 animate-pulse rounded-full bg-accent" />
				<span className="text-sm font-medium text-foreground">Closed-Loop Growth</span>
			</div>
		</motion.div>
	);
}
