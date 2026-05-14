import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";

import { engagementModels } from "../landing-content";

export function ModelsSection() {
	return (
		<section
			id="modelos"
			className="relative overflow-hidden bg-secondary/[0.04] py-24 lg:py-36"
		>
			<ModelsBackground />

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<ModelsHeading />

				<div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:mt-20 lg:grid-cols-2 lg:gap-10">
					{engagementModels.map((model) => (
						<ModelCard key={model.title} model={model} />
					))}
				</div>
			</div>
		</section>
	);
}

function ModelsHeading() {
	return (
		<div className="mx-auto max-w-3xl text-center">
			<div className="mb-6 inline-flex items-center gap-3">
				<span className="h-px w-10 bg-accent/40" />
				<span className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-accent">
					Modelos de Engajamento
				</span>
				<span className="h-px w-10 bg-accent/40" />
			</div>

			<h2 className="mb-6 text-balance text-3xl font-semibold leading-[1.1] text-foreground sm:text-4xl lg:text-[2.75rem]">
				Escolha o modelo{" "}
				<span className="font-semibold text-pallas-purple">
					ideal
				</span>{" "}
				para o seu momento.
			</h2>

			<p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
				Dois caminhos consultivos para empresas em diferentes estágios de maturidade de dados.
			</p>
		</div>
	);
}

function ModelCard({ model }: { model: (typeof engagementModels)[number] }) {
	const Icon = model.icon;
	const isFeatured = model.featured;

	if (isFeatured) {
		return (
			<article className="group relative pt-3">
				<div className="pointer-events-none absolute -inset-px top-3 rounded-2xl bg-gradient-to-br from-accent/50 via-primary/30 to-accent/40 opacity-70 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

				<div className="absolute left-1/2 top-0 z-10 -translate-x-1/2">
					<span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent px-4 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-accent-foreground shadow-lg shadow-accent/30">
						<span className="pulse-dot size-1.5 rounded-full bg-accent-foreground" />
						Mais Popular
					</span>
				</div>

				<div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-pallas-navy via-primary to-pallas-blue p-8 shadow-2xl shadow-primary/30 lg:p-10">
					<div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
					<div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-accent/20 blur-3xl" />
					<div className="pointer-events-none absolute -bottom-32 -left-16 size-72 rounded-full bg-pallas-purple/15 blur-3xl" />

					<div className="relative mb-6 flex items-start justify-between gap-4">
						<div className="min-w-0">
							<p className="mb-2 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-accent">
								{model.subtitle}
							</p>
							<h3 className="text-balance text-3xl font-semibold leading-tight text-primary-foreground lg:text-4xl">
								{model.title}
							</h3>
						</div>
						<div className="relative flex size-14 shrink-0 items-center justify-center rounded-full border border-primary-foreground/15 bg-primary-foreground/[0.06] backdrop-blur-sm">
							<div className="absolute inset-1 rounded-full border border-accent/20" />
							<Icon size={22} className="text-accent" />
						</div>
					</div>

					<p className="mb-8 text-pretty text-[0.95rem] leading-relaxed text-primary-foreground/75">
						{model.description}
					</p>

					<div className="mb-8">
						<div className="mb-4 flex items-center gap-3">
							<p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-primary-foreground/50">
								Foco
							</p>
							<span className="h-px flex-1 bg-primary-foreground/15" />
						</div>
						<ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
							{model.focus.map((item) => (
								<li
									key={item}
									className="flex items-center gap-2.5 text-sm text-primary-foreground/90"
								>
									<span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-accent/20">
										<Check size={11} className="text-accent" strokeWidth={3} />
									</span>
									{item}
								</li>
							))}
						</ul>
					</div>

					<div className="relative mb-8 overflow-hidden rounded-xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-5">
						<div className="absolute left-0 top-3 h-[calc(100%-1.5rem)] w-px bg-accent/60" />
						<p className="mb-2 pl-3 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-primary-foreground/50">
							Entrega Principal
						</p>
						<p className="pl-3 text-base font-medium leading-snug text-primary-foreground">
							{model.delivery}
						</p>
					</div>

					<Button
						asChild
						className="mt-auto w-full bg-primary-foreground text-primary shadow-lg shadow-accent/10 transition-transform hover:scale-[1.01] hover:bg-primary-foreground/95"
					>
						<a href="#diagnostico">
							Saber mais
							<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
						</a>
					</Button>
				</div>
			</article>
		);
	}

	return (
		<article className="group relative pt-3">
			<div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-xl shadow-primary/[0.04] transition-all duration-300 hover:border-accent/25 hover:shadow-2xl hover:shadow-primary/10 lg:p-10">
				<div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-pallas-blue/30 to-transparent" />
				<div className="pointer-events-none absolute -right-32 -top-32 size-72 rounded-full bg-pallas-blue/[0.04] blur-3xl" />

				<div className="relative mb-6 flex items-start justify-between gap-4">
					<div className="min-w-0">
						<p className="mb-2 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-pallas-blue">
							{model.subtitle}
						</p>
						<h3 className="text-balance text-3xl font-semibold leading-tight text-foreground lg:text-4xl">
							{model.title}
						</h3>
					</div>
					<div className="relative flex size-14 shrink-0 items-center justify-center rounded-full border border-border bg-pallas-gray-light">
						<div className="absolute inset-1 rounded-full border border-primary/10" />
						<Icon size={22} className="text-primary" />
					</div>
				</div>

				<p className="mb-8 text-pretty text-[0.95rem] leading-relaxed text-muted-foreground">
					{model.description}
				</p>

				<div className="mb-8">
					<div className="mb-4 flex items-center gap-3">
						<p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
							Foco
						</p>
						<span className="h-px flex-1 bg-border" />
					</div>
					<ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
						{model.focus.map((item) => (
							<li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
								<span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-accent/15">
									<Check size={11} className="text-accent" strokeWidth={3} />
								</span>
								{item}
							</li>
						))}
					</ul>
				</div>

				<div className="relative mb-8 overflow-hidden rounded-xl border border-border bg-pallas-gray-light p-5">
					<div className="absolute left-0 top-3 h-[calc(100%-1.5rem)] w-px bg-pallas-blue/50" />
					<p className="mb-2 pl-3 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
						Entrega Principal
					</p>
					<p className="pl-3 text-base font-medium leading-snug text-foreground">
						{model.delivery}
					</p>
				</div>

				<Button
					asChild
					className="mt-auto w-full bg-primary text-primary-foreground shadow-md shadow-primary/15 transition-transform hover:scale-[1.01] hover:bg-primary/90"
				>
					<a href="#diagnostico">
						Saber mais
						<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
					</a>
				</Button>
			</div>
		</article>
	);
}

function ModelsBackground() {
	return (
		<div className="pointer-events-none absolute inset-0 overflow-hidden">
			<div className="dot-grid absolute inset-0 hidden opacity-40 lg:block" />
			<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
			<div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
			<div className="absolute -left-40 top-1/4 hidden size-[28rem] rounded-full bg-pallas-blue/[0.05] blur-3xl lg:block" />
			<div className="absolute -right-40 bottom-1/4 hidden size-[28rem] rounded-full bg-pallas-purple/[0.06] blur-3xl lg:block" />
			<div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-background/40 to-transparent" />
		</div>
	);
}
