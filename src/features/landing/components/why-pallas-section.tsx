import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { SectionHeading } from "./section-heading";

const principles = ["Precisão", "Inteligência", "Estratégia"];

export function WhyPallasSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section id="why-pallas" className="relative overflow-hidden bg-pallas-gray-light py-20 lg:py-32">
			<GeometricBackground inView={isInView} />

			<div ref={ref} className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
				<SectionHeading
					align="center"
					inView={isInView}
					eyebrow="Por que Pallas?"
					title="Estratégia por trás da escala."
				/>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="space-y-6"
				>
					<p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
						Na mitologia, Pallas Atena era a estratégia por trás da vitória. Na Pallas Agency, somos
						a inteligência por trás do próximo nível de crescimento da sua operação.
					</p>

					<div className="flex flex-wrap justify-center gap-6 pt-6">
						{principles.map((word, index) => (
							<motion.div
								key={word}
								initial={{ opacity: 0, scale: 0.9 }}
								animate={isInView ? { opacity: 1, scale: 1 } : {}}
								transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
								className="flex items-center gap-2"
							>
								<span className="size-2 rounded-full bg-accent" />
								<span className="text-sm font-medium text-foreground">{word}</span>
							</motion.div>
						))}
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : {}}
					transition={{ delay: 0.6 }}
					className="mt-12 flex justify-center"
				>
					<div className="relative size-24">
						<div className="absolute inset-0 rounded-full border border-border" />
						<div className="absolute inset-2 rounded-full border border-accent/30" />
						<div className="absolute inset-4 rounded-full border border-primary/20" />
						<div className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
					</div>
				</motion.div>
			</div>
		</section>
	);
}

function GeometricBackground({ inView }: { inView: boolean }) {
	return (
		<div className="pointer-events-none absolute inset-0 overflow-hidden">
			<div className="grid-pattern absolute inset-0 opacity-12" />
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--pallas-gray-light)_72%)]" />
			<div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
			<div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
			<svg
				className="absolute inset-0 size-full opacity-5"
				viewBox="0 0 1200 520"
				fill="none"
				preserveAspectRatio="none"
			>
				{Array.from({ length: 12 }, (_, index) => index * 110).map((position, index) => (
					<motion.line
						key={`h-${position}`}
						x1="0"
						y1={position}
						x2="1200"
						y2={position}
						stroke="currentColor"
						strokeWidth="1"
						initial={{ pathLength: 0 }}
						animate={inView ? { pathLength: 1 } : {}}
						transition={{ duration: 1, delay: index * 0.1 }}
					/>
				))}
				{Array.from({ length: 14 }, (_, index) => index * 96).map((position, index) => (
					<motion.line
						key={`v-${position}`}
						x1={position}
						y1="0"
						x2={position}
						y2="520"
						stroke="currentColor"
						strokeWidth="1"
						initial={{ pathLength: 0 }}
						animate={inView ? { pathLength: 1 } : {}}
						transition={{ duration: 1, delay: index * 0.1 }}
					/>
				))}
			</svg>
			<svg
				className="absolute left-1/2 top-1/2 size-[620px] -translate-x-1/2 -translate-y-1/2 opacity-20"
				viewBox="0 0 400 400"
				fill="none"
			>
				<motion.circle
					cx="200"
					cy="200"
					r="60"
					stroke="var(--pallas-purple)"
					strokeWidth="2"
					fill="none"
					initial={{ scale: 0, opacity: 0 }}
					animate={inView ? { scale: 1, opacity: 0.3 } : {}}
					transition={{ duration: 0.8, delay: 0.5 }}
				/>
			</svg>
		</div>
	);
}
