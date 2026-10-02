import { Spoiler } from "../utils/Spoiler";

/** Supplies primitive intersections with optional structural metadata. */
export type AtomicIntersection = [
  AtomicIntersection.Wrapper<boolean>,
  AtomicIntersection.Wrapper<number>,
  AtomicIntersection.Wrapper<string>,
];
export namespace AtomicIntersection {
  /** Requires the primitive type while leaving structural metadata optional. */
  export type Wrapper<T> = T & { __meta?: object };

  /** Creates the authored primitive positive tuple without metadata members. */
  export function generate(): AtomicIntersection {
    return [false, 1, "two"];
  }

  export const SPOILERS: Spoiler<AtomicIntersection>[] = [
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
    ...new Array(3).fill(0).map((_, i) => (input: AtomicIntersection) => {
      input[i] = { __meta: {} } as any;
      return [`$input[${i}]`];
    }),
  ];
  export const BINARABLE = false;
}
