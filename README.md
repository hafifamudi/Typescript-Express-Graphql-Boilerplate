# **Typescript GraphQL with Express Boilerplate**

> How to use ?

- You can directly clone this repo
- After it, run npm install then run npm start 
- Thats's it, now you can use this starter template for your graphql project with Typescript and Express

> How to run Example of the User Database Schema / Entity and Graphql Schema / Resolver ?

- Open the url of the express listen server ***localhost:3000/graphql***
- You will be directed to the *studio.apollographql.com*, if not you can just click the button that appears at first in the page
- after in the *studio.apollographql.com*, congratulations, *studio.apollographql.com* already connect with your local app,then you can mutate or query to your grapql server through apollographql studio
    
    #### **You can directly paste this mutate and query in Operations Section**
  - *First Mutation (createUser)*
    ```
    mutation{
    createUser(
        options: {
        firstname: "hafif",
        lastname: "amudi",
        age: 20
        }
    )
        {
            firstname
            lastname
            age
        }
    }
    ```
  - *Second Mutation (updateUser)*
    ```
    mutation{
    updateUser(
        id:1,
        input: {
        firstname:"zidane pablo"
        }
      )
    }
    ```
  - *Third Mutation (deleteUser)*
    ```
    mutation{ 
      deleteUser(id:2)
    }
    ```
  - *Fourth Query (users)*

    ```
    {
      users {
        id,
        firstname,
        lastname,
        age,
      }
    }
    ```

Happy Coding :)