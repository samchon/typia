export function message(): never;
export function message<T>(): string;

/**
 * @internal
 */
export function message(): never {
    halt("message");
}

/**
 * @internal
 */
function halt(name: string): never {
    throw new Error(
        `Error on typia.protobuf.${name}(): no transform has been configured. Read and follow https://typia.io/docs/setup please.`,
    );
}
