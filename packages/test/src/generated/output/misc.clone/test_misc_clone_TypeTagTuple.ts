import typia from "typia";

import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { TypeTagTuple } from "../../../structures/TypeTagTuple";

export const test_misc_clone_TypeTagTuple = _test_misc_clone(
  "TypeTagTuple",
)<TypeTagTuple>(TypeTagTuple)((input) =>
  ((input: TypeTagTuple): typia.Resolved<TypeTagTuple> => {
    const $cp0 = (input: any) => input.map((elem: any) => elem as any);
    const $cp1 = (input: any) => input.map((elem: any) => elem as any);
    const $co0 = (input: any): any => ({
      tuple:
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
        )
          ? ([
              input.tuple[0] as any,
              input.tuple[1] as any,
              Array.isArray(input.tuple[2])
                ? $cp0(input.tuple[2])
                : (input.tuple[2] as any),
              Array.isArray(input.tuple[3])
                ? $cp1(input.tuple[3])
                : (input.tuple[3] as any),
            ] as any)
          : (input.tuple as any),
    });
    return "object" === typeof input && null !== input
      ? $co0(input)
      : (input as any);
  })(input),
);
