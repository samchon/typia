import typia from "typia";
import { v4 } from "uuid";

import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type TypeTagArrayUnion = TypeTagArrayUnion.Type[];
export namespace TypeTagArrayUnion {
  export interface Type {
    items: Array<string & typia.tags.Format<"uuid">> &
      typia.tags.MinItems<3> &
      typia.tags.MaxItems<3>;
    minItems: Array<number & typia.tags.Minimum<3>> & typia.tags.MinItems<3>;
    maxItems: Array<
      (string & typia.tags.MaxLength<7>) | (number & typia.tags.Maximum<7>)
    > &
      typia.tags.MaxItems<7>;
    both: Array<string & typia.tags.Format<"uuid">> &
      typia.tags.MinItems<3> &
      typia.tags.MaxItems<7>;
  }

  // prettier-ignore
  export function generate(): Type[] {
        const output: Type[] = [];
        for (const minItems of [3, 10])
        for (const maxItems of [1, 7])
        for (const both of [3, 7]) {
            const string = () => TestRandomGenerator.string(maxItems);
            const number = () => maxItems;
            for (const closure of [string, number])
                output.push({
                    items: TestRandomGenerator.array(() => v4(), 3),
                    minItems: TestRandomGenerator.array(() => minItems, minItems),
                    maxItems: TestRandomGenerator.array(() => closure(), maxItems),
                    both: TestRandomGenerator.array(() => v4(), both),
                });
        }
        return output;
    }

  export const SPOILERS: Spoiler<TypeTagArrayUnion>[] = [
    (input) => {
      input[0]!.items = ["0", "1", "2"];
      return ["$input[0].items[0]", "$input[0].items[1]", "$input[0].items[2]"];
    },
    (input) => {
      input[1]!.items = TestRandomGenerator.array(() => v4(), 2);
      return ["$input[1].items"];
    },
    (input) => {
      input[2]!.items = TestRandomGenerator.array(() => v4(), 7);
      return ["$input[2].items"];
    },
    (input) => {
      input[3]!.minItems = [0, 1, 2];
      return [
        "$input[3].minItems[0]",
        "$input[3].minItems[1]",
        "$input[3].minItems[2]",
      ];
    },
    (input) => {
      input[4]!.minItems = TestRandomGenerator.array(() => 3, 2);
      return ["$input[4].minItems"];
    },
    (input) => {
      input[5]!.maxItems = [8];
      return ["$input[5].maxItems[0]"];
    },
    (input) => {
      input[6]!.maxItems = ["12345678"];
      return ["$input[6].maxItems[0]"];
    },
    (input) => {
      input[7]!.maxItems = TestRandomGenerator.array(() => 1, 8);
      return ["$input[7].maxItems"];
    },
    (input) => {
      input[8]!.both = ["0", "1", "2"];
      return ["$input[8].both[0]", "$input[8].both[1]", "$input[8].both[2]"];
    },
    (input) => {
      input[9]!.both = TestRandomGenerator.array(() => v4(), 2);
      return ["$input[9].both"];
    },
    (input) => {
      input[10]!.both = TestRandomGenerator.array(() => v4(), 8);
      return ["$input[10].both"];
    },
  ];

  export const BINARABLE = false;
}
