import { motion, useInView } from "framer-motion";
import { Database, LineChart, ShieldCheck } from "lucide-react";
import { useRef } from "react";

import { DiagnosticForm } from "./diagnostic-form";

const benefits = [
	"Diagnóstico gratuito da sua infraestrutura de dados",
	"Identificação de oportunidades de mensuração",
	"Roadmap técnico personalizado",
];
const contactSignals = [
	{ label: "Tracking", icon: Database },
	{ label: "Mensuração", icon: LineChart },
	{ label: "Governança", icon: ShieldCheck },
];

export function CTASection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section id="diagnostico" className="relative overflow-hidden bg-primary py-20 lg:py-32">
			<ContactBackground inView={isInView} />

			<div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6 }}
					>
						<h2 className="mb-6 text-balance text-2xl font-semibold text-primary-foreground sm:text-3xl lg:text-4xl">
							Pare de adivinhar. Comece a medir.
						</h2>
						<p className="mb-8 text-pretty text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
							Agende uma conversa técnica com especialistas em MarTech, mensuração e aquisição
							científica.
						</p>

						<div className="mb-8 grid gap-3 sm:grid-cols-3">
							{contactSignals.map((signal, index) => {
								const Icon = signal.icon;

								return (
									<motion.div
										key={signal.label}
										initial={{ opacity: 0, y: 16 }}
										animate={isInView ? { opacity: 1, y: 0 } : {}}
										transition={{ delay: 0.2 + index * 0.08 }}
										className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-3 backdrop-blur"
									>
										<div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-accent/15 text-accent">
											<Icon size={18} />
										</div>
										<span className="text-sm font-medium text-primary-foreground">
											{signal.label}
										</span>
									</motion.div>
								);
							})}
						</div>

						<ul className="space-y-3">
							{benefits.map((item, index) => (
								<motion.li
									key={item}
									initial={{ opacity: 0, x: -20 }}
									animate={isInView ? { opacity: 1, x: 0 } : {}}
									transition={{ delay: 0.3 + index * 0.1 }}
									className="flex items-center gap-3 text-primary-foreground/80"
								>
									<span className="size-1.5 shrink-0 rounded-full bg-accent" />
									<span className="text-sm">{item}</span>
								</motion.li>
							))}
						</ul>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="relative"
					>
						<div className="absolute -inset-4 rounded-[1.5rem] border border-primary-foreground/10 bg-primary-foreground/5 shadow-2xl shadow-accent/10" />
						<DiagnosticForm />
					</motion.div>
				</div>
			</div>
		</section>
	);
}

function ContactBackground({ inView }: { inView: boolean }) {
	return (
		<div className="pointer-events-none absolute inset-0 overflow-hidden">
			<div className="absolute inset-0 bg-[linear-gradient(120deg,var(--primary),oklch(0.22_0.11_255)_48%,oklch(0.28_0.15_275)_100%)]" />
			<div className="grid-pattern absolute inset-0 opacity-10" />
			<div className="absolute right-0 top-0 size-96 rounded-full bg-accent/15 blur-3xl" />
			<div className="absolute bottom-0 left-0 size-96 rounded-full bg-primary-foreground/8 blur-3xl" />
			<svg
				className="absolute right-0 top-10 h-[34rem] w-[58rem] opacity-40"
				viewBox="0 0 900 540"
				fill="none"
				aria-hidden="true"
			>
				<motion.path
					d="M90 380 C210 270 310 330 430 218 S650 88 820 178"
					stroke="url(#contact-line)"
					strokeWidth="2"
					strokeDasharray="7 14"
					initial={{ pathLength: 0, opacity: 0 }}
					animate={inView ? { pathLength: 1, opacity: 0.7 } : {}}
					transition={{ duration: 1, delay: 0.25 }}
				/>
				<motion.path
					d="M180 452 C330 392 386 470 520 360 S690 268 830 322"
					stroke="url(#contact-line-muted)"
					strokeWidth="1.5"
					strokeDasharray="3 18"
					initial={{ pathLength: 0, opacity: 0 }}
					animate={inView ? { pathLength: 1, opacity: 0.45 } : {}}
					transition={{ duration: 1.1, delay: 0.4 }}
				/>
				<defs>
					<linearGradient id="contact-line" x1="0" x2="900" y1="0" y2="540">
						<stop stopColor="white" stopOpacity="0.15" />
						<stop offset="1" stopColor="var(--pallas-purple-light)" stopOpacity="0.8" />
					</linearGradient>
					<linearGradient id="contact-line-muted" x1="0" x2="900" y1="0" y2="540">
						<stop stopColor="white" stopOpacity="0.1" />
						<stop offset="1" stopColor="var(--pallas-purple-light)" stopOpacity="0.45" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	);
}
