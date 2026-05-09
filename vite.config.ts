import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
	root: "src",
	publicDir: "../public",
	plugins: [
		tanstackRouter({
			target: "react",
			autoCodeSplitting: false,
			routesDirectory: "routes",
			generatedRouteTree: "routeTree.gen.ts",
		}),
		tailwindcss(),
		react(),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	build: {
		outDir: "../dist",
		emptyOutDir: true,
	},
});
