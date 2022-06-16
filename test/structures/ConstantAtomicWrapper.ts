import { IPointer } from "../../src/structures/IPointer";

export type ConstantAtomicWrapper = [
    IPointer<boolean>,
    IPointer<number>,
    IPointer<string>,
];
export namespace ConstantAtomicWrapper {
    export function generate(): ConstantAtomicWrapper {
        return [{ value: false }, { value: 1 }, { value: "two" }];
    }
}
