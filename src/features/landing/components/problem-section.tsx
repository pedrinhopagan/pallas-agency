import { AlertTriangle } from "lucide-react";

import { problems } from "../landing-content";

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
	return (
		<section
			id="problema"
			className="relative isolate overflow-hidden bg-primary pb-20 pt-24 lg:pb-32 lg:pt-32"
		>
			<FragmentedDataBackground />

			<div
				aria-hidden
				className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
			/>

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="max-w-3xl">
					<div className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary-foreground/15 bg-primary-foreground/[0.04] py-1.5 pl-2 pr-4 backdrop-blur-sm">
						<span className="flex size-5 items-center justify-center rounded-full bg-accent/20 text-accent">
							<AlertTriangle size={11} />
						</span>
						<span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-foreground/85">
							O Cenário Atual
						</span>
					</div>

					<h2 className="mb-6 text-balance text-3xl font-medium leading-[1.08] tracking-[-0.02em] text-primary-foreground sm:text-4xl lg:text-[2.8rem]">
						O fim dos cookies e a{" "}
						<span className="font-serif text-[1.1em] font-normal italic text-accent">
							crise de confiança
						</span>{" "}
						nos dados.
					</h2>

					<p className="max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
						As plataformas de anúncio estão cegas. Mudanças de privacidade e bloqueios de tracking
						estão destruindo a confiabilidade da mensuração. Se a sua operação ainda depende de
						last-click, você provavelmente está tomando decisões com dados incompletos.
					</p>
				</div>

				<div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-5">
					{problems.map((problem, index) => {
						const Icon = problem.icon;
						const number = String(index + 1).padStart(2, "0");

						return (
							<div
								key={problem.title}
								className="group relative overflow-hidden rounded-xl border border-primary-foreground/10 bg-primary-foreground/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-primary-foreground/[0.06]"
							>
								<div
									aria-hidden
									className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
								/>

								<div className="mb-5 flex items-center justify-between">
									<div className="flex size-10 items-center justify-center rounded-lg bg-accent/15 text-accent ring-1 ring-accent/20 transition-colors group-hover:bg-accent/25">
										<Icon size={18} />
									</div>
									<span className="font-serif text-2xl italic leading-none text-primary-foreground/25 transition-colors group-hover:text-accent/60">
										{number}
									</span>
								</div>

								<h3 className="mb-2 text-[15px] font-semibold leading-snug text-primary-foreground">
									{problem.title}
								</h3>
								<p className="text-sm leading-relaxed text-primary-foreground/55">
									{problem.description}
								</p>

								<div
									aria-hidden
									className="pointer-events-none absolute -bottom-px -right-px size-12 rounded-tl-xl border-l border-t border-accent/0 transition-colors duration-300 group-hover:border-accent/30"
								/>
							</div>
						);
					})}
				</div>

				<BrokenChart />
			</div>
		</section>
	);
}

function FragmentedDataBackground() {
	return (
		<>
			<div
				aria-hidden
				className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,oklch(0.4_0.15_280/0.35)_0%,transparent_50%),radial-gradient(circle_at_bottom_right,oklch(0.35_0.12_260/0.3)_0%,transparent_55%)]"
			/>
			<div
				aria-hidden
				className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px]"
			/>
			<div aria-hidden className="absolute inset-0 hidden opacity-10 lg:block">
				<svg className="size-full" viewBox="0 0 800 600" fill="none">
					{fragments.map((fragment) => (
						<rect
							key={`${fragment.x}-${fragment.y}`}
							x={fragment.x}
							y={fragment.y}
							width={fragment.width}
							height={3}
							fill="white"
							opacity={fragment.opacity}
						/>
					))}
				</svg>
			</div>
		</>
	);
}

function BrokenChart() {
	return (
		<div className="mt-16 flex justify-center lg:mt-20">
			<div className="w-full max-w-md">
				<div className="flex h-20 items-end justify-center gap-1">
					{chartBars.map((height, index) => (
						<div
							key={`${height}-${index}`}
							className={`w-4 rounded-sm sm:w-6 ${
								index % 3 === 0
									? "border border-dashed border-primary-foreground/30 bg-primary-foreground/20"
									: "bg-accent/60"
							}`}
							style={{ height: `${height}%`, opacity: index % 3 === 0 ? 0.3 : 0.6 }}
						/>
					))}
				</div>
				<p className="mt-4 text-center text-[11px] font-medium uppercase tracking-[0.24em] text-primary-foreground/45">
					Dados fragmentados {"->"} Sistema unificado
				</p>
			</div>
		</div>
	);
}
