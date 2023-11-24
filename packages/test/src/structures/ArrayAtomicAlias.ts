import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type ArrayAtomicAlias = [
  ArrayAtomicAlias.Alias<boolean>,
  ArrayAtomicAlias.Alias<number>,
  ArrayAtomicAlias.Alias<string>,
];
export namespace ArrayAtomicAlias {
  export type Alias<T> = T[];
  export function generate(): ArrayAtomicAlias {
    return [
      TestRandomGenerator.array(TestRandomGenerator.boolean),
      TestRandomGenerator.array(TestRandomGenerator.integer),
      TestRandomGenerator.array(TestRandomGenerator.string),
    ];
  }

  export const SPOILERS: Spoiler<ArrayAtomicAlias>[] = [
    (input) => {
      input[0]![0]! = "boolean" as any;
      return ["$input[0][0]"];
    },
    (input) => {
      input[1]![0]! = "number" as any;
      return ["$input[1][0]"];
    },
    (input) => {
      input[2]![0]! = false as any;
      return ["$input[2][0]"];
    },
  ];

  export const BINARABLE = false;
}
