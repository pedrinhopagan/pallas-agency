export const fadeUp = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};

export function staggerDelay(index: number, base = 0.2) {
	return base + index * 0.1;
}
