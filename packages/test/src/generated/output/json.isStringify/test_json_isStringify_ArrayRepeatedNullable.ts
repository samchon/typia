import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_json_isStringify_ArrayRepeatedNullable =
  _test_json_isStringify("ArrayRepeatedNullable")<ArrayRepeatedNullable>(
    ArrayRepeatedNullable,
  )((input) =>
    ((input: ArrayRepeatedNullable): string | null => {
      const is = (input: any): input is ArrayRepeatedNullable => {
        const $ia0 = (input: any): any =>
          input.every(
            (elem: any) =>
              undefined !== elem &&
              (null === elem ||
                "string" === typeof elem ||
                ("number" === typeof elem && Number.isFinite(elem)) ||
                (Array.isArray(elem) && ($ia0(elem) || false))),
          );
        return (
          undefined !== input &&
          (null === input ||
            "string" === typeof input ||
            ("number" === typeof input && Number.isFinite(input)) ||
            (Array.isArray(input) && ($ia0(input) || false)))
        );
      };
      const stringify = (input: ArrayRepeatedNullable): string => {
        const $ia0 = (input: any): any =>
          input.every(
            (elem: any) =>
              undefined !== elem &&
              (null === elem ||
                "string" === typeof elem ||
                "number" === typeof elem ||
                (Array.isArray(elem) && ($ia0(elem) || false))),
          );
        const $string = (typia.json.isStringify as any).string;
        const $number = (typia.json.isStringify as any).number;
        const $throws = (typia.json.isStringify as any).throws;
        const $sa0 = (input: any): any =>
          `[${input
            .map((elem: any) =>
              null !== elem
                ? (() => {
                    if ("string" === typeof elem) return $string(elem);
                    if ("number" === typeof elem) return $number(elem);
                    if (Array.isArray(elem)) return $sa0(elem);
                    $throws({
                      expected:
                        "(Array<ArrayRepeatedNullable> | null | number | string)",
                      value: elem,
                    });
                  })()
                : "null",
            )
            .join(",")}]`;
        return null !== input
          ? (() => {
              if ("string" === typeof input) return $string(input);
              if ("number" === typeof input) return $number(input).toString();
              if (Array.isArray(input)) return $sa0(input);
              $throws({
                expected:
                  "(Array<ArrayRepeatedNullable> | null | number | string)",
                value: input,
              });
            })()
          : "null";
      };
      return is(input) ? stringify(input) : null;
    })(input),
  );
