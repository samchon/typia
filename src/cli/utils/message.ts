import { consola } from 'consola'

/**
* throw an error message and exit the process
*/
export function bail(message: string): never {
  consola.error(message);
  process.exit(1);
}

export function wizard(): void {
  consola.box("Typia Setup Wizard");
}
