const FsProductContainer = require ('../container/fsProductContainer')
const productsPath = '/src/files/products.txt';



class FsProductDao {
    productManager = new FsProductContainer(productsPath);

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

module.exports = FsProductDao