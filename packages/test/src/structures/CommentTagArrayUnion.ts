import { v4 } from "uuid";

import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type CommentTagArrayUnion = CommentTagArrayUnion.Type[];
export namespace CommentTagArrayUnion {
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
     * @maxItems 7
     */
    maxItems: Array<string | number>;

    /**
     * @minItems 3
     * @maxItems 7
     */
    both: string[];
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

  export const SPOILERS: Spoiler<CommentTagArrayUnion>[] = [
    (input) => {
      input[1]!.items = TestRandomGenerator.array(() => v4(), 2);
      return ["$input[1].items"];
    },
    (input) => {
      input[2]!.items = TestRandomGenerator.array(() => v4(), 7);
      return ["$input[2].items"];
    },
    (input) => {
      input[4]!.minItems = TestRandomGenerator.array(() => 3, 2);
      return ["$input[4].minItems"];
    },
    (input) => {
      input[7]!.maxItems = TestRandomGenerator.array(() => 1, 8);
      return ["$input[7].maxItems"];
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
