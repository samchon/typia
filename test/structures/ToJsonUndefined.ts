export interface ToJsonUndefined {
    toJSON(): undefined;
}
export namespace ToJsonUndefined {
    export const PRIMITIVE = false;

    export const JSONABLE = false;

    export function generate(): ToJsonUndefined {
        return new ToJson();
    }

    class ToJson {
        toJSON(): undefined {
            return undefined;
        }
    }
}
