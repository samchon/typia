import { ILlmApplication, ILlmSchema } from "@samchon/openapi";

export function application(): never;
export function application<T extends object>(): ILlmApplication;

/**
 * @internal
 */
export function application(): never {
  halt("application");
}

export function schema(): never;
export function schema<T>(): ILlmSchema;

/**
 * @internal
 */
export function schema(): never {
  halt("schema");
}

/**
 * @internal
 */
function halt(name: string): never {
  throw new Error(
    `Error on typia.llm.${name}(): no transform has been configured. Read and follow https://typia.io/docs/setup please.`,
  );
}
