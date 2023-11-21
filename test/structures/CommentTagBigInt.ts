import { Spoiler } from "../helpers/Spoiler";

export interface CommentTagBigInt {
  value: bigint;

  /**
   * @minimum 0
   * @maximum 100
   */
  ranged: bigint;

  /**
   * @minimum 0
   */
  minimum: bigint;

  /**
   * @maximum 100
   */
  maximum: bigint;

  /**
   * @multipleOf 3
   */
  multipleOf: bigint;
}
export namespace CommentTagBigInt {
  export const JSONABLE = false;
  export const PRIMITIVE = false;

  export function generate(): CommentTagBigInt {
    return {
      value: 3n,
      ranged: 3n,
      minimum: 3n,
      maximum: 3n,
      multipleOf: 3n,
    };
  }

  export const SPOILERS: Spoiler<CommentTagBigInt>[] = [
    (input) => {
      input.value = 3 as any;
      return ["$input.value"];
    },
    (input) => {
      input.ranged = -1n;
      return ["$input.ranged"];
    },
    (input) => {
      input.minimum = -1n;
      return ["$input.minimum"];
    },
    (input) => {
      input.maximum = 101n;
      return ["$input.maximum"];
    },
    (input) => {
      input.multipleOf = 4n;
      return ["$input.multipleOf"];
    },
  ];
}
