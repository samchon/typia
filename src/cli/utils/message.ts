import { consola } from 'consola'

export function showErrorAndExit(message: string): never {
  consola.error(message);
  process.exit(1);
}

export function wizard(): void {
  consola.box("Typia Setup Wizard");
}
