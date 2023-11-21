import { Spoiler } from "../helpers/Spoiler";

export interface CommentTagInfinite {
  value: number;

  /**
   * @minimum 0
   * @maximum 100
   */
  ranged: number;

  /**
   * @minimum 0
   */
  minimum: number;

  /**
   * @maximum 100
   */
  maximum: number;

  /**
   * @multipleOf 3
   */
  multipleOf: number;

  /**
   * @type int
   */
  typed: number;
}
export namespace CommentTagInfinite {
  export const JSONABLE = false;

  export function generate(): CommentTagInfinite {
    return {
      value: 3,
      ranged: 3,
      minimum: 3,
      maximum: 3,
      multipleOf: 3,
      typed: 3,
    };
  }

  export const SPOILERS: Spoiler<CommentTagInfinite>[] = [
    (input) => {
      input.value = -Infinity;
      return ["$input.value"];
    },
    (input) => {
      input.ranged = Infinity;
      return ["$input.ranged"];
    },
    (input) => {
      input.minimum = Infinity;
      return ["$input.minimum"];
    },
    (input) => {
      input.maximum = -Infinity;
      return ["$input.maximum"];
    },
    (input) => {
      input.multipleOf = -1.0 / 0.0;
      return ["$input.multipleOf"];
    },
    (input) => {
      input.typed = 1.0 / 0.0;
      return ["$input.typed"];
    },
  ];
}
