import typia from "typia";

import { IPointer } from "../helpers/IPointer";
import { Spoiler } from "../helpers/Spoiler";

export type TypeTagType = IPointer<TypeTagType.Type[]>;
export namespace TypeTagType {
  export interface Type {
    int: number & typia.tags.Type<"int32">;
    uint: number & typia.tags.Type<"uint32">;
    int32: number & typia.tags.Type<"int32">;
    uint32: number & typia.tags.Type<"uint32">;
    int64: number & typia.tags.Type<"int64">;
    uint64: number & typia.tags.Type<"uint64">;
    float: number & typia.tags.Type<"float">;
  }

  export function generate(): TypeTagType {
    const value: Type[] = [];
    for (const int of [-1, 0, 1])
      for (const uint of [0, 1, 2])
        value.push({
          int,
          uint,
          int32: int,
          uint32: uint,
          int64: int,
          uint64: uint,
          float: int + 0.1,
        });
    return { value };
  }

  export const SPOILERS: Spoiler<TypeTagType>[] = [
    ...(["int", "int32", "int64"] as const)
      .map((key) => [
        (input: TypeTagType) => {
          input.value[0]![key] = 0.5;
          return [`$input.value[0].${key}`];
        },
        (input: TypeTagType) => {
          input.value[1]![key] = -0.5;
          return [`$input.value[1].${key}`];
        },
      ])
      .flat(),
    (input) => {
      input.value[0]!.int = 0.1;
      return ["$input.value[0].int"];
    },
    ...(["uint", "uint32", "uint64"] as const)
      .map((key) => [
        (input: TypeTagType) => {
          input.value[0]![key] = -1;
          return [`$input.value[0].${key}`];
        },
        (input: TypeTagType) => {
          input.value[1]![key] = 0.5;
          return [`$input.value[1].${key}`];
        },
        (input: TypeTagType) => {
          input.value[2]![key] = -0.5;
          return [`$input.value[2].${key}`];
        },
      ])
      .flat(),
    (input) => {
      input.value[0]!.uint = 4294967296;
      return ["$input.value[0].uint"];
    },
    (input) => {
      input.value[1]!.int = -2147483649;
      return ["$input.value[1].int"];
    },
    (input) => {
      input.value[2]!.int = 2147483648;
      return ["$input.value[2].int"];
    },
    (input) => {
      input.value[0]!.uint32 = 4294967296;
      return ["$input.value[0].uint32"];
    },
    (input) => {
      input.value[1]!.int32 = -2147483649;
      return ["$input.value[1].int32"];
    },
    (input) => {
      input.value[2]!.int32 = 2147483648;
      return ["$input.value[2].int32"];
    },
    (input) => {
      input.value[0]!.uint64 = 2 * 2 ** 64;
      return ["$input.value[0].uint64"];
    },
    (input) => {
      input.value[1]!.int64 = -2 * 2 ** 63;
      return ["$input.value[1].int64"];
    },
    (input) => {
      input.value[2]!.int64 = 2 * (2 ** 63 - 1);
      return ["$input.value[2].int64"];
    },
    (input) => {
      input.value[0]!.float = -1.175494351e38 * 2;
      return ["$input.value[0].float"];
    },
    (input) => {
      input.value[1]!.float = 3.4028235e38 * 2;
      return ["$input.value[1].float"];
    },
  ];
}
