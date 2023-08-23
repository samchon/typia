export interface ToJsonNull {
    toJSON: () => null;
}
export namespace ToJsonNull {
    export const BINARABLE = false;
    export const PRIMITIVE = false;
    export const RESOLVABLE = false;

    export function generate(): ToJsonNull {
        return {
            toJSON: () => null,
        };
    }
}
