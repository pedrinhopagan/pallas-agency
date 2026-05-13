export function BrandMark() {
	return (
		<div className="flex items-center gap-2">
			<img src={`${import.meta.env.BASE_URL}logo.svg`} alt="" className="size-8 shrink-0" />
			<span className="text-lg font-semibold tracking-tight text-foreground">Pallas Agency</span>
		</div>
	);
}
