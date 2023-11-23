import typia from "typia";

import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_misc_createClone_DynamicNever = _test_misc_clone(
  "DynamicNever",
)<DynamicNever>(DynamicNever)(
  (input: DynamicNever): typia.Resolved<DynamicNever> => {
    const $co0 = (input: any): any => {
      const output = {} as any;
      for (const [key, value] of Object.entries(input)) {
        if (RegExp(/(.*)/).test(key)) {
          output[key] = value as any;
          continue;
        }
      }
      return output;
    };
    return "object" === typeof input && null !== input
      ? $co0(input)
      : (input as any);
  },
);
