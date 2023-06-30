import { Router } from "express"
import controller from "../controller/controller";
import { validationMiddleware } from "../middleware/middleware";
import { deleteSchema, postSchema, putSchema } from "../middleware/schema/schema";
import { valid } from "joi";

const listRouter = Router()

listRouter.get("/health", (req, res)=>{console.log('API ON'); res.send('API ON TC')})
listRouter.get("/list", controller.getList)
listRouter.post("/list", validationMiddleware(postSchema), controller.postList)
listRouter.put("/list",validationMiddleware(putSchema), controller.putList)
listRouter.delete("/list",validationMiddleware(deleteSchema), controller.deleteList)


export default listRouter