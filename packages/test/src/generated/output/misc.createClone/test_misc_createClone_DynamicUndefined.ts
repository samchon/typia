import typia from "typia";

import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";

export const test_misc_createClone_DynamicUndefined = _test_misc_clone(
  "DynamicUndefined",
)<DynamicUndefined>(DynamicUndefined)(
  (input: DynamicUndefined): typia.Resolved<DynamicUndefined> => {
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
