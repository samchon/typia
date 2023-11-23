import typia from "typia";
import { v4 } from "uuid";

import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export interface TypeTagMatrix {
  matrix: Array<
    Array<string & typia.tags.Format<"uuid">> &
      typia.tags.MinItems<4> &
      typia.tags.MaxItems<4>
  > &
    typia.tags.MinItems<3> &
    typia.tags.MaxItems<3>;
}
export namespace TypeTagMatrix {
  export function generate(): TypeTagMatrix {
    return {
      matrix: TestRandomGenerator.array(
        () => TestRandomGenerator.array(() => v4(), 4),
        3,
      ),
    };
  }
  export const SPOILERS: Spoiler<TypeTagMatrix>[] = [
    (input) => {
      input.matrix[0] = TestRandomGenerator.array(() => v4(), 2);
      return ["$input.matrix[0]"];
    },
    (input) => {
      input.matrix.splice(0, 1);
      return ["$input.matrix"];
    },
    (input) => {
      input.matrix[0]![0] = "invalid uuid";
      return ["$input.matrix[0][0]"];
    },
  ];

  export const BINARABLE = false;
}
