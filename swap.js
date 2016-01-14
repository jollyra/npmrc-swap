var path = require('path'),
	os = require('os'),
	cmd = require('commander');

cmd.version('0.0.1')
	.option('-c, --config', 'config file to activate')
	.parse(process.argv);

if(!cmd.config) {
	cmd.outputHelp();
	process.exit(1);
}

module.exports = function () {
	process.exit();
}
