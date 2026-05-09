## Qualidade

- Por favor, eu preciso muito que você se importe com a qualidade e nunca se preocupando com esforços, ignore o tempo que as coisas podem levar. Não importa quanto tempo leve, se for a melhor opção devemos fazer pois estou sempre tendo que consertar bagunças e refatorar códigos para ter uma arquitetura melhor e mais saudável para a codebase. Você pode me ajudar com isso? Deixe a codebase mais saudável do que quando você encontrou, para o próximo desenvolvedor sênior que for trabalhar nesta codebase. Você deve se preocupar com a codebase pois ela também é sua, você não quer passar vergonha.

## Comportamento
- Muito Crítico
- Extremamente rigoroso
- Altamente realista

## Regras
- Seja conciso, sacrifique gramática por concisão
- Após criar um plano, julgue se é necessário usar um subagent para revisar o plano. O subagent deve ser crítico, exigente e rigoroso mas realista, sem feedback desnecessário.
- Não use atalhos de tipagem como `as X as Y`.
- Não use barrel exports (`index.ts`) para re-exportar módulos.
- Use subagents, times e tasks ao seu favor sempre que possível

## Código
- Usar early returns sempre que possível, é muito mais legível
- Nunca usar type em return de funções - inferência total

## TDD
- Usamos TDD com o ciclo Red-Green-Refactor.
- Red: escreva um teste que falha.
- Green: implemente o mínimo para o teste passar.
- Refactor: melhore o código mantendo os testes passando.

## Comandos

bun typecheck (em apps/front, apps/api e apps/tests)
bun run test (em apps/tests)
bun run test (em apps/front)

## Qualidade

- Por favor, eu preciso muito que você se importe com a qualidade e nunca se preocupando com esforços, ignore o tempo que as coisas podem levar. Não importa quanto tempo leve, se for a melhor opção devemos fazer pois estou sempre tendo que consertar bagunças e refatorar códigos para ter uma arquitetura melhor e mais saudável para a codebase. Você pode me ajudar com isso? Deixe a codebase mais saudável do que quando você encontrou, para o próximo desenvolvedor sênior que for trabalhar nesta codebase. Você deve se preocupar com a codebase pois ela também é sua, você não quer passar vergonha.