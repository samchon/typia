import typia from "typia";

import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_misc_isClone_DynamicUnion = _test_misc_isClone(
  "DynamicUnion",
)<DynamicUnion>(DynamicUnion)((input) =>
  ((input: any): import("typia").Resolved<DynamicUnion> | null => {
    const is = (input: any): input is DynamicUnion => {
      const $io0 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          if ("number" === typeof Number(key) && Number.isFinite(Number(key)))
            return "string" === typeof value;
          if ("string" === typeof key && RegExp(/^prefix_(.*)/).test(key))
            return "string" === typeof value;
          if ("string" === typeof key && RegExp(/(.*)_postfix$/).test(key))
            return "string" === typeof value;
          if (
            "string" === typeof key &&
            RegExp(
              /^value_between_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
            ).test(key)
          )
            return "number" === typeof value && Number.isFinite(value);
          return true;
        });
      return (
        "object" === typeof input &&
        null !== input &&
        false === Array.isArray(input) &&
        $io0(input)
      );
    };
    const clone = (
      input: DynamicUnion,
    ): import("typia").Resolved<DynamicUnion> => {
      const $co0 = (input: any): any => {
        const output = {} as any;
        for (const [key, value] of Object.entries(input)) {
          if (RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key)) {
            output[key] = value as any;
            continue;
          }
          if (RegExp(/^(prefix_(.*))/).test(key)) {
            output[key] = value as any;
            continue;
          }
          if (RegExp(/((.*)_postfix)$/).test(key)) {
            output[key] = value as any;
            continue;
          }
          if (
            RegExp(
              /^(value_between_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
            ).test(key)
          ) {
            output[key] = value as any;
            continue;
          }
        }
        return output;
      };
      return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  })(input),
);
