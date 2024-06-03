import { v4 } from "uuid";

import { IPointer } from "../helpers/IPointer";
import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type CommentTagArray = IPointer<CommentTagArray.Type[]>;
export namespace CommentTagArray {
  export interface Type {
    /**
     * @items 3
     */
    items: string[];

    /**
     * @minItems 3
     */
    minItems: number[];

    /**
     * @minItems 3
     * @maxItems 7
     */
    both: string[];

    /**
     * @minItems 10
     * @maxItems 10
     */
    equal: number[];

    /**
     * @uniqueItems
     */
    unique: string[];
  }

  // prettier-ignore
  export function generate(): CommentTagArray {
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

  export const SPOILERS: Spoiler<CommentTagArray>[] = [
    (input) => {
      input.value[1]!.items = TestRandomGenerator.array(() => v4(), 2);
      return ["$input.value[1].items"];
    },
    (input) => {
      input.value[2]!.items = TestRandomGenerator.array(() => v4(), 7);
      return ["$input.value[2].items"];
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
      input.value[2]!.unique = ["one", "one", "two"];
      return ["$input.value[2].unique"];
    },
  ];
}
