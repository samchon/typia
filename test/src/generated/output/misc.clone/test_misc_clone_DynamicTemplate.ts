import typia from "typia";

import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_misc_clone_DynamicTemplate = _test_misc_clone(
  "DynamicTemplate",
)<DynamicTemplate>(DynamicTemplate)((input) =>
  ((input: DynamicTemplate): import("typia").Resolved<DynamicTemplate> => {
    const $co0 = (input: any): any => {
      const output = {} as any;
      for (const [key, value] of Object.entries(input)) {
        if (RegExp(/^(prefix_(.*))/).test(key)) {
          output[key] = value as any;
          continue;
        }
        if (RegExp(/((.*)_postfix)$/).test(key)) {
          output[key] = value as any;
          continue;
        }
        if (RegExp(/^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/).test(key)) {
          output[key] = value as any;
          continue;
        }
        if (
          RegExp(
            /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
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
  })(input),
);
