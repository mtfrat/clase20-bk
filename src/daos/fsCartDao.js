const FsCartContainer = require ('../container/fsCartContainer')
const cartPath = '/src/files/cart.txt';

class FsCartDao {
	cartManager = new FsCartContainer(cartPath);

	async getAll() {
		return await this.cartManager.getAll();
	}

	async addCart(cart) {
		return await this.cartManager.addCart(cart);
	}

	async deleteProduct(cartID, productID){
		return await this.cartManager.deleteProduct(cartID, productID);
	}

	async deleteCart(cartID){
		return await this.cartManager.deleteCart(cartID);
	}

	async addProduct(cartID, products){
		return await this.cartManager.addProduct(cartID,products);
	}
}

module.exports = FsCartDao;