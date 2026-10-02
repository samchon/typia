import { Spoiler } from "../utils/Spoiler";

/** Supplies a primitive tuple through three generic identity substitutions. */
export type AtomicAlias = [
  AtomicAlias.Alias<boolean>,
  AtomicAlias.Alias<number>,
  AtomicAlias.Alias<string>,
];
export namespace AtomicAlias {
  /** Preserves the supplied type as the primitive slot's generic spelling. */
  export type Alias<T> = T;
  /** Creates a fresh authored three-primitive tuple. */
  export function generate(): AtomicAlias {
    return [false, 1, "two"];
  }
  export const SPOILERS: Spoiler<AtomicAlias>[] = [
    (input) => {
      input[0] = 0 as any;
      return ["$input[0]"];
    },
    (input) => {
      input[1] = "one" as any;
      return ["$input[1]"];
    },
    (input) => {
      input[2] = 2 as any;
      return ["$input[2]"];
    },
  ];
  export const BINARABLE = false;
}
