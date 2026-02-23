import typia from "typia";

import { Spoiler } from "../utils/Spoiler";

export interface TypeTagBigInt {
  value: bigint;
  ranged: bigint & typia.tags.Minimum<0n> & typia.tags.Maximum<100n>;
  minimum: bigint & typia.tags.Minimum<0n>;
  maximum: bigint & typia.tags.Maximum<100n>;
  multipleOf: bigint & typia.tags.MultipleOf<3n>;
}
export namespace TypeTagBigInt {
  export const JSONABLE = false;
  export const PRIMITIVE = false;

  export function generate(): TypeTagBigInt {
    return {
      value: 3n,
      ranged: 3n,
      minimum: 3n,
      maximum: 3n,
      multipleOf: 3n,
    };
  }

  export const SPOILERS: Spoiler<TypeTagBigInt>[] = [
    (input) => {
      input.value = 3 as any;
      return ["$input.value"];
    },
    (input) => {
      input.ranged = -1n;
      return ["$input.ranged"];
    },
    (input) => {
      input.minimum = -1n;
      return ["$input.minimum"];
    },
    (input) => {
      input.maximum = 101n;
      return ["$input.maximum"];
    },
    (input) => {
      input.multipleOf = 4n;
      return ["$input.multipleOf"];
    },
  ];
}
