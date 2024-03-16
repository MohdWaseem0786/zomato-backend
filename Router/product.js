const express=require("express")

const route=express.Router()

const Product=require("../models/Product")
const { handleCreateProduct,
    handleDeleteProductById,
    handleUpdateProductById,
    handleGetAllProducts,
    handleGetProductById}=require("../Controller/productController")

route.get('/product',handleGetAllProducts)


route.get('/product/:id', handleGetProductById)

route.post('/product', handleCreateProduct)

route.patch('/product/:id', handleUpdateProductById)

route.delete('/product/:id', handleDeleteProductById)

module.exports=route