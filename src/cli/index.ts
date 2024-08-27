import { cli as cleye } from 'cleye'
import { patch } from './subcommands/patch';
import { generate } from './subcommands/generate';
import { setup } from './subcommands/setup';

export async function cli(){
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

  const { flags } = argv;

  console.log(argv)
}
