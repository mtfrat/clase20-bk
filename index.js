// import fs from ('fs')
const express = require('express')

const productRouter = require('./src/routes/productRouter')
const cartRouter = require("./src/routes/cartRouter")

const app = express()

let admin = false

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)


const connectedServer = app.listen(8080, ()=>{
    console.log("Listening on port 8080")
})


