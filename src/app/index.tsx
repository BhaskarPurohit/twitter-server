import  express  from "express";
import { ApolloServer } from "@apollo/server";
import {expressMiddleware} from "@apollo/server/express4"
import bodyParser from 'body-parser'
import { prismaClient } from "../clients/db";
import {User} from "./user"
//when we get  some data from the server, it is query
//when sending data to the server, mutation
export async function initServer(){
    const app = express()
    app.use(bodyParser.json())

    

    const graphqlServer = new ApolloServer({
        typeDefs:`
        ${User.types}
        type Query{
        ${User.queries}
            
            

        }
        `,
        resolvers:{
            Query:{
                ...User.resolvers.queries,
                
            },
           
        },

    })
    await graphqlServer.start()

    app.use("/graphql", expressMiddleware(graphqlServer))
    return app

}

//postgres://postgres.kzexygmdlqgxtypelngw:2jwCxXYd1utJzzr9@aws-0-ap-south-1.pooler.supabase.com:6543/postgres