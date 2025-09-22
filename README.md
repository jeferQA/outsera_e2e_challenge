# Desafio Testes E2E - Outsera

- [Pré-requisitos](#pré-requisitos)  
- [Instalação](#instalação)  
- [Execução de testes](#execução-de-testes)  
- [Estrutura do projeto](#estrutura-do-projeto)  
- [Relatórios](#relatórios)  
- [Observações adicionais](#observações-adicionais)

## Pré-requisitos
Antes de rodar o projeto é necessário ter instalado:
- Node.js (download em https://nodejs.org/pt)
- Nevegador Chrome (download em https://www.google.com/intl/pt-BR/chrome/)
- Git (download em https://git-scm.com/downloads)

---

## Instalação
Clone este repositório. Abra o git na máquina em uma pasta de desejada e execute o comando
```bash
git clone https://github.com/jeferQA/outsera_e2e_challenge.git
```
Entre no diretório do projeto
```bash
cd outsera_e2e_challenge
```
As principais dependências utilizadas no projeto:

- [Cypress](https://www.cypress.io/) `^13.15.2`  
- [cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) `^4.3.1`  
- [cucumber-html-reporter](https://github.com/gkushang/cucumber-html-reporter) `^7.2.0`  
Instale as dependências do projeto, execute o comando
```bash
npm install
```
---

## Execução de testes
Para rodar os testes automatizados, escolhendo uma spec, execute o comando
```bash
npx cypress open
```
Ou para executar os testes em modo headless, execute o comando
```bash
npx cypress run
```

## Estrutura do projeto
outsera_e2e_challenge/
<br>├── cypress/
<br>│├── e2e/ # Specs e cenários .feature
<br>│ ├── cucumber-json/ # Saída em JSON gerada pelo preprocessor
<br>│ ├── reports/ # Relatórios HTML gerados (após rodar script)
<br>│ ├── support/
<br>│ │ ├── step_definitions/ # Implementação dos steps Gherkin
<br>│ │ └── cucumber-html-reporter.js # Script para geração do report
<br>├── cypress.config.js # Configurações do Cypress
<br>├── package.json # Dependências e scripts npm
<br>└── README.md

## Relatórios
Após rodar os testes, os resultados ficam salvos em <b>cypress/cucumber-json</b> no formato <b>.cucumber.json</b>.

Para gerar o relatório HTML consolidado:
```bash
npm run cucumber-report:run
```
O relatório final será gerado dentro da pasta <b>cypress/reports/</b> . Basta abrir o arquivo .html no navegador.

## Observações adicionais
- Todos os comandos devem ser executados no terminal dentro da raiz do projeto (diretório onde está o package.json).
Exemplo no Windows PowerShell
```bash
cd outsera_e2e_challenge
npm install
npx cypress run
npm run cucumber-report:run
```
- Sempre execute <b>npm run cucumber-report:run</b> após os testes para gerar o relatório HTML.
- Se executar o comando para gerar o relatório, antes de rodar ao menos um teste, o projeto retornará um erro pois necessita do json do resultado dos testes que é gerado no fim da execução dos testes
- Esse projeto esta configurado para executar os testes no workflow do github, basta acessar aqui no repositório do projeto a página <b>Actions -> Run Cypress API tests -> opção Run workflow</b>
