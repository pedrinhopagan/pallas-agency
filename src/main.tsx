import ReactDOM from "react-dom/client";

import { LandingPage } from "@/features/landing/landing-page";

const rootElement = document.querySelector("#app");

if (rootElement && !rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(<LandingPage />);
}
