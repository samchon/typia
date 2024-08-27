import { cli as cleye } from 'cleye'
import { patch } from './subcommands/patch';
import { generate } from './subcommands/generate';
import { setup } from './subcommands/setup';
import { wizard } from './utils/message';

export async function cli(){
  wizard();
  const argv = cleye({
    name: "typia",
    version: "1.0.0",
    description: "CLI for Typia operations",

    commands: [
      patch,
      generate,
      setup,
    ],

  })

  /* if no subcommand is provided, show help */
  argv.showHelp();
}
