import { Spoiler } from "../helpers/Spoiler";

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
  export const SPOILERS: Spoiler<ConstantAtomicWrapper>[] = [
    (input) => {
      input[0].value = null!;
      return ["$input[0].value"];
    },
    (input) => {
      input[1].value = (() => 3) as any;
      return ["$input[1].value"];
    },
    (input) => {
      input[2].value = { value: "two" } as any;
      return ["$input[2].value"];
    },
  ];
  export const BINARABLE = false;
}
