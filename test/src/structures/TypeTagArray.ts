import typia from "typia";
import { v4 } from "uuid";

import { IPointer } from "../helpers/IPointer";
import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type TypeTagArray = IPointer<TypeTagArray.Type[]>;
export namespace TypeTagArray {
  export interface Type {
    items: Array<string & typia.tags.Format<"uuid">> &
      typia.tags.MinItems<3> &
      typia.tags.MaxItems<3>;
    minItems: Array<number & typia.tags.Minimum<3>> & typia.tags.MinItems<3>;
    both: Array<string & typia.tags.Format<"uuid">> &
      typia.tags.MinItems<3> &
      typia.tags.MaxItems<7>;
    equal: Array<number & typia.tags.Minimum<10> & typia.tags.Maximum<10>> &
      typia.tags.MinItems<10> &
      typia.tags.MaxItems<10>;
    unique: Array<string> & typia.tags.UniqueItems;
  }

  // prettier-ignore
  export function generate(): TypeTagArray {
        const output: Type[] = [];
        for (const minItems of [3, 10])
        for (const both of [3, 7]) {
            output.push({
                items: TestRandomGenerator.array(() => v4(), 3),
                minItems: TestRandomGenerator.array(() => minItems, minItems),
                both: TestRandomGenerator.array(() => v4(), both),
                equal: TestRandomGenerator.array(() => 10, 10),
                unique: ["one", "two", "three", "four"],
            });
        }
        return { value: output };
    }

  export const SPOILERS: Spoiler<TypeTagArray>[] = [
    (input) => {
      input.value[0]!.items = ["0", "1", "2"];
      return [
        "$input.value[0].items[0]",
        "$input.value[0].items[1]",
        "$input.value[0].items[2]",
      ];
    },
    (input) => {
      input.value[1]!.items = TestRandomGenerator.array(() => v4(), 2);
      return ["$input.value[1].items"];
    },
    (input) => {
      input.value[2]!.items = TestRandomGenerator.array(() => v4(), 7);
      return ["$input.value[2].items"];
    },
    (input) => {
      input.value[3]!.minItems = [0, 1, 2];
      return [
        "$input.value[3].minItems[0]",
        "$input.value[3].minItems[1]",
        "$input.value[3].minItems[2]",
      ];
    },
    (input) => {
      input.value[0]!.minItems = TestRandomGenerator.array(() => 3, 2);
      return ["$input.value[0].minItems"];
    },
    (input) => {
      input.value[1]!.both = ["0", "1", "2"];
      return [
        "$input.value[1].both[0]",
        "$input.value[1].both[1]",
        "$input.value[1].both[2]",
      ];
    },
    (input) => {
      input.value[2]!.both = TestRandomGenerator.array(() => v4(), 2);
      return ["$input.value[2].both"];
    },
    (input) => {
      input.value[3]!.both = TestRandomGenerator.array(() => v4(), 8);
      return ["$input.value[3].both"];
    },
    (input) => {
      input.value[0]!.equal = TestRandomGenerator.array(() => 10, 9);
      return ["$input.value[0].equal"];
    },
    (input) => {
      input.value[1]!.equal = [...TestRandomGenerator.array(() => 10, 9), 9];
      return ["$input.value[1].equal[9]"];
    },
    (input) => {
      input.value[2]!.unique = ["one", "one", "two"];
      return ["$input.value[2].unique"];
    },
  ];
}
