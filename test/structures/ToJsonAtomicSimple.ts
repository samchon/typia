export type ToJsonAtomicSimple = [
    ToJsonAtomicSimple.IToJson<boolean>,
    ToJsonAtomicSimple.IToJson<number>,
    ToJsonAtomicSimple.IToJson<string>,
];
export namespace ToJsonAtomicSimple {
    export const PRIMITIVE = false;

    export interface IToJson<T> {
        toJSON: () => T;
    }

    export function generate(): ToJsonAtomicSimple {
        return [
            { toJSON: () => false },
            { toJSON: () => 1 },
            { toJSON: () => "two" },
        ];
    }
}
