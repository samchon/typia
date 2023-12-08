import typia from "typia";

import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type TypeTagObjectUnion = TypeTagObjectUnion.Type[];
export namespace TypeTagObjectUnion {
  export type Type = Numeric | Literal;
  export interface Numeric {
    value: number & typia.tags.Minimum<3>;
  }
  export interface Literal {
    value: string & typia.tags.MinLength<3> & typia.tags.MaxLength<7>;
  }

  export function generate(): TypeTagObjectUnion {
    const output: TypeTagObjectUnion = [];
    for (const value of [3, 7])
      output.push({ value: TestRandomGenerator.string(value) });
    output.push({ value: 3 });
    return output;
  }

  export const SPOILERS: Spoiler<TypeTagObjectUnion>[] = [
    (input) => {
      input[0]!.value = "12";
      return ["$input[0].value"];
    },
    (input) => {
      input[1]!.value = "12345678";
      return ["$input[1].value"];
    },
    (input) => {
      input[2]!.value = 2;
      return ["$input[2].value"];
    },
  ];
  export const BINARABLE = false;
}
