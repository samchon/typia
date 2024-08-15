import {logger} from './logger'

/**
* throw an error message and exit the process
*/
export function bail(message: string): never {
  logger.error(message);
  process.exit(1);
}

export function wizard(): void {
  logger.box("Typia Setup Wizard");
}
