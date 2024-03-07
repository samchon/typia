import typia from "typia";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { DynamicTag } from "../../../structures/DynamicTag";
export const test_misc_prune_DynamicTag = _test_misc_prune(
  "DynamicTag",
)<DynamicTag>(DynamicTag)((input) =>
  ((input: DynamicTag): void => {
    const $po0 = (input: any): any => {
      Object.entries(input).forEach(([key, value]: any) => {
        if (undefined === value) return;
        if (RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key)) {
        }
        if (RegExp(/(.*)/).test(key)) {
        }
      });
      for (const key of Object.keys(input)) {
        if (
          RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key) ||
          RegExp(/(.*)/).test(key)
        )
          continue;
        delete input[key];
      }
    };
    if ("object" === typeof input && null !== input) $po0(input);
  })(input),
);
