import {initServer} from "./app"

async function init(){
    const app = await initServer()
    app.listen(8000, ()=> console.log(`chal raha hai PORT:8000`))
}

init()

/**
 * model User{
  id String @id @default(cuid())
  firstName String
  lastName String?
  email String @unique
  profileImageURL String?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

 * 
 * 
 * 
 */