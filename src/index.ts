import express from "express"
import "express-async-errors"
import listRouter from "./routes/route"
import { errorHandler } from "./middleware/middleware"

const app = express()


app.use(express.json())
app.use(listRouter)
app.use(errorHandler)

const port = 5000

app.listen(port, ()=>console.log(`API up and running on port: ${port}`))