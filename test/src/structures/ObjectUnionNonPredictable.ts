import { IPointer } from "../helpers/IPointer";
import { Spoiler } from "../helpers/Spoiler";

export type ObjectUnionNonPredictable = IPointer<
  ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>[]
>;
export namespace ObjectUnionNonPredictable {
  export type IUnion = IWrapper<boolean> | IWrapper<number> | IWrapper<string>;
  export interface IWrapper<T> {
    value: IPointer<T>;
  }

  export function generate(): ObjectUnionNonPredictable {
    return {
      value: [
        { value: { value: { value: { value: false } } } },
        { value: { value: { value: { value: true } } } },
        { value: { value: { value: { value: 2 } } } },
        { value: { value: { value: { value: "three" } } } },
      ],
    };
  }

  export const SPOILERS: Spoiler<ObjectUnionNonPredictable>[] = [
    (input) => {
      input.value[0]!.value.value.value.value = null!;
      return ["$input.value[0].value.value"];
    },
    (input) => {
      input.value[1]!.value.value.value.value = undefined!;
      return ["$input.value[1].value.value"];
    },
    (input) => {
      input.value[2]!.value.value.value.value = [] as any;
      return ["$input.value[2].value.value"];
    },
    (input) => {
      input.value[3]!.value.value.value.value = {} as any;
      return ["$input.value[3].value.value"];
    },
  ];
}
