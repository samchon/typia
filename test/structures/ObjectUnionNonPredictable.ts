import { Spoiler } from "../internal/Spoiler";

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

    export const SPOILERS: Spoiler<ObjectUnionNonPredictable>[] = [
        (input) => {
            input[0].value.value.value.value = null!;
            return ["$input[0].value.value"];
        },
        (input) => {
            input[1].value.value.value.value = undefined!;
            return ["$input[1].value.value"];
        },
        (input) => {
            input[2].value.value.value.value = [] as any;
            return ["$input[2].value.value"];
        },
        (input) => {
            input[3].value.value.value.value = {} as any;
            return ["$input[3].value.value"];
        },
    ];
}
