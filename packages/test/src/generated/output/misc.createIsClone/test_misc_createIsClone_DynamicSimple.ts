import typia from "typia";

import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_misc_createIsClone_DynamicSimple = _test_misc_isClone(
  "DynamicSimple",
)<DynamicSimple>(DynamicSimple)(
  (input: any): typia.Resolved<DynamicSimple> | null => {
    const is = (input: any): input is DynamicSimple => {
      const $io0 = (input: any): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        false === Array.isArray(input.value) &&
        $io1(input.value);
      const $io1 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          if (true) return "number" === typeof value && Number.isFinite(value);
          return true;
        });
      return "object" === typeof input && null !== input && $io0(input);
    };
    const clone = (input: DynamicSimple): typia.Resolved<DynamicSimple> => {
      const $io1 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          if (true) return "number" === typeof value;
          return true;
        });
      const $co0 = (input: any): any => ({
        value:
          "object" === typeof input.value && null !== input.value
            ? $co1(input.value)
            : (input.value as any),
      });
      const $co1 = (input: any): any => {
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
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  },
);
