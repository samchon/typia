export type ToJsonAtomicUnion = ToJsonAtomicUnion.IToJson[];
export namespace ToJsonAtomicUnion {
    export const PRIMITIVE = false;

    export interface IToJson {
        toJSON: () => null | boolean | number | string;
    }

    export function generate(): ToJsonAtomicUnion {
        return [null, false, true, 1, "string"].map((value) => ({
            toJSON: () => value,
        }));
    }
}
