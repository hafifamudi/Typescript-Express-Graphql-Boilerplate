import "reflect-metadata"
import { createConnection } from "typeorm"
import express, { Application } from "express"
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from "type-graphql";
import { HelloWorldResolver } from "./resolvers/HelloWorldResolver";
import { UserResolver } from "./resolvers/UserResolver";


(async () => {

    const app: Application = express();
    const port: number = 3000;

    await createConnection();

    const apolloServer:ApolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloWorldResolver, UserResolver]
        }),
        context: ({req, res}) => ({req,res}) // for parsing the data into graphql resolver
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({
      app,
      cors: true
    });

    app.listen(port, () =>  {
        console.log('server is running at '+ port);
    })
}
)()