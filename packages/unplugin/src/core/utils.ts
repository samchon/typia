import { type LogType, consola } from "consola";

export function log(type: LogType, ...args: string[]): void {
  consola[type](`[@typia/unplugin]`, ...args);
}

export function isBun(): boolean {
  return globalThis.Bun != null;
}
