const  mongoose  = require('mongoose');

const cartsCollection = 'carts'
const cartsSchema = new mongoose.Schema({
    productsID:Array
})

let cartsService = mongoose.model(cartsCollection,cartsSchema)
module.exports = cartsService