import { Router } from "express";
import ProductController from "../controllers/ProductController.js";

const productRouter = Router()
const productController = new ProductController()

productRouter.get('/', productController.get)
productRouter.get('/create', productController.createForm)
productRouter.post('/create', productController.create)
productRouter.get('/delete/:id', productController.remove)

export default productRouter