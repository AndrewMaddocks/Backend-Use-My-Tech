## Backend-Use-My-Tech

## User

- Admin (username:user password:user)
  POST - https://use-my-tech.herokuapp.com/api/user/register
  // owner register
- EXAMPLE DATA
  {
  "username": "aaron",
  "password": "gilles",
  "location": "utah"
  }

POST - https://use-my-tech.herokuapp.com/api/user/login
//owner login

- EXAMPLE DATA
  {
  "username": "aaron",
  "password": "gilles"
  }

(a token will be returned here)

GET - https://use-my-tech.herokuapp.com/api/user
//to get all users

GET - https://use-my-tech.herokuapp.com/api/user/:id
//to get a user by id

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
GET - https://use-my-tech.herokuapp.com/api/tech/rented/:id
// will give a renter a list of all the items they are renting.
[
{
"username": "user",
"name": "labtop",
"description": "macbook pro",
"returned": "0"
},
{
"username": "user",
"name": "fog machine",
"description": "black with a red lid",
"returned": "0"
}
]
