const  mongoose  = require('mongoose');

// conexión a la base de datos
mongoose.connect('mongodb+srv://mfrat:123@cluster0.6yjhw.mongodb.net/carts?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}, error=>{
    if(error) throw new Error('Cannot connect to MongoDB')
    console.log("Connected")
})

class MongoCartContainer {
	constructor(model) {
		this.model = model;
	}

    async getAll() {
		return await this.model.find()
	}

    async addCart(cart) {
		return await this.model.create(cart)
	}

    async deleteCart(cartID) {
        let mongoID = `ObjectId("${cartID}")`
		let mongoIDObj = {_id: `${mongoID}`}
		return await this.model.deleteOne({mongoIDObj})
	}

    async deleteProduct(cartID, productID) {
        let mongoID = `"${cartID}"`
        let productsToModified = await this.model.find()
        let arrayToPush = []
        let update

        for(let i in productsToModified){
            if(JSON.stringify(productsToModified[i]._id) === mongoID)
                for(let x in productsToModified[i].productsID){
                    if(productsToModified[i].productsID[x] === parseInt(productID)){
                        arrayToPush = productsToModified[i].productsID.splice(x, 1)
                    }
                }
        }

		update = {"productsID": `${arrayToPush}`}

        return await this.model.updateOne({cartID},{$set: update});
	}

    async addProduct(cartID, products){
        let mongoID = `"${cartID}"`
        let productsToModified = await this.model.find()
        let arrayToPush = []
        let update

        for(let i in productsToModified){
            if(JSON.stringify(productsToModified[i]._id) === mongoID)
                arrayToPush = productsToModified[i].productsID;
        }
        arrayToPush.push(products.productsID)

		update = {"productsID": `${update}`}

        return await this.model.updateOne({cartID},{$set: update});
	}
}


module.exports = MongoCartContainer;
