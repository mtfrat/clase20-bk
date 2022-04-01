const  mongoose  = require('mongoose');

const productsCollection = 'products'
const productsSchema = new mongoose.Schema({
    _id:String,
    title:String,
    price:Number,
    photo:String,
    description:String,
    code:Number,
    stock:Number,
})

let productsService = mongoose.model(productsCollection,productsSchema)
module.exports = productsService