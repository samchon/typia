import typia from "typia";

import { Spoiler } from "../helpers/Spoiler";

export interface TypeTagPatternFlags {
  // Case-insensitive matching
  caseInsensitive: string & typia.tags.Pattern<"^hello$", "i">;

  // Multiline flag
  multiline: string & typia.tags.Pattern<"^hello$", "m">;

  // Multiple flags combined
  multipleFlags: string & typia.tags.Pattern<"^[a-z]+$", "im">;
}
export namespace TypeTagPatternFlags {
  export function generate(): TypeTagPatternFlags {
    return {
      caseInsensitive: "HELLO",
      multiline: "hello",
      multipleFlags: "hello",
    };
  }

  export const SPOILERS: Spoiler<TypeTagPatternFlags>[] = [
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
