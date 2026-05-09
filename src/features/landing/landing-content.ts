import {
	Activity,
	BarChart3,
	Beaker,
	Brain,
	Code2,
	Database,
	Eye,
	Layers,
	LineChart,
	Lock,
	ShieldCheck,
	Target,
	TrendingDown,
	TrendingUp,
	type LucideIcon,
} from "lucide-react";

export interface IconCardContent {
	icon: LucideIcon;
	title: string;
	description: string;
}

export const navLinks = [
	{ href: "#problema", label: "Problema" },
	{ href: "#metodologia", label: "Metodologia" },
	{ href: "#squad", label: "Squad" },
	{ href: "#modelos", label: "Modelos" },
	{ href: "#diagnostico", label: "Diagnóstico" },
];

export const heroMetrics = [
	{ label: "Mídia + CRM + Receita", value: "1 fonte", icon: Database, tone: "accent" },
	{ label: "Decisão por evidência", value: "CAC/LTV", icon: Activity, tone: "primary" },
];

export const problems: IconCardContent[] = [
	{
		icon: Eye,
		title: "Você escala mídia sem saber o que realmente gerou receita.",
		description:
			"Privacidade, bloqueadores e perda de eventos reduzem a visibilidade real da jornada.",
	},
	{
		icon: BarChart3,
		title: "Cada área defende um número diferente.",
		description:
			"Mídia, CRM, analytics e vendas divergem — e decisões de budget viram disputa política.",
	},
	{
		icon: TrendingDown,
		title: "O CAC sobe sem diagnóstico confiável.",
		description:
			"Sem mensuração integrada, fica impossível saber se o problema está no canal, no tracking, no criativo ou no funil.",
	},
	{
		icon: Lock,
		title: "As plataformas otimizam para elas mesmas.",
		description:
			"Dados nativos ajudam o algoritmo da plataforma, mas não necessariamente revelam impacto real em receita, margem e LTV.",
	},
];

export const warningSigns = [
	"Meta Ads mostra crescimento, mas receita não acompanha.",
	"GA4, CRM e gateway contam conversões diferentes.",
	"O budget aumenta e o CAC sobe sem explicação confiável.",
	"Decisões de mídia dependem mais de feeling do que de evidência.",
	"Ninguém sabe qual canal realmente contribui para LTV.",
];

export const methodologySteps = [
	{
		number: "01",
		icon: Database,
		title: "Data Foundations",
		items: [
			"Fonte única de verdade para mídia, CRM e receita.",
			"Tracking server-side e eventos confiáveis.",
			"Pipeline de dados preparado para decisão.",
			"Menos dependência dos relatórios nativos das plataformas.",
		],
		color: "from-primary to-primary/80",
	},
	{
		number: "02",
		icon: BarChart3,
		title: "Advanced Measurement",
		items: [
			"Modelo de contribuição real por canal.",
			"Incrementalidade e testes de lift.",
			"Reconciliação entre mídia, CRM e vendas.",
			"Leitura integrada de CAC, ROI, margem e LTV.",
		],
		color: "from-primary/80 to-accent/80",
	},
	{
		number: "03",
		icon: Beaker,
		title: "Scientific Acquisition",
		items: [
			"Roadmap de experimentos com hipótese, métrica e decisão.",
			"Alocação de budget por evidência.",
			"Escala orientada por sinais confiáveis.",
			"Menos desperdício entre canais e campanhas.",
		],
		color: "from-accent/80 to-accent",
	},
	{
		number: "04",
		icon: LineChart,
		title: "CRO & Journey",
		items: [
			"Diagnóstico de fricções pós-clique.",
			"Testes de conversão em páginas e jornadas.",
			"Mais receita capturada por usuário adquirido.",
			"Melhoria contínua de eficiência e LTV.",
		],
		color: "from-accent to-primary",
	},
];

export const squadRoles = [
	{
		icon: Code2,
		title: "Data Engineers & Fullstack Devs",
		description:
			"Implementam tracking server-side, pipelines, integrações com CRM e data warehouse para reduzir dependência das plataformas.",
		accent: "bg-primary",
	},
	{
		icon: Brain,
		title: "Data & Marketing Scientists",
		description:
			"Estimam impacto real, detectam desperdício e constroem modelos para decisões de budget.",
		accent: "bg-accent",
	},
	{
		icon: Target,
		title: "Acquisition & CRO Specialists",
		description:
			"Transformam evidência em testes, mídia, landing pages e jornadas de conversão.",
		accent: "bg-primary",
	},
	{
		icon: Layers,
		title: "Product Managers",
		description:
			"Traduzem objetivos comerciais em prioridades técnicas e ciclos de entrega.",
		accent: "bg-accent",
	},
];

export const stackItems = [
	"Python",
	"SQL",
	"BigQuery",
	"Looker",
	"dbt",
	"Segment",
	"GA4",
	"Meta API",
	"Google Ads API",
];

export const engagementModels = [
	{
		icon: Database,
		title: "Data Foundations",
		subtitle: "Base técnica de mensuração",
		description:
			"Para empresas que precisam corrigir tracking, integração e fonte de verdade antes de escalar investimento.",
		focusLabel: "Você precisa disso se:",
		focus: [
			"GA4, CRM, mídia e vendas não batem.",
			"Seu tracking depende demais do browser.",
			"Você não confia nos relatórios para decidir budget.",
			"Não existe uma fonte única de verdade.",
		],
		delivery: "Base confiável para mensurar aquisição.",
		cta: "Avaliar maturidade de dados",
		featured: false,
	},
	{
		icon: TrendingUp,
		title: "Growth Intelligence",
		subtitle: "Operação contínua de aquisição científica",
		description:
			"Para empresas com base mínima que querem escalar aquisição com experimentos, modelos e decisões por evidência.",
		focusLabel: "Você precisa disso se:",
		focus: [
			"Você já investe alto e precisa escalar com previsibilidade.",
			"Quer operar experimentos contínuos.",
			"Precisa conectar CAC, ROI, LTV e margem.",
			"Quer reduzir desperdício entre canais.",
		],
		delivery: "Ciclo contínuo de decisão, experimento e escala.",
		cta: "Discutir operação contínua",
		featured: true,
	},
];

export const finalCtaBenefits = [
	"Mapeamento dos principais pontos de perda de visibilidade.",
	"Hipóteses iniciais de desperdício e oportunidade.",
	"Próximos passos para uma operação de mensuração confiável.",
];

export const contactSignals = [
	{ label: "Tracking", icon: Database },
	{ label: "Atribuição", icon: LineChart },
	{ label: "Governança", icon: ShieldCheck },
];

export const whyPallasPrinciples = [
	{
		label: "Estratégia",
		description:
			"Partimos das decisões comerciais que precisam ser defendidas, não de relatórios bonitos.",
	},
	{
		label: "Evidência",
		description:
			"Conectamos mídia, CRM e receita para reduzir disputa política e aumentar confiança operacional.",
	},
	{
		label: "Engenharia",
		description:
			"Transformamos mensuração em infraestrutura, modelo e rotina de decisão — não em recomendação solta.",
	},
];

export const investmentOptions = [
	"Menos de R$ 50 mil/mês",
	"R$ 50 - 200 mil/mês",
	"R$ 200 - 500 mil/mês",
	"R$ 500 mil - 1 milhão/mês",
	"Mais de R$ 1 milhão/mês",
];

export const footerLinks = navLinks;
