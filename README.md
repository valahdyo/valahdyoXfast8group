# Product Monitoring Platform

Practical Test for recruitment proccess Nutech

## Technologies

Back-end is created with:

- ExpressJS
- Seqeulize
- PostgreSQL
- JWT
- Cloudinary

## Setup

To run this project, install it locally using npm:

```
$ cd /@where-you-save-repo/
$ npm install
$ npm server
```

## Endpoint List

- **Get Product Info**

  ```
  url = /api/products
  method = GET
  ```

### Auth

- **Login**

  ```
  url = /api/auth/login
  mehtod = POST
  request body =
  {
  "email": "admin@mail.com ",
  "password": "123456"
  }
  ```

### Only admin allowed

- **Add Product**

  ```
  url = /api/products
  method = POST
  request header =
  {
  "Authorization": "Bearer {token}"
  }
  request body =
  {
  "title": "Baju Koko",
  "stock" : 20,
  "buyPrice" : 100000,
  "sellPrice" : 120000,
  "image" : bajukoko.png,
  "description": "Baju koko trendy",
  }
  ```

- **Update Product**
  ```
  url = /api/products/:id
  method = PATCH
  request header =
  {
  "Authorization": "Bearer {token}"
  }
  request body =
  {
  "buyPrice" : 110000
  }
  ```
- **Delete Product**

  ```
  url = /api/products/:id
  method = DELETE
  request header =
  {
  "Authorization": "Bearer {token}"
  }
  ```
