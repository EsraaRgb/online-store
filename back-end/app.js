import express from 'express'
import userRouter from './modules/user/user.router.js'
import productRouter from './modules/product/product.router.js'
import cors from 'cors'



const app = express();
app.use(express.json())
app.use(cors())
app.use(userRouter,productRouter)



app.get("*" , (req,res)=>{
res.json({message:"Not Found"})
})

app.listen(5000,()=>{
    console.log("running on port 5000 ....................");
})