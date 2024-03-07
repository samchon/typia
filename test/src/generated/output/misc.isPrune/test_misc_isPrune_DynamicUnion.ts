import typia from "typia";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { DynamicUnion } from "../../../structures/DynamicUnion";
export const test_misc_isPrune_DynamicUnion = _test_misc_isPrune(
  "DynamicUnion",
)<DynamicUnion>(DynamicUnion)((input) =>
  ((input: any): input is DynamicUnion => {
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
    const prune = (input: DynamicUnion): void => {
      const $po0 = (input: any): any => {
        Object.entries(input).forEach(([key, value]: any) => {
          if (undefined === value) return;
          if (RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key)) {
          }
          if (RegExp(/^(prefix_(.*))/).test(key)) {
          }
          if (RegExp(/((.*)_postfix)$/).test(key)) {
          }
          if (
            RegExp(
              /^(value_between_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
            ).test(key)
          ) {
          }
        });
        for (const key of Object.keys(input)) {
          if (
            RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key) ||
            RegExp(/^(prefix_(.*))/).test(key) ||
            RegExp(/((.*)_postfix)$/).test(key) ||
            RegExp(
              /^(value_between_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
            ).test(key)
          )
            continue;
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
