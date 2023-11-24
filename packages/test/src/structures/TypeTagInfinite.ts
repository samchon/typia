import typia from "typia";

import { Spoiler } from "../helpers/Spoiler";

export interface TypeTagInfinite {
  value: number;
  ranged: number & typia.tags.Minimum<0> & typia.tags.Maximum<100>;
  minimum: number & typia.tags.Minimum<0>;
  maximum: number & typia.tags.Maximum<100>;
  multipleOf: number & typia.tags.MultipleOf<3>;
  typed: number & typia.tags.Type<"int32">;
}
export namespace TypeTagInfinite {
  export const JSONABLE = false;

  export function generate(): TypeTagInfinite {
    return {
      value: 3,
      ranged: 3,
      minimum: 3,
      maximum: 3,
      multipleOf: 3,
      typed: 3,
    };
  }

  export const SPOILERS: Spoiler<TypeTagInfinite>[] = [
    (input) => {
      input.value = -Infinity;
      return ["$input.value"];
    },
    (input) => {
      input.ranged = Infinity;
      return ["$input.ranged"];
    },
    (input) => {
      input.minimum = Infinity;
      return ["$input.minimum"];
    },
    (input) => {
      input.maximum = -Infinity;
      return ["$input.maximum"];
    },
    (input) => {
      input.multipleOf = -1.0 / 0.0;
      return ["$input.multipleOf"];
    },
    (input) => {
      input.typed = 1.0 / 0.0;
      return ["$input.typed"];
    },
  ];
}
