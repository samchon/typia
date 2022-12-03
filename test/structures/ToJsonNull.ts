export interface ToJsonNull {
    toJSON: () => null;
}
export namespace ToJsonNull {
    export const BINARABLE = false;

    export function generate(): ToJsonNull {
        return {
            toJSON: () => null,
        };
    }
}
