#!/usr/bin/env node
import { program } from 'commander/esm.mjs';

//const program = new Command();

program
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1', '-V, --version', 'output the version number')
    .help('-h, --help', 'display help for command')