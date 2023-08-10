export interface ToJsonUndefined {
    toJSON(): undefined;
}
export namespace ToJsonUndefined {
    export const BINARABLE = false;
    export const JSONABLE = false;
    export const PRIMITIVE = false;

    export function generate(): ToJsonUndefined {
        return new ToJson();
    }

    class ToJson {
        toJSON(): undefined {
            return undefined;
        }
    }
}
