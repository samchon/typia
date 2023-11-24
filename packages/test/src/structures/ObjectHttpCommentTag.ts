import { ArrayUtil } from "typia/lib/utils/ArrayUtil";

import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export interface ObjectHttpCommentTag {
  /**
   * @type int
   */
  int: number;

  /**
   * @type uint64
   */
  uint64: bigint;

  /**
   * @format uuid
   */
  uuid: string;

  /**
   * @minItems 10
   * @maxItems 100
   */
  items: number[];
}
export namespace ObjectHttpCommentTag {
  export const HEADERS = true;
  export const QUERY = true;
  export const JSONABLE = false;

  export function generate(): ObjectHttpCommentTag {
    return {
      int: TestRandomGenerator.integer(0, 100),
      uint64: TestRandomGenerator.bigint(0n, 20_000n),
      uuid: TestRandomGenerator.uuid(),
      items: ArrayUtil.repeat(25, () => TestRandomGenerator.number(3, 7)),
    };
  }

  export const SPOILERS: Spoiler<ObjectHttpCommentTag>[] = [
    (input) => {
      input.int = 3.141592;
      return ["$input.int"];
    },
    (input) => {
      input.uint64 = -1n;
      return ["$input.uint64"];
    },
    (input) => {
      input.uuid = "not-uuid";
      return ["$input.uuid"];
    },
    (input) => {
      input.items[10] = "something" as any;
      return ["$input.items[10]"];
    },
    (input) => {
      input.items = ArrayUtil.repeat(9, () => TestRandomGenerator.number(3, 7));
      return ["$input.items"];
    },
    (input) => {
      input.items = ArrayUtil.repeat(101, () =>
        TestRandomGenerator.integer(3, 7),
      );
      return ["$input.items"];
    },
  ];
}
