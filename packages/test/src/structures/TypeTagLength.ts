import typia from "typia";
import { ArrayUtil } from "typia/lib/utils/ArrayUtil";

import { IPointer } from "../helpers/IPointer";
import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type TypeTagLength = IPointer<TypeTagLength.Type[]>;
export namespace TypeTagLength {
  export interface Type {
    fixed: string & typia.tags.MinLength<5> & typia.tags.MaxLength<5>;
    minimum: string & typia.tags.MinLength<3>;
    maximum: string & typia.tags.MaxLength<7>;
    minimum_and_maximum: string &
      typia.tags.MinLength<3> &
      typia.tags.MaxLength<7>;
    equal: string & typia.tags.MinLength<10> & typia.tags.MaxLength<19>;
  }

  export function generate(): TypeTagLength {
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

  export const SPOILERS: Spoiler<TypeTagLength>[] = [
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
