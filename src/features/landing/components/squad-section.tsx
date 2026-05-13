import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { fadeUp, staggerDelay } from "../animation";
import { squadRoles, stackItems } from "../landing-content";
import { SectionHeading } from "./section-heading";

export function SquadSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section id="squad" className="relative overflow-hidden bg-pallas-gray-light py-20 lg:py-32">
			<TechnicalBackground />

			<div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<SectionHeading
					inView={isInView}
					eyebrow="Diferenciação Técnica"
					title="Não entregamos apenas relatórios. Entregamos engenharia."
					description="A Pallas combina tecnologia, ciência, aquisição e produto em uma operação integrada que entrega resultados mensuráveis e escaláveis."
				/>

				<div className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:gap-6">
					<div className="pointer-events-none absolute inset-6 hidden rounded-[2rem] border border-primary/10 lg:block" />
					{squadRoles.map((role, index) => {
						const Icon = role.icon;

						return (
							<motion.div
								key={role.title}
								variants={fadeUp}
								initial="hidden"
								animate={isInView ? "visible" : "hidden"}
								transition={{ duration: 0.5, delay: staggerDelay(index) }}
								className="group relative overflow-hidden rounded-xl border border-border/80 bg-card/90 p-6 shadow-xl shadow-primary/5 backdrop-blur transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10 lg:p-8"
							>
								<div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
								<div className="absolute -right-20 -top-20 size-40 rounded-full bg-accent/5 blur-3xl" />
								<div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
									<div
										className={`flex size-12 shrink-0 items-center justify-center rounded-lg ${role.accent} shadow-lg`}
									>
										<Icon size={24} className="text-primary-foreground" />
									</div>
									<div className="flex-1">
										<h3 className="mb-2 text-lg font-semibold text-foreground">{role.title}</h3>
										<p className="text-sm leading-relaxed text-muted-foreground">
											{role.description}
										</p>
									</div>
								</div>

								<motion.div
									className={`absolute bottom-0 left-0 h-0.5 rounded-full ${role.accent}`}
									initial={{ width: 0 }}
									whileHover={{ width: "100%" }}
									transition={{ duration: 0.3 }}
								/>
							</motion.div>
						);
					})}
				</div>

				<div className="mt-12 lg:mt-16">
					<div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3 rounded-xl border border-border/70 bg-card/60 p-4 shadow-lg shadow-primary/5 backdrop-blur">
						{stackItems.map((tech, index) => (
							<motion.span
								key={tech}
								initial={{ opacity: 0, scale: 0.9 }}
								animate={isInView ? { opacity: 1, scale: 1 } : {}}
								transition={{ delay: 0.7 + index * 0.05 }}
								className="rounded-md border border-border bg-card px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-accent/30"
							>
								{tech}
							</motion.span>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

function TechnicalBackground() {
	return (
		<div className="pointer-events-none absolute inset-0 overflow-hidden">
			<div className="grid-pattern absolute inset-0 opacity-20" />
			<div className="absolute right-0 top-0 size-96 rounded-full bg-accent/5 blur-3xl" />
			<div className="absolute bottom-0 left-0 size-96 rounded-full bg-primary/5 blur-3xl" />
			<svg
				className="absolute left-1/2 top-20 h-[38rem] w-[64rem] -translate-x-1/2 opacity-35"
				viewBox="0 0 1000 600"
				fill="none"
				aria-hidden="true"
			>
				<path
					d="M84 402 C220 250 350 336 480 210 S760 82 914 212"
					stroke="url(#technical-line)"
					strokeWidth="2"
					strokeDasharray="5 16"
				/>
				<path
					d="M160 500 C310 390 430 480 560 350 S750 250 900 330"
					stroke="url(#technical-line-muted)"
					strokeWidth="1.5"
					strokeDasharray="3 18"
				/>
				<defs>
					<linearGradient id="technical-line" x1="0" x2="1000" y1="0" y2="600">
						<stop stopColor="var(--pallas-blue)" stopOpacity="0.18" />
						<stop offset="1" stopColor="var(--pallas-purple)" stopOpacity="0.55" />
					</linearGradient>
					<linearGradient id="technical-line-muted" x1="0" x2="1000" y1="0" y2="600">
						<stop stopColor="var(--pallas-purple)" stopOpacity="0.2" />
						<stop offset="1" stopColor="var(--pallas-blue)" stopOpacity="0.12" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	);
}
