import { Spoiler } from "../helpers/Spoiler";

export type ConstantIntersection = [
  ConstantIntersection.Wrapper<false>,
  ConstantIntersection.Wrapper<1>,
  ConstantIntersection.Wrapper<"two">,
];
export namespace ConstantIntersection {
  export type Wrapper<T> = T & { __meta?: object };

  export function generate(): ConstantIntersection {
    return [false, 1, "two"];
  }

  export const SPOILERS: Spoiler<ConstantIntersection>[] = [
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
    ...new Array(3).fill(0).map((_, i) => (input: ConstantIntersection) => {
      input[i] = { __meta: {} } as any;
      return [`$input[${i}]`];
    }),
  ];
  export const BINARABLE = false;
}
