import { Router } from "express";
import sql from "../../DB/connection.js";
import * as productController from './conroller/product.js'

const router = Router()


router.post('/product', productController.addProduct)
router.get('/product/:id',productController.getProductByID)
router.get('/products',productController.getAllProducts)
router.put('/product/:id', productController.updateProduct)

router.get('/product',productController.serachProductByName)

router.delete('/product/:id',productController.deleteProduct)




export default router