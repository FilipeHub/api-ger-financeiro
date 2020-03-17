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
    "url": "/message",
    "title": "Create a new message",
    "name": "CreateMessage",
    "group": "Messages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Message text</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "userId",
            "description": "<p>User that sent the message</p>"
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
            "field": "CreateMessageFailed",
            "description": "<p>an unexpected error occurs in the storage of the Message in the data base</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-response",
          "content": "HTTP/1.1 400 Error creating a new Message\n\n{\n   error: \"Save message failed\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./src/controllers/MessageController.js",
    "groupTitle": "Messages"
  },
  {
    "type": "get",
    "url": "/messages/:page",
    "title": "Returns all the messages",
    "name": "GetMessages",
    "group": "Messages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page of the pagination</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Message[]",
            "optional": false,
            "field": "messages",
            "description": "<p>Messages from database. (limited by the MESSAGES_PER_PAGE value of the .env file)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n\n      {\n       \"messages\": [\n           {\n           \"_id\": \"5e70236415102c507c5b181b\",\n           \"text\": \"how r u?\",\n           \"user\": {\n               \"_id\": \"5e6fe7bd07b5ba14e111f227\",\n               \"name\": \"User1\",\n               \"email\": \"user1@gmail.com\",\n               \"__v\": 0\n           }\n           },\n           {\n           \"_id\": \"5e702155ce7e194ac9a87cc2\",\n           \"text\": \"Hello\",\n           \"user\": {\n               \"_id\": \"5e6fe7f007b5ba14e111f229\",\n               \"name\": \"User3\",\n               \"email\": \"user3@gmail.com\",\n               \"__v\": 0\n           }\n           },\n           {\n           \"_id\": \"5e702120ce7e194ac9a87cc1\",\n           \"text\": \"Hi\",\n           \"user\": {\n               \"_id\": \"5e6fe7f007b5ba14e111f229\",\n               \"name\": \"User3\",\n               \"email\": \"user3@gmail.com\",\n               \"__v\": 0\n           }\n           }\n       ]\n       }",
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
            "field": "GetMessageFailed",
            "description": "<p>an unexpected error occurs getting the Messages</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-response",
          "content": "HTTP/1.1 400 Error Message not found\n\n{\n   error: \"Error getting the Messages\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./src/controllers/MessageController.js",
    "groupTitle": "Messages"
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
    "group": "_home_filipe_Projects_chat_challenge_api_docs_main_js",
    "groupTitle": "_home_filipe_Projects_chat_challenge_api_docs_main_js",
    "name": ""
  }
] });
