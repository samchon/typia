export type IObjectToJsonAtomicUnion = IObjectToJsonAtomicUnion.IToJson[];
export namespace IObjectToJsonAtomicUnion {
    export interface IToJson {
        toJSON(): undefined | null | boolean | number | string;
    }

    export function generate(): IObjectToJsonAtomicUnion {
        return [undefined, null, false, true, 1, "string"].map((value) => ({
            toJSON: () => value,
        }));
    }
}
