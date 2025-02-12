/**
 * Comapre in deep A and B
 */
export function equals<T extends object>(a: T, b: T): boolean;
/**
 * @internal
 */
export function equals<T extends object>(_a: T, _b: T): boolean {
  halt("equals");
}

/**
 * @internal
 */
function halt(name: string): never {
  throw new Error(
    `Error on typia.compare.${name}(): no transform has been configured. Read and follow https://typia.io/docs/setup please.`,
  );
}
