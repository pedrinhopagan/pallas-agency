import { CTASection } from "./components/cta-section";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { MethodologySection } from "./components/methodology-section";
import { ModelsSection } from "./components/models-section";
import { ProblemSection } from "./components/problem-section";
import { SquadSection } from "./components/squad-section";
import { WhyPallasSection } from "./components/why-pallas-section";

export function LandingPage() {
	return (
		<main className="min-h-screen">
			<Header />
			<Hero />
			<ProblemSection />
			<MethodologySection />
			<SquadSection />
			<ModelsSection />
			<WhyPallasSection />
			<CTASection />
			<Footer />
		</main>
	);
}
