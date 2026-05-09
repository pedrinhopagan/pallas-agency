# Pallas Landing Page Excellence PRD & Execution Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan phase-by-phase. Each phase must be completed, verified, reviewed, and committed before starting the next one.

**Goal:** Transform the current Pallas Agency landing page from a good institutional page into a premium, conversion-ready, technically excellent landing page for an elite Engineer-First MarTech, Marketing Measurement, Marketing Data Science, and Acquisition consultancy.

**Architecture:** Keep the page as a focused single-page marketing experience, but remove boilerplate/app baggage from the public landing path. Treat copy, visual system, form conversion, tracking, SEO, performance, accessibility, and trust as first-class product requirements, not polish. Build vertical slices: every phase should improve what a visitor sees, understands, trusts, or can submit.

**Tech Stack:** React 19, Vite 8, TanStack Router, Tailwind CSS 4, Framer Motion, Bun, TypeScript, existing Pallas landing modules in `src/features/landing`.

---

## 1. Product Context

### 1.1 Product

Pallas Agency landing page.

### 1.2 Business Positioning

Pallas is not a traditional agency. Pallas is an Engineer-First growth consultancy combining:

- MarTech engineering.
- Marketing measurement.
- Marketing data science.
- Acquisition strategy.
- CRO and journey optimization.

Core promise:

> Transform marketing investment into a measurable, reliable, and increasingly predictable growth system.

### 1.3 Target Customer

Primary ICP:

- Companies investing materially in paid media.
- Minimum qualification target: R$ 50k+/month in media investment.
- Best fit: R$ 200k+/month and up, especially when CRM, media, analytics, and revenue data disagree.
- Decision makers: founders, CEOs, CMOs, heads of growth, performance leaders, revenue leaders, data/analytics leaders.

### 1.4 Core Pain

The customer does not merely need “better landing pages” or “better campaign management”. The real pain is:

> They are spending serious money on acquisition while relying on incomplete, fragmented, platform-biased, or last-click data.

This creates:

- Budget allocation uncertainty.
- CAC increases without reliable diagnosis.
- CRM/media/revenue mismatches.
- Political disputes between teams over whose numbers are true.
- Overdependence on Meta/Google native reporting.
- Difficulty scaling without destroying efficiency.

### 1.5 Desired Visitor Reaction

The visitor should feel:

1. “This is not a normal agency.”
2. “They understand the expensive, technical problem behind our growth.”
3. “This looks like a serious technology/data company.”
4. “The methodology is clear and differentiated.”
5. “If we spend meaningful money on media, we should talk to them.”

---

## 2. Non-Negotiable Product Decisions

## 2.0 Conversion Strategy Decision

Primary conversion:

> Qualified diagnostic form submission.

Secondary conversions:

- Hero CTA click.
- Warning signs CTA click.
- Form start.
- Scroll to final CTA.
- Engagement model CTA click.

Qualified lead definition:

- Company field is filled.
- Email is valid.
- Investment range is at least `R$ 50 - 200 mil/mês`, with best-fit priority for `R$ 200 mil/mês+`.
- Main challenge matches measurement, attribution, CAC, acquisition scale, CRM/media/revenue mismatch, or CRO.
- Submission is not flagged by honeypot or rate limit.

Post-submit decision:

- Show success only after confirmed delivery to the approved lead destination.
- Success message must set expectation: return in up to 24h after internal analysis.
- Lead payload must support commercial triage: name, company, email, investment range, challenge, context, UTM, referrer, path, submittedAt.

Business metrics to evaluate after launch:

- CTA click-through rate.
- Form start rate.
- Form completion rate.
- Qualified lead rate.
- Form error rate.
- Mobile conversion rate.


These are decisions for execution. Do not reopen them unless user explicitly changes strategy.

### 2.1 Positioning Decision

Use this core positioning across the LP:

> Engenharia de dados e ciência de marketing para escalar aquisição com menos incerteza.

Do not position Pallas as:

- agência de performance;
- agência de mídia;
- produtora de landing pages;
- consultoria genérica de marketing;
- “growth hacking”.

### 2.2 Primary CTA Decision

Primary CTA becomes:

> Solicitar diagnóstico técnico

Secondary CTA becomes:

> Ver método Closed-Loop

Avoid weak CTAs like:

- Saber mais.
- Entrar em contato.
- Conheça nossos serviços.

### 2.3 Diagnostic Offer Decision

Do not lead with “gratuito”. It lowers premium perception.

Use:

> Sessão técnica para avaliar maturidade de mensuração, tracking, atribuição e eficiência de aquisição.

### 2.4 ICP Qualification Decision

