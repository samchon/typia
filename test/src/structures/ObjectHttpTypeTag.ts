import { tags } from "typia";
import { ArrayUtil } from "typia/lib/utils/ArrayUtil";

import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export interface ObjectHttpTypeTag {
  int32: number & tags.Type<"int32">;
  uint64: bigint & tags.Type<"uint64">;
  uuid: string & tags.Format<"uuid">;

  range: Array<number & tags.Minimum<3> & tags.Maximum<7>> &
    tags.MinItems<10> &
    tags.MaxItems<100>;
  length: Array<string & tags.MinLength<3> & tags.MaxLength<7>> &
    tags.MinItems<10> &
    tags.MaxItems<100>;
}
export namespace ObjectHttpTypeTag {
  export const HEADERS = true;
  export const QUERY = true;
  export const JSONABLE = false;

  export function generate(): ObjectHttpTypeTag {
    return {
      int32: TestRandomGenerator.integer(0, 100),
      uint64: TestRandomGenerator.bigint(0n, 20_000n),
      uuid: TestRandomGenerator.uuid(),
      range: ArrayUtil.repeat(25, () => TestRandomGenerator.number(3, 7)),
      length: ArrayUtil.repeat(25, () =>
        TestRandomGenerator.string(TestRandomGenerator.integer(3, 7)),
      ),
    };
  }

  export const SPOILERS: Spoiler<ObjectHttpTypeTag>[] = [
    (input) => {
      input.int32 = 3.141592 as any;
      return ["$input.int32"];
    },
    (input) => {
      input.uint64 = -1n as any;
      return ["$input.uint64"];
    },
    (input) => {
      input.uuid = "not-uuid" as any;
      return ["$input.uuid"];
    },
    (input) => {
      input.range[10] = 2 as any;
      return ["$input.range[10]"];
    },
    (input) => {
      input.range = ArrayUtil.repeat(9, () => TestRandomGenerator.number(3, 7));
      return ["$input.range"];
    },
    (input) => {
      input.range = ArrayUtil.repeat(101, () =>
        TestRandomGenerator.number(3, 7),
      );
      return ["$input.range"];
    },
    (input) => {
      input.length[10] = "ab" as any;
      return ["$input.length[10]"];
    },
    (input) => {
      input.length = ArrayUtil.repeat(9, () =>
        TestRandomGenerator.string(TestRandomGenerator.integer(3, 7)),
      );
      return ["$input.length"];
    },
    (input) => {
      input.length = ArrayUtil.repeat(101, () =>
        TestRandomGenerator.string(TestRandomGenerator.integer(3, 7)),
      );
      return ["$input.length"];
    },
  ];
}
