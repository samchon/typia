import typia from "typia";

import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { TypeTagTuple } from "../../../structures/TypeTagTuple";

export const test_misc_isPrune_TypeTagTuple = _test_misc_isPrune(
  "TypeTagTuple",
)<TypeTagTuple>(TypeTagTuple)((input) =>
  ((input: any): input is TypeTagTuple => {
    const is = (input: any): input is TypeTagTuple => {
      const $io0 = (input: any): boolean =>
        Array.isArray(input.tuple) &&
        input.tuple.length === 4 &&
        "string" === typeof input.tuple[0] &&
        3 <= input.tuple[0].length &&
        input.tuple[0].length <= 7 &&
        "number" === typeof input.tuple[1] &&
        3 <= input.tuple[1] &&
        input.tuple[1] <= 7 &&
        Array.isArray(input.tuple[2]) &&
        3 <= input.tuple[2].length &&
        input.tuple[2].length <= 7 &&
        input.tuple[2].every(
          (elem: any) =>
            "string" === typeof elem && 1 <= elem.length && elem.length <= 2,
        ) &&
        Array.isArray(input.tuple[3]) &&
        3 <= input.tuple[3].length &&
        input.tuple[3].length <= 7 &&
        input.tuple[3].every(
          (elem: any) => "number" === typeof elem && 1 <= elem && elem <= 2,
        );
      return "object" === typeof input && null !== input && $io0(input);
    };
    const prune = (input: TypeTagTuple): void => {
      const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if ("tuple" === key) continue;
          delete input[key];
        }
      };
      if ("object" === typeof input && null !== input) $po0(input);
    };
    if (!is(input)) return false;
    prune(input);
    return true;
  })(input),
);
