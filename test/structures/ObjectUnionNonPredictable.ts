export type ObjectUnionNonPredictable = ObjectUnionNonPredictable.IUnion[];
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
            { value: { value: false } },
            { value: { value: true } },
            { value: { value: 2 } },
            { value: { value: "three" } },
        ];
    }
}
