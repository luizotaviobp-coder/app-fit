# Ítaca — A jornada de evolução

Aplicação web estática mobile-first, preparada para GitHub Pages. A estrutura de dados inicial foi extraída do arquivo correto `Diário Fit.xlsx` (13 abas), preservando as fichas A–F, o registro inicial de sessão e o registro de recuperação existentes.

## Rodar localmente

Abra `index.html` em um navegador moderno. Para testar PWA/service worker, sirva a pasta em HTTP (ex.: `python -m http.server 8000`).

## Publicar no GitHub Pages

1. Copie o conteúdo desta pasta para a raiz do repositório `app-fit`.
2. Em Settings → Pages, escolha Deploy from a branch, branch `main`, pasta `/ (root)`.
3. Aguarde o workflow de Pages e teste a URL pública.

## Persistência

Esta primeira versão salva no `localStorage` do navegador e permite exportar backup JSON. A interface tem campos de configuração para Supabase, mas a sincronização multiusuário ainda NÃO está ativada. Antes de produção, criar projeto Supabase, tabelas, autenticação e RLS por usuário; nunca expor service_role no frontend.

## Critérios de treino

Métodos e progressões são sugestões operacionais, não prescrição clínica. Técnicas avançadas são usadas pontualmente; a maior parte do trabalho usa séries tradicionais com RIR. Ajustar seleção, amplitude e carga conforme técnica, recuperação e desconfortos.