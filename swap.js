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

var dotfiles = path.join(os.homedir(), 'dotfiles');
var pulse = path.join(dotfiles, '.npmrc_pulse');
var nigel = path.join(dotfiles, '.npmrc_nigel');

module.exports = function () {
	if(cmd.config === 'pulse') {

	} else if(cmd.config === 'nigel') {

	} else {
		console.log('%s doesn\'t exist', cmd.config);
		process.exit(1);
	}
	process.exit();
}
