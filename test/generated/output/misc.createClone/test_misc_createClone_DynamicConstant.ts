import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_misc_createClone_DynamicConstant = _test_misc_clone(
  "DynamicConstant",
)<DynamicConstant>(DynamicConstant)(
  (input: DynamicConstant): typia.Resolved<DynamicConstant> => {
    const $io1 = (input: any): boolean =>
      "number" === typeof input.a &&
      "number" === typeof input.b &&
      "number" === typeof input.c &&
      "number" === typeof input.d;
    const $co0 = (input: any): any => ({
      value:
        "object" === typeof input.value && null !== input.value
          ? $co1(input.value)
          : (input.value as any),
    });
    const $co1 = (input: any): any => ({
      a: input.a as any,
      b: input.b as any,
      c: input.c as any,
      d: input.d as any,
    });
    return "object" === typeof input && null !== input
      ? $co0(input)
      : (input as any);
  },
);
