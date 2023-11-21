import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_misc_prune_DynamicUnion = _test_misc_prune(
  "DynamicUnion",
)<DynamicUnion>(DynamicUnion)((input) =>
  ((input: DynamicUnion): void => {
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
  })(input),
);
