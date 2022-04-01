const  express = require('express')
const cartDao = require('../daos/index')

const router = express.Router()

router.get('/products', async (req, res) => {
	const cart = await cartDao.getAll()
	res.json({
		cart,
		message: 'Cart working',
	});
});

router.post('/', async (req, res) => {
	const cart = req.body
	const newcart = await cartDao.addCart(cart)
	res.json({
		newcart,
		message: 'Cart creaded successfully',
	});
});

router.delete('/:id', async (req, res) => {
	let cartID = req.params.id
	const cart = await cartDao.deleteCart(cartID)
	res.json({
		cartID,
		message: 'Cart deleted',
	});
});

router.delete('/:id/products/:id_prod', async (req, res) => {
	let cartID = req.params.id
	let productID = req.params.id_prod
	const cart = await cartDao.deleteProduct(cartID,productID)
	res.json({
		cartID,
		message: 'Product deleted',
	});
});

router.post('/:id/products', async (req, res) => {
	let cartID = req.params.id
	const products = req.body
	const modifiedCart = await cartDao.addProduct(cartID,products)
	res.json({
		modifiedCart,
		message: 'Cart modified successfully',
	});
});

module.exports = router
