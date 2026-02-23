import { consola } from 'consola';
export function log(type, ...args) {
    consola[type](`[unplugin-typia]`, ...args);
}
export function isBun() {
    return globalThis.Bun != null;
}
