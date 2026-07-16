import { IPointer } from "tstl";
import typia from "typia";

import { Spoiler } from "../utils/Spoiler";

export type TypeTagType = IPointer<TypeTagType.Type[]>;
export namespace TypeTagType {
  export interface Type {
    int: number & typia.tags.Type<"int32">;
    uint: number & typia.tags.Type<"uint32">;
    int8: number & typia.tags.Type<"int8">;
    uint8: number & typia.tags.Type<"uint8">;
    int16: number & typia.tags.Type<"int16">;
    uint16: number & typia.tags.Type<"uint16">;
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
          int8: int,
          uint8: uint,
          int16: int,
          uint16: uint,
          int32: int,
          uint32: uint,
          int64: int,
          uint64: uint,
          float: int + 0.1,
        });
    value.push({
      int: -2147483648,
      uint: 4294967295,
      int8: -128,
      uint8: 255,
      int16: -32768,
      uint16: 65535,
      int32: -2147483648,
      uint32: 4294967295,
      int64: -2147483648,
      uint64: 4294967295,
      float: -3.4028235e38,
    });
    value.push({
      int: 2147483647,
      uint: 0,
      int8: 127,
      uint8: 0,
      int16: 32767,
      uint16: 0,
      int32: 2147483647,
      uint32: 0,
      int64: 2147483647,
      uint64: 0,
      float: 3.4028235e38,
    });
    return { value };
  }

  export const SPOILERS: Spoiler<TypeTagType>[] = [
    ...(["int", "int8", "int16", "int32", "int64"] as const)
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
    ...(["uint", "uint8", "uint16", "uint32", "uint64"] as const)
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
      input.value[0]!.uint8 = 256;
      return ["$input.value[0].uint8"];
    },
    (input) => {
      input.value[1]!.int8 = -129;
      return ["$input.value[1].int8"];
    },
    (input) => {
      input.value[2]!.int8 = 128;
      return ["$input.value[2].int8"];
    },
    (input) => {
      input.value[0]!.uint16 = 65536;
      return ["$input.value[0].uint16"];
    },
    (input) => {
      input.value[1]!.int16 = -32769;
      return ["$input.value[1].int16"];
    },
    (input) => {
      input.value[2]!.int16 = 32768;
      return ["$input.value[2].int16"];
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
      input.value[0]!.float = -3.4028235e38 * 2;
      return ["$input.value[0].float"];
    },
    (input) => {
      input.value[1]!.float = 3.4028235e38 * 2;
      return ["$input.value[1].float"];
    },
  ];
}
