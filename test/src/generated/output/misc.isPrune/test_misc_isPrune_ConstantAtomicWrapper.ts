import typia from "typia";

import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";

export const test_misc_isPrune_ConstantAtomicWrapper = _test_misc_isPrune(
  "ConstantAtomicWrapper",
)<ConstantAtomicWrapper>(ConstantAtomicWrapper)((input) =>
  ((input: any): input is ConstantAtomicWrapper => {
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
    const prune = (input: ConstantAtomicWrapper): void => {
      const $io0 = (input: any): boolean => "boolean" === typeof input.value;
      const $io1 = (input: any): boolean => "number" === typeof input.value;
      const $io2 = (input: any): boolean => "string" === typeof input.value;
      const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if ("value" === key) continue;
          delete input[key];
        }
      };
      const $po1 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if ("value" === key) continue;
          delete input[key];
        }
      };
      const $po2 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if ("value" === key) continue;
          delete input[key];
        }
      };
      if (
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
      ) {
        if ("object" === typeof input[0] && null !== input[0]) $po0(input[0]);
        if ("object" === typeof input[1] && null !== input[1]) $po1(input[1]);
        if ("object" === typeof input[2] && null !== input[2]) $po2(input[2]);
      }
    };
    if (!is(input)) return false;
    prune(input);
    return true;
  })(input),
);
