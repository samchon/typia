import typia from "typia";

import { _test_equals } from "../../../internal/_test_equals";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";

export const test_equals_ConstantAtomicWrapper = _test_equals(
  "ConstantAtomicWrapper",
)<ConstantAtomicWrapper>(ConstantAtomicWrapper)((input) =>
  ((
    input: any,
    _exceptionable: boolean = true,
  ): input is ConstantAtomicWrapper => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
      "boolean" === typeof input.value &&
      (1 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["value"].some((prop: any) => key === prop)) return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
      "number" === typeof input.value &&
      Number.isFinite(input.value) &&
      (1 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["value"].some((prop: any) => key === prop)) return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    const $io2 = (input: any, _exceptionable: boolean = true): boolean =>
      "string" === typeof input.value &&
      (1 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["value"].some((prop: any) => key === prop)) return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    return (
      Array.isArray(input) &&
      input.length === 3 &&
      "object" === typeof input[0] &&
      null !== input[0] &&
      $io0(input[0], true) &&
      "object" === typeof input[1] &&
      null !== input[1] &&
      $io1(input[1], true) &&
      "object" === typeof input[2] &&
      null !== input[2] &&
      $io2(input[2], true)
    );
  })(input),
);
