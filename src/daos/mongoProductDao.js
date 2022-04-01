const MongoProductContainer = require ('../container/mongoProductContainer')
const Product = require ('../model/products')

class MongoProductDao {
	productManager = new MongoProductContainer(Product);

	async getAll() {
		return await this.productManager.getAll();
	}

	async addProduct(product) {
		return await this.productManager.addProduct(product);
	}

	async deleteProduct(productID){
		return await this.productManager.deleteProduct(productID);
	}

	async updateProduct(update, productID){
		return await this.productManager.updateProduct(update,productID);
	}
}

module.exports = MongoProductDao;
