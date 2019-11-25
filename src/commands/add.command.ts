import { Command as Program } from 'commander';

import { Command } from './command';

export class AddCommand implements Command {
	load(program: Program): void {
		program
			.command(`add [directory]`)
			.alias('a')
			.option('-c, --current', 'Use the current working directory')
			.action(async (directory: string, options: any) => {
				console.log(program.c); // undefined
				console.log(program.current); // undefined
				console.log(options.c); // undefined
				console.log(options.current); // undefined
				console.log(program.options.c); // undefined
				console.log(program.options.current); // undefined
				console.log(options.parent.args[0]); // ./src
				console.log(process.argv[3]); // ./src
			});
	}
}
