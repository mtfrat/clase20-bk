const  express = require('express')
const productDao = require('../daos/indexDao')

const router = express.Router()

router.get('/', async (req, res) => {
	const product = await productDao.getAll()
	res.json({
		product,
		message: 'Product working',
	});
});

router.post('/', async (req, res) => {
	const product = req.body
	const newProduct = await productDao.addProduct(product)
	res.json({
		newProduct,
		message: 'Product created successfully',
	});
});

router.delete('/:id', async (req, res) => {
	let productID = req.params.id
	const product = await productDao.deleteProduct(productID)
	res.json({
		productID,
		message: 'Product deleted',
	});
});

router.put('/:id', async (req, res) => {
	let productID = req.params.id
	let update = req.body
	const product = await productDao.updateProduct(update,productID)
	res.json({
		productID,
		message: 'Product updated',
	});
});

module.exports = router
