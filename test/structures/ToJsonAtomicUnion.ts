export type IObjectToJsonAtomicUnion = IObjectToJsonAtomicUnion.IToJson[];
export namespace IObjectToJsonAtomicUnion {
    export interface IToJson {
        toJSON(): null | boolean | number | string;
    }

    export function generate(): IObjectToJsonAtomicUnion {
        return [null, false, true, 1, "string"].map((value) => ({
            toJSON: () => value,
        }));
    }
}
