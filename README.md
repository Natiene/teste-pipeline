# Password Validator

Este projeto foi gerado com Angular CLI versão 18.0.3.

## Índice

- [Introdução](#introdução)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Executando com Docker](#executando-com-docker)
- [Executando localmente com Angular](#executando-localmente-com-angular)
- [Build](#build)
- [Executando Testes Unitários](#executando-testes-unitários)

## Introdução

Este projeto é um aplicativo Angular desenvolvido para validar senhas.

## Pré-requisitos

- Node.js 20.14.0 e npm
- Angular CLI 18.0.3 ou superior
- Docker (opcional, para executar o projeto em um container)

## Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/Natiene/password-validator.git
   cd password-validator
   ```

## Executando com Docker
Se você não quiser ou não tiver todas as versões e requisitos necessários, pode executar o projeto usando Docker.

1. Construa a imagem Docker:

```sh
  docker build -t password-validator .
```

2. Execute o container Docker:

```sh
  docker run -p 4200:80 password-validator
```

  Agora, navegue até http://localhost:4200/ para ver a aplicação em execução no Docker.


## Executando localmente com Angular
Se você possui os pré-requisitos necessários instalados e quer rodar localmente sem o uso do docker.

1. Instale todas as dependências

```sh
  npm install
```

2. Execute o comando para iniciar o servidor de densenvolvimento

```sh
  ng serve
```
Agora, navegue até http://localhost:4200/ para ver a aplicação em execução.

## Executando Testes Unitários

```sh
  ng test
```

## Build 

```sh
  ng build
```  
