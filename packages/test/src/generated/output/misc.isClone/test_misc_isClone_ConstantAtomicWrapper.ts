import typia from "typia";

import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";

export const test_misc_isClone_ConstantAtomicWrapper = _test_misc_isClone(
  "ConstantAtomicWrapper",
)<ConstantAtomicWrapper>(ConstantAtomicWrapper)((input) =>
  ((input: any): typia.Resolved<ConstantAtomicWrapper> | null => {
    const is = (input: any): input is ConstantAtomicWrapper => {
      const $io0 = (input: any): boolean => "boolean" === typeof input.value;
      const $io1 = (input: any): boolean =>
        "number" === typeof input.value && Number.isFinite(input.value);
      const $io2 = (input: any): boolean => "string" === typeof input.value;
      return (
        Array.isArray(input) &&
        input.length === 3 &&
        "object" === typeof input[0] &&
        null !== input[0] &&
        $io0(input[0]) &&
        "object" === typeof input[1] &&
        null !== input[1] &&
        $io1(input[1]) &&
        "object" === typeof input[2] &&
        null !== input[2] &&
        $io2(input[2])
      );
    };
    const clone = (
      input: ConstantAtomicWrapper,
    ): typia.Resolved<ConstantAtomicWrapper> => {
      const $io0 = (input: any): boolean => "boolean" === typeof input.value;
      const $io1 = (input: any): boolean => "number" === typeof input.value;
      const $io2 = (input: any): boolean => "string" === typeof input.value;
      const $co0 = (input: any): any => ({
        value: input.value as any,
      });
      const $co1 = (input: any): any => ({
        value: input.value as any,
      });
      const $co2 = (input: any): any => ({
        value: input.value as any,
      });
      return Array.isArray(input) &&
        input.length === 3 &&
        "object" === typeof input[0] &&
        null !== input[0] &&
        $io0(input[0]) &&
        "object" === typeof input[1] &&
        null !== input[1] &&
        $io1(input[1]) &&
        "object" === typeof input[2] &&
        null !== input[2] &&
        $io2(input[2])
        ? ([
            "object" === typeof input[0] && null !== input[0]
              ? $co0(input[0])
              : (input[0] as any),
            "object" === typeof input[1] && null !== input[1]
              ? $co1(input[1])
              : (input[1] as any),
            "object" === typeof input[2] && null !== input[2]
              ? $co2(input[2])
              : (input[2] as any),
          ] as any)
        : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  })(input),
);
