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
	{ label: "Server-Side Events", value: "2.4M", icon: Database, tone: "accent" },
	{ label: "Incrementality", value: "+34%", icon: Activity, tone: "primary" },
];

export const problems: IconCardContent[] = [
	{
		icon: Eye,
		title: "Perda de visibilidade pós-iOS 14+",
		description: "Mudanças de privacidade limitaram drasticamente o tracking tradicional.",
	},
	{
		icon: BarChart3,
		title: "Discrepâncias entre mídia, CRM e vendas",
		description: "Dados fragmentados geram decisões baseadas em informações incompletas.",
	},
	{
		icon: TrendingDown,
		title: "Escala limitada pelo aumento de CAC",
		description: "Sem mensuração precisa, a alocação de budget se torna ineficiente.",
	},
	{
		icon: Lock,
		title: "Dependência excessiva dos dados nativos",
		description: "Confiar apenas nas plataformas cria um ponto cego estratégico.",
	},
];

export const methodologySteps = [
	{
		number: "01",
		icon: Database,
		title: "Data Foundations",
		items: [
			"Auditoria de tracking",
			"Conexões server-side",
			"Data Warehouse proprietário",
			"Base única de performance",
		],
		color: "from-primary to-primary/80",
	},
	{
		number: "02",
		icon: BarChart3,
		title: "Advanced Measurement",
		items: ["Atribuição", "Incrementalidade", "MMM/MTA", "Reconciliação entre mídia, CRM e vendas"],
		color: "from-primary/80 to-accent/80",
	},
	{
		number: "03",
		icon: Beaker,
		title: "Scientific Acquisition",
		items: [
			"Testes estruturados",
			"Planos de escala",
			"Alocação por evidência",
			"Leitura integrada de CAC, ROI e LTV",
		],
		color: "from-accent/80 to-accent",
	},
	{
		number: "04",
		icon: LineChart,
		title: "CRO & Journey",
		items: [
			"Diagnóstico de funil",
			"Testes de conversão",
			"Otimização de páginas e jornadas",
			"Aumento de LTV",
		],
		color: "from-accent to-primary",
	},
];

export const squadRoles = [
	{
		icon: Code2,
		title: "Data Engineers & Fullstack Devs",
		description:
			"Construindo integrações, pipelines, tracking server-side e estruturas técnicas confiáveis.",
		accent: "bg-primary",
	},
	{
		icon: Brain,
		title: "Data & Marketing Scientists",
		description: "Criando modelos de atribuição, incrementalidade e inteligência de decisão.",
		accent: "bg-accent",
	},
	{
		icon: Target,
		title: "Acquisition & CRO Specialists",
		description:
			"Transformando modelos em execução de mídia, experimentos e otimização de conversão.",
		accent: "bg-primary",
	},
	{
		icon: Layers,
		title: "Product Managers",
		description:
			"Garantindo alinhamento entre execução técnica, prioridades de negócio e crescimento.",
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
		subtitle: "Construção de Base",
		description:
			"Indicado para empresas que precisam corrigir a base antes de escalar investimento.",
		focus: ["Auditoria completa", "Server-Side Tracking", "Data Warehouse", "Modelagem inicial"],
		delivery: "O ativo tecnológico do cliente.",
		featured: false,
	},
	{
		icon: TrendingUp,
		title: "Growth Intelligence",
		subtitle: "Operação Contínua",
		description:
			"Indicado para empresas que já possuem base mínima e precisam operar crescimento continuamente.",
		focus: ["Gestão de mídia", "Experimentos", "CRO avançado", "Refino de modelos"],
		delivery: "Escalada de ROI e eficiência operacional.",
		featured: true,
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
