//config.json should store all the information 
const NODE_ENV = process.env.NODE_ENV || 'development';

if (NODE_ENV === 'development' || NODE_ENV === 'test') {
	const config = require('./config.json');
	const ENV_CONFIG = config[NODE_ENV];

	Object.keys(ENV_CONFIG).forEach((key) => {
		process.env[key] = ENV_CONFIG[key];
	});
}
