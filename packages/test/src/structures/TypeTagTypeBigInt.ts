import typia from "typia";

import { Spoiler } from "../helpers/Spoiler";

export interface TypeTagTypeBigInt {
  in64: bigint;
  uint64: bigint & typia.tags.Type<"uint64">;
}
export namespace TypeTagTypeBigInt {
  export const JSONABLE = false;

  export function generate(): TypeTagTypeBigInt {
    return {
      in64: BigInt(-1),
      uint64: BigInt(1),
    };
  }

  export const SPOILERS: Spoiler<TypeTagTypeBigInt>[] = [
    (input) => {
      input.uint64 = BigInt(-1);
      return ["$input.uint64"];
    },
  ];
}
