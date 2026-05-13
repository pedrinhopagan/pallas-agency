import { $ } from "bun";
import { join } from "node:path";

const ROOT = join(import.meta.dir, "..");
const PUBLIC = join(ROOT, "public");

const LOGO_PATHS = `
  <path d="M15 7H2V21.7H5.3V10.3H14.9C18.7 10.3 21.8 13.1 21.8 17.3C21.8 21.2 19.2 24.7 13.7 24.8H9.2C4.8 24.8 2 28.2 2 32.2V40.8H5.3V33.2C5.3 30.3 7.1 28.2 9.7 28.2H13.6C20.4 28.3 25.1 25 25.1 17.5C25 12 21 7 15 7Z" fill="#3C4850"/>
  <path d="M26.9 28.2C26.3 28.1 25.6 28.1 24.8 28.1C17.2 28.1 11 33.8 9.60001 40.8H12.9C13.9 36.5 17.9 31.4 24.3 31.3H25.6H26.3L27.6 30C27.9 29.7 27.3 28.2 26.9 28.2Z" fill="#3C4850"/>
  <path d="M42.2 34.1L29.2 7H26.2L24.4 10C25.2 11 25.6 12.2 26.2 13.5L27.4 11.3L37.6 32.5C35.5 31.7 32.4 30.4 29.3 29.9C29.3 30.7 28.9 31.2 28.5 31.8C31.5 32.3 36.2 34 38.9 36.2C38.7 36.7 38.6 37.1 38.6 37.6C38.6 39.3 40 40.9 42 40.9C43.8 40.9 45.6 39.4 45.7 37.5C45.7 35.7 44.3 34.1 42.2 34.1Z" fill="url(#grad)"/>
  <defs>
    <linearGradient id="grad" x1="34.56" y1="24.44" x2="34.56" y2="39.305" gradientUnits="userSpaceOnUse">
      <stop offset="0.3125" stop-color="#3C4850"/>
      <stop offset="0.5806" stop-color="#002D66"/>
    </linearGradient>
  </defs>
`;

function makeRoundedIconSvg(size: number, radius: number, padding: number): string {
	const logo = 48;
	const usable = size - padding * 2;
	const scale = usable / logo;
	const tx = padding;
	const ty = padding;

	return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" rx="${radius}" fill="white"/>
  <g transform="translate(${tx}, ${ty}) scale(${scale})">
    ${LOGO_PATHS}
  </g>
</svg>`;
}

const sizes: { file: string; size: number; radius: number; padding: number }[] = [
	{ file: "favicon-32x32.png", size: 32, radius: 7, padding: 4 },
	{ file: "icon-light-32x32.png", size: 32, radius: 7, padding: 4 },
	{ file: "apple-touch-icon.png", size: 180, radius: 40, padding: 22 },
	{ file: "apple-icon.png", size: 180, radius: 40, padding: 22 },
	{ file: "logo-192.png", size: 192, radius: 43, padding: 24 },
	{ file: "logo-512.png", size: 512, radius: 115, padding: 64 },
];

for (const { file, size, radius, padding } of sizes) {
	const svg = makeRoundedIconSvg(size, radius, padding);
	const svgPath = `/tmp/icon-${size}.svg`;
	await Bun.write(svgPath, svg);
	await $`rsvg-convert -w ${size} -h ${size} ${svgPath} -o ${join(PUBLIC, file)}`;
	console.log(`✓ ${file} (${size}x${size})`);
}

// icon.svg com fundo branco + rounded (usado em <link rel="icon">)
const iconSvg = makeRoundedIconSvg(48, 11, 6);
await Bun.write(join(PUBLIC, "icon.svg"), iconSvg);
console.log("✓ icon.svg");

// dark variant: fundo azul escuro
const darkSvg = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="7" fill="#002D66"/>
  <g transform="translate(4, 4) scale(0.5)">
    <path d="M15 7H2V21.7H5.3V10.3H14.9C18.7 10.3 21.8 13.1 21.8 17.3C21.8 21.2 19.2 24.7 13.7 24.8H9.2C4.8 24.8 2 28.2 2 32.2V40.8H5.3V33.2C5.3 30.3 7.1 28.2 9.7 28.2H13.6C20.4 28.3 25.1 25 25.1 17.5C25 12 21 7 15 7Z" fill="white"/>
    <path d="M26.9 28.2C26.3 28.1 25.6 28.1 24.8 28.1C17.2 28.1 11 33.8 9.60001 40.8H12.9C13.9 36.5 17.9 31.4 24.3 31.3H25.6H26.3L27.6 30C27.9 29.7 27.3 28.2 26.9 28.2Z" fill="white"/>
    <path d="M42.2 34.1L29.2 7H26.2L24.4 10C25.2 11 25.6 12.2 26.2 13.5L27.4 11.3L37.6 32.5C35.5 31.7 32.4 30.4 29.3 29.9C29.3 30.7 28.9 31.2 28.5 31.8C31.5 32.3 36.2 34 38.9 36.2C38.7 36.7 38.6 37.1 38.6 37.6C38.6 39.3 40 40.9 42 40.9C43.8 40.9 45.6 39.4 45.7 37.5C45.7 35.7 44.3 34.1 42.2 34.1Z" fill="#7BA7D0"/>
  </g>
</svg>`;
await Bun.write("/tmp/icon-dark-32.svg", darkSvg);
await $`rsvg-convert -w 32 -h 32 /tmp/icon-dark-32.svg -o ${join(PUBLIC, "icon-dark-32x32.png")}`;
console.log("✓ icon-dark-32x32.png");
