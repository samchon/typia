import typia from "typia";

import { _test_equals } from "../../../internal/_test_equals";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";

export const test_createEquals_ConstantAtomicAbsorbed = _test_equals(
  "ConstantAtomicAbsorbed",
)<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)(
  (
    input: any,
    _exceptionable: boolean = true,
  ): input is ConstantAtomicAbsorbed => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
      "string" === typeof input.id &&
      "number" === typeof input.age &&
      Number.isFinite(input.age) &&
      (2 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["id", "age"].some((prop: any) => key === prop)) return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    return "object" === typeof input && null !== input && $io0(input, true);
  },
);
