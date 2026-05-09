import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useRef } from "react";

import { Button } from "@/components/ui/button";

import { fadeUp, staggerDelay } from "../animation";
import { engagementModels } from "../landing-content";
import { SectionHeading } from "./section-heading";

export function ModelsSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section id="modelos" className="relative overflow-hidden bg-background py-20 lg:py-32">
			<div className="grid-pattern absolute inset-0 opacity-30" />

			<div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<SectionHeading
					align="center"
					inView={isInView}
					eyebrow="Modelos de Engajamento"
					title="Dois caminhos para transformar mensuração em crescimento."
					description="Começamos pela maturidade real da sua operação: corrigir a base ou operar crescimento contínuo sobre uma base confiável."
				/>

				<div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
					{engagementModels.map((model, index) => (
						<ModelCard key={model.title} model={model} index={index} inView={isInView} />
					))}
				</div>
			</div>
		</section>
	);
}

function ModelCard({
	model,
	index,
	inView,
}: {
	model: (typeof engagementModels)[number];
	index: number;
	inView: boolean;
}) {
	const Icon = model.icon;
	const isFeatured = model.featured;
	const surfaceClass = isFeatured
		? "border-primary bg-primary"
		: "border-border bg-card hover:border-accent/30";
	const mutedText = isFeatured ? "text-primary-foreground/60" : "text-muted-foreground";
	const mainText = isFeatured ? "text-primary-foreground" : "text-foreground";

	return (
		<motion.div
			variants={fadeUp}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			transition={{ duration: 0.5, delay: staggerDelay(index, 0.2) }}
			className={`relative rounded-lg border p-6 transition-colors lg:p-8 ${surfaceClass}`}
		>
			{isFeatured && (
				<div className="absolute -top-3 left-6">
					<span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
						Mais Popular
					</span>
				</div>
			)}

			<div className="mb-6 flex items-start gap-4">
				<div
					className={`flex size-12 items-center justify-center rounded-lg ${isFeatured ? "bg-primary-foreground/10" : "bg-primary/10"}`}
				>
					<Icon size={24} className={isFeatured ? "text-primary-foreground" : "text-primary"} />
				</div>
				<div>
					<p className={`mb-1 text-xs font-medium uppercase tracking-wider ${mutedText}`}>
						{model.subtitle}
					</p>
					<h3 className={`text-xl font-semibold ${mainText}`}>{model.title}</h3>
				</div>
			</div>

			<p
				className={`mb-6 text-sm leading-relaxed ${isFeatured ? "text-primary-foreground/80" : "text-muted-foreground"}`}
			>
				{model.description}
			</p>

			<div className="mb-6">
				<p className={`mb-3 text-xs font-medium uppercase tracking-wider ${mutedText}`}>
					{model.focusLabel}
				</p>
				<ul className="space-y-2">
					{model.focus.map((item) => (
						<li key={item} className={`flex items-center gap-2 text-sm ${mainText}`}>
							<Check size={16} className="text-accent" />
							{item}
						</li>
					))}
				</ul>
			</div>

			<div
				className={`mb-6 rounded-lg p-4 ${isFeatured ? "bg-primary-foreground/5" : "bg-secondary"}`}
			>
				<p className={`mb-1 text-xs font-medium uppercase tracking-wider ${mutedText}`}>
					Entrega Principal
				</p>
				<p className={`text-sm font-medium ${mainText}`}>{model.delivery}</p>
			</div>

			<Button
				asChild
				className={`w-full ${isFeatured ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}
			>
				<a href="#diagnostico">
					{model.cta}
					<ArrowRight size={16} />
				</a>
			</Button>
		</motion.div>
	);
}
