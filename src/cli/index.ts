import { cli as cleye } from 'cleye'
import { patch } from './subcommands/patch';

export async function cli(){
  const argv = cleye({
    name: "typia",
    version: "1.0.0",
    description: "CLI for Typia operations",

    commands: [
      patch,
    ],

  })

  const { flags } = argv;

  console.log(argv)
}