State qualification explicitly above the fold or near the CTA:

> Para operações com investimento relevante em mídia, onde erro de mensuração custa caro demais para ser tratado como detalhe operacional.

The form should keep investment range and add a business challenge field.

### 2.5 Visual Direction Decision

The page should look like a premium technical consultancy/product company inspired by:

- Stripe: clarity, gradient sophistication, engineering credibility.
- Linear: precision, spacing, dark/premium interaction quality.
- Amplitude: analytics/data-product storytelling.
- Accenture/Bain: enterprise confidence and restraint.

Do not make the design playful, loud, crowded, or “agency-like”.

### 2.6 Performance Decision

Premium means fast. Every visual flourish must justify itself.

Targets:

- No initial JS chunk above 500 kB minified.
- Lighthouse mobile Performance target: 90+ after production build.
- Accessibility target: 95+.
- SEO target: 95+.
- Best Practices target: 95+.
- No fake conversion success without backend/webhook confirmation.

---

## 3. Success Metrics

### 3.1 Product Quality Metrics

The LP is acceptable only when:

- Hero communicates ICP, pain, mechanism, and CTA within 5 seconds.
- Mobile first fold feels premium, not text-only.
- The Closed-Loop method looks like a proprietary system, not a checklist.
- The CTA/form works end-to-end.
- No visible boilerplate route or placeholder link remains.
- Footer, privacy, and contact details do not look unfinished.

### 3.2 Technical Metrics

Required checks:

```bash
export PATH="$HOME/.bun/bin:$PATH"
bun run build
bun run typecheck
bun run oxlint
```

Expected:

- All pass.
- No avoidable Vite chunk warning for landing-critical bundle.
- No TypeScript or lint errors.

### 3.3 Conversion Metrics

Track at minimum:

- Page view.
- Hero primary CTA click.
- Secondary CTA click.
- Methodology CTA click.
- Model card CTA click.
- Final CTA view.
- Form start.
- Form submit attempt.
- Form submit success.
- Form submit error.
- Investment range selected.
- Main challenge selected.
- Scroll depth: 25%, 50%, 75%, 90%.

---

## 4. Current State Diagnosis

### 4.1 Strengths

- Strong base structure.
- Good section order.
- Solid existing Pallas brand direction.
- Technical theme is coherent.
- Build/typecheck/lint currently pass.
- Existing components are modular and easy to evolve.

### 4.2 Critical Gaps

- Form submission is fake.
- Hero is good but too generic for premium positioning.
- ICP is not explicit enough.
- Pain is technical but not financially sharp enough.
- Methodology reads like a checklist instead of a proprietary operating system.
- Visual identity is still too template-like.
- Mobile loses the hero visual.
- `/login` boilerplate is public and damages credibility.
- Bundle is too large for a high-performance landing page.
- SEO/social metadata is incomplete.
- Accessibility needs systematic pass.
- Footer has placeholder links.

---

## 5. Final Information Architecture

The final LP should use this order:

1. Header.
2. Hero: positioning, pain, ICP, CTA, premium proof.
3. Problem: lack of trust in data, framed as expensive business risk.
4. “Sinais de alerta” block: self-identification checklist.
5. Closed-Loop Growth: proprietary system visual.
6. Engineer-First squad: why Pallas is not an agency.
7. Engagement models: buyer-fit cards.
8. Proof/trust layer: numbers, methodology proof, cases, or credibility assets.
9. Why Pallas: short brand/philosophy close tied to evidence.
10. Final CTA + real diagnostic form.
11. Footer with real trust/legal/contact links.

If proof assets/cases are not available, use methodology proof and operational credibility instead of inventing fake logos or fake testimonials.

---

## 6. Copy System

### 6.1 Hero Copy

Use this as the target copy unless a stronger version emerges during implementation.

Eyebrow:

> Engineer-First MarTech & Measurement

Headline:

> Engenharia de dados e ciência de marketing para escalar aquisição com menos incerteza.

Subheadline:

> Construímos infraestrutura, modelos de mensuração e ciclos de experimentação que conectam mídia, CRM e receita — para transformar investimento em marketing em decisões confiáveis de crescimento.

Qualification line:

> Para operações com investimento relevante em mídia, onde erro de mensuração custa caro demais para ser tratado como detalhe operacional.

Primary CTA:

> Solicitar diagnóstico técnico

Secondary CTA:

> Ver método Closed-Loop

Proof line if R$50M is real:

> R$ 50M+ em mídia anual analisada, auditada ou otimizada com modelos de mensuração e aquisição.

If not confirmed, replace with:

