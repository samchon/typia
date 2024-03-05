import typia from "typia";

import { _test_functional_isFunction } from "../../../internal/_test_functional_isFunction";
import { TypeTagTuple } from "../../../structures/TypeTagTuple";

export const test_functional_isFunction_TypeTagTuple =
  _test_functional_isFunction("TypeTagTuple")(TypeTagTuple)(
    (p: (input: TypeTagTuple) => TypeTagTuple) =>
      (input: TypeTagTuple): TypeTagTuple | null => {
        if (
          false ===
          ((input: any): input is TypeTagTuple => {
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
                  "string" === typeof elem &&
                  1 <= elem.length &&
                  elem.length <= 2,
              ) &&
              Array.isArray(input.tuple[3]) &&
              3 <= input.tuple[3].length &&
              input.tuple[3].length <= 7 &&
              input.tuple[3].every(
                (elem: any) =>
                  "number" === typeof elem && 1 <= elem && elem <= 2,
              );
            return "object" === typeof input && null !== input && $io0(input);
          })(input)
        )
          return null;
        const result = p(input);
        return ((input: any): input is TypeTagTuple => {
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
                "string" === typeof elem &&
                1 <= elem.length &&
                elem.length <= 2,
            ) &&
            Array.isArray(input.tuple[3]) &&
            3 <= input.tuple[3].length &&
            input.tuple[3].length <= 7 &&
            input.tuple[3].every(
              (elem: any) => "number" === typeof elem && 1 <= elem && elem <= 2,
            );
          return "object" === typeof input && null !== input && $io0(input);
        })(result)
          ? result
          : null;
      },
  );
