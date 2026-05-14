import { ArrowRight } from "lucide-react";

import { methodologySteps } from "../landing-content";
import { SectionHeading } from "./section-heading";

export function MethodologySection() {
	return (
		<section id="metodologia" className="relative overflow-hidden bg-background py-20 lg:py-32">
			<MethodologyBackground />

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<SectionHeading
					align="center"
					eyebrow="Metodologia Pallas"
					title="O ciclo fechado de crescimento baseado em dados."
					description="Substituímos decisões baseadas em plataforma, last-click e heurísticas frágeis por uma operação mensurável, testável e escalável."
				/>

				<DesktopSteps />
				<MobileSteps />
				<ClosedLoop />
			</div>
		</section>
	);
}

function DesktopSteps() {
	return (
		<div className="relative mt-12 hidden lg:mt-20 lg:block">
			<DesktopConnector />

			<div className="relative grid grid-cols-4 gap-6">
				{methodologySteps.map((step, index) => {
					const Icon = step.icon;

					return (
						<div key={step.title} className="relative">
							<div className="group relative h-full overflow-hidden rounded-xl border border-border/80 bg-card/90 p-6 shadow-xl shadow-primary/5 transition-colors hover:border-accent/30">
								<div
									className={`absolute inset-x-6 top-0 h-px bg-gradient-to-r ${step.color} opacity-50`}
								/>
								<div className="absolute -right-16 -top-16 size-36 rounded-full bg-accent/5" />
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
						</div>
					);
				})}
			</div>
		</div>
	);
}

function MethodologyBackground() {
	return (
		<div className="pointer-events-none absolute inset-0 overflow-hidden">
			<div className="grid-pattern absolute inset-0 hidden opacity-25 lg:block" />
			<div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-secondary/50 to-transparent" />
			<div className="absolute -left-32 top-28 hidden size-96 rounded-full bg-primary/5 lg:block" />
			<div className="absolute right-0 top-1/3 hidden h-72 w-[40rem] -rotate-12 rounded-[2rem] border border-accent/10 bg-accent/5 lg:block" />
		</div>
	);
}

function DesktopConnector() {
	return (
		<svg
			className="pointer-events-none absolute inset-x-0 top-1/2 z-0 h-32 -translate-y-1/2"
			viewBox="0 0 1200 128"
			fill="none"
			aria-hidden="true"
		>
			<path
				d="M150 64 C250 24 350 24 450 64 S650 104 750 64 S950 24 1050 64"
				stroke="url(#methodology-connector)"
				strokeWidth="2"
				strokeDasharray="8 12"
				opacity="0.5"
			/>
			{[150, 450, 750, 1050].map((cx) => (
				<circle
					key={cx}
					cx={cx}
					cy="64"
					r="5"
					fill="var(--background)"
					stroke="var(--pallas-purple)"
					strokeWidth="1.5"
					opacity="0.8"
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

function MobileSteps() {
	return (
		<div className="mt-12 space-y-4 lg:hidden">
			{methodologySteps.map((step, index) => {
				const Icon = step.icon;

				return (
					<div key={step.title}>
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
					</div>
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

function ClosedLoop() {
	return (
		<div className="mt-12 text-center lg:mt-16">
			<div className="inline-flex items-center gap-3 rounded-full border border-border bg-pallas-gray-light px-5 py-2.5">
				<div className="size-2 rounded-full bg-accent" />
				<span className="text-sm font-medium text-foreground">Closed-Loop Growth</span>
			</div>
		</div>
	);
}