> Modelos de atribuição, incrementalidade e eficiência conectados a uma fonte única de verdade.

### 6.2 Problem Copy

Title:

> O problema não é falta de dados. É falta de confiança nos dados.

Description:

> Plataformas, CRM, analytics e vendas contam histórias diferentes. Quando a operação depende de last-click e dados nativos, o budget passa a ser alocado com viés — e a escala fica mais cara do que deveria.

Cards:

1. Title: `Você escala mídia sem saber o que realmente gerou receita.`  
   Description: `Privacidade, bloqueadores e perda de eventos reduzem a visibilidade real da jornada.`

2. Title: `Cada área defende um número diferente.`  
   Description: `Mídia, CRM, analytics e vendas divergem — e decisões de budget viram disputa política.`

3. Title: `O CAC sobe sem diagnóstico confiável.`  
   Description: `Sem mensuração integrada, fica impossível saber se o problema está no canal, no tracking, no criativo ou no funil.`

4. Title: `As plataformas otimizam para elas mesmas.`  
   Description: `Dados nativos ajudam o algoritmo da plataforma, mas não necessariamente revelam impacto real em receita, margem e LTV.`

### 6.3 Warning Signs Block

Title:

> Você provavelmente tem um problema de mensuração se:

Bullets:

- Meta Ads mostra crescimento, mas receita não acompanha.
- GA4, CRM e gateway contam conversões diferentes.
- O budget aumenta e o CAC sobe sem explicação confiável.
- Decisões de mídia dependem mais de feeling do que de evidência.
- Ninguém sabe qual canal realmente contribui para LTV.

CTA inside or after block:

> Diagnosticar minha operação

### 6.4 Methodology Copy

Title:

> Closed-Loop Growth: um sistema para medir, decidir e escalar.

Description:

> Unimos engenharia de dados, modelos de mensuração e execução de aquisição em um ciclo contínuo. Cada experimento melhora a base de decisão. Cada decisão melhora a eficiência do próximo investimento.

Step outputs:

1. Data Foundations
   - Fonte única de verdade para mídia, CRM e receita.
   - Tracking server-side e eventos confiáveis.
   - Pipeline de dados preparado para decisão.
   - Menos dependência dos relatórios nativos das plataformas.

2. Advanced Measurement
   - Modelo de contribuição real por canal.
   - Incrementalidade e testes de lift.
   - Reconciliação entre mídia, CRM e vendas.
   - Leitura integrada de CAC, ROI, margem e LTV.

3. Scientific Acquisition
   - Roadmap de experimentos com hipótese, métrica e decisão.
   - Alocação de budget por evidência.
   - Escala orientada por sinais confiáveis.
   - Menos desperdício entre canais e campanhas.

4. CRO & Journey
   - Diagnóstico de fricções pós-clique.
   - Testes de conversão em páginas e jornadas.
   - Mais receita capturada por usuário adquirido.
   - Melhoria contínua de eficiência e LTV.

### 6.5 Engineer-First Copy

Title:

> Não entregamos apenas relatórios. Entregamos engenharia aplicada ao crescimento.

Description:

> Enquanto agências otimizam campanhas dentro das plataformas, a Pallas reconstrói a base técnica que determina se essas campanhas podem ser medidas, comparadas e escaladas com confiança.

Roles:

- Data Engineers & Fullstack Devs: `Implementam tracking server-side, pipelines, integrações com CRM e data warehouse para reduzir dependência das plataformas.`
- Data & Marketing Scientists: `Estimam impacto real, detectam desperdício e constroem modelos para decisões de budget.`
- Acquisition & CRO Specialists: `Transformam evidência em testes, mídia, landing pages e jornadas de conversão.`
- Product Managers: `Traduzem objetivos comerciais em prioridades técnicas e ciclos de entrega.`

### 6.6 Engagement Models Copy

Section title:

> Dois caminhos para transformar mensuração em crescimento.

Description:

> Começamos pela maturidade real da sua operação: corrigir a base ou operar crescimento contínuo sobre uma base confiável.

Data Foundations:

- Subtitle: `Base técnica de mensuração`
- Description: `Para empresas que precisam corrigir tracking, integração e fonte de verdade antes de escalar investimento.`
- “Você precisa disso se:”
  - `GA4, CRM, mídia e vendas não batem.`
  - `Seu tracking depende demais do browser.`
  - `Você não confia nos relatórios para decidir budget.`
  - `Não existe uma fonte única de verdade.`
- CTA: `Avaliar maturidade de dados`

Growth Intelligence:

