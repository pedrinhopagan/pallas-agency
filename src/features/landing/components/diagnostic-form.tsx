import { ArrowRight, Check, Loader2 } from "lucide-react";
import { type FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { investmentOptions } from "../landing-content";

export function DiagnosticForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setIsSubmitting(true);
		await new Promise((resolve) => {
			setTimeout(resolve, 1500);
		});
		setIsSubmitting(false);
		setIsSubmitted(true);
	}

	if (isSubmitted) {
		return <SuccessState />;
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="space-y-5 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur-sm lg:p-8"
		>
			<div className="grid gap-4 sm:grid-cols-2">
				<Field id="name" label="Nome" placeholder="Seu nome" />
				<Field id="company" label="Empresa" placeholder="Nome da empresa" />
			</div>

			<Field id="email" label="E-mail" type="email" placeholder="seu@email.com" />
			<SelectField
				id="investment"
				label="Investimento mensal em mídia"
				options={investmentOptions}
			/>

			<Button
				type="submit"
				disabled={isSubmitting}
				className="h-12 w-full bg-accent font-medium text-accent-foreground hover:bg-accent/90"
			>
				{isSubmitting ? (
					<>
						<Loader2 size={18} className="animate-spin" />
						Enviando...
					</>
				) : (
					<>
						Solicitar Diagnóstico
						<ArrowRight size={18} />
					</>
				)}
			</Button>

			<p className="text-center text-xs text-primary-foreground/50">
				Retorno em até 24h com análise preliminar da sua operação.
			</p>
		</form>
	);
}

function Field({
	id,
	label,
	type = "text",
	placeholder,
}: {
	id: string;
	label: string;
	type?: string;
	placeholder: string;
}) {
	return (
		<div className="space-y-2">
			<Label htmlFor={id} className="text-sm text-primary-foreground/80">
				{label}
			</Label>
			<Input
				id={id}
				type={type}
				placeholder={placeholder}
				required
				className="border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent"
			/>
		</div>
	);
}

function SelectField({ id, label, options }: { id: string; label: string; options: string[] }) {
	return (
		<div className="space-y-2">
			<Label htmlFor={id} className="text-sm text-primary-foreground/80">
				{label}
			</Label>
			<select
				id={id}
				required
				className="h-10 w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/5 px-3 text-sm text-primary-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
			>
				<option value="" className="bg-primary text-primary-foreground">
					Selecione...
				</option>
				{options.map((option) => (
					<option key={option} value={option} className="bg-primary text-primary-foreground">
						{option}
					</option>
				))}
			</select>
		</div>
	);
}

function SuccessState() {
	return (
		<div className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-8 text-center backdrop-blur-sm">
			<div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-accent/20">
				<Check size={32} className="text-accent" />
			</div>
			<h3 className="mb-2 text-xl font-semibold text-primary-foreground">Solicitação enviada!</h3>
			<p className="text-primary-foreground/70">Nossa equipe entrará em contato em até 24 horas.</p>
		</div>
	);
}
