import { SectionHeading } from "./section-heading";

const principles = ["Precisão", "Inteligência", "Estratégia"];
const gridLines = {
	horizontal: Array.from({ length: 12 }, (_, index) => index * 110),
	vertical: Array.from({ length: 14 }, (_, index) => index * 96),
};

export function WhyPallasSection() {
	return (
		<section id="why-pallas" className="relative overflow-hidden bg-pallas-gray-light py-20 lg:py-32">
			<GeometricBackground />

			<div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
				<SectionHeading
					align="center"
					eyebrow="Por que Pallas?"
					title="Estratégia por trás da escala."
				/>

				<div className="space-y-6">
					<p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
						Na mitologia, Pallas Atena era a estratégia por trás da vitória. Na Pallas Agency, somos
						a inteligência por trás do próximo nível de crescimento da sua operação.
					</p>

					<div className="flex flex-wrap justify-center gap-6 pt-6">
						{principles.map((word) => (
							<div key={word} className="flex items-center gap-2">
								<span className="size-2 rounded-full bg-accent" />
								<span className="text-sm font-medium text-foreground">{word}</span>
							</div>
						))}
					</div>
				</div>

				<div className="mt-12 flex justify-center">
					<div className="relative size-24">
						<div className="absolute inset-0 rounded-full border border-border" />
						<div className="absolute inset-2 rounded-full border border-accent/30" />
						<div className="absolute inset-4 rounded-full border border-primary/20" />
						<div className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
					</div>
				</div>
			</div>
		</section>
	);
}

function GeometricBackground() {
	return (
		<div className="pointer-events-none absolute inset-0 overflow-hidden">
			<div className="grid-pattern absolute inset-0 hidden opacity-12 lg:block" />
			<div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_center,transparent_0%,var(--pallas-gray-light)_72%)] lg:block" />
			<div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
			<div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
			<svg
				className="absolute inset-0 hidden size-full opacity-5 lg:block"
				viewBox="0 0 1200 520"
				fill="none"
				preserveAspectRatio="none"
			>
				{gridLines.horizontal.map((position) => (
					<line
						key={`h-${position}`}
						x1="0"
						y1={position}
						x2="1200"
						y2={position}
						stroke="currentColor"
						strokeWidth="1"
					/>
				))}
				{gridLines.vertical.map((position) => (
					<line
						key={`v-${position}`}
						x1={position}
						y1="0"
						x2={position}
						y2="520"
						stroke="currentColor"
						strokeWidth="1"
					/>
				))}
			</svg>
			<svg
				className="absolute left-1/2 top-1/2 hidden size-[620px] -translate-x-1/2 -translate-y-1/2 opacity-20 lg:block"
				viewBox="0 0 400 400"
				fill="none"
			>
				<circle
					cx="200"
					cy="200"
					r="60"
					stroke="var(--pallas-purple)"
					strokeWidth="2"
					fill="none"
					opacity="0.3"
				/>
			</svg>
		</div>
	);
}
