import typia from "typia";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { DynamicSimple } from "../../../structures/DynamicSimple";
export const test_misc_clone_DynamicSimple = _test_misc_clone(
  "DynamicSimple",
)<DynamicSimple>(DynamicSimple)((input) =>
  ((input: DynamicSimple): import("typia").Resolved<DynamicSimple> => {
    const $io1 = (input: any): boolean =>
      Object.keys(input).every((key: any) => {
        const value = input[key];
        if (undefined === value) return true;
        return "number" === typeof value;
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
  })(input),
);
