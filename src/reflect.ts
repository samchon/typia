import { Namespace } from "./functional/Namespace";

import { MetadataApplication } from "./schemas/metadata/MetadataApplication";

export function metadata(): never;

export function metadata<Types extends unknown[]>(): MetadataApplication;

/**
 * @internal
 */
export function metadata(): never {
    halt("metadata");
}
Object.assign(metadata, Namespace.reflect.metadata());

/**
 * @internal
 */
function halt(name: string): never {
    throw new Error(
        `Error on typia.reflect.${name}(): no transform has been configured. Read and follow https://typia.io/docs/setup please.`,
    );
}
