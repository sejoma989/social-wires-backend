# Wires Backend

Social wires es una red social en la cual las personas publican mensajes , y las demas personas podran reaccionar a estos, asi como tambien podran comentar a estas publicaciones

Evidencia de realizacion prueba tecnica para empresa Inlaze

Directorio que contiene backend de la aplicacion wires



## Entorno

### Requerimientos previos

    Docker
    node
    Typescript
    Express

### Variables de ambiente en .example.env

    $ cp .env.example .env

Ejemplo:

    PORT=
    SECRETORPRIVATEKEY=


### Ejecucion

#### Pre

Docker: desde el directorio raiz ejecutar

    $ docker-compose up

Dependencias

    $npm i


En dos terminales abiertas simultaneamente ejecutar:

Terminal 1: Compilacion o traduccion de archivos TS

    $ tsc --watch

Terminal 2: Ejecucion del codigo traducido a JS

    $ nodemon dist/app.js

#### Execute development

    $ npm run start


# Postman collection

## Register

POST wires/auth/signup
Body:

- email: string
- username: string
- password: string
- fullName: string

Return user with your data your id and creation date

```bash
{
  "id": "1",
  "username": "example",
  "email": "example@gmail.com",
  "fullname": "exam example"
}
```

## Login

POST wires/auth/signin
Body:

- username: string
- password: string

Return return an access token for the authorization of further requests

```bash
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImV4YW1wbGUiLCJ1c2VySWQiOiJlMjA3ZmVlNi03NTQyLTQzMTEtODY0Ni1kMTJlMWZkZTNiYWEiLCJpYXQiOjE2NzMzNjE5ODMsImV4cCI6MTY3MzQ0ODM4M30.W5h2VzR3UlHSQDNX8ktJmOzoD0fhZyUuD85XrDQpt7g",
    "expires_in": "1d",
    "message": "Successfully logged in",
    "status": true
}
```

# Messages Methods

- Other endpoints will require you to pass the authorization token into the application via an authorization bearer token ✓

## Create Message

POST wires/messages
Body:

- title : string
- text : string

Returns all the data corresponding to the message created.

```bash
{
    "title": "new messages",
    "text": "this is a desc message",
    "user": "5c91874d-e8f2-4119-9a80-8e3d8f23dfee",
    "id": "3",
    "createdAt": "2023-01-10",
    "updatedAt": "2023-01-10T14:56:24.332Z"
}
```

## Get all Messages

GET wires/messages

returns all created messages independent of the user

```bash
{
        "id": "2",
        "title": "tes2t1",
        "text": "this is a messages",
        "createdAt": "2023-01-10",
        "updatedAt": "2023-01-10T12:35:11.177Z",
        "user": {
            "id": "5c91874d-e8f2-4119-9a80-8e3d8f23dfee",
            "username": "example",
            "email": "example@gmail.com",
            "fullname": "exam example",
            "createdAt": "2023-01-10T17:32:45.687Z",
            "updatedAt": "2023-01-10T17:32:45.687Z"
        }
    }
```

## get owner messages

GET wires/messages/me

returns all messages appended to my user id

```bash
[
    {
        "id": "4",
        "title": "examples",
        "text": "example",
        "createdAt": "2023-01-10",
        "updatedAt": "2023-01-10T15:25:10.467Z"
    },
    {
        "id": "5",
        "title": "exampless",
        "text": "examplse",
        "createdAt": "2023-01-10",
        "updatedAt": "2023-01-10T15:26:01.191Z"
    }
]
```

## Get only message by id

GET wires/messages/me/${id}

returns the message found with that id

```bash
{
    "id": "4",
    "title": "examples",
    "text": "example",
    "createdAt": "2023-01-10",
    "updatedAt": "2023-01-10T15:25:10.467Z"
}
```


# Delete a message

DELETE wires/messages/${id}

return raws affected for sql query

```bash
{
    "raw": [],
    "affected": 1
}
```


# Comment message

PATCH wires/messages/comment/${message_id}

Params : id - this is a message id
Body:
    - comment : string

return message with comments

```bash
{
    "id": "2",
    "title": "tes2t1",
    "text": "this is a messages",
    "comments": [
        "{\"comment\":\"this is a comment\",\"user\":\"e207fee6-7542-4311-8646-d12e1fde3baa\"}"
    ],
    "createdAt": "2023-01-10",
    "updatedAt": "2023-01-10T16:49:49.724Z",
    "user": {
        "id": "5c91874d-e8f2-4119-9a80-8e3d8f23dfee",
        "username": "example",
        "email": "example@gmail.com",
        "fullname": "exam example",
        "createdAt": "2023-01-10T17:32:45.687Z",
        "updatedAt": "2023-01-10T17:32:45.687Z"
    }
}
```

# React message

PATCH wires/messages/reaction/${message_id}

Params : id - this is a message id
Body:
    - reaction : string
    - author : string

return message with reactions

Must convert emojis to ascii before insert in DB

```bash
{ 
    "id": "4", 
    "user": "5c91874d-e8f2-4119-9a80-8e3d8f23dfee", 
    "title": "my messages", 
    "text": "this is a desc for my message", 
    "comments" : [], 
    "reactions" : [{
        "reaction" : "U+1F600" ,
        "author" : "5c91874d-e8f2-4119-9a80-8e3d8f23dfee" 
    }],
    "createdAt": "2023-01-11", 
    "updatedAt": "2023-01-11", 
}
```