# pirple-nodejs-assignment2

Second assignment for the NodeJS masterclass from Pirple

## Description

## Using the API

Set Content-Type as application/json in headers.

Token is always required in headers, except when creating a user or creating a token.

### USERS - post - /users

All fields are required except role, which defaults to "user" if not specified.

Payload object :

```
{
"firstName" : "",
"lastName" : "",
"email" : "example@domain.com",
"password" : "1234",
"address" : {
"street" : "streetAddress",
"postcode" : "postcode",
"city" : "city",
"country" : "US"
},
"role" : "admin",
"tosAgreement" : true
}
```

### USERS - get - /users?email=emailAddress

User email is required in query parameters.

**http://localhost:3000/users?email=example@domain.com**

### USERS - put - /users

Payload object \(at least one must be specified\)

```
{
"firstName" : "",
"lastName" : "",
"email" : "example@domain.com",
"password" : "1234",
"address" : {
"street" : "streetAddress",
"postcode" : "postcode",
"city" : "city",
"country" : "US"
},
"role" : "admin"
}
```

### USERS - delete - /users?email=emailAddress

User email is required in query parameters.

**http://localhost:3000/users?email=example@domain.com**

### TOKENS - post - /tokens

Payload object :

```
{
"email" : "example@domain.com",
"password" : "1234"
}
```

### TOKENS - get

Token id \(20 characters string\) is required in query parameters.

**http://localhost:3000/tokens?id=abcdefghijklmnopqrst**

### TOKENS - put

Payload object \(all fields are required, we can only update the expire date\) :

```
{
"id" : "abcdefghijklmnopqrst",
"extend" : true
}
```

### TOKENS - delete

Token id \(20 characters string\) is required in query parameters.

**http://localhost:3000/tokens?id=abcdefghijklmnopqrst**

### CARTS - post

### CARTS - get

### CARTS - put

### CARTS - delete

### ORDERS - post

### ORDERS - get

### ORDERS - put

### ORDERS - delete
