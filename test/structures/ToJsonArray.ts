export type ToJsonArray = [
    ToJsonArray.IArray<boolean>,
    ToJsonArray.IArray<number>,
    ToJsonArray.IArray<string>,
    ToJsonArray.IArray<ToJsonArray.IObject>,
];
export namespace ToJsonArray {
    export const PRIMITIVE = false;

    export interface IArray<T> {
        toJSON: () => T[];
    }
    export interface IObject {
        id: string;
    }

    export function generate(): ToJsonArray {
        return [
            { toJSON: () => [false, true] },
            { toJSON: () => [0, 1] },
            { toJSON: () => ["zero", "one"] },
            {
                toJSON: () => [{ id: "0" }, { id: "1" }],
            },
        ];
    }
}
