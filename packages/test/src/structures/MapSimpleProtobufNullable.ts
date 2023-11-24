import typia from "typia";

import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export interface MapSimpleProtobufNullable {
  boolean: null | Map<string, boolean>;
  int32: null | Map<string, number & typia.tags.Type<"int32">>;
  bigint: null | Map<string, bigint>;
  double: null | Map<string, number>;
  string: null | Map<string, string & typia.tags.MinLength<1>>;
  bytes: null | Map<string, Uint8Array>;
  objects: null | Map<string, MapSimpleProtobufNullable>;
}
export namespace MapSimpleProtobufNullable {
  export const ADDABLE = false;
  export const JSONABLE = false;
  export const PRIMITIVE = false;

  export function generate(level: number = 0): MapSimpleProtobufNullable {
    return {
      boolean: new Map(
        TestRandomGenerator.array(
          () => [TestRandomGenerator.string(10), TestRandomGenerator.boolean()],
          4,
        ),
      ),
      int32: new Map(
        TestRandomGenerator.array(
          () => [TestRandomGenerator.string(10), TestRandomGenerator.integer()],
          4,
        ),
      ),
      bigint: new Map(
        TestRandomGenerator.array(
          () => [TestRandomGenerator.string(10), TestRandomGenerator.bigint()],
          4,
        ),
      ),
      double: new Map(
        TestRandomGenerator.array(
          () => [TestRandomGenerator.string(10), TestRandomGenerator.number()],
          4,
        ),
      ),
      string: new Map(
        TestRandomGenerator.array(
          () => [
            TestRandomGenerator.string(10),
            TestRandomGenerator.string(10),
          ],
          4,
        ),
      ),
      bytes: new Map(
        TestRandomGenerator.array(
          () => [
            TestRandomGenerator.string(10),
            new Uint8Array([1, 2, 1, 2, 1, 2]),
          ],
          4,
        ),
      ),
      objects:
        level < 2
          ? new Map(
              TestRandomGenerator.array(
                () => [TestRandomGenerator.string(10), generate(level + 1)],
                4,
              ),
            )
          : new Map([]),
    };
  }

  export const SPOILERS: Spoiler<MapSimpleProtobufNullable>[] = [
    (input) => {
      input.boolean?.set("wrong", 0 as any);
      return ["$input.boolean[4][1]"];
    },
    (input) => {
      input.int32?.set("wrong", 3.141592);
      return ["$input.int32[4][1]"];
    },
    (input) => {
      input.bigint?.set("wrong", 3 as any);
      return ["$input.bigint[4][1]"];
    },
    (input) => {
      input.double?.set("wrong", "3.14" as any);
      return ["$input.double[4][1]"];
    },
    (input) => {
      input.string?.set("wrong", 3 as any);
      return ["$input.string[4][1]"];
    },
    (input) => {
      input.bytes = undefined!;
      return ["$input.bytes"];
    },
    (input) => {
      input.objects = {} as any;
      return ["$input.objects"];
    },
    (input) => {
      input.objects = [] as any;
      return ["$input.objects"];
    },
  ];
}