- Subtitle: `Operação contínua de aquisição científica`
- Description: `Para empresas com base mínima que querem escalar aquisição com experimentos, modelos e decisões por evidência.`
- “Você precisa disso se:”
  - `Você já investe alto e precisa escalar com previsibilidade.`
  - `Quer operar experimentos contínuos.`
  - `Precisa conectar CAC, ROI, LTV e margem.`
  - `Quer reduzir desperdício entre canais.`
- CTA: `Discutir operação contínua`

### 6.7 Final CTA Copy

Title:

> Descubra onde sua mensuração está vazando eficiência.

Description:

> Solicite uma sessão técnica para avaliar tracking, atribuição, integração entre mídia, CRM e receita, além de oportunidades de ganho em aquisição.

Benefits:

- `Mapeamento dos principais pontos de perda de visibilidade.`
- `Hipóteses iniciais de desperdício e oportunidade.`
- `Próximos passos para uma operação de mensuração confiável.`

CTA:

> Solicitar sessão técnica

Microcopy:

> Para operações com investimento relevante em mídia. Retorno em até 24h após análise das informações enviadas.

---

## 7. Proof and Trust Strategy

The LP must not rely on generic claims. Every strong claim needs proof, context, or removal.

### 7.1 Approved Proof Sources

Use only verified proof sources:

- Real media volume handled, if approved by user.
- Real operational metrics, if approved by user.
- Real client logos/cases/testimonials, only if explicitly approved.
- Founder/team credentials, only if approved.
- Methodology artifacts that demonstrate expertise without exposing confidential data.

### 7.2 If No Public Case Studies Are Available

Use methodology proof instead of fake social proof:

- Example tracking map.
- Example event taxonomy.
- Example CRM/media/revenue reconciliation flow.
- Example budget decision model.
- Example experiment roadmap.
- Example CAC/LTV/margin dashboard structure.

These should be shown as anonymized/process artifacts, not fabricated client results.

### 7.3 Trust Rules

- No invented logos.
- No invented testimonials.
- No unverifiable uplift percentages.
- No fake dashboard numbers unless clearly conceptual.
- If `R$ 50M+` is not approved, replace it with methodology proof.

---

## 8. Visual Requirements

### 7.1 Hero Visual

Replace or evolve the current dashboard into a clearer premium system visual.

Required concept:

> Mídia → Eventos → Warehouse → Modelo → Decisão → Escala

The visual should communicate data flow and decision intelligence, not generic charts.

Desktop requirements:

- One dominant premium visual, not many competing badges.
- 2 or 3 metrics maximum.
- Labels must be meaningful.
- Avoid fake-looking SaaS clutter.

Mobile requirements:

- Do not hide all visual sophistication.
- Add a compact hero visual card visible on mobile.
- Use a lightweight static or minimally animated version.

### 7.2 Closed-Loop Visual

The Closed-Loop section must become the signature visual of the page.

Required:

- Four-step loop or system diagram.
- Clear flow between steps.
- Use Pallas blue/purple, but with restrained premium contrast.
- Must work in mobile as stacked sequence.
- Must feel proprietary.

### 7.3 Brand Mark

Current square `P` is not enough.

Requirements:

- Create a more distinctive Pallas mark.
- Keep it simple enough for favicon/social usage.
- Should suggest precision, strategy, signal, or Athena/Pallas without becoming illustrative.
- Avoid generic shield, rocket, graph arrow, or abstract blob clichés.

### 7.4 Motion

Motion should be subtle and purposeful.

Rules:

- No animation that makes content harder to read.
- Respect reduced motion globally.
- Prefer opacity/transform over layout animation.
- Reduce blur and shadow intensity on mobile.
- Do not animate dozens of decorative elements unless measured and justified.

---

## 9. Technical Requirements

### 9.1 Form Conversion

Current fake submission must be replaced.

### 9.1.1 Lead Capture Architecture Decision

Use this order of preference:

1. Backend-owned submission endpoint.
2. Backend proxy to webhook/CRM.
3. Frontend-only honest disabled/error state until a secure destination exists.

The frontend must not call a private webhook or CRM secret directly. If a webhook is used, the frontend calls a controlled public endpoint, and the server forwards the lead with secret credentials.

Required endpoint contract if backend/proxy exists:

- Method: `POST`.
- Request body: diagnostic form payload plus UTM/referrer/path metadata.
- Response success: `{ ok: true, leadId?: string }`.
- Response error: `{ ok: false, code: string, message: string }`.
- Server-side validation required.
- Rate limiting required before production.
- CORS must allow only approved origins in production.

If no backend/proxy exists yet:

- Do not show fake success.
- Show: `Ainda não foi possível enviar sua solicitação. Tente novamente ou entre em contato pelo e-mail.`
- Keep the submit path ready for future endpoint configuration.

