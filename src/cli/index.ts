import { cli as cleye } from 'cleye'
import * as Subcommand from './subcommands'
import { wizard } from './utils/message';

export async function cli(){
  wizard();
  const argv = cleye({
    name: "typia",
    version: "1.0.0",
    description: "CLI for Typia operations",

    commands: [
      Subcommand.patch,
      Subcommand.generate,
      Subcommand.setup,
    ],

  })

  /* if no subcommand is provided, show help */
  argv.showHelp();
}
