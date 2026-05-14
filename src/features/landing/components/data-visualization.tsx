import { ArrowUpRight, GitBranch, Radio, Sparkles } from "lucide-react";

import { heroMetrics } from "../landing-content";

const chartBars = [46, 64, 52, 78, 58, 92, 73, 86, 68, 96, 76, 90, 82, 98];
const modelNodes = ["Meta", "CRM", "GA4", "DW"];

export function DataVisualization() {
	return (
		<div className="relative mx-auto aspect-[1.04] w-full max-w-xl xl:max-w-2xl">
			<div className="absolute inset-5 rounded-[2rem] border border-primary/10 bg-card/70 shadow-2xl shadow-primary/10" />
			<div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
			<DataFlowLine />

			<div className="absolute inset-x-0 top-8 rounded-xl border border-border/80 bg-card/95 p-5 shadow-2xl shadow-primary/15 xl:p-6">
				<div className="mb-4 flex items-center justify-between">
					<div className="flex items-center gap-2">
						<span className="flex size-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
							<GitBranch size={16} />
						</span>
						<div>
							<span className="block text-sm font-medium text-foreground">Attribution Model</span>
							<span className="text-xs text-muted-foreground">Canais reconciliados em tempo real</span>
						</div>
					</div>
					<span className="inline-flex items-center gap-1 rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
						<Radio size={12} />
						Live
					</span>
				</div>

				<div className="space-y-4">
					<div className="flex h-40 items-end gap-1.5 rounded-lg border border-border/60 bg-pallas-gray-light/40 p-3 xl:h-44">
						{chartBars.map((height, index) => (
							<div
								key={`${height}-${index}`}
								className="flex-1 origin-bottom rounded-sm bg-gradient-to-t from-primary/80 via-primary/70 to-accent/70"
								style={{ height: `${height}%` }}
							/>
						))}
					</div>

					<div className="flex justify-between text-xs text-muted-foreground">
						<span>Jan</span>
						<span>Jun</span>
						<span>Dec</span>
					</div>
				</div>
			</div>

			<div className="absolute bottom-12 left-8 right-28 rounded-xl border border-border bg-card/95 p-4 shadow-xl shadow-primary/10">
				<div className="flex items-center gap-3">
					<div className="flex items-center gap-2 pr-2">
						<Sparkles size={16} className="text-accent" />
						<span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
							Signals
						</span>
					</div>
					<div className="h-px flex-1 bg-border" />
					<div className="flex items-center gap-2">
						{modelNodes.map((node) => (
							<span
								key={node}
								className="rounded-md border border-border bg-pallas-gray-light px-3 py-2 text-center text-xs font-medium text-foreground"
							>
								{node}
							</span>
						))}
					</div>
				</div>
			</div>

			<div className="absolute bottom-36 right-1 rounded-xl border border-accent/20 bg-accent/10 p-4 text-accent shadow-xl shadow-accent/10 xl:right-4">
				<div className="flex items-start gap-3">
					<ArrowUpRight size={20} />
					<div>
						<p className="text-xs text-accent/80">Eficiência incremental</p>
						<p className="text-2xl font-semibold text-foreground">+18.7%</p>
					</div>
				</div>
			</div>

			{heroMetrics.map((metric, index) => (
				<MetricCard key={metric.label} metric={metric} index={index} />
			))}
		</div>
	);
}

function MetricCard({ metric, index }: { metric: (typeof heroMetrics)[number]; index: number }) {
	const Icon = metric.icon;
	const sideClass = index === 0 ? "left-2 top-72 -translate-x-6" : "right-2 top-60 translate-x-6";
	const iconClass =
		metric.tone === "accent" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary";

	return (
		<div className={`absolute rounded-xl border border-border bg-card/95 p-4 shadow-xl shadow-primary/10 ${sideClass}`}>
			<div className="flex items-center gap-3">
				<div className={`flex size-10 items-center justify-center rounded-lg ${iconClass}`}>
					<Icon size={18} />
				</div>
				<div>
					<p className="text-xs text-muted-foreground">{metric.label}</p>
					<p className="text-lg font-semibold text-foreground">{metric.value}</p>
				</div>
			</div>
		</div>
	);
}

function DataFlowLine() {
	return (
		<svg className="pointer-events-none absolute inset-0 size-full" aria-hidden="true">
			<path
				d="M 58 352 C 158 318 198 236 318 244 S 452 330 548 278"
				stroke="url(#gradient)"
				strokeWidth="2"
				fill="none"
				opacity="0.42"
			/>
			<path
				d="M 108 456 C 238 380 318 486 420 410 S 508 332 604 370"
				stroke="url(#gradientSoft)"
				strokeWidth="1.5"
				fill="none"
				opacity="0.28"
			/>
			<defs>
				<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset="0%" stopColor="var(--pallas-blue)" />
					<stop offset="100%" stopColor="var(--pallas-purple)" />
				</linearGradient>
				<linearGradient id="gradientSoft" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset="0%" stopColor="var(--pallas-blue)" />
					<stop offset="100%" stopColor="var(--pallas-purple-light)" />
				</linearGradient>
			</defs>
		</svg>
	);
}
