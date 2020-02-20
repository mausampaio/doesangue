# Projeto DOE

## Maratona Dev 3.0
Esse projeto foi desenvolvido durante a Maratona Dev 3.0 produzida pela Rocketseat.

## Diferenciais
Tomei a liberdade de criar algumas modificações neste projeto para utilizar o Database do Firebase ao invés do Postgresql.

### Instalação
Requisitos:

 - Node.js
 - Git

Clone o projeto no local aonde deseja:

    > git clone https://github.com/mausampaio/doesangue

Entre no diretório:

    > cd doesangue

Instale os pacotes necessários:

    > npm install express
    > npm install firebase
    > npm install nodemon
    > npm install nunjucks
    > npm install dotenv

Crie um arquivo com nome .env na raiz do projeto contendo os dados para conexão com sua database do Firebase:

    MYAPIKEY=<SUA_API_KEY>
    AUTHDOMAIN=<SEU_AUTH_DOMAIN>
    DBURL=<SUA_DATABASE_URL>
    PROJECTID=<SEU_PROJECT_ID>
    STRBUCKET=<SEU_STORAGE_BUCKET>
    MSGSENDERID=<SUA_MESSAGING_SENDER_ID>
    APPID=<SEU_APP_KEY>