import typia from "typia";

import { _test_equals } from "../../../internal/_test_equals";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";

export const test_equals_ConstantAtomicTagged = _test_equals(
  "ConstantAtomicTagged",
)<ConstantAtomicTagged>(ConstantAtomicTagged)((input) =>
  ((
    input: any,
    _exceptionable: boolean = true,
  ): input is ConstantAtomicTagged => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
      ("latest" === input.id ||
        ("string" === typeof input.id &&
          /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
            input.id,
          ))) &&
      (-1 === input.age ||
        ("number" === typeof input.age &&
          Math.floor(input.age) === input.age &&
          0 <= input.age &&
          input.age <= 4294967295 &&
          input.age <= 100)) &&
      (2 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["id", "age"].some((prop: any) => key === prop)) return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    return "object" === typeof input && null !== input && $io0(input, true);
  })(input),
);
