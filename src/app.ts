#!/usr/bin/env node

const { version } = require('../package.json');

import { Command as Program } from 'commander';

import { Command } from './commands/command';
import { AddCommand } from './commands/add.command';

const commands: Command[] = [new AddCommand()];

async function bootstrap() {
	const program: Program = new Program();
	program.version(version);

	for (let i = 0; i < commands.length; i++) {
		commands[i].load(program);
	}

	program.parse(process.argv);
}
bootstrap();
