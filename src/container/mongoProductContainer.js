const  mongoose  = require('mongoose');

// conexión a la base de datos
// mongoose.connect('mongodb+srv://mfrat:123@cluster0.6yjhw.mongodb.net/products?retryWrites=true&w=majority',{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }, error=>{
//     if(error) throw new Error('Cannot connect to MongoDB')
//     console.log("Connected")
// })

class MongoProductContainer {
	constructor(model) {
		this.model = model;
	}

	async getAll() {
		return await this.model.find();
	}

	async addProduct(product) {
		return await this.model.create(product);
	}

	async deleteProduct(productID){
		let mongoID = `ObjectId("${productID}")`
		let mongoIDObj = {_id: `${mongoID}`}
		return await this.model.deleteOne({mongoIDObj});
	}

	async updateProduct(update,productID){
		let mongoID = `ObjectId("${productID}")`
		let mongoIDObj = {_id: `${mongoID}`}
		return await this.model.updateOne({mongoIDObj},{$set: update});
	}
}


module.exports = MongoProductContainer;
