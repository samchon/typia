import { Spoiler } from "../utils/Spoiler";
import { TestRandomGenerator } from "../utils/TestRandomGenerator";

/**
 * Supplies a tuple of Boolean, numeric and string arrays through a generic
 * alias.
 */
export type ArrayAtomicAlias = [
  ArrayAtomicAlias.Alias<boolean>,
  ArrayAtomicAlias.Alias<number>,
  ArrayAtomicAlias.Alias<string>,
];
export namespace ArrayAtomicAlias {
  /** Keeps array element meaning through an instantiated generic alias. */
  export type Alias<T> = T[];
  /** Creates independent nonempty arrays for the three primitive positions. */
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
