# Advocacia Trabalhista

Site institucional para apresentação de serviços jurídicos na área de Direito do Trabalho, com informações sobre a atuação profissional e canais de contato para pessoas que buscam orientação jurídica.

## Sobre o projeto

O projeto foi desenvolvido para apresentar o escritório **Advocacia Trabalhista** em uma página moderna, clara e responsiva. O conteúdo inclui apresentação, áreas de atuação, informações sobre o profissional e opções de contato.

## Funcionalidades

- Página inicial com apresentação do escritório.
- Seção de áreas de atuação em Direito do Trabalho.
- Seção institucional sobre o profissional.
- Informações de atendimento e contato.
- Atalho para iniciar uma conversa pelo WhatsApp.
- Metadados básicos para mecanismos de busca e compartilhamento.
- Dados do escritório centralizados em um arquivo de configuração.

## Tecnologias utilizadas

- **React**
- **TypeScript**
- **TanStack Start e TanStack Router**
- **Vite**
- **Tailwind CSS**
- **Lucide React**

## Executar o projeto localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado.
- npm (instalado junto com o Node.js).

### Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/arthuregito007-hash/direito-trabalhista.git
   ```

2. Entre na pasta do projeto:

   ```bash
   cd direito-trabalhista
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

O terminal exibirá o endereço local para abrir o projeto no navegador.

## Personalização

As principais informações do escritório ficam centralizadas em:

`src/config/site.ts`

Nesse arquivo é possível atualizar o nome do escritório, os dados do profissional, o número da OAB, os contatos e a mensagem inicial do WhatsApp.

**Importante:** antes de publicar o site, confira e substitua todos os textos provisórios, validando os dados profissionais e as informações de contato.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm run preview` | Visualiza localmente a versão de produção |
| `npm run lint` | Executa a verificação estática do código |
| `npm test` | Executa os testes |

## Observação

Este repositório contém o código-fonte de um site institucional. As informações publicadas devem ser revisadas pelo responsável antes da disponibilização ao público. O conteúdo do site não substitui uma consulta jurídica individualizada.
