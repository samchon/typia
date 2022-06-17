export interface ToJsonNull {
    toJSON(): null;
}
export namespace ToJsonNull {
    export function generate(): ToJsonNull {
        return {
            toJSON: () => null,
        };
    }
}
