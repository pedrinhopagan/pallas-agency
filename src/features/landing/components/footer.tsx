import { footerLinks } from "../landing-content";
import { BrandMark } from "./brand-mark";

export function Footer() {
	return (
		<footer className="border-t border-border bg-background">
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
				<div className="grid gap-8 lg:grid-cols-4">
					<div className="lg:col-span-2">
						<div className="mb-4">
							<BrandMark />
						</div>
						<p className="mb-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
							Consultoria Engineer-First especializada em MarTech, Marketing Measurement e Aquisição
							de Alta Performance.
						</p>
						<p className="text-xs text-muted-foreground/60">
							Transformando investimento em marketing em uma ciência exata.
						</p>
					</div>

					<div>
						<h4 className="mb-4 text-sm font-semibold text-foreground">Navegação</h4>
						<ul className="space-y-2">
							{footerLinks.map((link) => (
								<li key={link.href}>
									<a
										href={link.href}
										className="text-sm text-muted-foreground transition-colors hover:text-foreground"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="mb-4 text-sm font-semibold text-foreground">Contato</h4>
						<ul className="space-y-2">
							<li>
								<a
									href="mailto:contato@pallasagency.com"
									className="text-sm text-muted-foreground transition-colors hover:text-foreground"
								>
									contato@pallasagency.com
								</a>
							</li>
							<li>
								<span className="text-sm text-muted-foreground">São Paulo, Brasil</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
					<p className="text-xs text-muted-foreground">
						{new Date().getFullYear()} Pallas Agency. Todos os direitos reservados.
					</p>
					<div className="flex items-center gap-4">
						<a
							href="#"
							className="text-xs text-muted-foreground transition-colors hover:text-foreground"
						>
							Privacidade
						</a>
						<a
							href="#"
							className="text-xs text-muted-foreground transition-colors hover:text-foreground"
						>
							Termos
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
