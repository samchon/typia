export interface ToJsonNull {
    toJSON: () => null;
}
export namespace ToJsonNull {
    export const PRIMITIVE = false;

    export function generate(): ToJsonNull {
        return {
            toJSON: () => null,
        };
    }
}
