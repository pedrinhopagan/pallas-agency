import type { ReactNode } from "react";

interface SectionHeadingProps {
	align?: "left" | "center";
	eyebrow: ReactNode;
	title: ReactNode;
	description?: ReactNode;
	inView?: boolean;
	inverse?: boolean;
}

export function SectionHeading({
	align = "left",
	eyebrow,
	title,
	description,
	inverse,
}: SectionHeadingProps) {
	const textAlign = align === "center" ? "mx-auto text-center" : "";
	const titleColor = inverse ? "text-primary-foreground" : "text-foreground";
	const descriptionColor = inverse ? "text-primary-foreground/70" : "text-muted-foreground";

	return (
		<div className={`max-w-3xl ${textAlign}`}>
			<div className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">{eyebrow}</div>
			<h2
				className={`mb-6 text-balance text-2xl font-semibold sm:text-3xl lg:text-4xl ${titleColor}`}
			>
				{title}
			</h2>
			{description && (
				<p className={`text-pretty text-base leading-relaxed sm:text-lg ${descriptionColor}`}>
					{description}
				</p>
			)}
		</div>
	);
}
