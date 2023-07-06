import { Router } from "express"
import controller from "../controller/controller";
import { validationMiddleware } from "../middleware/middleware";
import { deleteSchema, postSchema, putSchema } from "../middleware/schema/schema";

const listRouter = Router()

listRouter.get("/health", (req, res)=>{console.log('API ON'); res.send('API ON TC')})
listRouter.get("/moradores", controller.getList)
listRouter.post("/moradores", validationMiddleware(postSchema), controller.postList)
listRouter.put("/moradores",validationMiddleware(putSchema), controller.putList)
listRouter.delete("/moradores",validationMiddleware(deleteSchema), controller.deleteList)


export default listRouter