import { Command as Program } from 'commander';

export interface Command {
	load(program: Program): void;
}
