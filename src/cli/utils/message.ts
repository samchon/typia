import * as Logger from "../utils/logger";

/**
 * throw an error message and exit the process
 */
export function bail(message: string): never {
  Logger.logger.error(message);
  process.exit(1);
}

export function wizard(): void {
  Logger.logger.box("Typia Setup Wizard");
}