Security and anti-spam requirements:

- Add honeypot field.
- Add max length for `context`: 1000 characters.
- Disable submit while pending.
- Timeout request after 10 seconds.
- Do not send PII to analytics.
- Validate again server-side when backend exists.


Fields:

- Name.
- Company.
- Email.
- Investment range.
- Main challenge.
- Optional context textarea.

Field names:

- `name`
- `company`
- `email`
- `monthlyMediaInvestment`
- `mainChallenge`
- `context`

Main challenge options:

- `Tracking / perda de eventos`
- `Atribuição / canais não confiáveis`
- `CAC subindo`
- `CRM, mídia e receita não batem`
- `Escala de aquisição`
- `CRO / conversão`

Requirements:

- Add `name` attributes.
- Add `autoComplete` where applicable.
- Validate required fields.
- Capture UTM parameters.
- Capture landing path and referrer.
- Show loading state only during real submission.
- Show success only after confirmed success.
- Show human-readable error on failure.
- Include LGPD consent text or link near submit.

### 9.2 Tracking

Add a lightweight tracking abstraction.

Analytics must never receive PII. Do not push name, email, company, phone, free-text context, or raw referrer query strings containing sensitive data into `dataLayer`.

Required events:

- `lp_page_view`
- `lp_cta_click`
- `lp_form_start`
- `lp_form_submit_attempt`
- `lp_form_submit_success`
- `lp_form_submit_error`
- `lp_scroll_depth`
- `lp_investment_selected`
- `lp_challenge_selected`

Implementation decision:

- Create `src/features/landing/landing-analytics.ts`.
- It should push to `window.dataLayer` when available.
- It should no-op safely when unavailable.
- Do not add a heavy analytics dependency.

### 9.3 SEO

Add:

- Canonical URL placeholder using final production domain once known.
- Open Graph tags.
- Twitter Card tags.
- Social share image path.
- `robots.txt`.
- `sitemap.xml`.
- JSON-LD for `Organization` and `ProfessionalService`.
- Noindex for non-public app/auth routes if they remain.

Do not invent unavailable facts such as client logos, awards, or fake testimonials.

### 9.4 Performance

Required improvements:

- Enable or implement route/code splitting so `/login` and app dependencies do not inflate landing bundle.
- Remove or protect `/login` boilerplate.
- Lazy-load non-critical heavy sections only if it improves initial performance without harming UX.
- Audit `framer-motion` usage and reduce where purely decorative.
- Keep public landing JS lean.

### 9.5 Accessibility

Required:

- Add skip link.
- Add `aria-expanded` and `aria-controls` to mobile menu button.
- Close mobile menu with ESC.
- Ensure visible focus states.
- Add `scroll-margin-top` to anchor sections.
- Ensure decorative SVGs/icons are `aria-hidden`.
- Apply global reduced-motion handling.
- Check contrast on blue/purple sections.

### 9.6 Footer and Trust

Required:

- Remove placeholder `#` legal links or create real pages.
- Add privacy page before collecting form data.
- Add contact email only if valid.
- Add CNPJ/company details if user provides them; otherwise do not invent.
- Add LinkedIn if available; otherwise omit.

---

## 10. CTA Map

- Header primary: `#diagnostico`, source `header`.
- Hero primary: `#diagnostico`, source `hero`.
- Hero secondary: `#metodologia`, source `hero_secondary`.
- Warning signs CTA: `#diagnostico`, source `warning_signs`.
- Methodology CTA: `#diagnostico`, source `methodology`.
- Data Foundations model CTA: `#diagnostico`, source `model_data_foundations`.
- Growth Intelligence model CTA: `#diagnostico`, source `model_growth_intelligence`.
- Final form submit: form event sources only.

All CTAs must have analytics source labels. If model CTAs prefill or tag form intent, do it without hidden magic that changes user-entered data.

---

## 11. Execution Phases

Each phase below should be executed independently, verified, reviewed, and committed.

## Phase 0 — Baseline, Branch, and Quality Gate

**Objective:** Establish safe execution baseline before changing the LP.

**Files:**
- Read: `src/features/landing/**`
- Read: `src/index.html`
- Read: `vite.config.ts`
- Read: `src/routes/**`
- Modify only if needed: none expected

**Tasks:**

1. Create branch:

```bash
git checkout -b feat/pallas-lp-excellence
```

2. Run baseline checks:

```bash
export PATH="$HOME/.bun/bin:$PATH"
bun run build
bun run typecheck
bun run oxlint
```

3. Capture baseline bundle output in implementation notes.

