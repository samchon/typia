import typia from "typia";

import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export interface TypeTagTuple {
  tuple: [
    string & typia.tags.MinLength<3> & typia.tags.MaxLength<7>,
    number & typia.tags.Minimum<3> & typia.tags.Maximum<7>,
    Array<string & typia.tags.MinLength<1> & typia.tags.MaxLength<2>> &
      typia.tags.MinItems<3> &
      typia.tags.MaxItems<7>,
    Array<number & typia.tags.Minimum<1> & typia.tags.Maximum<2>> &
      typia.tags.MinItems<3> &
      typia.tags.MaxItems<7>,
  ];
}
export namespace TypeTagTuple {
  export function generate(): TypeTagTuple {
    return {
      tuple: ["123", 3, ["1", "12", "1"], [1, 2, 1, 2, 1]],
    };
  }

  export const SPOILERS: Spoiler<TypeTagTuple>[] = [
    (input) => {
      input.tuple[0] = "12";
      return ["$input.tuple[0]"];
    },
    (input) => {
      input.tuple[0] = "12345678";
      return ["$input.tuple[0]"];
    },
    (input) => {
      input.tuple[1] = 2;
      return ["$input.tuple[1]"];
    },
    (input) => {
      input.tuple[1] = 8;
      return ["$input.tuple[1]"];
    },
    (input) => {
      input.tuple[2][0] = "";
      return ["$input.tuple[2][0]"];
    },
    (input) => {
      input.tuple[2][0] = "123";
      return ["$input.tuple[2][0]"];
    },
    (input) => {
      input.tuple[2] = TestRandomGenerator.array(() => "123", 0);
      return ["$input.tuple[2]"];
    },
    (input) => {
      input.tuple[2] = TestRandomGenerator.array(() => "123", 3);
      return ["$input.tuple[2][0]", "$input.tuple[2][1]", "$input.tuple[2][2]"];
    },
    (input) => {
      input.tuple[3][0] = 3;
      return ["$input.tuple[3][0]"];
    },
    (input) => {
      input.tuple[3] = TestRandomGenerator.array(() => 2, 2);
      return ["$input.tuple[3]"];
    },
    (input) => {
      input.tuple[3] = TestRandomGenerator.array(() => 8, 8);
      return ["$input.tuple[3]"];
    },
  ];

  export const BINARABLE = false;
}
