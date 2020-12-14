# Backend

É um projeto desenvolvido com o intuito de conseguir filtrar usuários em sua plataforma, utilizando autenticações, e CRUD, com integração do banco de dados mongo.db.
O administrador do sistema é capaz de editar qualquer usuário, desativar ou ativar o usuário.
O usuário é capaz de alterar suas informações e visualizar a mesma.
## Começando

Para executar o projeto é necessario ter todas as dependencias

### Requisitos

 - Node

 
### Iniciando 
```
```
$ yarn start para o front-end
```
```
$ yarn dev para iniciar o front-end


##Exemplos de testes

### Rotas

 - http://localhost:5001/usuarios ("Buscando todos os usuarios": o USUARIO DEVE POSSUIR O TOKEN 999, PARA PODER ACESSAR ESSA ROTA. Essa rota exibe todos os usuarios registrados)[GET]
 
 - http://localhost:5001/usuarios (Utilizada para se autenticação no sistema)[POST]
 
 - http://localhost:5001/usuario (Utilizada para criar um novo usuário no sistema)[POST]
 
 - http://localhost:5001/usuario/:id (Utilizada para atualização de usuário) [PUT]
 



 
## Autores

* **Rafael Vitor**

## Agradecimentos

* Mind Consulting
