export interface ToJsonUndefined {
    toJSON(): undefined;
}
export namespace ToJsonUndefined {
    export function generate(): ToJsonUndefined {
        return {
            toJSON: () => undefined,
        };
    }
}
