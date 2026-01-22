import typia from "typia";

import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export interface ArraySimpleProtobufOptional {
  boolean?: boolean[];
  int32?: Array<number & typia.tags.Type<"int32">>;
  uint32?: Array<number & typia.tags.Type<"uint32">>;
  int64?: Array<bigint & typia.tags.Type<"int64">>;
  uint64?: Array<bigint & typia.tags.Type<"uint64">>;
  float?: Array<number & typia.tags.Type<"float">>;
  double?: Array<number & typia.tags.Type<"double">>;
  string?: string[];
  bytes?: Uint8Array[];
  object?: ArraySimpleProtobufOptional[];
}
export namespace ArraySimpleProtobufOptional {
  export const ADDABLE = false;
  export const JSONABLE = false;

  export function generate(_level: number = 0): ArraySimpleProtobufOptional {
    return {
      boolean: TestRandomGenerator.array(() => Math.random() < 0.5, 4),
      int32: TestRandomGenerator.array(
        () => Math.floor(Math.random() * 200) - 100,
        4,
      ),
      uint32: TestRandomGenerator.array(
        () => Math.floor(Math.random() * 100),
        4,
      ),
      int64: TestRandomGenerator.array(
        () =>
          BigInt(Math.floor(Math.random() * 900_000_000_000) - 450_000_000_000),
        4,
      ),
      uint64: TestRandomGenerator.array(
        () => BigInt(Math.floor(Math.random() * 900_000_000_000)),
        4,
      ),
      float: TestRandomGenerator.array(TestRandomGenerator.number, 4),
      double: TestRandomGenerator.array(TestRandomGenerator.number, 4),
      string: TestRandomGenerator.array(
        () => TestRandomGenerator.string(10),
        4,
      ),
      bytes: TestRandomGenerator.array(
        () => new Uint8Array([1, 2, 1, 2, 1, 2]),
        4,
      ),
      // objects:
      //     _level < 2
      //         ? TestRandomGenerator.array(() => generate(_level + 1), 4)
      //         : [],
      object: [],
    };
  }

  export const SPOILERS: Spoiler<ArraySimpleProtobufOptional>[] = [
    (input) => {
      input.boolean![3] = 0 as any;
      return ["$input.boolean[3]"];
    },
    (input) => {
      input.int32![2] = 3.141592;
      return ["$input.int32[2]"];
    },
    (input) => {
      input.uint32![1] = -1;
      return ["$input.uint32[1]"];
    },
    (input) => {
      input.int64![0] = 3 as any;
      return ["$input.int64[0]"];
    },
    (input) => {
      input.uint64![3] = BigInt(-1);
      return ["$input.uint64[3]"];
    },
    (input) => {
      input.float![2] = "3.14" as any;
      return ["$input.float[2]"];
    },
    (input) => {
      input.double![1] = "3.14" as any;
      return ["$input.double[1]"];
    },
    (input) => {
      input.string = null!;
      return ["$input.string"];
    },
  ];
}
