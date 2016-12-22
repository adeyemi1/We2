	module.exports.blueprints = {
		shortcuts: true,
		prefix: '/bp',
	};
	module.exports.connections = {
		// myPostgresqlServer: {
		// 	adapter: 'sails-postgresql',
		// 	host: 'localhost',
		// 	database: 'brushfire'
		// },
		productionPostgresqlServer: {
			adapter: 'sails-postgresql',
			url: 'postgres://iauvvontytvqiy:vBj9qmGK42nbALi5snQ26SquaK@ec2-23-21-148-9.compute-1.amazonaws.com:5432/d16un7vfa8jr6f',
			ssl: true

		}
	};