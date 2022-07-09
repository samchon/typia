export type ObjectUnionNonPredictable =
    ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>[];
export namespace ObjectUnionNonPredictable {
    export type IUnion =
        | IWrapper<boolean>
        | IWrapper<number>
        | IWrapper<string>;
    export interface IWrapper<T> {
        value: IPointer<T>;
    }
    export interface IPointer<T> {
        value: T;
    }

    export function generate(): ObjectUnionNonPredictable {
        return [
            { value: { value: { value: { value: false } } } },
            { value: { value: { value: { value: true } } } },
            { value: { value: { value: { value: 2 } } } },
            { value: { value: { value: { value: "three" } } } },
        ];
    }
}
