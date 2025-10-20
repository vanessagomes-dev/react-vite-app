<h1 align="center">🎯 Jogo de Adivinhação</h1>

<p align="center">
  <img src="https://img.shields.io/badge/status-active-success.svg" alt="Status" />
  <img src="https://img.shields.io/badge/React-18.0.0-61DAFB?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Vite-5.0.0-646CFF?logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/TypeScript-5.3.0-3178C6?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/CSS-Modules-264DE4?logo=css3" alt="CSS Modules" />
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License" />
</p>

---

## 🕹️ Sobre o Projeto  

O **Jogo de Adivinhação** é uma aplicação web desenvolvida em **React + Vite**, onde o usuário tenta descobrir palavras com base em **dicas**.  
O foco deste projeto foi aplicar **fundamentos essenciais do React**, como componentização, estado, props e reatividade.

🔗 **Design de referência no Figma:**  
🎨 [Jogo de Adivinhação (Figma)](https://www.figma.com/community/file/1453366829725330797/jogo-de-adivinhacao)

---

## 🚀 Tecnologias Utilizadas  

| 🧩 Tecnologia | 🚀 Descrição |
|---------------|--------------|
| ⚛️ **React** | Criação da interface e controle de estado |
| ⚡ **Vite** | Ferramenta de build rápida e moderna |
| 🧠 **TypeScript** | Tipagem estática e segurança em tempo de desenvolvimento |
| 🎨 **CSS Modules** | Escopo isolado de estilos por componente |
| 🔤 **Google Fonts (Noto Sans)** | Tipografia principal do projeto |
| 🧰 **React Hooks (useState, useEffect)** | Controle de estado e efeitos colaterais |

---

## 🧠 Funcionalidades do Jogo  

✅ Sorteia palavras aleatórias com **dicas**  
🎯 Verifica **acertos e erros** nas letras inseridas  
🧩 Exibe **letras corretas reveladas** dinamicamente  
💬 Mostra **mensagens de vitória ou derrota**  
🔁 Inclui **botão de reiniciar** a qualquer momento  
🧮 Exibe **número total de tentativas**  

---

## 🧩 Estrutura do Projeto  

```bash
src/
 ┣ assets/              # Imagens e ícones
 ┣ components/          # Componentes reutilizáveis
 ┃ ┣ Header/
 ┃ ┣ Button/
 ┃ ┣ Input/
 ┃ ┣ Letter/
 ┃ ┣ LettersUsed/
 ┃ ┗ Tip/
 ┣ utils/
 ┃ ┗ words.ts           # Palavras e dicas do jogo
 ┣ App.tsx              # Lógica principal do jogo
 ┣ main.tsx             # Ponto de entrada
 ┣ app.module.css       # Estilos principais
 ┗ global.css           # Estilos globais
````
---

🖼️ Visualização da estrutura de componentes:


💻 Como Executar Localmente

1️⃣ Clone o repositório
```bash

git clone https://github.com/vanessagomes-dev/react-vite-app.git
```

2️⃣ Instale as dependências
```bash
npm install
```

3️⃣ Execute o projeto
```bash
npm run dev
````

4️⃣ Acesse no navegador
```bash
http://localhost:5173
````
🎨 Estilização

🪄 Fonte: Noto Sans
 via Google Fonts
🎨 CSS Modules: isolamento de escopo de classe
🧭 Estilos Globais: definidos em global.css
✨ Transições suaves: hover com filter: brightness(0.9)
````bash
button {
    cursor: pointer;
    transition: filter 0.2s;
}
button:hover {
    filter: brightness(0.9);
}
````

---
Histórico de Commits
| 🏷️ Tipo     | 🧠 Descrição                                                                | 📂 Arquivos                    |
| ------------ | --------------------------------------------------------------------------- | ------------------------------ |
| 🎉 **chore** | Setup inicial com Vite + React + estrutura de pastas                        | `App.tsx`, `main.tsx`          |
| 🎨 **style** | Adição de estilos globais e CSS Modules                                     | `global.css`, `app.module.css` |
| ⚙️ **feat**  | Criação dos componentes base (`Header`, `Button`, `Input`, `Letter`, `Tip`) | `components/*`                 |
| 🧠 **feat**  | Implementação da lógica de sorteio de palavras                              | `utils/words.ts`               |
| 💡 **feat**  | Lógica de listagem de letras e controle de tentativas                       | `App.tsx`                      |
| 🔠 **feat**  | Exibição dinâmica das letras corretas                                       | `App.tsx`                      |
| 🐞 **fix**   | Correção do contador de tentativas                                          | `Header`                       |
| 🏁 **feat**  | Adição de mensagens de fim de jogo e reinício                               | `App.tsx`                      |

---
🐛 Bug Corrigido

Antes:
```bash
<Header current={score} max={10} onRestart={handleRestartGame} />
````

Problema:
O contador de tentativas só atualizava ao acertar uma letra.

Depois:
```bash
<Header current={lettersUsed.length} max={10} onRestart={handleRestartGame} />
````

✅ Correção: Agora o número de tentativas reflete todas as letras testadas.
---
🧠 Trecho de Lógica Principal
```bash
function handleConfirm() {
  if (!challenge) return;
  if (!letter.trim()) return alert("Digite uma letra");

  const value = letter.toUpperCase();
  const exists = lettersUsed.find(used => used.value === value);
  if (exists) return alert("Você já tentou essa letra!");

  const hits = challenge.word
    .toUpperCase()
    .split("")
    .filter(char => char === value).length;

  const correct = hits > 0;
  const currentScore = score + hits;

  setLettersUsed(prev => [...prev, { value, correct }]);
  setScore(currentScore);
  setLetter("");
}
````
---
🧩 Conceitos Aplicados

| Conceito           | Descrição                                       |
| ------------------ | ----------------------------------------------- |
| 🧱 Componentização | Separação de responsabilidade entre componentes |
| ⚙️ Hooks           | Uso de `useState` e `useEffect`                 |
| 🎨 CSS Modules     | Escopo local de estilos                         |
| 🧠 Lógica React    | Controle de estado e renderização condicional   |
| 🕹️ Interatividade | Validação de inputs, alertas e reinício do jogo |

---
🧾 Licença

Este projeto está sob a licença MIT — sinta-se à vontade para usar, modificar e distribuir.

👩‍💻 Autora

Vanessa Gomes
📍 Desenvolvedora Front-End
🌐 GitHub

💡 “Aprender React é entender o ciclo da interatividade.”

<p align="center"> <img src="components_jogodeadivinhacao.jpg" width="700px" alt="Preview do jogo"/> </p> ```
