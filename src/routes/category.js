import { Router } from "express";
import CategoryController from "../controllers/categoryController.js";

const categoryRouter = Router()
const categoryController = new CategoryController()

categoryRouter.get('/', categoryController.get)
categoryRouter.get('/create', categoryController.createForm)
categoryRouter.post('/create', categoryController.create)
categoryRouter.get('/delete/:id', categoryController.remove)

export default categoryRouter