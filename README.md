## Backend-Use-My-Tech

## Owner

- Admin (username:owner password:owner)
  POST - https://use-my-tech.herokuapp.com/api/owner/register
  // owner register
- EXAMPLE DATA
  {
  "username": "aaron",
  "password": "gilles",
  "location": "utah"
  }

POST - https://use-my-tech.herokuapp.com/api/owner/login
//owner login

- EXAMPLE DATA
  {
  "username": "aaron",
  "password": "gilles"
  }

(a token will be returned here)

# Tech

POST - https://use-my-tech.herokuapp.com/api/tech
//add a tech item

- EXAMPLE DATA
  {
  "name": "airpods",
  "description": "pro",
  "owner_id": "3"
  }

GET - https://use-my-tech.herokuapp.com/api/tech/all/:id
// this will return all tech owned by a owner
[
{
"owner_id": 2,
"username": "owner",
"name": "labtop",
"description": "macbook pro",
"rented": "true"
},
{
"owner_id": 2,
"username": "owner",
"name": "tv",
"description": "27 in",
"rented": "false"
}
]
GET - https://use-my-tech.herokuapp.com/api/tech/:id
// this will return a tech item with a specific id.
{
"id": 3,
"name": "labtop",
"description": "macbook pro",
"rented": "true",
"owner_id": "2"
}
PUT - https://use-my-tech.herokuapp.com/api/tech/:id
//this will update a tech item
{
"name": "AWESOME fog machine",
"description": "black with a red lid",
"rented": "true"
}
DELETE - https://use-my-tech.herokuapp.com/api/tech/:id
//this will delete a tech item

## Renter

- Admin (username:renter password:renter)

POST - https://use-my-tech.herokuapp.com/api/renter/register
//renter register

- EXAMPLE DATA
  {
  "username": "jake",
  "password": "meyers"
  }

POST - https://use-my-tech.herokuapp.com/api/renter/login
//renter login

- EXAMPLE DATA
  {
  "username": "jake",
  "password": "meyers"
  }
  (a token will be returned here)

GET - https://use-my-tech.herokuapp.com/api/tech
//will display a list of all the tech items from owners for renters to see.
[
{
"id": 3,
"name": "labtop",
"description": "macbook ",
"rented": "true",
"owner_id": "2"
},
{
"id": 4,
"name": "cord",
"description": "black ",
"rented": "false",
"owner_id": "3"
}
]
