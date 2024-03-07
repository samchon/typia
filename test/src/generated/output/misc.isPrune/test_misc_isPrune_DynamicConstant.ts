import typia from "typia";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { DynamicConstant } from "../../../structures/DynamicConstant";
export const test_misc_isPrune_DynamicConstant = _test_misc_isPrune(
  "DynamicConstant",
)<DynamicConstant>(DynamicConstant)((input) =>
  ((input: any): input is DynamicConstant => {
    const is = (input: any): input is DynamicConstant => {
      return (
        "object" === typeof input &&
        null !== input &&
        "object" === typeof (input as any).value &&
        null !== (input as any).value &&
        "number" === typeof ((input as any).value as any).a &&
        Number.isFinite(((input as any).value as any).a) &&
        "number" === typeof ((input as any).value as any).b &&
        Number.isFinite(((input as any).value as any).b) &&
        "number" === typeof ((input as any).value as any).c &&
        Number.isFinite(((input as any).value as any).c) &&
        "number" === typeof ((input as any).value as any).d &&
        Number.isFinite(((input as any).value as any).d)
      );
    };
    const prune = (input: DynamicConstant): void => {
      const $io1 = (input: any): boolean =>
        "number" === typeof input.a &&
        "number" === typeof input.b &&
        "number" === typeof input.c &&
        "number" === typeof input.d;
      const $po0 = (input: any): any => {
        if ("object" === typeof input.value && null !== input.value)
          $po1(input.value);
        for (const key of Object.keys(input)) {
          if ("value" === key) continue;
          delete input[key];
        }
      };
      const $po1 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if ("a" === key || "b" === key || "c" === key || "d" === key)
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
