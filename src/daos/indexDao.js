const MongoProductDao = require('./mongoProductDao')
const fsProductDao = require ('./fsProductDao')
const fsCartDao = require ('./fsCartDao')
const MongoCartDao = require('./mongoCartDao')

const dbToUse = 'fsProduct'

let productDao
let cartDao

switch (dbToUse) {
	case 'mongoCart':
		cartDao = new MongoCartDao()
		break;
	case 'mongoProduct':
		productDao = new MongoProductDao()
		break;
	case 'fsProduct':
		productDao = new fsProductDao()
		break
	case 'fsCart':
		cartDao = new fsCartDao()
		break
	default:
		break
}

module.exports = productDao
//module.exports = cartDao