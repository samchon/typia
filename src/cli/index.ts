import { cli as cleye } from 'cleye'
import { patch } from './subcommands/patch';
import { generate } from './subcommands/generate';

export async function cli(){
  const argv = cleye({
    name: "typia",
    version: "1.0.0",
    description: "CLI for Typia operations",

    commands: [
      patch,
      generate,
    ],

  })

  const { flags } = argv;

  console.log(argv)
}
