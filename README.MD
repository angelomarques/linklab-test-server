# Linklab TestServer

## Pré-requisitos
- Node.js instalado
- npm (Node Package Manager) instalado

## Instalação
1. Clone este repositório: `git clone https://github.com/seu-usuario/seu-projeto.git`
2. Acesse o diretório do projeto: `cd seu-projeto`
3. Instale as dependências: `npm install`

## Configuração
1. Duplique o arquivo `.env.example` e renomeie para `.env`
2. Preencha as variáveis de ambiente no arquivo `.env` conforme necessário (OBS.: Você precisará criar um banco de dados MongoDB, mas se preferir, mandarei o link meu banco de dados por email, deixei acessível para todos os IPs já que é um projeto teste)
3. Execute o comando `npm run db:seed` para criar dados de produtos falsos

## Execução
Execute o seguinte comando para iniciar a aplicação:

```bash
npm run build
npm run start
```
