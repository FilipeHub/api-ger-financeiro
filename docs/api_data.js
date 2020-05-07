define({ "api": [
  {
    "type": "_",
    "url": "/_",
    "title": "Authenticated routes",
    "description": "<p>These verifications are made when the route requires a authenticated user</p>",
    "name": "AuthenticatedRoutes",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token returned when the user is created or when a login is done</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "_",
            "optional": false,
            "field": "_",
            "description": "<p>the route normally follows</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoTokenProvidedError",
            "description": "<p>the mandatory token for that route was not provide</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>the token doesn't have two parts</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotABearerTokenError",
            "description": "<p>the token provided is not a baerer token</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenInvalidError",
            "description": "<p>the token provided is a Bearer token by it is not valid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error- NoTokenProvidedError",
          "content": "HTTP/1.1 400 Error: NoTokenProvidedError\n\n{\n   error: \"No token provided\"\n}",
          "type": "json"
        },
        {
          "title": "Error- TokenError",
          "content": "HTTP/1.1 400 Error: TokenError\n\n{\n   error: \"Token error\"\n}",
          "type": "json"
        },
        {
          "title": "Error- NotABearerTokenError",
          "content": "HTTP/1.1 400 Error: NotABearerTokenError\n\n{\n   error: \"It is not a Bearer Token\"\n}",
          "type": "json"
        },
        {
          "title": "Error- TokenInvalidError",
          "content": "HTTP/1.1 400 Error: TokenInvalidError\n\n{\n   error: \"Token invalid\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./src/middlewares/auth.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/registro",
    "title": "Create a new Registro",
    "name": "CreateRegistro",
    "description": "<p>This endpoint requires a authenticated user. See the Authentication session of this documentation</p>",
    "group": "Registro",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>a Bearer token of the authorizaded user</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descricao",
            "description": "<p>Registro descricao</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipo",
            "description": "<p>Registro tipo</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantidade",
            "description": "<p>Registro quantidade</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "valor",
            "description": "<p>Registro valor</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "data",
            "description": "<p>Registro data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON Body Example:",
          "content": "{ \n  \"descricao\": \"Sabonete Dove\", \n  \"tipo\": \"Venda\", \n  \"quantidade\": 50, \n  \"valor\": 1.8,\n  \"data\": \"2020-04-19 10:18:24\"\n*  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Registro id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descricao",
            "description": "<p>Registro descricao</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tipo",
            "description": "<p>Registro tipo</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantidade",
            "description": "<p>Registro quantidade</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "valor",
            "description": "<p>Registro valor</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data",
            "description": "<p>Registro data</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "user",
            "description": "<p>Registro's owner.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"_id\": \"5eb1afe51aca765c80ca4e76\",\n  \"descricao\": \"Sabonete Dove\",\n  \"tipo\": \"Venda\",\n  \"quantidade\": 50,\n  \"valor\": 1.8,\n  \"data\": \"2020-04-19T13:18:24.000Z\",\n  \"user\": \"5eb14084e0c6ad42459e1fa0\",\n  \"createdAt\": \"2020-05-05T18:26:45.013Z\",\n  \"updatedAt\": \"2020-05-05T18:26:45.013Z\",\n  \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CreateRegistroFailed",
            "description": "<p>an unexpected error occurs in the storage of the Registro in the database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-response",
          "content": "HTTP/1.1 400 Error creating a new Registro\n\n{\n   error: \"Error creating new Registro\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./src/controllers/RegistroController.js",
    "groupTitle": "Registro"
  },
  {
    "type": "get",
    "url": "/registro",
    "title": "Mostra todos os registros do usuário",
    "name": "GetRegistro",
    "description": "<p>This endpoint requires a authenticated user. See the Authentication session of this documentation</p>",
    "group": "Registro",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>a Bearer token of the authorizaded user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>Id and name of the registro</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n\n\n  [\n      {\n          \"_id\": \"5eb1a26ecc20e350002029b7\",\n          \"descricao\": \"Sabonete Dove\",\n          \"tipo\": \"Compra\",\n          \"quantidade\": 200,\n          \"valor\": 0.8,\n          \"data\": \"2020-04-13T11:18:30.000Z\",\n          \"user\": \"5eb14084e0c6ad42459e1fa0\",\n          \"createdAt\": \"2020-05-05T17:29:18.516Z\",\n          \"updatedAt\": \"2020-05-05T17:29:18.516Z\",\n          \"__v\": 0\n      },\n      {\n          \"_id\": \"5eb1add41cba2a5a817009ba\",\n          \"descricao\": \"Sabonete Dove\",\n          \"tipo\": \"Venda\",\n          \"quantidade\": 100,\n          \"valor\": 1.5,\n          \"data\": \"2020-04-13T21:18:30.000Z\",\n          \"user\": \"5eb14084e0c6ad42459e1fa0\",\n          \"createdAt\": \"2020-05-05T18:17:56.814Z\",\n          \"updatedAt\": \"2020-05-05T18:17:56.814Z\",\n          \"__v\": 0\n      },\n      {\n          \"_id\": \"5eb1afe51aca765c80ca4e76\",\n          \"descricao\": \"Sabonete Dove\",\n          \"tipo\": \"Venda\",\n          \"quantidade\": 25,\n          \"valor\": 1.8,\n          \"data\": \"2020-04-19T13:18:24.000Z\",\n          \"user\": \"5eb14084e0c6ad42459e1fa0\",\n          \"createdAt\": \"2020-05-05T18:26:45.013Z\",\n          \"updatedAt\": \"2020-05-06T01:14:17.597Z\",\n          \"__v\": 0\n      }\n  ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GetRegistroFailed",
            "description": "<p>an unexpected error occurs getting the list of all user's registro</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-response",
          "content": "HTTP/1.1 400 Error getting the registro' list\n\n{\n   error: \"Error getting the registro\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./src/controllers/RegistroController.js",
    "groupTitle": "Registro"
  },
  {
    "type": "put",
    "url": "/registro/:id",
    "title": "Update a Registro",
    "name": "UpdateRegistro",
    "description": "<p>This endpoint requires a authenticated user. See the Authentication session of this documentation</p>",
    "group": "Registro",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>a Bearer token of the authorizaded user</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descricao",
            "description": "<p>Registro descricao</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipo",
            "description": "<p>Registro tipo</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantidade",
            "description": "<p>Registro quantidade</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "valor",
            "description": "<p>Registro valor</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "data",
            "description": "<p>Registro data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON Body Example:",
          "content": "{ \n  \"descricao\": \"Sabonete Dove\", \n  \"tipo\": \"Venda\", \n  \"quantidade\": 50, \n  \"valor\": 1.8,\n  \"data\": \"2020-04-19 10:18:24\"\n*  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Registro id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descricao",
            "description": "<p>Registro descricao</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tipo",
            "description": "<p>Registro tipo</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantidade",
            "description": "<p>Registro quantidade</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "valor",
            "description": "<p>Registro valor</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data",
            "description": "<p>Registro data</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "user",
            "description": "<p>Registro's owner.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"_id\": \"5eb1afe51aca765c80ca4e76\",\n  \"descricao\": \"Sabonete Dove\",\n  \"tipo\": \"Venda\",\n  \"quantidade\": 50,\n  \"valor\": 1.8,\n  \"data\": \"2020-04-19T13:18:24.000Z\",\n  \"user\": \"5eb14084e0c6ad42459e1fa0\",\n  \"createdAt\": \"2020-05-05T18:26:45.013Z\",\n  \"updatedAt\": \"2020-05-05T18:26:45.013Z\",\n  \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "the",
            "description": "<p>registro doesn't exists in the user's account</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UpdateRegistroFailed",
            "description": "<p>an unexpected error occurs updating the details of one user's registros</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-registro doesn't exists",
          "content": "HTTP/1.1 400 Error: registro doesn't exists\n\n{\n   error: \"Doesn't exist this registro for this user\"\n}",
          "type": "json"
        },
        {
          "title": "Error-response",
          "content": "HTTP/1.1 400 Error updating the attributes of one user's registros\n\n{\n   error: \"Error updating the registro\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./src/controllers/RegistroController.js",
    "groupTitle": "Registro"
  },
  {
    "type": "delete",
    "url": "/registro/:id",
    "title": "Delete the registro",
    "name": "DeleteRegistro",
    "description": "<p>This endpoint requires a authenticated user. See the Authentication session of this documentation</p>",
    "group": "Registros",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>a Bearer token of the authorizaded user</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>registro id, unique</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>success message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n   \"message\": \"The registro was successfuly removed.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RegistroDoesNotExistsFailed",
            "description": "<p>the registro doesn't exists in the user's account</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DeleteRegistroFailed",
            "description": "<p>an unexpected error occurs deleting one user's registro</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-registro doesn't exists",
          "content": "HTTP/1.1 400 Error: registro doesn't exists\n\n{\n   error: \"Doesn't exist this registro for this user\"\n}",
          "type": "json"
        },
        {
          "title": "Error-response",
          "content": "HTTP/1.1 400 Error deleting the user's registro\n\n{\n   error: \"Error deleting the registro\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./src/controllers/RegistroController.js",
    "groupTitle": "Registros"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Login in the system",
    "name": "CreateSession",
    "group": "Sessions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email, unique</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password, not unique</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON Body Example:",
          "content": "{ \n      \"email\" : \"filipe@gmail.com\", \n      \"password\": \"123456\", \n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token to the user authentication in the system</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n\n  {\n      \"user\": {\n          \"_id\": \"5de2a86a929ae9080cb9160d\",\n          \"name\": \"Filipe\",\n          \"email\": \"filipe@gmail.com\",\n          \"__v\": 0\n      },\n      \n      \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZTJhODZhOTI5YWU5MDgwY2I5MTYwZCIsImlhdCI6MTU3NTEzNTMzOCwiZXhwIjoxNTc1MjIxNzM4fQ.145vjji6eIC5jEogGoBk_SbcUMCGYTzbrXyWpe8t_iU\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LoginFailed",
            "description": "<p>an unexpected error occurs in the user's login</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFoundFailed",
            "description": "<p>the user doesn't have an email storaged in the data base</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidPasswordFailed",
            "description": "<p>the user's password is wrong</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-response",
          "content": "HTTP/1.1 400 Error in the user's login\n\n{\n   error: \"Login failed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-response",
          "content": "HTTP/1.1 400 Error user not found\n\n{\n   error: \"User not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-response",
          "content": "HTTP/1.1 400 Error invalid password\n\n{\n   error: \"Invalid password\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./src/controllers/SessionController.js",
    "groupTitle": "Sessions"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create a new User",
    "name": "CreateUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name, not unique</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email, unique</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password, not unique</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON Body Example:",
          "content": "{ \n      \"name\": \"Filipe\",\n      \"email\" : \"filipe@gmail.com\", \n      \"password\": \"123456\", \n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token to the user authentication in the system</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n\n  {\n      \"user\": {\n          \"_id\": \"5de2a86a929ae9080cb9160d\",\n          \"name\": \"Filipe\",\n          \"email\": \"filipe@gmail.com\",\n          \"__v\": 0\n      },\n      \n      \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZTJhODZhOTI5YWU5MDgwY2I5MTYwZCIsImlhdCI6MTU3NTEzNTMzOCwiZXhwIjoxNTc1MjIxNzM4fQ.145vjji6eIC5jEogGoBk_SbcUMCGYTzbrXyWpe8t_iU\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CreateUserFailed",
            "description": "<p>an unexpected error occurs in the storage of the user in the data base</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAlreadyExistsFailed",
            "description": "<p>the user already have an email storaged in the data base</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-response",
          "content": "HTTP/1.1 400 Error creating a new user\n\n{\n   error: \"Registration failed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-response",
          "content": "HTTP/1.1 400 Error user already exists\n\n{\n   error: \"User already exists\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./src/controllers/UserController.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Returns a user object",
    "name": "GetUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>User id, unique</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n\n      \"user\": {\n          \"_id\": \"5de2a86a929ae9080cb9160d\",\n          \"name\": \"Filipe\",\n          \"email\": \"filipe@gmail.com\",\n          \"__v\": 0\n      }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GetUserFailed",
            "description": "<p>an unexpected error occurs getting the user</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFoundFailed",
            "description": "<p>the user doesn't have an email storaged in the data base</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-response",
          "content": "HTTP/1.1 400 Error user not found\n\n{\n   error: \"User doesn't exists\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./src/controllers/UserController.js",
    "groupTitle": "Users"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "_home_filipe_Projects_ger_financeiro_api_docs_main_js",
    "groupTitle": "_home_filipe_Projects_ger_financeiro_api_docs_main_js",
    "name": ""
  }
] });