4. Confirm no `.local-instructions`, `.env`, runtime DB, or private files are staged.
5. Inspect whether `/login` is real product scope or leftover boilerplate.
6. Inspect route splitting/provider setup before later phases change architecture.

**Acceptance Criteria:**

- Branch exists.
- Build/typecheck/lint status is known.
- Current bundle size is documented.
- No private files staged.

---

## Phase 1 — Strategic Copy and Content Architecture

**Objective:** Reposition the LP around ICP, pain, mechanism, and premium CTA.

**Files:**
- Modify: `src/features/landing/landing-content.ts`
- Modify: `src/features/landing/components/hero.tsx`
- Modify: `src/features/landing/components/problem-section.tsx`
- Modify: `src/features/landing/components/methodology-section.tsx`
- Modify: `src/features/landing/components/squad-section.tsx`
- Modify: `src/features/landing/components/models-section.tsx`
- Modify: `src/features/landing/components/cta-section.tsx`
- Modify: `src/features/landing/components/why-pallas-section.tsx`

**Tasks:**

1. Replace hero eyebrow/headline/subheadline/qualification/CTA with the copy in section 6.1.
2. Replace problem section title, description, and card copy with section 6.2.
3. Add a new warning signs block after the problem cards using section 6.3.
4. Replace methodology title, description, and step outputs with section 6.4.
5. Replace squad heading, description, and role descriptions with section 6.5.
6. Replace engagement model copy with section 6.6.
7. Replace final CTA heading, description, benefits, and button copy with section 6.7.
8. Rewrite Why Pallas to connect strategy, evidence, methodology, and engineer-first differentiation.
9. Remove weak “Saber mais” CTAs.
9. Ensure no fake claims are introduced.
10. Run checks.

**Verification Commands:**

```bash
export PATH="$HOME/.bun/bin:$PATH"
bun run typecheck
bun run oxlint
bun run build
```

**Acceptance Criteria:**

- Above-the-fold copy clearly states what Pallas does, for whom, and why it matters.
- Problem copy frames business/financial consequences, not just technical symptoms.
- Closed-Loop reads like a proprietary system.
- CTAs use premium language.
- No placeholder/fake proof added.
- Checks pass.

---

## Phase 2 — Legal Trust, Footer, and SEO Foundation

**Objective:** Remove trust blockers before collecting real lead data. This phase must happen before any production form submission is enabled.

**Files:**
- Modify: `src/index.html`
- Create/modify: `public/robots.txt`
- Create/modify: `public/sitemap.xml`
- Modify: `src/features/landing/components/footer.tsx`
- Create if needed: privacy route/page
- Create if needed: terms route/page

**Tasks:**

1. Remove placeholder `href="#"` legal links or create real pages.
2. Add privacy page before collecting personal data.
3. Add consent/link microcopy target for the future form.
4. Add Open Graph/Twitter metadata where domain/assets are known.
5. If production domain is unknown, do not create fake canonical/OG URL; leave implementation note.
6. Add robots/sitemap only with real domain or safe relative/static defaults.
7. Add JSON-LD only with verified facts.
8. Run checks.

**Acceptance Criteria:**

- No fake legal/footer links remain.
- Privacy path exists or launch is explicitly blocked.
- SEO foundation has no fake domain or fake facts.
- Checks pass.

---

## Phase 3 — Conversion Form, Lead Capture, and CTA Instrumentation

**Objective:** Make the primary conversion real, trustworthy, safe, and trackable.

**Files:**
- Modify: `src/features/landing/components/diagnostic-form.tsx`
- Create: `src/features/landing/landing-form-schema.ts`
- Create: `src/features/landing/landing-analytics.ts`
- Create or modify depending existing backend: `src/api/**` or relevant API route
- Modify: `src/features/landing/components/hero.tsx`
- Modify: `src/features/landing/components/models-section.tsx`
- Modify: `src/features/landing/components/cta-section.tsx`
- Modify: `src/features/landing/components/header.tsx`

**Tasks:**

1. Add schema for diagnostic form fields.
2. Add `name` and `autoComplete` attributes to inputs.
3. Add investment select tracking.
4. Add main challenge select.
5. Add optional context textarea.
6. Add UTM/referrer/path capture.
7. Replace fake `setTimeout` success with real submit path.
8. If backend endpoint exists, use it.
9. If backend endpoint does not exist, implement webhook endpoint config via env and clear failure when missing.
10. Add analytics helper that pushes to `window.dataLayer` safely.
11. Instrument all CTA clicks with source labels.
12. Track form start on first field interaction.
13. Track submit attempt/success/error.
14. Add LGPD consent microcopy near the submit button.
15. Run checks.

