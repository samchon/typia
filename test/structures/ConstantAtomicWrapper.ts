export type ConstantAtomicWrapper = [
    ConstantAtomicWrapper.IPointer<boolean>,
    ConstantAtomicWrapper.IPointer<number>,
    ConstantAtomicWrapper.IPointer<string>,
];
export namespace ConstantAtomicWrapper {
    export interface IPointer<T> {
        value: T;
    }
    export function generate(): ConstantAtomicWrapper {
        return [{ value: false }, { value: 1 }, { value: "two" }];
    }
}
