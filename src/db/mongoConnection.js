const  mongoose = require('mongoose');

let db;
async function connectWithMongo() {
	try {
		mongoose.connect(
			'mongodb+srv://mfrat:123@cluster0.6yjhw.mongodb.net/cart?retryWrites=true&w=majority',
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		);

		db = mongoose.connection;
		db.on('error', console.error.bind(console, 'Cannot connect to MongoDB'));
		db.once('open', () => {
			console.log('Connected to MongoDB')
		});
	} catch (error) {
		console.log('Cannot establish connection with MongoDB')
	}
}

module.exports = {
	db,
	connectWithMongo,
};
