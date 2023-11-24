import { ArrayUtil } from "typia/lib/utils/ArrayUtil";

import { IPointer } from "../helpers/IPointer";
import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type CommentTagLength = IPointer<CommentTagLength.Type[]>;
export namespace CommentTagLength {
  export interface Type {
    /**
     * @length 5
     */
    fixed: string;

    /**
     * @minLength 3
     */
    minimum: string;

    /**
     * @maxLength 7
     */
    maximum: string;

    /**
     * @minLength 3
     * @maxLength 7
     */
    minimum_and_maximum: string;

    /**
     * @minLength 10
     * @maxLength 19
     */
    equal: string;
  }

  export function generate(): CommentTagLength {
    const output: Type[] = [];

    ArrayUtil.repeat(6, () => {
      for (const minimum_and_maximum of [MINIMUM, MAXIMUM]) {
        const numeric = {
          fixed: FIXED,
          minimum: MINIMUM,
          maximum: MAXIMUM,
          minimum_and_maximum,
          equal: EQUAL,
        };
        const obj: Type = {} as any;
        for (const [key, value] of Object.entries(numeric))
          (obj as any)[key] = TestRandomGenerator.string(value);
        output.push(obj);
      }
    });
    return { value: output };
  }

  const FIXED = 5;
  const MINIMUM = 3;
  const MAXIMUM = 7;
  const EQUAL = 10;

  export const SPOILERS: Spoiler<CommentTagLength>[] = [
    (input) => {
      input.value[0]!.fixed = "123456";
      return ["$input.value[0].fixed"];
    },
    (input) => {
      input.value[1]!.minimum = "12";
      return ["$input.value[1].minimum"];
    },
    (input) => {
      input.value[2]!.maximum = "12345678";
      return ["$input.value[2].maximum"];
    },
    (input) => {
      input.value[3]!.minimum_and_maximum = "12";
      return ["$input.value[3].minimum_and_maximum"];
    },
    (input) => {
      input.value[4]!.minimum_and_maximum = "12345678";
      return ["$input.value[4].minimum_and_maximum"];
    },
    (input) => {
      input.value[5]!.equal = "3";
      return ["$input.value[5].equal"];
    },
  ];
}
