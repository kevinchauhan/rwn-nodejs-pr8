import { Router } from "express";
import SubCategoryController from "../controllers/SubCategoryController.js";

const subCategoryRouter = Router()
const subCategoryController = new SubCategoryController()

subCategoryRouter.get('/', subCategoryController.get)
subCategoryRouter.get('/create', subCategoryController.createForm)
subCategoryRouter.post('/create', subCategoryController.create)
subCategoryRouter.get('/delete/:id', subCategoryController.remove)

export default subCategoryRouter