**Event Payload Requirements:**

CTA event:

```ts
{
  event: "lp_cta_click",
  source: "hero" | "header" | "methodology" | "model_data_foundations" | "model_growth_intelligence" | "final_cta",
  label: string,
}
```

Form success event:

```ts
{
  event: "lp_form_submit_success",
  monthlyMediaInvestment: string,
  mainChallenge: string,
}
```

**Verification Commands:**

```bash
export PATH="$HOME/.bun/bin:$PATH"
bun run typecheck
bun run oxlint
bun run build
```

Manual verification:

- Submit with missing fields: validation blocks submit.
- Submit with valid fields and configured endpoint: success only after confirmed response.
- Submit with missing endpoint: clear error, no fake success.
- `window.dataLayer` receives expected events when present.

**Acceptance Criteria:**

- Form no longer fakes success.
- Lead data shape is explicit.
- CTA and form events are trackable.
- UX remains premium and low-friction.
- Checks pass.

---

## Phase 4 — Premium Visual System and Mobile Hero

**Objective:** Make the LP feel proprietary, premium, and memorable rather than template-like.

**Files:**
- Modify: `src/features/landing/components/brand-mark.tsx`
- Modify: `src/features/landing/components/data-visualization.tsx`
- Modify: `src/features/landing/components/hero.tsx`
- Modify: `src/features/landing/components/methodology-section.tsx`
- Modify: `src/features/landing/components/problem-section.tsx`
- Modify: `src/index.css`

**Tasks:**

1. Replace generic square `P` with a more distinctive but simple Pallas mark.
2. Redesign hero visual around the flow: Media → Events → Warehouse → Model → Decision → Scale.
3. Limit hero visual to 2 or 3 metrics maximum.
4. Add a compact mobile version of the hero visual.
5. Upgrade Closed-Loop section into the signature visual system diagram.
6. Reduce visual clutter from decorative badges/charts that do not communicate the method.
7. Adjust section transitions so no fold feels like empty or broken space.
8. Review contrast of secondary text.
9. Reduce excessive blur/shadow on mobile.
10. Run checks and inspect desktop/mobile in browser.

**Manual Browser Verification:**

- Desktop hero at 1280px.
- Mobile hero at 390px width.
- Problem to methodology transition.
- Closed-Loop section.
- Final CTA section.

**Acceptance Criteria:**

- Mobile first fold has a premium visual asset.
- Closed-Loop visual is memorable and understandable.
- Brand mark no longer looks like a generic placeholder.
- Visual hierarchy favors message and CTA.
- No section looks empty/broken during normal scroll.
- Checks pass.

---

## Phase 5 — Performance and Public Route Cleanup

**Objective:** Make the public LP technically match the premium promise.

**Files:**
- Modify: `vite.config.ts`
- Modify: `src/routes/**`
- Modify: `src/main.tsx`
- Modify if needed: `src/routes/login.tsx`
- Modify if needed: `src/routes/__root.tsx`
- Modify if needed: `src/features/landing/**`

**Tasks:**

1. Inspect current TanStack Router setup and generated route tree.
2. Enable route-level code splitting where compatible with current project setup.
3. Ensure `/login` does not load in the initial landing bundle.
4. Remove `/login` if unused.
5. If `/login` must remain, finalize or protect it and mark noindex.
6. Avoid loading React Query/Toaster on the landing path unless required.
7. Consider separating landing entrypoint if simpler and cleaner than patching app architecture.
8. Audit Framer Motion usage and remove decorative motion that increases bundle/runtime cost without benefit.
9. Run production build.
10. Compare bundle output to Phase 0.

**Verification Commands:**

```bash
export PATH="$HOME/.bun/bin:$PATH"
bun run build
bun run typecheck
bun run oxlint
```

**Acceptance Criteria:**

- No public boilerplate `/login` experience is visible.
- Landing initial bundle is materially smaller than baseline.
- No avoidable Vite chunk warning for public landing path.
- App architecture remains simple and defensible.
- Checks pass.

---

## Phase 6 — Proof Layer and Trust Assets

**Objective:** Add credible proof without inventing testimonials, logos, or metrics.

**Files:**
- Modify: `src/features/landing/landing-content.ts`
- Modify/create: proof/trust component under `src/features/landing/components/`
- Modify: `src/features/landing/landing-page.tsx`

**Tasks:**

1. Confirm whether `R$ 50M+` is approved for public use.
2. If approved, contextualize the metric; if not approved, remove it.
3. Add a proof/trust layer after methodology and before squad.
4. Use methodology artifacts as proof if no case studies are approved.
5. Show concrete artifacts: tracking map, event taxonomy, reconciliation flow, experiment roadmap, or budget decision model.
6. Ensure all proof copy is honest and verifiable.
7. Run checks.

