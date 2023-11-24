import { Spoiler } from "../helpers/Spoiler";

export interface CommentTagNaN {
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
export namespace CommentTagNaN {
  export const JSONABLE = false;

  export function generate(): CommentTagNaN {
    return {
      value: 3,
      ranged: 3,
      minimum: 3,
      maximum: 3,
      multipleOf: 3,
      typed: 3,
    };
  }

  export const SPOILERS: Spoiler<CommentTagNaN>[] = [
    (input) => {
      input.value = NaN;
      return ["$input.value"];
    },
    (input) => {
      input.ranged = Number("invalid");
      return ["$input.ranged"];
    },
    (input) => {
      input.minimum = Number("minimum");
      return ["$input.minimum"];
    },
    (input) => {
      input.maximum = Number("maximum");
      return ["$input.maximum"];
    },
    (input) => {
      input.multipleOf = Number("multipleOf");
      return ["$input.multipleOf"];
    },
    (input) => {
      input.typed = Number("wrong");
      return ["$input.typed"];
    },
  ];
}
