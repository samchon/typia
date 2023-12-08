import typia from "typia";

import { Spoiler } from "../helpers/Spoiler";

export interface TypeTagNaN {
  value: number;
  ranged: number & typia.tags.Minimum<0> & typia.tags.Maximum<100>;
  minimum: number & typia.tags.Minimum<0>;
  maximum: number & typia.tags.Maximum<100>;
  multipleOf: number & typia.tags.MultipleOf<3>;
  typed: number & typia.tags.Type<"int32">;
}
export namespace TypeTagNaN {
  export const JSONABLE = false;

  export function generate(): TypeTagNaN {
    return {
      value: 3,
      ranged: 3,
      minimum: 3,
      maximum: 3,
      multipleOf: 3,
      typed: 3,
    };
  }

  export const SPOILERS: Spoiler<TypeTagNaN>[] = [
    (input) => {
      input.value = NaN;
      return ["$input.value"];
    },
    (input) => {
      input.ranged = Number("invalid");
      return ["$input.ranged"];
    },
    (input) => {
      input.minimum = Number("minimum");
      return ["$input.minimum"];
    },
    (input) => {
      input.maximum = Number("maximum");
      return ["$input.maximum"];
    },
    (input) => {
      input.multipleOf = Number("multipleOf");
      return ["$input.multipleOf"];
    },
    (input) => {
      input.typed = Number("wrong");
      return ["$input.typed"];
    },
  ];
}