**Acceptance Criteria:**

- Page includes a credible proof layer.
- No invented logos, testimonials, or fake metrics.
- Claims are supported by real facts or methodology artifacts.
- Checks pass.

---

## Phase 7 — Accessibility and Interaction Quality Pass

**Objective:** Bring the LP to a premium accessibility and interaction baseline.

**Files:**
- Modify: `src/features/landing/components/header.tsx`
- Modify: `src/features/landing/components/section-heading.tsx`
- Modify: `src/features/landing/components/**/*.tsx` as needed
- Modify: `src/index.css`

**Tasks:**

1. Add skip link to main content.
2. Add `id="main-content"` to main landmark.
3. Add `aria-expanded` and `aria-controls` to mobile menu button.
4. Close mobile menu on ESC.
5. Ensure menu links are keyboard navigable.
6. Add global `[id] { scroll-margin-top: ... }` or section-level `scroll-mt-*`.
7. Mark decorative SVGs/icons as `aria-hidden`.
8. Apply global reduced motion strategy.
9. Improve focus-visible states for links/buttons.
10. Verify contrast in blue/purple sections.
11. Run checks and manual keyboard navigation.

**Acceptance Criteria:**

- Keyboard user can navigate header, menu, CTAs, and form.
- Mobile menu communicates state to assistive tech.
- Anchor navigation does not hide headings behind fixed header.
- Reduced motion users do not get unnecessary animation.
- Checks pass.

---

## Phase 8 — Final QA, Browser Review, and Launch Readiness

**Objective:** Verify the LP as a complete product, not just passing code.

**Files:**
- Modify only fixes discovered during QA.

**Tasks:**

1. Run full checks:

```bash
export PATH="$HOME/.bun/bin:$PATH"
bun run build
bun run typecheck
bun run oxlint
```

2. Start local preview:

```bash
export PATH="$HOME/.bun/bin:$PATH"
bun run preview
```

3. Review desktop viewport.
4. Review mobile viewport.
5. Verify all CTA anchors.
6. Verify form success/failure behavior.
7. Verify dataLayer events.
8. Verify footer links.
9. Verify no private files are staged.
10. Verify `git status --short` only includes intentional files.
11. Verify production/staging lead destination receives the expected payload.
12. Verify no PII is pushed to analytics.
13. Verify social preview metadata with available tooling/manual inspection.
14. Verify noindex/robots behavior for non-public routes.
15. Produce final summary with bundle sizes and changed files.

**Acceptance Criteria:**

- Page looks premium on desktop and mobile.
- Copy is sharp, specific, and non-generic.
- Form conversion works honestly.
- SEO/social/legal basics are present.
- Accessibility pass complete.
- Performance improved or justified.
- All checks pass.

---

## 12. Implementation Guardrails

### 10.1 Do Not Do

- Do not invent client logos.
- Do not invent testimonials.
- Do not invent case studies.
- Do not keep fake form success.
- Do not keep placeholder links.
- Do not add heavy libraries without strong reason.
- Do not add abstractions for hypothetical future variants.
- Do not turn the page into a generic SaaS template.
- Do not dilute the positioning into generic “marketing digital”.

### 10.2 Must Do

- Keep copy direct, technical, and understandable.
- Keep mobile-first.
- Keep CTAs premium and action-specific.
- Validate before trust.
- Read back meaningful write paths.
- Run checks after every phase.
- Commit each completed phase separately.

---

## 13. Suggested Commit Sequence

1. `docs: add pallas landing excellence prd`
2. `feat: reposition pallas landing copy`
3. `feat: implement real diagnostic lead flow`
4. `feat: add landing analytics events`
5. `feat: upgrade pallas visual system`
6. `perf: split public landing bundle`
7. `feat: add landing seo and trust pages`
8. `fix: improve landing accessibility`
9. `chore: finalize landing qa fixes`

---

## 14. Open Inputs Needed From User

These are not blockers for Phase 1, but are required before final launch.

1. Is `R$ 50M+` real and approved for public use?
2. Final production domain.
3. Valid contact email.
4. CNPJ/legal company details, if footer/privacy should include them.
5. Privacy policy preference or legal text.
6. Lead destination: backend, webhook, CRM, email automation, or WhatsApp.
7. Any real cases, client segments, anonymized results, or credibility claims approved for public use.

If inputs are unavailable, implementation must choose conservative non-fake defaults and avoid claims that cannot be verified.
