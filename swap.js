var path = require('path'),
	os = require('os'),
	fs = require('fs'),
	cmd = require('commander');

cmd.version('0.0.1')
	.option('-c, --config <config>', 'config file to activate')
	.parse(process.argv);

if(!cmd.config) {
	cmd.outputHelp();
	process.exit(1);
}

var homedir = path.join('/Users/nigel.rahkola/');
var dotfiles = path.join(homedir, 'dotfiles');
var pulse = path.join(dotfiles, '.npmrc_pulse');
var nigel = path.join(dotfiles, '.npmrc_nigel');
var npmrc = path.join(homedir, '.npmrc');

if(cmd.config === 'pulse') {
	fs.unlinkSync(npmrc);
	console.log('Deleted old .npmrc');
	fs.linkSync(pulse, npmrc);
	console.log('Linked %s', pulse);
} else if(cmd.config === 'nigel') {
	fs.unlinkSync(npmrc);
	console.log('Deleted old .npmrc');
	fs.linkSync(nigel, npmrc);
	console.log('Linked %s', nigel);
} else {
	console.log('%s doesn\'t exist', cmd.config);
	process.exit(1);
}
process.exit();
