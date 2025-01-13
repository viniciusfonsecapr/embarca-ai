

## Star Wars - Embarca Aí

Bem-vindo ao Projeto Star Wars - Embarca Aí! Este é um projeto desenvolvido utilizando Next.js, Styled Components, Cypress e Vercel . Este guia detalhado ajudará você a configurar e executar o projeto em sua máquina local.
O Star Wars - Embarca.ai é uma plataforma que permite a você pesquisar e obter informações sobre seus personagens favoritos, como nome, idade, peso, cidade que nasceu e por vai. Tendo um descrição completa sobre os mesmos, assim trazendo uma gama ainda maior de informações sobre seu personagem favorito.

## Funcionalidades

Busca de Personagens: Encontre personagens de Star Wars e suas informações.

Demonstração clara e objetiva sobre seu Personagem favorito. 

Busca Individual para Cada Personagem.

## Requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

Node.js: Instale aqui. -> https://nodejs.org/en

npm: Geralmente instalado junto com o Node.js. Verifique executando npm -v no terminal.

Git: Para clonar o repositório. Instale aqui. -> https://git-scm.com/downloads

## Instalação e Execução

1. Clonar o Repositório

No terminal, execute os comandos abaixo:

git clone https://github.com/viniciusfonsecapr/embarca-ai.git
cd embarca-ai

2. Instalar Dependências

No diretório do projeto, execute:

npm install

Este comando instalará todas as dependências listadas no arquivo package.json.

3. Configurar Variáveis de Ambiente

Se o projeto requer variáveis de ambiente, crie um arquivo .env na raiz do projeto e defina as variáveis necessárias. Consulte a equipe de desenvolvimento para mais detalhes sobre essas variáveis.

4. Executar o Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento, execute:

npm run dev

O terminal indicará que o servidor está rodando, geralmente em http://localhost:3000.

5. Acessar a Aplicação

Abra um navegador e acesse:

http://localhost:3000

Aqui você pode interagir com a aplicação em execução.

## Estrutura do Projeto

Página principal: Localizada em src/app/page.js.

## Framework: O projeto utiliza Next.js, um framework React com renderização do lado do servidor.

Estilização: Utiliza CSS Puro com Styled Components.

## Scripts Disponíveis

npm run dev: Inicia o servidor de desenvolvimento.

npm run build: Compila a aplicação para produção.

npm start: Inicia a aplicação em modo de produção.

npm test:e2e : Executa os testes configurados.

## Testes

O projeto inclui uma configuração básica de testes para garantir a qualidade do código. Para executar os testes, utilize o comando:

npm test:e2e

Configuração de Testes

Os testes estão localizados na pasta cypress/e2e ou em arquivos com a extensão e2e.js

A biblioteca de testes utilizada pode ser configurada no arquivo package.json ou em configurações adicionais do projeto.

Certifique-se de que o ambiente de testes está configurado corretamente antes de executar os testes.


## Build para Produção

Para criar uma versão otimizada da aplicação, execute:

npm run build

Os arquivos serão gerados na pasta build.

## Deploy

 ----- DEPLOY AQUI

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

Faça um fork deste repositório.

Crie uma branch para sua feature ou correção: git checkout -b minha-feature.

Commit suas alterações: git commit -m 'Adiciona minha feature'.

Faça push para a branch: git push origin minha-feature.

Abra um Pull Request.

Para mais detalhes, consulte o arquivo CONTRIBUTING.md.

Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.
