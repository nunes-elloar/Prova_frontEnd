Enunciado de Projeto — Tema Livre com React
�� Objetivo
Crie uma aplicação React de tema livre que contenha pelo menos três páginas e que
utilize obrigatoriamente os hooks useState e useEffect, além do React Router DOM
para navegação entre essas páginas.

�� Requisitos Obrigatórios
�� Funcionalidades obrigatórias:
1. Mínimo de 3 rotas/páginas, por exemplo:
o Uma tela inicial de boas-vindas ou menu.
o Uma tela que consome dados via useEffect (pode simular com setTimeout
ou consumir uma API pública).
o Uma tela com formulário ou lista que usa useState (como criar/adicionar
itens, tarefas, notas, produtos, etc).

2. Uso de useState:
o Controlar estados como campos de input, listas de itens, contadores, etc.
3. Uso de useEffect:
o Simular carregamento de dados ou buscar dados de APIs.
o Pode ser usado para salvar dados no localStorage, carregar dados ao iniciar a
página, etc.
4. Uso de react-router-dom:
o Implementar navegação entre páginas.
o Uso de componentes como &lt;BrowserRouter&gt;, &lt;Routes&gt;, &lt;Route&gt;, e
&lt;NavLink&gt;.

Página Descrição Hooks / Técnicas
�� Home/ Página inicial, menu, resumo do app react-router-dom,

layout

�� Listagem
/lista

Lista de itens (tarefas, receitas, produtos
etc.), com filtro ou busca useState, useEffect

➕ Criar Item
(/novo)

Formulário para adicionar um novo item à
lista useState, formulário

�� Editar Itens
/editar

Exibe todos os itens com opção de editar
(sem rota dinâmica) useState, interações

�� Perfil
/perfil

Dados fictícios do usuário, carregados com
useEffect

useEffect, estado
simulado
�� Login/login Formulário simples de login que salva nome

do usuário no estado ou local

useState, navegação
condicional

/projeto/
├── public/
│ └── index.html
├── src/
│ ├── assets/ # Imagens, ícones, etc.
│ ├── components/ # Componentes reutilizáveis
│ │ ├── Header.jsx
│ │ └── TaskItem.jsx
│ ├── pages/ # Páginas principais (rotas)
│ │ ├── Home.jsx
│ │ ├── Perfil.jsx
│ │ └── Tarefas.jsx
│ ├── routes/ # Configuração do React Router
│ │ └── AppRoutes.jsx
│ ├── App.jsx # Componente principal
│ ├── main.jsx # Ponto de entrada (ReactDOM)
│ └── styles/ # Arquivos CSS ou arquivos .module.css
│ └── global.css
├── .gitignore
├── package.json
└── vite.config.js (ou similar, se usar Vite)