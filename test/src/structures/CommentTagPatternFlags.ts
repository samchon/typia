import { Spoiler } from "../helpers/Spoiler";

export interface CommentTagPatternFlags {
  /** @pattern /^hello$/i */
  caseInsensitive: string;

  /** @pattern /^hello$/m */
  multiline: string;

  /** @pattern /^[a-z]+$/im */
  multipleFlags: string;
}
export namespace CommentTagPatternFlags {
  export function generate(): CommentTagPatternFlags {
    return {
      caseInsensitive: "HELLO",
      multiline: "hello",
      multipleFlags: "hello",
    };
  }

  export const SPOILERS: Spoiler<CommentTagPatternFlags>[] = [
    (input) => {
      input.caseInsensitive = "world";
      return ["$input.caseInsensitive"];
    },
    (input) => {
      input.multiline = "world";
      return ["$input.multiline"];
    },
    (input) => {
      input.multipleFlags = "123";
      return ["$input.multipleFlags"];
    },
  ];
}
