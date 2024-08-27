import { cli as cleye } from 'cleye'

export async function cli(){
  const argv = cleye({
    name: "typia",
    version: "1.0.0",
    description: "CLI for Typia operations",
  })
  console.log(argv)
}
